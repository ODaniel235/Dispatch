import Header from "@/components/shared/Header";
import { ReactNode } from "react";
const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-screen h-fit ">
      <Header />
      <main className="w-screen h-fit overflow-x-hidden">{children}</main>
    </div>
  );
};

export default HeaderLayout;
