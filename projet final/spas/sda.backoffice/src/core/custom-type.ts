import { ReactNode } from "react";

export type PropswithChildren<P = unknown> = P & { children: ReactNode };