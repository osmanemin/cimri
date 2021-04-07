import style from '../../../styles/content1/mainProduct.module.scss';

const MainProducts = () => {
    return (
        <div className={style.container}>

            <div className={style.double}>
                <div className={style.product}>
                    <img src="/navi/cimri.jpg" alt=""/>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
                <div className={`${style.product} ${style.mt}`}>
                    <img src="/navi/cimri.jpg" alt=""/>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                </div>
            </div>

            <div className={style.single}>
                <div>
                    <h3>Günün Fırsatları</h3>
                    <img src="/navi/cimri.jpg" alt=""/>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className={style.price}>
                        <div className={style.discount}> % 40</div>
                        <div>
                            <p>79,90 Tl</p>
                            <h3>47,99 TL</h3>
                        </div>
                    </div>
                    <div className={style.row}></div>
                    <div className={style.merchant}>amazon</div>
                </div>

            </div>
        </div>
    )
}
export default MainProducts;