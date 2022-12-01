import { Fragment } from "react"
import MainNavigation from "./MainNavigation"
import  './Layout.css'

const Layout=(props)=>{
    return (
        <Fragment>
            <MainNavigation/>
            <main className='main'>{props.children}</main>
        </Fragment>
    )
};
export default Layout;