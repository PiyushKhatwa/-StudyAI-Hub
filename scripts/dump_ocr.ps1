Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
}[0]

function Await($winRtTask, $resultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($resultType)
    $netTask = $asTask.Invoke($null, @($winRtTask))
    $netTask.Wait(-1) | Out-Null
    return $netTask.Result
}

[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()

function Get-OcrText($filePath) {
    $path = (Resolve-Path $filePath).Path
    $fileOp = [Windows.Storage.StorageFile]::GetFileFromPathAsync($path)
    $file = Await $fileOp ([Windows.Storage.StorageFile])
    $streamOp = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    $stream = Await $streamOp ([Windows.Storage.Streams.IRandomAccessStream])
    $decoderOp = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = Await $decoderOp ([Windows.Graphics.Imaging.BitmapDecoder])
    $bitmapOp = $decoder.GetSoftwareBitmapAsync()
    $bitmap = Await $bitmapOp ([Windows.Graphics.Imaging.SoftwareBitmap])
    $ocrOp = $engine.RecognizeAsync($bitmap)
    $ocrResult = Await $ocrOp ([Windows.Media.Ocr.OcrResult])
    $lines = @()
    foreach ($line in $ocrResult.Lines) {
        $lines += $line.Text
    }
    return $lines
}

$out = @()
$out += "=== DOCS / MILESTONE-2-REPORT ==="
Get-ChildItem -Path "docs\milestone-2-report" -Filter "*.png" | ForEach-Object {
    $out += "`n=========================================="
    $out += "FILE: $($_.Name) ($($_.Length) bytes)"
    $out += "=========================================="
    try {
        $lines = Get-OcrText $_.FullName
        foreach ($l in $lines) {
            $out += "  $l"
        }
    } catch {
        $out += "  ERROR: $_"
    }
}

$out += "`n=== USER UPLOADED ==="
$uDir = "C:\Users\piyus\.gemini\antigravity\brain\f92214f1-fe51-4469-8ea6-e7c5b7f85841\.user_uploaded"
Get-ChildItem -Path $uDir | ForEach-Object {
    $out += "`n=========================================="
    $out += "FILE: $($_.Name) ($($_.Length) bytes)"
    $out += "=========================================="
    try {
        $lines = Get-OcrText $_.FullName
        foreach ($l in $lines) {
            $out += "  $l"
        }
    } catch {
        $out += "  ERROR: $_"
    }
}

$out | Out-File -FilePath "scripts\ocr_full.txt" -Encoding utf8
Write-Host "Done writing scripts\ocr_full.txt"
