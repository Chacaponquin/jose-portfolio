import React from "react";
import { IconProps } from "../domain/icon-props";

export default function Home({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18V42H39V18L24 6L9 18Z"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 29V42H29V29H19Z"
        fill="none"
        stroke="inherit"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M9 42H39"
        stroke="inherit"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
