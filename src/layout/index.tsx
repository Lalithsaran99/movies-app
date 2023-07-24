import React, { ReactNode, useState } from "react";
import { Header } from "./header";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
  theme: () => void;
  mode: boolean;
}
const Layout: React.FC<LayoutProps> = ({ children, mode, theme }) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <div className={`no-horizontal-scrollbar `}>
      <Header setIsCollapsed={setCollapse} theme={theme} mode={mode} />
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
