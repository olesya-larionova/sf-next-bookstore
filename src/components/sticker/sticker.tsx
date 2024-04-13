import Link from 'next/link';
import React, {FunctionComponent} from "react";
import css from "./sticker.module.css";
import imgArrow from "./arrow.svg";

type TStickerProps = {
    top: number,
    left: number,
    bgColor: string,
    text: string,
    url: string
};

const Sticker: FunctionComponent<TStickerProps> = (StickerProps) => {

    const stickerStyle = {
        top: StickerProps.top,
        left: StickerProps.left,
        backgroundColor: StickerProps.bgColor
    }

    return (
        <Link href={StickerProps.url} className={css.sticker} style={stickerStyle}>
            <div>
                {StickerProps.text}
                <br/>
                <img src={imgArrow.src}/>
            </div>
        </Link>
    );
}

export default Sticker;
