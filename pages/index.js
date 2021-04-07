import PageMaster from "../component/PageMaster";
import Dashboard from "../component/Dashboard";

export default function Home() {
    return (
        <div>
            <PageMaster>
                <Dashboard/>
            </PageMaster>
        </div>
    )
}
