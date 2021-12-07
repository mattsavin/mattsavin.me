import {NextPage} from "next";
import Router from "next/router";
import {useEffect, useState} from "react";

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
            <h1>About this website</h1>
            {
                <p>
                    # mattsavin.me

                    This is the source code for https://mattsavin.me/

                    It has been written in [Typescript](https://www.typescriptlang.org/), a superset of [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) and runs on a [Node.js](https://nodejs.org) + [Next.js](https://nextjs.org/) server hosted for free on an [Amazon Web Services](https://aws.amazon.com/) [Elastic Cloud](https://aws.amazon.com/ec2/) instance.
                    The instance is running [Ubuntu](https://ubuntu.com/) [Server 20.04 LTS](https://ubuntu.com/server) with [Nginx](https://nginx.org/) used as a reverse proxy for the production version of the Next.js server.

                    Next.js is an open-source JavaScript framework developed by Vercel and based on React.js. Next.js uses core features of React such as components, whilst enabling the use of extra features such as server-side rendering.

                    ## More about JavaScript
                    JavaScript is a Multi-paradigm, Event-driven, Functional and Imperative programming language which conforms to the specification described by ECMAScript, published by [ECMA International](https://ecma-international.org/) to enforce interoperability of web pages across browsers.
                    JS was first developed in 1995, and has since developed into a powerful language which is used by over 97% of websites, and implemented in browsers and server-side applications with engines such as the Chromium V8 engine (also used in Node.js) and SpiderMonkey, the original JavaScript engine initially developed at Netscape, now open sourced and maintained by the Mozilla foundation and most notable for use in the Firefox web browser. Both V8 and SpiderMonkey now implement Just-In-Time compilation to x86, ARM or other machine code implementations, and are written mostly in C/C++.
                    JavaScript alone is a dynamic, weakly-typed language, but with the addition of TypeScript can become strongly typed.

                    ## More about TypeScript
                    TypeScript is strict syntactical superset of JavaScript which optionally adds static typing, transitioning the language to become more strongly-typed.  TypeScript is maintained and developed primarily by [Microsoft](https://microsoft.com/), but is free and open source software. TypeScript transcompiles directly to JavaScript via the `tsc` compiler, itself written in TypeScript.

                    ## More about React
                    [React.js](https://reactjs.org/) is an open-source JavaScript library for building user interfaces based on components.
                    React and React-based applications use a special syntax, namely JSX or TSX (for JavaScript and TypeScript respectively) for declaring components. JSX allows developers like me to easily combine JavaScript with HTML markup.
                    Although powerful on its own, however, React can only be used for state management and manipulation of the Document Object Model.

                    ## More about Node.js
                    Node.js is a cross-platform runtime environment for the back-end that allows developers such as myself to create full-stack applications using only one language: JavaScript (or a superset that transcompiles, such as TypeScript).
                    Node.js runs on the Chromium V8 engine and allows for JavaScript to be executed outside of a web browser.

                    ## More about Next.js
                    Next.js is an opinionated development framework which is built on top of Node.js, enabling React features such as components to coexist with features such as server-side rendering to allow better performance for search engine optimization.
                    Next.js is maintained and lead by Vercel, although it is published under an MIT license, making it free and open source software.

                    ## More about Nginx
                    Nginx, pronounced &quot;Engine X&quot;, is a free and open-source web server, accounting for approximately 23% of the busiest million websites, second only to Apache. In addition to serving static pages from a web root directory, Nginx can be used as a reverse proxy, a load balancer, and a HTTP cache, among other uses.

                    My project uses Nginx for its ease of configuration, popularity, and ability to be used as a reverse proxy - it forwards incoming requests on port 80 and 443 to the Next.js server listening on port 3000.

                    ## More about Ubuntu
                    Ubuntu is a mostly free and open-source Linux distribution developed and maintained primarily by Canonical Ltd., and based on Debian, a notoriously stable distribution.

                    I&#39;ve chosen Ubuntu for my project for its popularity, open-source nature and my intense familiarity with Linux distributions, particularly those based on Debian.

                    ## More about AWS
                    Amazon Web Services provide cloud computing and APIs to developers and companies, of which my primary use is Elastic Cloud Computer (EC2), in which I am running an instance of Ubuntu Server 20.04 LTS, configured with an Elastic IP for use with DNS nameservers.

                    ## More about this site&#39;s domain
                    The website (https://mattsavin.me/) is registered with Namecheap, configured to use Cloudflare&#39;s DNS servers, analytics tools, DNSSEC signing, SSL certificates, HSTS enforcing and TLS cipher enforcing. SSL certificates, HSTS and TLS can also be managed with certbot to generate and store certificates managed by Let&#39;s Encrypt, if needed.
                    Cloudflare also provides a firewall, anti-DDOS protection, and performance analysis to ensure the site stays up, no matter what.

                    TODO: AWS, Email, internet.nl score
                </p>
                // TODO: make copy of README.md here, formatted nicely
            }
        </>
    );
};

export default About;