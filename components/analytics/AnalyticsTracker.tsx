'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

interface AnalyticsTrackerProps {
  gaId: string;
}

export function AnalyticsTracker({ gaId }: AnalyticsTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const search = searchParams?.toString();
    const url = search ? `${pathname}?${search}` : pathname;

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
        send_to: gaId,
      });
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        page_location: window.location.href,
        page_title: document.title,
        send_to: gaId,
      });
    }
  }, [pathname, searchParams, gaId]);

  return null;
}
