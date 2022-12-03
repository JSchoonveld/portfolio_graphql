import Navbar from '../structure/Navbar'
import Footer from '../structure/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container max-w-screen-xl mx-auto py-5 min-h-screen">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
