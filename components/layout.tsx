import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./layout.module.css";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            <main className={styles.pageContainer}>
                <div className={styles.contentWrap}>
                    {children}
                </div>
                <Footer />
            </main>
        </>
    );
};
export default Layout;