import { ReactNode } from "react"
import DashboardNavbar from "../DashboardNavbar"
import Footer from "../Footer"

interface DashboardLayout{
    children : ReactNode
}


const DashboardLayout:React.FC<DashboardLayout> = ({children})=>{






    return(
        <>
        <DashboardNavbar />
        {children}
        <Footer />
        
        </>
    )
}

export default DashboardLayout