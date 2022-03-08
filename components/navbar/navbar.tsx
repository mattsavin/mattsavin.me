// TODO: Comment this file

import Link from 'next/link';
import Image from 'next/image';
import React, {useState} from "react";
import lamitron from "../../public/lamitron_black_on_circle.webp";
import styles from "./navbar.module.css";
import {NextPage} from "next";

const Navbar: NextPage = (): JSX.Element => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <nav className={`m-0 sticky top-0 flex items-center flex-wrap p-3 ${styles.nav}`}>
                <Link href='/'>
                    <a className={`inline-flex items-center p-2 mr-4 justify-center ${styles.logo}`}>
                        <span className={`text-xl text-white font-bold uppercase tracking-wide ${styles.title}`}>
                            <div className={styles.logo}>
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

                <button className={`inline-flex lg:hidden ml-auto outline-none ${styles.expandButton}`}
                    aria-label={"Open Nav Pane"}>
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

                <div className={`w-full lg:inline-flex lg:flex-grow lg:w-auto ${styles.menu}`}>
                    <div className={`${sidebar ? styles.navlinks : styles.navlinksHidden} lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto`}>
                        <Link href='/'>
                            <a className={`${styles.link} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>Home</a>
                        </Link>
                        <Link href={"/portfolio"}>
                            <a className={`${styles.link} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>Portfolio</a>
                        </Link>
                        <Link href={"/about"}>
                            <a className={`${styles.link} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>About</a>
                        </Link>
                        <Link href={"/blog"}>
                            <a className={`${styles.link} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}>Blog</a>
                        </Link>
                        <a
                            className={`${styles.link} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center`}
                            href="https://github.com/mattsavin/mattsavin.me/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
