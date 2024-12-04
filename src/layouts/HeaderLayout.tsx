import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ReactNode } from "react";
const HeaderLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" w-screen h-fit overflow-x-hidden">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default HeaderLayout;
