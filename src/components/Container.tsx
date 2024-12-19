import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-5">{children}</div>;
}

export function ContainerFull({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto px-5">{children}</div>;
}
