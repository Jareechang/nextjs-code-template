import React from 'react';

interface ICommonSvgProps {
  width?: string;
  height?: string;
}

export const ChevronRightIcon = ({
  width = "24",
  height = "24",
}: ICommonSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="M9 18 15 12 9 6" />
  </svg>
);

export const ChevronLeftIcon = ({
  width = "24",
  height = "24",
}: ICommonSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);
