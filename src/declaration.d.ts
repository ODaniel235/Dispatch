// src/declaration.d.ts
declare module "*.svg" {
  const src: string; // for use as an <img> src
  export default src;
}

declare module "*.svg" {
  import React from "react";
  const content: React.FC<React.SVGProps<SVGSVGElement>>; // for use as a component
  export default content;
}
declare module "*.scss";
declare module "*.css";
