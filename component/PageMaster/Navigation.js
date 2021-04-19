import style from "../../styles/navigation.module.scss";

const Navigation = () => {
  return (
    <div>
      <div className={style.container}>
        <nav className={style.navi}>
          <img
            className={style.cimriAvatar}
            src="/navi/cimri.svg"
            alt="cimri"
          />

          <div className={style.searchContainer}>
            <div className={style.search}>
              <input
                placeholder="Binlerce mağaza arasından en ucuz fiyatı bulun!"
                className={style.input}
                type="text"
              />

              <button>ARA</button>
            </div>

            <div className={style.choice}>
              <a>Lorem</a>
              <a>Lorem</a>
              <a>Lorem</a>
              <a>Lorem</a>
              <a>Lorem</a>
              <a>Lorem</a>
              <a></a>
            </div>
          </div>

          <div className={style.icons}>
            <div>
              <img src="/navi/brochure.svg" alt="" />
            </div>
            <div>Broşürler</div>
          </div>
          <div className={style.icons}>
            <div>
              <img src="/navi/discount.svg" alt="" />
            </div>
            <div>İndirimli Ürünler</div>
          </div>
          <div className={style.icons}>
            <div>
              <img src="/navi/currency.svg" alt="" />
            </div>
            <div>Günün Fırsatları</div>
          </div>
          <div className={style.icons}>
            <div>
              <img src="/navi/benefit.svg" alt="" />
            </div>
            <div>Kampanyalar</div>
          </div>
          <div className={style.profile}>
            <div>
              <img src="/navi/profile.svg" alt="" />
            </div>

            <div>
              Hesabım <i className={style.arrowBottom}></i>
            </div>

            <div className={style.profileMenu}>
              <div className={style.menu}>
                <div className={style.arrowTop}></div>
                <div>Hoş Geldiniz</div>
                <div className={style.hr}></div>
                <div>Hesabım</div>
                <div>
                  <div>
                    Favorilerim
                    <div className={style.count}>3</div>
                  </div>
                </div>
                <div>
                  <div>
                    Fiyat Alarmı
                    <div className={style.count}>3</div>
                  </div>
                </div>
                <div>Çıkış Yap</div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div style={{ borderTop: "#ECECEC 1px solid", margin: "0" }} />

      <div className={style.menu}>
        <div className={style.content}>
          <div>
            <nav className={style.navi2}>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
              <div className={style.menuTitle}>
                Lorem ipsum dolor sit amet.
                <div className={style.pipe}></div>
              </div>
            </nav>
          </div>
        </div>
        <div className={style.subHeaders}></div>
      </div>
    </div>
  );
};
export default Navigation;
