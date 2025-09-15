import Feedbacks from "@/components/Feedbacks";
import { IconOne, IconThree, IconTwo } from "@/components/icons";
import OurFavourites from "@/components/OurFavourites";
import SubscribeSection from "@/components/SubscribeSection";
// import RecentlyViewed from "@/components/RecentlyViewed";
import FancyButton from "@/components/ui/FancyButton";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="">
      <section className="relative h-screen w-full overflow-hidden">
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
          <h1 className="font-custom text-5xl font-bold text-main md:text-7xl">
            Modern Coffee.
          </h1>
          <p className="max-w-2xl">
            Pourers of the world’s best coffees and providers of the tools and
            techniques from our House to yours.
          </p>
          <FancyButton
            padding="px-7 py-3"
            textSize="text-xs"
            bgColor="bg-main"
            hoverBgColor="bg-black"
          >
            SHOP NOW
          </FancyButton>
        </div>
      </section>

      <section className="bg-second">
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
      </section>

      {/* Subscribe section */}
      <SubscribeSection />

      {/* Our favourites */}
      <OurFavourites />

      {/* <RecentlyViewed /> */}

      <Feedbacks />

      <section className="relative h-screen w-full">
        <img
          src="/about-quote-image.webp"
          alt="about-quote-image"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="max-w-6xl font-custom text-4xl font-bold tracking-wide text-main md:text-7xl">
            WatchHouse is a slow take on instant gratification. Thoughtful
            pours, rare flavour profiles and paraphernalia for your daily cup.
          </p>

          <FancyButton
            bgColor="bg-transparent"
            hoverBgColor="bg-main"
            textColor="text-main"
            hoverTextColor="text-black"
            className="mt-14 border border-main"
          >
            Our story
          </FancyButton>
        </div>
      </section>

      {/* Visit us */}
      <section className="bg-main">
        <div className="container mx-auto flex gap-10 px-20 py-36">
          <div className="w-2/3">
            <img
              src="/Visit_us_homepage.webp"
              alt="Visit_us_homepage"
              className="rounded-3xl"
            />
          </div>

          <div className="flex w-1/3 flex-col justify-center">
            <div className="flex flex-col items-start gap-5">
              <h1 className="font-custom text-7xl font-bold">Visit us</h1>
              <p>
                25 square metres on London’s famous Bermondsey Street was all it
                took to conceive WatchHouse and lay the foundations of
                everything to come.
              </p>
              <FancyButton
                bgColor="bg-transparent"
                textColor="text-black"
                hoverTextColor="text-main"
                className="border border-black"
              >
                Our locations
              </FancyButton>
            </div>
            <div className="mt-20">
              <img src="/bermo.webp" alt="bermo" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* The journal */}
      <section className="bg-second">
        <div className="container mx-auto flex flex-col px-20 py-32">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <h1 className="font-custom text-7xl font-bold">The journal.</h1>
            </div>
            <div className="flex-1">
              <p className="font-medium">
                25 square metres on London’s famous Bermondsey Street was all it
                took to conceive WatchHouse and lay the foundations of
                everything to come. Historically a shelter for men guarding the
                graveyard of St Mary Magdalen’s Church.
              </p>
              <FancyButton
                bgColor="bg-transparent"
                textColor="text-black"
                hoverTextColor="text-main"
                className="mt-5 border border-black"
              >
                Explore journal
              </FancyButton>
            </div>
          </div>

          <div className="mt-16 flex gap-6">
            <div className="relative w-full flex-1 overflow-hidden rounded-2xl">
              <img
                src="/NomadBlog.webp"
                alt="NomadBlog"
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center font-custom text-6xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                  WatchHouse x <br />
                  NOMAD.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex gap-6">
                <div className="flex flex-1 flex-col justify-between">
                  <div className="w-full">
                    <div className="space-y-1">
                      <Separator className="bg-black" />
                      <p className="font-bold">Spotlight.</p>
                    </div>
                  </div>
                  <div>
                    <Separator className="bg-gray-400" />
                    <div className="space-y-4">
                      <p className="font-custom text-xl font-bold">
                        Introducing: matcha.
                      </p>
                      <p>
                        Three drinks. Two matchas. No shortcuts. At WatchHouse,
                        every ingredient we serve is carefully chosen, not just
                        for what ...
                      </p>
                      <button
                        role="link"
                        className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                      >
                        Read more.
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="/MatchaInHouse.webp"
                    alt="MatchaInHouse"
                    className="rounded-2xl"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-6">
                <div className="flex-1">
                  <img
                    src="/Colombian_Vista.webp"
                    alt="Colombian_Vista"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="w-full">
                    <div className="space-y-1">
                      <Separator className="bg-black" />
                      <p className="font-bold">Spotlight.</p>
                    </div>
                  </div>
                  <div>
                    <Separator className="bg-gray-400" />
                    <div className="space-y-4">
                      <p className="font-custom text-xl font-bold">
                        Origin: Colombia.
                      </p>
                      <p>
                        Think of spectacular of coffee, and Colombia is the
                        origin that comes to mind. With its dramatic landscapes,
                        diverse mi...
                      </p>
                      <button
                        role="link"
                        className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                      >
                        Read more.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}