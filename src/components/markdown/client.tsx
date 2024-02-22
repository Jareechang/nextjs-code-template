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
    window?._btyCode?.init();
  }, []);

  return null;
};
