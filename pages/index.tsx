import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Under Construction</title>
                <meta name="description" content="mattsavin.me: Currently under construction!" />
            </Head>

            <main className='grid justify-items-center text-lg lg:p-32 p-6 content-center h-screen text-center font-sans'>
                <h1 className='text-5xl font-bold'>Under Construction!</h1>

                <p className='lg:p-24 p-6'>
          This site is currently under construction!
                    <br /><br />
          It is being built using client and server side rendering using <a href="https://nextjs.org/" className='text-blue-500 hover:underline'>Next.js</a>
                    <br />
          Come back later to see how it&#39;s progressed or check out the code on <a href="https://github.com/lamitron/mattsavin.me" target="_blank" rel="noreferrer" className='text-blue-500 hover:underline'>GitHub: lamitron/mattsavin.me</a>
                    <br />
            Pull requests are welcome and appreciated!
                </p>
            </main>
        </>
    );
};

export default Home;
