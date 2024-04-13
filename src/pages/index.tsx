import Layout from "@/components/layout/layout";
import BooksCatalog from "@/components/booksCatalog/booksCatalog";
import SideMenu from "@/components/sideMenu/sideMenu";
import Slider from "@/components/slider/slider";
import Sticker from "@/components/sticker/sticker";

export default function Home() {
  return (
    <Layout>
      <Slider/>
      <Sticker top={-600} left={1400} bgColor={"#9E98DC"} text={"Поменяй старую книгу на новую!"} url={"tradein"} />
      <Sticker top={-400} left={1600} bgColor={"#FF8FE6"} text={"Лучшие 100 книг 2024 года"} url={"bestbooks"} />
      <SideMenu/>
      <BooksCatalog/>
    </Layout>
  )
}
