import css from "./slider.module.css";
import banners from "./images";
import purpleDot from "./purpleDot.svg"
import greyDot from "./greyDot.svg"
import { useState, useEffect} from "react";

export default function Slider() {

    const [currentBannerIndex, setCurrentBannerIndex] = useState(0); // для хранения индекса текущего баннера
    const bannersCount = banners().length;

    useEffect(() => {

        const timer = setInterval(() => {
            
            setCurrentBannerIndex(prevIndex => {
              let n = prevIndex;
              n = (n === bannersCount-1)? 0 : n+1; // ротация индекса
              return n;
            });
          }, 3000);

          return () => {
            clearInterval(timer); // остановка таймера при отмонтировании компонента
          }          
    });

    return (
         <>
            <div className={css.slider}>
                <img className={css.sliderImage} src={banners()[currentBannerIndex].src}/>
            </div>
            <div className={css.selectorDots}>
                {banners().map(function(block, index) {
                    return <img key={"dot"+index} className={css.selectorDot} src={index===currentBannerIndex ? purpleDot.src : greyDot.src} onClick={() => setCurrentBannerIndex(index)}/>
                })}
            </div>
        </>
    );

}