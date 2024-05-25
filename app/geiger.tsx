"use client";
import React, { ReactNode } from "react";
import { Geiger } from "react-geiger";

interface ReactGeigerProps {
  children: ReactNode;
}

const ReactGeiger: React.FC<ReactGeigerProps> = ({ children }) => {
  return <Geiger renderTimeThreshold={20}>{children}</Geiger>;
};

export default ReactGeiger;
