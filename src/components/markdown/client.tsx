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

    nodes.forEach((node) => {
      window?._btyCode?.init(node as HTMLElement);
    });
  }, []);

  return null;
};
