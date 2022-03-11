// TODO: Comment this file

import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import Router, {useRouter} from 'next/router';
import styles from './blogpost.module.css';

const Blog: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const {pathname} = Router;

        if(pathname == "/blog/[id]" && process.env.NODE_ENV == "production"){
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
                <div className={styles.article}>
                    <h1 className={styles.title}>{id}</h1>
                    <h1>Blog ID {id}</h1>
                </div>
            </main>            
        </React.Fragment>
    );
};

export default Blog;