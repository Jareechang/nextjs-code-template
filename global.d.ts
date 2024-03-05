export declare global {
  interface Window {
    _btyCode: {
      init: (node: HTMLElement) => void;
      renderFooter: (node: HTMLElement) => void;
      apiEndpoint: string;
    }
  }
}
