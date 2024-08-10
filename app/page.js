import Image from "next/image";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import CofeeBanner from "./_components/CofeeBanner";
import BestSellingCofee from "./_components/BestSellingCofee";
import Cofeebannertwo from "./_components/Cofeebannertwo";
import Footer from "./_components/Footer";

export default function Home() {
  return (
      <div>
        <Header/>
        <Banner/>
        <Explore/>
        <CofeeBanner/>
        <BestSellingCofee/>
        <Cofeebannertwo/>
        <Footer/>
      </div>
  );
}
