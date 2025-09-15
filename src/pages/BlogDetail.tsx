import FancyButton from "@/components/ui/FancyButton";
import { Separator } from "@/components/ui/separator";

const BlogDetail = () => {
  return (
    <main className="bg-main">
      <section className="container mx-auto flex gap-10 px-20 py-8">
        <div className="flex w-1/2 flex-col justify-between">
          <div className="space-y-5">
            <p className="font-medium">Spotlight.</p>
            <h1 className="font-custom text-7xl font-bold">
              WatchHouse x NOMAD.
            </h1>
          </div>
          <div>
            <Separator className="h-[0.5px] bg-black" />
            <div className="mt-2 flex items-center justify-between">
              <p>May 13, 2025</p>
              <h1>Written by WatchHouse .</h1>
            </div>
          </div>
        </div>

        <div className="relative w-1/2 flex-1 overflow-hidden rounded-2xl">
          <img
            src="/NomadBlog.webp"
            alt="NomadBlog"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center px-[450px] py-20">
        <h1 className="font-custom text-6xl font-bold">
          A Barcelona guest. A London roast.
        </h1>
        <p className="mt-10">
          For this year’s London Coffee Festival, we’ve partnered with NOMAD
          Coffee on a one-off release. Born from a shared respect for process
          and precision, the collaboration brought NOMAD’s Head Roaster, Rebeca
          Silva - also the current SCA Spain Roasting Champion - into our Maltby
          Street Roastery to work alongside WatchHouse’s Nikol Novotná. The
          result is a co-roasted take on a standout natural Gesha from Pedro
          Rodriguez in Bolivia. It’s a meeting of minds, methods, and machines -
          roasted on the Probat UG22, a model trusted by both roasteries. The
          coffee itself is clean, expressive and quietly complex. Just like the
          collaboration behind it. To mark the launch, we’re hosting a
          one-day-only pop-up at WatchHouse Spitalfields, where you’ll find a
          shared menu featuring espresso, pour-over and batch brews from both
          NOMAD and WatchHouse - including the release itself, Los Rodriguez
          Gesha. You’ll also find it served on batch and available as a limited
          retail drop in London Houses throughout the week of the festival.
          Small release. Shared story. Strong cup.
        </p>
      </section>

      <section className="container mx-auto px-20 py-16">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-custom text-6xl font-bold">More Posts</h1>
          <FancyButton
            bgColor="bg-transparent"
            hoverBgColor="bg-black"
            className="border border-black"
          >
            Explore journal
          </FancyButton>
        </div>

        <div>
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
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;