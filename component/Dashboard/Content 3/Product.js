import style from '../../../styles/content3/product.module.scss';

const Product = () => {
    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.bellHeart}>
                    <span className={style.heart}>

                    </span>
                    <span className={style.bell}>

                    </span>
                </div>

                <img src="/sandalye.jpg" alt=""/>

                <div className={style.detail}>

                    <div><b> Perilla Romee Katlanır Pratik Yeşil Kamp Sandalyesi</b></div>
                    <div className={style.price}>
                        <div>
                            <div className={style.merchant}>n11.com</div>
                            <div className={style.merchantPrice}>79,90 TL</div>
                        </div>
                        <div className={style.arrowRight}></div>
                    </div>
                    <div className={style.price}>
                        <div>
                            <div className={style.merchant}>gittigidiyor.com</div>
                            <div className={style.merchantPrice}>99,90 TL</div>
                        </div>
                        <div className={style.arrowRight}></div>
                    </div>
                    <div></div>
                    <div className={style.button}>Tümünü İncele</div>
                </div>
            </div>
        </div>
    )
}
export default Product