import Link from "next/link";

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container max-w-screen-xl mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={{ pathname: `/`}} className="mr-5 hover:text-gray-900">Home</Link>
                    <Link href={{ pathname: `/posts`}} className="mr-5 hover:text-gray-900">Posts</Link>
                </nav>
                <button
                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                </button>
            </div>
        </header>
    )
}
