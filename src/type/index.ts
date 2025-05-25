// src/type/index.ts

// Se necessário, importar React para garantir o namespace JSX
import React from "react";

// Um exemplo de tipo personalizado que usa JSX
export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};
