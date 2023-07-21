import React, { ReactNode, useState } from "react";
import { Header } from "./header";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [collapse, setCollapse] = useState<boolean>(true);
  return (
    <div className="no-horizontal-scrollbar">
      <Header setIsCollapsed={setCollapse} />
      <div className="row">
        <div className="col">
          <div
            className="content"
            style={{
              transition: "margin-top 0.3s ease",
              marginTop: collapse ? "50px" : "160px",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
