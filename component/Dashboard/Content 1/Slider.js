import style from '../../../styles/content1/slider.module.scss';
import {useState, useEffect} from 'react';

const Slider = () => {

    const data = ["/navi/cimri.jpg", "/navi/cimri.jpg", "/navi/cimri.jpg", "/navi/cimri.jpg"];
    const [index, setIndex] = useState(0);
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [timeoutSlider, setTimeoutSlider] = useState();

    const next = () => {
        index >= 3 ? setIndex(0) : setIndex(index + 1);
    }

    const previous = () => {
        index <= 0 ? setIndex(3) : setIndex(index - 1);
    }

    useEffect(() => {
        !onMouseEnter ? setTimeoutSlider(setTimeout(next, 2000)) : clearTimeout(timeoutSlider);
    }, [index, onMouseEnter]);

    return (
        <div className={style.container}
             onMouseLeave={() => {
                 setOnMouseEnter(false)
             }}
             onMouseEnter={() => {
                 setOnMouseEnter(true)
             }}>
            <div className={style.button}
                 onClick={previous}>
                {"<"}
            </div>
            <ul style={{transform: `translateX(-${index * 630}px)`}}>
                {data.map((data, index) => (
                    <li key={index}
                        style={{transform: `translateX(${index * 630}px)`}}>
                        <img src={data} alt=""/>
                    </li>
                ))}
            </ul>
            <div
                onClick={next}
                className={style.button}>
            </div>
        </div>
    )
}
export default Slider;