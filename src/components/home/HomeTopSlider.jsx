import { Carousel, Typography, Button } from "@material-tailwind/react";
import resim from "../../../public/assets/homejpg2.png";
import resim2 from "../../../public/assets/homejpg3.png";
import resim3 from "../../../public/assets/shop-hero.jpg";

export default function HomeTopSlider() {
  return (
    <Carousel className="h-[715px] overflow-hidden">
      <div className="relative h-full w-full">
        <img
          src={resim3}
          alt="image 1"
          className="h-full w-full object-cover object-top "
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center  ">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-4xl"
            >
              NEW COLLECTION
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 lg:text-lg"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={resim2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:w-auto md:mx-auto md:pr-16">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl lg:text-4xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 lg:text-base"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={resim} alt="image 3" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32 lg:w-auto md:mx-auto md:pr-16">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
