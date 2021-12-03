import Link from "next/link";

const navbar = () => {
    return (
        <nav>
            <div>
                <h1>Matt Savin</h1>
            </div>
            <Link href="/">Home</Link>
        </nav>
    );
};

export default navbar;