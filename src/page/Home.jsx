import BestSeller from "../components/home/BestSeller";
import EditorPick from "../components/home/EditorPick";
import FeaturedPost from "../components/home/FeaturedPost";
import HomeBottomSlider from "../components/home/HomeBottomSlider";
import HomeTopSlider from "../components/home/HomeTopSlider";
import Row from "../components/home/Row";

export default function Home() {
  return (
    <div className="font-['Montserrat']">
      <HomeTopSlider />
      <EditorPick />
      <BestSeller />
      <HomeBottomSlider />
      <Row />
      <FeaturedPost />
    </div>
  );
}
