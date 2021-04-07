import style from '../../../styles/content2/merchant.module.scss';

const Merchant = ({merchant}) => {
    return (
        <div className={style.container}>
            <div className={style.merchant}>
                <div>{merchant}</div>
                <div>{merchant}</div>
                <div>{merchant}</div>
                <div>{merchant}</div>
                <div>{merchant}</div>
                <div>{merchant}</div>
                <div>{merchant}</div>
            </div>
            <div className={style.productNames}>
                <img className={style.leftButton} src="/right-icon.png" alt=""/>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <div className={style.productName}>Arçelik kahve makineleri</div>
                <img className={style.rightButton} src="/right-icon.png" alt=""/>
            </div>
        </div>
    )
}
export default Merchant;