import {NextPage} from "next";
import Head from "next/head";

const Portfolio: NextPage = (): JSX.Element => {
    return(
        <>
            <Head>
                <title>My Portfolio - Matthew Savin</title>
                <meta name="description" content="Matthew Savin's Portfolio of Exemplar Work" />
            </Head>
            <main className="flex-auto">
                <h1 className="text-5xl font-bold">My Portfolio</h1>
            </main>
        </>
    );
};

export default Portfolio;