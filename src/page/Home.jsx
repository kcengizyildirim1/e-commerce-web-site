import BestSeller from "../components/home/BestSeller";
import EditorPick from "../components/home/EditorPick";
import HomeBottomSlider from "../components/home/HomeBottomSlider";
import HomeTopSlider from "../components/home/HomeTopSlider";

export default function Home() {
  return (
    <div className="font-['Montserrat']">
      <HomeTopSlider />
      <EditorPick />
      <BestSeller />
      <HomeBottomSlider />
    </div>
  );
}
