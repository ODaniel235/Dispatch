import Header from "@/components/shared/Header";
import { ReactNode } from "react";
const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return <div className=" w-screen h-fit">
    <Header />
    <main className="">{children}</main>
  </div>;
};

export default HeaderLayout;
