import Head from "next/head";
import Navigation from "./PageMaster/Navigation";

const PageMaster = ({children}) => {

    return (
        <div>
            <Head>
                <title>Cimri.com - En son kaça olur?</title>
                <link rel="icon" href="/navi/cimri.jpg"/>
            </Head>

            <Navigation/>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default PageMaster;