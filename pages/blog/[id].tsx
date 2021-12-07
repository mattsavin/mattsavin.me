// TODO: Comment this file

import {NextPage} from "next";
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import Router from "next/router";

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
        <>
            <h1>Blog id {id}</h1>
        </>
    );
};

export default Blog;