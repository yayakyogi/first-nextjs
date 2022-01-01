import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
