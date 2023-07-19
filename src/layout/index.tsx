import React, { ReactNode } from "react";
import { Header } from "./header";
import { SideMenu } from "./sidemenu";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="row g-0">
        <div className="h-100 col-lg-3">
          <SideMenu />
        </div>

        <div className="col-lg-9">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
