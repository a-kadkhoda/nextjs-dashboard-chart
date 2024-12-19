import Footer from "../Footer"
import ProductNavbar from "../ProductNavbar"
import { ReactNode } from "react"
interface ProductLayoutProps  {children : ReactNode}

const ProductLayout :React.FC<ProductLayoutProps> = ({children} )=>{

    return(
        <>
        <ProductNavbar />
        {children}
        <Footer />
        </>
    )
}

export default ProductLayout