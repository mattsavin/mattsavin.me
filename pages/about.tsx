// TODO: Comment this file

import {NextPage} from "next";
import styles from "./about.module.css";
import Router from "next/router";
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const About: NextPage = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const {pathname} = Router;

        if(pathname == "/about" && process.env.NODE_ENV == "production"){
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
            <main className={styles.main}>
                <h1 className={styles.title}>About mattsavin.me</h1>
                <div className={styles.article}>
                    <div className={styles.intro}>
                        Matthew Savin · Dec 11
                    </div>
                    <div className={styles.image}>
                        <Image
                            src={"/homepage-screenshot.png"}
                            width={"1440"}
                            height={"900"}
                        />
                    </div>

                    <div className={styles.section}>
                        <p>
                            <Link href={"/"}><a>mattsavin.me</a></Link> has been written in <a href={"https://www.typescriptlang.org/"} >Typescript</a>, a
                        superset of <a href={"https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"}>JavaScript</a> and
                        runs on a <a href={"https://nodejs.org"}>Node.js</a> + <a href={"https://nextjs.org/"}>Next.js</a> server hosted
                        for free on an <a href={"https://aws.amazon.com/ec2/"}>Amazon Web Services Elastic Cloud</a> instance.
                        The instance is running <a href={"https://ubuntu.com/server"}> Ubuntu Server 20.04 LTS</a> with <a href={"https://nginx.org/"}>Nginx</a> used
                        as a reverse proxy for the production version of the Next.js server.
                            <br />
                        Next.js is an open-source JavaScript framework developed by Vercel and based on React.js.
                            <br />
                        Next.js uses core features of React such as components, whilst enabling the use of extra features
                        such as server-side rendering.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about JavaScript</h2>
                        <p>
                        JavaScript is a Multi-paradigm, Event-driven, Functional and Imperative programming language which
                        conforms to the specification described by ECMAScript, published by <a href={"https://ecma-international.org/"}>ECMA International</a> to
                        enforce interoperability of web pages across browsers.
                            <br />
                        JS was first developed in 1995, and has since developed into a powerful language which is used by over
                        97% of websites, and implemented in browsers and server-side applications with engines such as the
                        Chromium V8 engine (also used in Node.js) and SpiderMonkey, the original JavaScript engine initially
                        developed at Netscape, now open sourced and maintained by the Mozilla foundation and most notable for
                        use in the Firefox web browser. Both V8 and SpiderMonkey now implement Just-In-Time compilation to x86,
                        ARM or other machine code implementations, and are written mostly in C/C++.
                            <br />
                        JavaScript alone is a dynamic, weakly-typed language, but with the addition of TypeScript
                        can become strongly typed.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about TypeScript</h2>
                        <p>
                        TypeScript is strict syntactical superset of JavaScript which optionally adds static typing,
                        transitioning the language to become more strongly-typed.  TypeScript is maintained and developed
                        primarily by <a href={"https://microsoft.com/"}>Microsoft</a>, but is free and open source software.
                        TypeScript trans-compiles directly to JavaScript via the <code>tsc</code> compiler, itself written in TypeScript.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about React</h2>
                        <p>
                            <a href={"https://reactjs.org/"}>React.js</a> is an open-source JavaScript library for building user interfaces
                        based on components.
                        React and React-based applications use a special syntax, namely JSX or TSX
                        (for JavaScript and TypeScript respectively) for declaring components. JSX allows developers like me to
                        easily combine JavaScript with HTML markup.
                        However, although powerful on its own, React can only be used for state management and
                        manipulation of the Document Object Model.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about Node.js</h2>
                        <p>
                        Node.js is a cross-platform runtime environment for the back-end that allows developers
                        such as myself to create full-stack applications using only one language: JavaScript
                        (or a superset that transcompiles, such as TypeScript).
                        Node.js runs on the Chromium V8 engine and allows for JavaScript to be executed outside of a web browser.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about Next.js</h2>
                        <p>
                        Next.js is an opinionated development framework which is built on top of Node.js,
                        enabling React features such as components to coexist with features such as server-side rendering
                        to allow better performance for search engine optimization.
                        Next.js is maintained and lead by Vercel, although it is published under an MIT license, making it
                        free and open source software.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about Nginx</h2>
                        <p>
                        Nginx, pronounced &quot;Engine X&quot;, is a free and open-source web server, accounting for
                        approximately 23% of the busiest million websites, second only to Apache. In addition to serving static
                        pages from a web root directory, Nginx can be used as a reverse proxy, a load balancer,
                        and a HTTP cache, among other uses.
                            <br />
                        My project uses Nginx for its ease of configuration, popularity, and ability to be used as
                        a reverse proxy - it forwards incoming requests on port 80 and 443 to the Next.js server
                        listening on port 3000.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about Ubuntu</h2>
                        <p>
                        Ubuntu is a mostly free and open-source Linux distribution developed and maintained primarily by
                        Canonical Ltd., and based on Debian, a notoriously stable distribution.
                            <br />
                        I&#39;ve chosen Ubuntu for my project for its popularity, open-source nature and my intense
                        familiarity with Linux distributions, particularly those based on Debian.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about AWS</h2>
                    Amazon Web Services provide cloud computing and APIs to developers and companies, of which my primary
                    use is Elastic Cloud Computer (EC2), in which I am running an instance of Ubuntu Server 20.04 LTS,
                    configured with an Elastic IP for use with DNS nameservers.
                    </div>
                    <div className={styles.section}>
                        <h2 className={styles.subheading}>More about this site&#39;s domain</h2>
                        <p>
                        The website (https://mattsavin.me/) is registered with Namecheap, configured to use Cloudflare&#39;s
                        DNS servers, analytics tools, DNSSEC signing, SSL certificates, HSTS enforcing and TLS cipher enforcing.
                        SSL certificates, HSTS and TLS can also be managed with certbot to generate and store certificates managed by
                        Let&#39;s Encrypt, if needed.
                        Cloudflare also provides a firewall, anti-DDOS protection, and performance analysis to ensure the
                        site stays up, no matter what.
                        </p>
                    </div>
                </div>
                TODO: AWS, Email, internet.nl score
            </main>
        </>
    );
};

export default About;