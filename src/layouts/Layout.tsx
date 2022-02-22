import React, { useState } from "react";
import { Footer, Header } from "../components";
interface LayoutProps {
  header?: boolean;
  footer?: boolean;
}
export const Layout: React.FC<LayoutProps> = ({
  children,
  header = true,
  footer = true,
}) => {
  const [blur, setBlur] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-between gap-16 min-h-screen">
      {header && <Header blur={blur} onBlur={() => setBlur(!blur)} />}
      <div className={`${blur && "mobile_menu_bar"}`}>
      {children}
      </div>
      {footer && <Footer />}
    </div>
  );
};
