'use client';

import { useEffect } from 'react';

interface MarkdownClientInitProps {
  debug?: boolean;
}

export default function MarkdownInit(props: MarkdownClientInitProps) {
  useEffect(() => {
    if (props?.debug) {
      console.log('initializing markdown client JS');
    }
    const nodes = document.querySelectorAll('.header-root');
    const footerNodes = document.querySelectorAll('.footer-root');

    footerNodes?.forEach((node) => {
      window?._btyCode?.renderFooter(node as HTMLElement);
    });

    nodes.forEach((node) => {
      window?._btyCode?.init(node as HTMLElement);
    });
  }, []);

  return null;
};
