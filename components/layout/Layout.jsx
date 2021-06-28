import { Header } from '../sections/header'
import { Footer } from '../sections/footer'

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
