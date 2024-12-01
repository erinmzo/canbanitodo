import { PropsWithChildren } from "react";

function InneerContainer({ children }: PropsWithChildren) {
  return <div className="max-w-[960px] mx-auto">{children}</div>;
}

export default InneerContainer;
