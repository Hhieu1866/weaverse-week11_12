import { IconOne, IconThree, IconTwo } from "@/components/icons";
import OurFavourites from "@/components/OurFavourites";
import SubscribeSection from "@/components/SubscribeSection";
import FancyButton from "@/components/ui/FancyButton";

export default function Home() {
  return (
    <div className="">
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          playsInline
          autoPlay
          loop
          muted
          preload="metadata"
          src="https://watchhouse.com/cdn/shop/videos/c/vp/1cfee541bfa04287b9c5c0a12f1bfb0b/1cfee541bfa04287b9c5c0a12f1bfb0b.HD-1080p-2.5Mbps-32783133.mp4?v=0"
          poster="https://watchhouse.com/cdn/shop/files/preview_images/1cfee541bfa04287b9c5c0a12f1bfb0b.thumbnail.0000000000_small.jpg?v=1722866921"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-5 px-4 text-center text-white">
          <h1 className="font-custom text-5xl font-bold text-primary md:text-7xl">
            Modern Coffee.
          </h1>
          <p className="max-w-2xl">
            Pourers of the world’s best coffees and providers of the tools and
            techniques from our House to yours.
          </p>
          <FancyButton
            padding="px-7 py-3"
            textSize="text-xs"
            bgColor="bg-primary"
            hoverBgColor="bg-black"
          >
            SHOP NOW
          </FancyButton>
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container mx-auto flex items-start gap-10 px-20 py-10">
          <div className="flex items-start gap-2">
            <div className="">
              <IconOne size={100} />
            </div>
            <div>
              <h2 className="font-custom text-2xl font-bold">
                Globally sourced. Locally crafted.
              </h2>
              <p>
                Cupped, tested, developed and roasted at our Coffee Lab right
                here in South London.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="">
              <IconTwo size={100} />
            </div>
            <div>
              <h2 className="font-custom text-2xl font-bold">
                Modern Coffee. Holistic approach.
              </h2>
              <p>
                It encapsulates the attention to detail, creativity, and focus
                on provenance and quality.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="">
              <IconThree size={100} />
            </div>
            <div>
              <h2 className="font-custom text-2xl font-bold">
                No two Houses the same.
              </h2>
              <p>
                Each of our locations are designed to play a contemporary role
                in the Modern Coffee experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe section */}
      <SubscribeSection />

      {/* Our favourites */}
      <OurFavourites />
    </div>
  );
}
