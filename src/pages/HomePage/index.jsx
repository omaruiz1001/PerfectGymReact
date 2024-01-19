import { HomeCollection } from "./HomeCollection"
import { HomeProducts } from "./HomeProducts";
import { HomeTrending } from "./HomeTrending";
import { HomeNews } from "./HomeNews";
import { HomeExclusive } from "./HomeExclusive";

import 'animate.css';


export const HomePage = () => {
  return (
    <>
    <HomeExclusive/>
    <HomeCollection/>
    <HomeProducts/>
    <HomeTrending/>
    <HomeNews/>
    </>
  )
}
