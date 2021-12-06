import {NextPage} from "next";
import Router from "next/router";
import {useEffect, useState} from "react";

const About: NextPage = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const {pathname} = Router;

        if(pathname == "/about"){
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
            <h1>About this website</h1>
            {
                // TODO: make copy of README.md here, formatted nicely
            }
        </>
    );
};

export default About;