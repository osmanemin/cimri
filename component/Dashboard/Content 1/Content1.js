import Slider from "./Slider";
import MainProducts from "./MainProducts";
import style from '../../../styles/content1/content1.module.scss';

const Content = () => {
    return (
        <div className={style.container}>
            <Slider/>
            <MainProducts/>
        </div>
    )
}
export default Content;