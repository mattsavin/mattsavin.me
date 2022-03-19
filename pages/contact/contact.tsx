import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Router from "next/router";
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
            <main className={styles.main}>
                <section className={styles.header}>
                    <div className={styles.headingrLeft}>
                        <h1 className={styles.title}>Get in touch</h1>
                    </div>
                    <div className={styles.headerRight}>

                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Contact;