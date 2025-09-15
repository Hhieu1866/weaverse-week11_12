import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <main className="bg-main">
      <div className="container mx-auto flex flex-col px-20 py-8">
        <section>
          <div className="flex items-center justify-between text-xs tracking-widest">
            <p>SHOP</p>
            <p>ELOWEN</p>
          </div>
          <h1 className="font-custom text-9xl font-bold">Journal.</h1>
          <p className="mt-6 font-medium">
            Our latest news, coffee musings and sourcing stories.
          </p>
          <div className="mt-8 flex items-center gap-5">
            <h3 className="font-medium">Topics:</h3>
            <p className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4">
              Coffee
            </p>
            <p className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4">
              Design
            </p>
            <p className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4">
              Education
            </p>
            <p className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4">
              Houses
            </p>
            <p className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4">
              Sustainability
            </p>
            <p className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4">
              Teams
            </p>
          </div>
        </section>

        <section className="mt-16 flex gap-6">
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
                      Think of spectacular of coffee, and Colombia is the origin
                      that comes to mind. With its dramatic landscapes, diverse
                      mi...
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
        </section>

        <section className="my-20 flex items-center justify-between gap-40 rounded-2xl bg-second p-20">
          <h1 className="w-1/2 justify-start font-custom text-6xl font-bold">
            Get these sent to your inbox.
          </h1>
          <div className="w-1/2 justify-end space-y-4">
            <p className="font-medium">
              Become a subscriber and enjoy 10% off your first order plus access
              to the hottest coffee beans while they’re still cooling.
            </p>
            <div className="relative">
              <Input
                className="h-14 rounded-full border border-black pl-5 pr-16 placeholder:font-medium placeholder:text-black"
                placeholder="Enter your email address."
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-black text-main transition-all"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-16 flex gap-6">
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
                      Eugenioides.
                    </p>
                    <p>
                      At WatchHouse, our pursuit of the exceptional takes us to some
                      of the most remarkable producers in the world. This
                      time,...
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
                  src="/Eugenioides.gif"
                  alt="MatchaInHouse"
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="flex-1">
                <img
                  src="/Nikol1.webp"
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
                      Nikol Novotná: WatchHouse Head Roaster.
                    </p>
                    <p>
                      At WatchHouse, we take pride in the exceptional talent driving
                      our craft, and few embody this more than Nikol Novotná,
                      ou...
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
          <div className="relative w-full flex-1 overflow-hidden rounded-2xl">
            <img
              src="/GCL.gif"
              alt="NomadBlog"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center font-custom text-6xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Golden Cardamom <br /> Latte: a touch of <br />
                spice.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24 mt-6 flex gap-6">
          <div className="relative w-full flex-1 overflow-hidden rounded-2xl">
            <img
              src="/Social_Rarities_Edition_04_Square_with_Box.webp"
              alt="Social_Rarities_Edition_04_Square_with_Box"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center font-custom text-6xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Rarities 04: Finca Hartmann Gesha
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
                      Our Modern Coffee gift guide.
                    </p>
                    <p>
                      Celebrate the festive season with gifts that embody
                      warmth, flavour, and craftsmanship. Our curated se...
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
                  src="/WH_Gifts_GIF.gif"
                  alt="WH_Gifts_GIF"
                  className="rounded-2xl"
                />
              </div>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="flex-1">
                <img src="/ECA.webp" alt="ECA" className="rounded-2xl" />
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
                      Europe's Best Coffee Shop Chain.
                    </p>
                    <p>
                      Celebrating our tenth anniversary year, WatchHouse is
                      honoured to be named Europe’s Best Coffee Shop Chain at
                      the 2024 Eur...
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
        </section>
      </div>
    </main>
  );
};

export default Blog;
