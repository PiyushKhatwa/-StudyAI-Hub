import React, { Suspense } from 'react';
import Script from 'next/script';
import { AnalyticsTracker } from './AnalyticsTracker';

export const GoogleAnalytics: React.FC = () => {
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID ||
    process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ||
    'G-D43SH085FM';

  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              send_page_view: false
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker gaId={gaId} />
      </Suspense>
    </>
  );
};
