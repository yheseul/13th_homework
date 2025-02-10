import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return <div className="text-3xl font-bold text-black">{children}</div>;
};

export default Title;
