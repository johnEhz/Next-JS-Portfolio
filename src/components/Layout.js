import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className='scroll-smooth'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;