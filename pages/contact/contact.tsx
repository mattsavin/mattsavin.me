import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Router from "next/router";
import Head from "next/head";
import styles from "./contact.module.css";

const Contact: NextPage  = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const {pathname} = Router;

        if(pathname == "/blog" && process.env.NODE_ENV == "production"){
            Router.push("/construction");
        }else{
            setLoaded(true);
        }
    },[]);

    if(!loaded){
        return <div />;
    }

    return (
        <React.Fragment>
            <Head>
                <title>Contact Me</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.mainHeader}>
                    <div className={styles.headingLeft}>

                    </div>
                    <div className={styles.headingRight}>
                        <h1 className={styles.title}>Get in touch</h1>
                    </div>
                </div>
                <div>
                    <h2>Email me</h2>
                    <h2></h2>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Contact;