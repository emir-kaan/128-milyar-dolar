import './App.css';
import { useState, useEffect } from 'react';

const App = () => {

  const [leftMoney, setLeftMoney] = useState(Number(128000000000));
  const [isBillOn, setIsBillOn] = useState(false);
  const [isBought, setIsBought] = useState(false);
  const [isRestartRequired, setIsRestartRequired] = useState(false);
  const [isPhoneWarning, setIsPhoneWarning] = useState(false);
  const [cantAccessable, setCantAccessable] = useState(false);
  const [item1, setItem1] = useState(0);
  const [item2, setItem2] = useState(0);
  const [item3, setItem3] = useState(0);
  const [item4, setItem4] = useState(0);
  const [item5, setItem5] = useState(0);
  const [item6, setItem6] = useState(0);
  const [item7, setItem7] = useState(0);
  const [item8, setItem8] = useState(0);
  const [item9, setItem9] = useState(0);
  const [item10, setItem10] = useState(0);
  const [item11, setItem11] = useState(0);
  const [item12, setItem12] = useState(0);
  const [item13, setItem13] = useState(0);
  const [item14, setItem14] = useState(0);
  const [item15, setItem15] = useState(0);
  const [item16, setItem16] = useState(0);
  const [item17, setItem17] = useState(0);
  const [item18, setItem18] = useState(0);
  const [item19, setItem19] = useState(0);
  const [item20, setItem20] = useState(0);
  const [item21, setItem21] = useState(0);
  const [item22, setItem22] = useState(0);
  const [item23, setItem23] = useState(0);
  const [item24, setItem24] = useState(0);
  const [item25, setItem25] = useState(0);
  const [item26, setItem26] = useState(0);
  const [item27, setItem27] = useState(0);
  const [item28, setItem28] = useState(0);
  const [item29, setItem29] = useState(0);
  const [item30, setItem30] = useState(0);


  const virgulluSayi = num => {
    let newNum;
    if (num.length === 12) {
      let nump1 = num.substr(0, 3);
      let nump2 = num.substr(3, 3);
      let nump3 = num.substr(6, 3);
      let nump4 = num.substr(9, 3);
      newNum = `${nump1}.${nump2}.${nump3}.${nump4}`;
    } else if (num.length === 11) {
      let nump1 = num.substr(0, 2);
      let nump2 = num.substr(2, 3);
      let nump3 = num.substr(5, 3);
      let nump4 = num.substr(8, 3);
      newNum = `${nump1}.${nump2}.${nump3}.${nump4}`;
    } else if (num.length === 10) {
      let nump1 = num.substr(0, 1);
      let nump2 = num.substr(1, 3);
      let nump3 = num.substr(4, 3);
      let nump4 = num.substr(7, 3);
      newNum = `${nump1}.${nump2}.${nump3}.${nump4}`;
    } else if (num.length === 9) {
      let nump1 = num.substr(0, 3);
      let nump2 = num.substr(3, 3);
      let nump3 = num.substr(6, 3);
      newNum = `${nump1}.${nump2}.${nump3}`;
    } else if (num.length === 8) {
      let nump1 = num.substr(0, 2);
      let nump2 = num.substr(2, 3);
      let nump3 = num.substr(5, 3);
      newNum = `${nump1}.${nump2}.${nump3}`;
    } else if (num.length === 7) {
      let nump1 = num.substr(0, 1);
      let nump2 = num.substr(1, 3);
      let nump3 = num.substr(4, 3);
      newNum = `${nump1}.${nump2}.${nump3}`;
    } else if (num.length === 6) {
      let nump1 = num.substr(0, 3);
      let nump2 = num.substr(3, 3);
      newNum = `${nump1}.${nump2}`;
    } else if (num.length === 5) {
      let nump1 = num.substr(0, 2);
      let nump2 = num.substr(2, 3);
      newNum = `${nump1}.${nump2}`;
    } else if (num.length === 4) {
      let nump1 = num.substr(0, 1);
      let nump2 = num.substr(1, 3);
      newNum = `${nump1}.${nump2}`;
    } else if (num.length <= 3 && num.length >= 1) {
      newNum = num;
    }
    return newNum;
  }

  

  const MoneyBar = props => {
    return (
      <div className="money-bar">
        <div className="dollar-box">
          <p>$</p>
          <div></div>
        </div>
        <h1>{`$${virgulluSayi(String(props.leftMoney))}`}</h1>
        <div className="buttons-at-right">
          <button className="restart-all-btn" onClick={() => {
            setItem1(0);
            setItem2(0);
            setItem3(0);
            setItem4(0);
            setItem5(0);
            setItem6(0);
            setItem7(0);
            setItem8(0);
            setItem9(0);
            setItem10(0);
            setItem11(0);
            setItem12(0);
            setItem13(0);
            setItem14(0);
            setItem15(0);
            setItem16(0);
            setItem17(0);
            setItem18(0);
            setItem19(0);
            setItem20(0);
            setItem21(0);
            setItem22(0);
            setItem23(0);
            setItem24(0);
            setItem25(0);
            setItem26(0);
            setItem27(0);
            setItem28(0);
            setItem29(0);
            setItem30(0);
            setLeftMoney(Number(128000000000));
            setIsRestartRequired(false);
          }}>
            <span className="material-symbols-outlined">
              restart_alt
            </span>
          </button>
          {
            isRestartRequired ? <button className='bill-btn' onClick={() => {
              setIsBought(true);
            }}>
              <span className="material-symbols-outlined">
                shopping_basket
              </span>
            </button> : null
          }
        </div>
      </div>
    );
  }
  
  const Items = props => {
    return (
      <div className="item">
        <p className="item-name">{props.name}</p>
        <p className="price"><span>$</span>{virgulluSayi(String(props.price))}</p>
        <img src={props.image} alt=""></img>
        <div className="count-box">
          <button className="btn decrease-btn" onClick={() => {
            if (!isRestartRequired) {
              if (props.item > 0) {
                props.setItem(props.item - 1);
                setLeftMoney(leftMoney + props.price);
              }
            }
          }} style={
            isRestartRequired ? {
              cursor: "default"
            } : {
              cursor: "pointer"
            }
          }>-</button>
          <button className="count-btn">{props.count}</button>
          <button className="btn increase-btn" onClick={() => {
            if (!isRestartRequired) {
              if (leftMoney >= props.price) {
                props.setItem(props.item + 1);
                setLeftMoney(leftMoney - props.price);
              }
            }
          }} style={
            isRestartRequired ? {
              cursor: "default"
            } : {
              cursor: "pointer"
            }
          }>+</button>
        </div>
      </div>
    );
  }

  const Bill = () => {
    return (
      <div className='bill-big-container'>
        <div className='bill-background' onClick={() => {
          setIsBillOn(false);
        }}></div>
        <div className='bill-container-box'>
          <div className='bill-container'>
            <div className='bill-header-part'>
              <p>Ürün Adı</p>
              <p>Adet</p>
              <p>Toplam Tutar</p>
            </div>
            {
              item1 > 0 ? 
              <div className='bill-main'>
                <p>Ekmek</p>
                <p>{item1}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item1))}</p>
              </div> : null
            }
            {
              item2 > 0 ? 
              <div className='bill-main'>
                <p>Yumurta (15'li)</p>
                <p>{item2}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item2 * 5))}</p>
              </div> : null
            }
            {
              item3 > 0 ? 
              <div className='bill-main'>
                <p>Big Mac Menu</p>
                <p>{item3}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item3 * 3))}</p>
              </div> : null
            }
            {
              item4 > 0 ? 
              <div className='bill-main'>
                <p>Tavuk Döner Ayran</p>
                <p>{item4}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item4 * 2))}</p>
              </div> : null
            }
            {
              item5 > 0 ? 
              <div className='bill-main'>
                <p>iPhone 13 Pro Max</p>
                <p>{item5}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item5 * 1100))}</p>
              </div> : null
            }
            {
              item6 > 0 ? 
              <div className='bill-main'>
                <p>PlayStation 5</p>
                <p>{item6}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item6 * 500))}</p>
              </div> : null
            }
            {
              item7 > 0 ? 
              <div className='bill-main'>
                <p>Macbook Pro</p>
                <p>{item7}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item7 * 900))}</p>
              </div> : null
            }
            {
              item8 > 0 ? 
              <div className='bill-main'>
                <p>Cumhurbaşkanlığı Külliyesi</p>
                <p>{item8}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item8 * 350000000))}</p>
              </div> : null
            }
            {
              item9 > 0 ? 
              <div className='bill-main'>
                <p>Ankapark</p>
                <p>{item9}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item9 * 801000000))}</p>
              </div> : null
            }
            {
              item10 > 0 ? 
              <div className='bill-main'>
                <p>Messi</p>
                <p>{item10}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item10 * 130000000))}</p>
              </div> : null
            }
            {
              item11 > 0 ? 
              <div className='bill-main'>
                <p>Empire State Building</p>
                <p>{item11}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item11 * 572000000))}</p>
              </div> : null
            }
            {
              item12 > 0 ? 
              <div className='bill-main'>
                <p>BBL Esports</p>
                <p>{item12}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item12 * 200000))}</p>
              </div> : null
            }
            {
              item13 > 0 ? 
              <div className='bill-main'>
                <p>Coca Cola ®</p>
                <p>{item13}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item13 * 70000000000))}</p>
              </div> : null
            }
            {
              item14 > 0 ? 
              <div className='bill-main'>
                <p>BTS</p>
                <p>{item14}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item14 * 360260000))}</p>
              </div> : null
            }
            {
              item15 > 0 ? 
              <div className='bill-main'>
                <p>Daha Adil Bir Dünya Mümkün</p>
                <p>{item15}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item15 * 3))}</p>
              </div> : null
            }
            {
              item16 > 0 ? 
              <div className='bill-main'>
                <p>Tesla Model X</p>
                <p>{item16}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item16 * 130000))}</p>
              </div> : null
            }
            {
              item17 > 0 ? 
              <div className='bill-main'>
                <p>Bugatti Chiron</p>
                <p>{item17}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item17 * 3300000))}</p>
              </div> : null
            }
            {
              item18 > 0 ? 
              <div className='bill-main'>
                <p>TenZ</p>
                <p>{item18}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item18 * 2000000))}</p>
              </div> : null
            }
            {
              item19 > 0 ? 
              <div className='bill-main'>
                <p>London Tower Bridge</p>
                <p>{item19}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item19 * 2460000))}</p>
              </div> : null
            }
            {
              item20 > 0 ? 
              <div className='bill-main'>
                <p>Twitter</p>
                <p>{item20}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item20 * 44000000000))}</p>
              </div> : null
            }
            {
              item21 > 0 ? 
              <div className='bill-main'>
                <p>Şimşek McQueen Boxer</p>
                <p>{item21}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item21 * 6))}</p>
              </div> : null
            }
            {
              item22 > 0 ? 
              <div className='bill-main'>
                <p>Hello Kitty Boxer</p>
                <p>{item22}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item22 * 40))}</p>
              </div> : null
            }
            {
              item23 > 0 ? 
              <div className='bill-main'>
                <p>Heisenberg (1 Yıllık)</p>
                <p>{item23}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item23 * 15000000))}</p>
              </div> : null
            }
            {
              item24 > 0 ? 
              <div className='bill-main'>
                <p>Disney+ Üyeliği (1 Aylık)</p>
                <p>{item24}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item24 * 8))}</p>
              </div> : null
            }
            {
              item25 > 0 ? 
              <div className='bill-main'>
                <p>Valorant RGX Set</p>
                <p>{item25}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item25 * 70))}</p>
              </div> : null
            }
            {
              item26 > 0 ? 
              <div className='bill-main'>
                <p>Bitcoin</p>
                <p>{item26}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item26 * 24000))}</p>
              </div> : null
            }
            {
              item27 > 0 ? 
              <div className='bill-main'>
                <p>Nike Pro Tight</p>
                <p>{item27}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item27 * 60))}</p>
              </div> : null
            }
            {
              item28 > 0 ? 
              <div className='bill-main'>
                <p>California Havuzlu Villa</p>
                <p>{item28}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item28 * 48000000))}</p>
              </div> : null
            }
            {
              item29 > 0 ? 
              <div className='bill-main'>
                <p>Burj Khalifa</p>
                <p>{item29}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item29 * 1500000000))}</p>
              </div> : null
            }
            {
              item30 > 0 ? 
              <div className='bill-main'>
                <p>Tenis Eteği</p>
                <p>{item30}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item30 * 70))}</p>
              </div> : null
            }
              <div className='bill-main total-box'>
                <p>Toplam</p>
                <p>{item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10 + item11 + item12 + item13 + item14 + item15 + item16 + item17 + item18 + item19 + item20 + item21 + item22 + item23 + item24 + item25 + item26 + item27 + item28 + item29 + item30}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item1 + item2 * 5 + item3 * 3 + item4 * 2 + item5 * 1100 + item6 * 500 + item7 * 900 + item8 * 350000000 + item9 * 801000000 + item10 * 130000000 + item11 * 572000000 + item12 * 200000 + item13 * 70000000000 + item14 * 360260000 + item15 * 3 + item16 * 130000 + item17 * 3300000 + item18 * 2000000 + item19 * 2460000 + item20 * 44000000000 + item21 * 6 + item22 * 40 + item23 * 15000000 + item24 * 8 + item25 * 70 + item26 * 24000 + item27 * 60 + item28 * 48000000 + item29 * 1500000000 + item30 * 70))}</p>
              </div>
              <div className='apply-buying-div'>
                <button className='apply-buying-btn' onClick={() => {
                  setIsBillOn(false);
                  setIsBought(true);
                }}>
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <p>Satın Almayı Onayla</p>
                </button>
              </div>
          </div>
        </div>
      </div>
    );
  }

  const Bought = () => {
    return (
      <div className='bought-container'>
        <button className='exit-bought-btn' onClick={() => {
          setIsBought(false);
          setIsRestartRequired(true);
        }}>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
        <div className='top-bought-container'>
          <span className="material-symbols-outlined">
            check_circle
          </span>
          <p>Tebrikler! 128 milyar doları harcadınız. 128 milyar dolardan sadece ${virgulluSayi(String(128000000000 - (item1 + item2 * 5 + item3 * 3 + item4 * 2 + item5 * 1100 + item6 * 500 + item7 * 900 + item8 * 350000000 + item9 * 801000000 + item10 * 130000000 + item11 * 572000000 + item12 * 200000 + item13 * 70000000000 + item14 * 360260000 + item15 * 3 + item16 * 130000 + item17 * 3300000 + item18 * 2000000 + item19 * 2460000 + item20 * 44000000000 + item21 * 6 + item22 * 40 + item23 * 15000000 + item24 * 8 + item25 * 70 + item26 * 24000 + item27 * 60 + item28 * 48000000 + item29 * 1500000000 + item30 * 70)))} kaldı.</p>
        </div>
        <div className='bottom-bought-container'>
          <div className='bill-container-box'>
            <div className='bill-container'>
              <div className='bill-header-part'>
                <p>Ürün Adı</p>
                <p>Adet</p>
                <p>Toplam Tutar</p>
              </div>
              {
                item1 > 0 ? 
                <div className='bill-main'>
                  <p>Ekmek</p>
                  <p>{item1}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item1))}</p>
                </div> : null
              }
              {
                item2 > 0 ? 
                <div className='bill-main'>
                  <p>Yumurta (15'li)</p>
                  <p>{item2}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item2 * 5))}</p>
                </div> : null
              }
              {
                item3 > 0 ? 
                <div className='bill-main'>
                  <p>Big Mac Menu</p>
                  <p>{item3}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item3 * 3))}</p>
                </div> : null
              }
              {
                item4 > 0 ? 
                <div className='bill-main'>
                  <p>Tavuk Döner Ayran</p>
                  <p>{item4}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item4 * 2))}</p>
                </div> : null
              }
              {
                item5 > 0 ? 
                <div className='bill-main'>
                  <p>iPhone 13 Pro Max</p>
                  <p>{item5}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item5 * 1100))}</p>
                </div> : null
              }
              {
                item6 > 0 ? 
                <div className='bill-main'>
                  <p>PlayStation 5</p>
                  <p>{item6}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item6 * 500))}</p>
                </div> : null
              }
              {
                item7 > 0 ? 
                <div className='bill-main'>
                  <p>Macbook Pro</p>
                  <p>{item7}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item7 * 900))}</p>
                </div> : null
              }
              {
                item8 > 0 ? 
                <div className='bill-main'>
                  <p>Cumhurbaşkanlığı Külliyesi</p>
                  <p>{item8}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item8 * 350000000))}</p>
                </div> : null
              }
              {
                item9 > 0 ? 
                <div className='bill-main'>
                  <p>Ankapark</p>
                  <p>{item9}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item9 * 801000000))}</p>
                </div> : null
              }
              {
                item10 > 0 ? 
                <div className='bill-main'>
                  <p>Messi</p>
                  <p>{item10}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item10 * 130000000))}</p>
                </div> : null
              }
              {
                item11 > 0 ? 
                <div className='bill-main'>
                  <p>Empire State Building</p>
                  <p>{item11}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item11 * 572000000))}</p>
                </div> : null
              }
              {
                item12 > 0 ? 
                <div className='bill-main'>
                  <p>BBL Esports</p>
                  <p>{item12}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item12 * 200000))}</p>
                </div> : null
              }
              {
                item13 > 0 ? 
                <div className='bill-main'>
                  <p>Coca Cola ®</p>
                  <p>{item13}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item13 * 70000000000))}</p>
                </div> : null
              }
              {
                item14 > 0 ? 
                <div className='bill-main'>
                  <p>BTS</p>
                  <p>{item14}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item14 * 360260000))}</p>
                </div> : null
              }
              {
                item15 > 0 ? 
                <div className='bill-main'>
                  <p>Daha Adil Bir Dünya Mümkün</p>
                  <p>{item15}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item15 * 3))}</p>
                </div> : null
              }
              {
                item16 > 0 ? 
                <div className='bill-main'>
                  <p>Tesla Model X</p>
                  <p>{item16}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item16 * 130000))}</p>
                </div> : null
              }
              {
                item17 > 0 ? 
                <div className='bill-main'>
                  <p>Bugatti Chiron</p>
                  <p>{item17}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item17 * 3300000))}</p>
                </div> : null
              }
              {
                item18 > 0 ? 
                <div className='bill-main'>
                  <p>TenZ</p>
                  <p>{item18}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item18 * 2000000))}</p>
                </div> : null
              }
              {
                item19 > 0 ? 
                <div className='bill-main'>
                  <p>London Tower Bridge</p>
                  <p>{item19}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item19 * 2460000))}</p>
                </div> : null
              }
              {
                item20 > 0 ? 
                <div className='bill-main'>
                  <p>Twitter</p>
                  <p>{item20}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item20 * 44000000000))}</p>
                </div> : null
              }
              {
                item21 > 0 ? 
                <div className='bill-main'>
                  <p>Şimşek McQueen Boxer</p>
                  <p>{item21}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item21 * 6))}</p>
                </div> : null
              }
              {
                item22 > 0 ? 
                <div className='bill-main'>
                  <p>Hello Kitty Boxer</p>
                  <p>{item22}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item22 * 40))}</p>
                </div> : null
              }
              {
                item23 > 0 ? 
                <div className='bill-main'>
                  <p>Heisenberg (1 Yıllık)</p>
                  <p>{item23}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item23 * 15000000))}</p>
                </div> : null
              }
              {
                item24 > 0 ? 
                <div className='bill-main'>
                  <p>Disney+ Üyeliği (1 Aylık)</p>
                  <p>{item24}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item24 * 8))}</p>
                </div> : null
              }
              {
                item25 > 0 ? 
                <div className='bill-main'>
                  <p>Valorant RGX Set</p>
                  <p>{item25}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item25 * 70))}</p>
                </div> : null
              }
              {
                item26 > 0 ? 
                <div className='bill-main'>
                  <p>Bitcoin</p>
                  <p>{item26}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item26 * 24000))}</p>
                </div> : null
              }
              {
                item27 > 0 ? 
                <div className='bill-main'>
                  <p>Nike Pro Tight</p>
                  <p>{item27}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item27 * 60))}</p>
                </div> : null
              }
              {
                item28 > 0 ? 
                <div className='bill-main'>
                  <p>California Havuzlu Villa</p>
                  <p>{item28}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item28 * 48000000))}</p>
                </div> : null
              }
              {
                item29 > 0 ? 
                <div className='bill-main'>
                  <p>Burj Khalifa</p>
                  <p>{item29}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item29 * 1500000000))}</p>
                </div> : null
              }
              {
                item30 > 0 ? 
                <div className='bill-main'>
                  <p>Tenis Eteği</p>
                  <p>{item30}</p>
                  <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item30 * 70))}</p>
                </div> : null
              }
              <div className='bill-main total-box'>
                <p>Toplam</p>
                <p>{item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10 + item11 + item12 + item13 + item14 + item15 + item16 + item17 + item18 + item19 + item20 + item21 + item22 + item23 + item24 + item25 + item26 + item27 + item28 + item29 + item30}</p>
                <p><span style={{marginRight: "1px"}}>$</span>{virgulluSayi(String(item1 + item2 * 5 + item3 * 3 + item4 * 2 + item5 * 1100 + item6 * 500 + item7 * 900 + item8 * 350000000 + item9 * 801000000 + item10 * 130000000 + item11 * 572000000 + item12 * 200000 + item13 * 70000000000 + item14 * 360260000 + item15 * 3 + item16 * 130000 + item17 * 3300000 + item18 * 2000000 + item19 * 2460000 + item20 * 44000000000 + item21 * 6 + item22 * 40 + item23 * 15000000 + item24 * 8 + item25 * 70 + item26 * 24000 + item27 * 60 + item28 * 48000000 + item29 * 1500000000 + item30 * 70))}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const PhoneWarning = () => {
    return (
      <div className='phone-warning'>
        <button className='exit-phone-warning-btn' onClick={() => {
          setIsPhoneWarning(false);
        }}>
          <span className="material-symbols-outlined">
            close
          </span>
        </button>
        <div className='phone-container'>
          <img src='https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2021/04/14/637261-1950414701.jpeg?itok=gVUxjJ5H' alt="" className='phone-img'></img>
          <p className='phone-text'>
            128 Milyar Dolar ekibi olarak web sitemizden alınabilecek en iyi performansın bilgisayar veya tablet cihazlarından alınabileceğini belirtmek ister, verdiğimiz rahatsızlıktan ötürü özür dileriz.
          </p>
        </div>
      </div>
    );
  }

  const CantAccessable = () => {
    return (
      <div className='cant-accessable'>
        <div className='cant-container'>
          <img src="https://st2.depositphotos.com/1001599/7261/v/600/depositphotos_72617493-stock-illustration-sad-face-thin-line-icon.jpg" alt="" className='cant-img'></img>
          <p className='cant-text'>
            Üzgünüz! Kullandığınız cihaz web sitemiz tarafından desteklenmemektedir. Verdiğimiz rahatsızlıktan ötürü özür dileriz.
          </p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (window.matchMedia("(max-width: 500px)").matches) {
      setIsPhoneWarning(true);
    } else {
      setIsPhoneWarning(false);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px) and (max-height: 600px)").matches) {
      setCantAccessable(true);
    } else {
      setCantAccessable(false);
    }

  }, []);

  return (
    <div className='big-main-container'>
      <div className='main-container'>
        <MoneyBar leftMoney={leftMoney}/>
        <div className='container'> 
          <Items name="Ekmek" price={1} image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Turkish_bread.jpg/1200px-Turkish_bread.jpg" count={item1} item={item1} setItem={setItem1}></Items>   
          <Items name="Yumurta (15'li)" price={5} image="https://solidstarts.com/wp-content/uploads/when-can-babies-eat-eggs.jpg" count={item2} item={item2} setItem={setItem2}></Items>   
          <Items name="Big Mac Menu" price={3} image="https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/big-mac-meal.jpg" count={item3} item={item3} setItem={setItem3}></Items>     
          <Items name="Tavuk Döner Ayran" price={2} image="https://pbs.twimg.com/media/Eurkl6eXUAAK6iG.png" count={item4} item={item4} setItem={setItem4}></Items>     
          <Items name="iPhone 13 Pro Max" price={1100} image="https://www.notebookcheck-tr.com/fileadmin/Notebooks/Apple/iPhone_13_Pro_Max/4_zu_3_iPhone_13_Pro_Max.jpg" count={item5} item={item5} setItem={setItem5}></Items>     
          <Items name="PlayStation 5" price={500} image="https://i5.walmartimages.com/asr/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png" count={item6} item={item6} setItem={setItem6}></Items>     
          <Items name="Macbook Air" price={900} image="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/114758_large.jpg" count={item7} item={item7} setItem={setItem7}></Items>     
          <Items name="Cumhurbaşkanlığı Külliyesi" price={350000000} image="https://www.cbiko.gov.tr/cms-uploads/2019/07/kurumsal.jpg" count={item8} item={item8} setItem={setItem8}></Items>     
          <Items name="Ankapark" price={801000000} image="https://www.ankhaber.com/images/haber/mansur-yavas-sozunu-tuttu-ankapark-icin-oylama-suruyor-105148-20220723.jpg" count={item9} item={item9} setItem={setItem9}></Items>    
          <Items name="Messi" price={130000000} image="https://pbs.twimg.com/profile_images/1534067923584798722/N-yikvzk_400x400.jpg" count={item10} item={item10} setItem={setItem10}></Items>    
          <Items name="Empire State Building" price={572000000} image="https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg" count={item11} item={item11} setItem={setItem11}></Items>    
          <Items name="BBL Esports" price={200000} image="https://pbs.twimg.com/profile_images/1558842600504844292/OR70PI9__400x400.jpg" count={item12} item={item12} setItem={setItem12}></Items>    
          <Items name="Coca Cola ®" price={70000000000} image="https://www.coca-cola.co.za/content/dam/one/za/en/lead/working-at-coke.jpg" count={item13} item={item13} setItem={setItem13}></Items>    
          <Items name="BTS" price={360260000} image="https://upload.wikimedia.org/wikipedia/commons/0/0d/%E2%80%98LG_Q7_BTS_%EC%97%90%EB%94%94%EC%85%98%E2%80%99_%EC%98%88%EC%95%BD_%ED%8C%90%EB%A7%A4_%EC%8B%9C%EC%9E%91_%2842773472410%29_%28cropped%29.jpg" count={item14} item={item14} setItem={setItem14}></Items>    
          <Items name="Daha Adil Bir Dünya Mümkün" price={3} image="https://cdnuploads.aa.com.tr/uploads/Contents/2021/09/05/thumbs_b_c_8522107a9ce9e4909eac87ab60941aed.jpg?v=174251" count={item15} item={item15} setItem={setItem15}></Items>    
          <Items name="Tesla Model X" price={130000} image="https://media.wired.co.uk/photos/606d9b03dbc4c121710a3d36/4:3/w_1708,h_1281,c_limit/tesla1.jpg" count={item16} item={item16} setItem={setItem16}></Items>    
          <Items name="Bugatti Chiron" price={3300000} image="https://stimg.cardekho.com/images/carexteriorimages/930x620/Bugatti/Chiron/8451/1633582433934/front-left-side-47.jpg" count={item17} item={item17} setItem={setItem17}></Items>    
          <Items name="TenZ" price={2000000} image="https://cdn1.dotesports.com/wp-content/uploads/2021/06/01154006/sen-tenz.jpg" count={item18} item={item18} setItem={setItem18}></Items>    
          <Items name="London Tower Bridge" price={2460000} image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1200px-Tower_Bridge_from_Shad_Thames.jpg" count={item19} item={item19} setItem={setItem19}></Items>    
          <Items name="Twitter" price={44000000000} image="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg" count={item20} item={item20} setItem={setItem20}></Items>    
          <Items name="Şimşek McQueen Boxer (2 Adet)" price={6} image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fae%2F52%2Fae526e01266d84cdb0c39acbd5b653daa9e15f8d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bkids_boy8y_underwear%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" count={item21} item={item21} setItem={setItem21}></Items>    
          <Items name="Hello Kitty Boxer" price={40} image="https://i5.walmartimages.com/asr/a9af76c5-2da4-4318-907b-6db9aac33066.67274adc70fccbd1b7d5e41174e61a7d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff" count={item22} item={item22} setItem={setItem22}></Items>    
          <Items name="Heisenberg (1 Yıllık)" price={15000000} image="https://pbs.twimg.com/profile_images/1205453750078509056/DwxBpGeQ_400x400.jpg" count={item23} item={item23} setItem={setItem23}></Items>    
          <Items name="Disney+ Üyeliği (1 Aylık)" price={8} image="https://cdn.vox-cdn.com/thumbor/HzJe1QVA6yLp3CLbTgsdJ22z_tU=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68494457/disneyplus.0.0.jpg" count={item24} item={item24} setItem={setItem24}></Items>    
          <Items name="Valorant RGX Set" price={70} image="https://img.game-news24.com/2021/10/The-new-VALORANT-RGX-11z-Pro-bundle-includes-Katana-kill-counter-and-unique-wall-hit-decals.jpeg" count={item25} item={item25} setItem={setItem25}></Items>    
          <Items name="Bitcoin" price={24000} image="http://c.files.bbci.co.uk/10656/production/_121485176_gettyimages-1319662239.jpg" count={item26} item={item26} setItem={setItem26}></Items>    
          <Items name="Nike Pro Tight" price={60} image="https://www.badminton-point.com/media/catalog/product/cache/3/image/1200x/9df78eab33525d08d6e5fb8d27136e95/c/z/cz9779-010_noir_1.jpg" count={item27} item={item27} setItem={setItem27}></Items>    
          <Items name="California Havuzlu Villa" price={48000000} image="https://www.dirt.com/wp-content/uploads/2017/12/tom_ruth_chapman_house_14.jpg?w=800&h=500&crop=1" count={item28} item={item28} setItem={setItem28}></Items>    
          <Items name="Burj Khalifa" price={1500000000} image="https://thewanderlustfashionista.com/wp-content/uploads/2019/07/Burj.jpg" count={item29} item={item29} setItem={setItem29}></Items>    
          <Items name="Fileli Tenis Eteği" price={70} image="https://aritzia.scene7.com/is/image/Aritzia/large/f22_19_a07_94644_18255_on_a.jpg" count={item30} item={item30} setItem={setItem30}></Items>    
 
          <button className='buy-btn' onClick={() => {
            if (!isRestartRequired) {
              if (!(item1 === 0 && item2 === 0 && item3 === 0 && item4 === 0 && item5 === 0 && item6 === 0 && item7 === 0 && item8 === 0 && item9 === 0 && item10 === 0 && item11 === 0 && item12 === 0 && item13 === 0 && item14 === 0 && item15 === 0 && item16 === 0 && item17 === 0 && item18 === 0 && item19 === 0 && item20 === 0 && item21 === 0 && item22 === 0 && item23 === 0 && item24 === 0 && item25 === 0 && item26 === 0 && item27 === 0 && item28 === 0 && item29 === 0 && item30 === 0)) {
                setIsBillOn(true);
              } else {
                alert("Sepetiniz boş olduğundan satın alım gerçekleştiremezsiniz.");
              }
            }
          }} style={
            isRestartRequired ? {
              cursor: "default"
            } : {
              cursor: "pointer"
            }
          }>
            Satın Al
          </button>
        </div>    
      </div>
      {
        isBillOn ? <Bill></Bill> : null
      }
      {
        isBought ? <Bought></Bought> : null
      }
      {
        isPhoneWarning ? <PhoneWarning></PhoneWarning> : null
      }
      {
        cantAccessable ? <CantAccessable></CantAccessable> : null
      }
    </div>
  );
}


export default App;