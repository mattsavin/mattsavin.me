import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from "react";
import lamitron from "../public/lamitron_black_on_circle.png";
import styles from "./navbar.module.css";
import {NextPage} from "next";

const Navbar: NextPage = (): JSX.Element => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <nav className={styles.nav}>
                <Link href='/'>
                    <a className={styles.logo}>
                        <span className={styles.title}>
                            <div>
                                <Image
                                    alt="logo"
                                    src={lamitron}
                                    width={28}
                                    height={28}
                                />
                                <p className={styles.title}>Matthew Savin</p>
                            </div>
                        </span>
                    </a>
                </Link>

                <button className={styles.expandButton}>
                    <a onClick={showSidebar}
                        className={styles.expandButton}>
                        <svg
                            className={styles.svg}
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </a>
                </button>

                <div className={styles.menu}>
                    <div className={sidebar ? styles.navlinks : styles.navlinksHidden}>
                        <Link href='/'>
                            <a className={styles.link}>Home</a>
                        </Link>
                        <Link href={'/portfolio'}>
                            <a className={styles.link}>Portfolio</a>
                        </Link>
                        <Link href={'/about'}>
                            <a className={styles.link}>About me</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
