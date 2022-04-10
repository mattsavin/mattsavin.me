// TODO: Comment this file

// Importing required libraries and components
import type {NextPage} from "next"; // NextPage type for TypeScript type-checking
import Head from "next/head"; // Used to modify HTML <head> element - providing page metadata
import React from "react";
import LandingPage from "./index/components/landingPage";
import AboutComponent from "./index/components/indexAbout";
import StatsComponent from "./index/components/indexStats";
import CallToAction from "./index/components/indexCallToAction";

const Home: NextPage = () => {

    return(
        <React.Fragment>
            <Head>
                <title>About Matthew Savin, a talented young computer scientist | Matthew Savin</title>
                <meta
                    name="description"
                    content="About Matthew Savin: an aspiring and talented young computer scientist who has always had a passion for computers, currently studying in the United Kingdom at a Sixth Form in Berkshire"
                />
                <script type={"application/ld+json"}>
                    {`{"@context": "https://schema.org/","@type": "NewsArticle","headline": "About Me: Matthew Savin","datePublished": "2021-12-06","author": {"@type": "Person","name": "Matthew Savin"}}`}
                </script>
            </Head>
            <main>
                <LandingPage />
                <AboutComponent />
                <StatsComponent />
                <CallToAction />
            </main>
        </React.Fragment>
    );
};

export default Home;