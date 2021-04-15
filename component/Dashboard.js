import Content1 from "./Dashboard/Content 1/Content1";
import Merchant from "./Dashboard/Content 2/Merchant";
import style from '../styles/dashboard.module.scss';
import Product from "./Dashboard/Content 3/Product";

const Dashboard = () => {
    return (
        <div className={style.container}>
            <Content1/>
            <Merchant merchant={"amazon"}/>
            <Product/>
        </div>
    )
}
export default Dashboard;