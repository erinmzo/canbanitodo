import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return <div className="relative max-w-[1440px] mx-auto">{children}</div>;
}

export default Container;
