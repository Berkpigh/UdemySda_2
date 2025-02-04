import { ReactNode } from "react";

type PropsWithChildren<P = unknown> = P & {children: ReactNode}
//type MonPropsCustomWithChildren = PropswithChildren & { item: string };

export const LayoutComponent = (props: PropsWithChildren) => {
  return (
    <>
      <div>
        <h1>Layout !</h1>
        <div>
          {props.children}
        </div>
      </div>
    </>
  );
};

