import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-20 ">{children}</div>;
};

export default Container;
