import ban1 from "/public/images/banner1.png";
import ban2 from "/public/images/banner2.png";
import ban3 from "/public/images/banner3.png";
import { StaticImageData } from "next/image";

export default function arrayOfBanners():StaticImageData[] {    
    const images = [ban1, ban2, ban3];
    return images;
}
