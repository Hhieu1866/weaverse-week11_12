import FancyButton from "@/components/ui/FancyButton";

const About = () => {
  return (
    <main className="bg-main">
      <section className="container mx-auto flex items-start gap-10 px-20 py-20">
        <div className="flex-1 space-y-5">
          <h1 className="font-custom text-7xl font-bold">
            Born in Bermondsey, discovered worldwide.
          </h1>
          <p className="w-1/2 font-medium">
            From humble beginnings in South London, we're building a local
            community far and wide. Approachable, considered, full of quality
            and provenance; thoughtful products and paraphernalia for your daily
            cup. Our House or yours.
          </p>
        </div>

        <div className="flex-1">
          <img src="/learn-page-header.webp" alt="learn-page-header" />
        </div>
      </section>

      <section className="relative h-screen w-full py-20">
        <img
          src="/about-banner.webp"
          alt="about-banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <p className="max-w-6xl font-custom text-4xl font-bold tracking-wide text-main md:text-7xl">
            Pourers of the world’s best coffees and providers of the tools and
            techniques that make it yours.
          </p>

          <FancyButton
            bgColor="bg-transparent"
            hoverBgColor="bg-main"
            textColor="text-main"
            hoverTextColor="text-black"
            className="mt-14 border border-main"
          >
            Visit us
          </FancyButton>
        </div>
      </section>

      <section className="container mx-auto px-20 py-32">
        <h1 className="text-center font-custom text-7xl font-bold">
          25 square meters on London’s famous Bermondsey Street was all it took
          to conceive WatchHouse and lay the foundations of everything to come.
        </h1>

        <div className="relative mt-20 flex gap-16">
          <div className="w-2/3">
            <img src="/image-text-desc.webp" alt="image-text-desc" />
          </div>

          <div className="sticky top-32 w-1/3 space-y-4 self-start font-medium">
            <p>
              Historically a shelter for men guarding the graveyard of St Mary
              Magdalen’s Church, today we honour its former role by providing a
              contemporary sanctuary to our customers. This tiny building became
              our namesake and the original home of the Modern Coffee ambition:
              to offer the community quality coffee, food and service, in
              carefully considered and beautifully designed spaces.
            </p>
            <p>
              Our vision has continued to grow, leading us to new spaces, an
              expanded offering and many great community & industry
              relationships. As we look to the future, we hope to continue to
              build on what we started back in 2014; distinctive spaces remain
              at the heart of our development, and Modern Coffee at the heart of
              what we do.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-second">
        <div className="container mx-auto px-20 py-20">
          <div className="flex items-start gap-7">
            <h1 className="flex-1 font-custom text-7xl font-bold">
              Our approach.
            </h1>
            <div className="flex-1 space-y-5">
              <p>
                A home to those who value craft and quality, our aspiration is
                to be the local hero of choice. Dedicated to transparent,
                ethical coffee and food supply chains, we source seasonally from
                the best producers around the world. Sharing these sourcing
                stories with you, as we believe the enjoyment of food and coffee
                is more than just consumption, it's knowledge. We take equal
                pride in the skill that goes into sourcing, production and
                presentation.
              </p>
              <FancyButton
                bgColor="bg-transparent"
                className="border border-black"
              >
                See our houses
              </FancyButton>
            </div>
          </div>

          <div className="mt-20 flex gap-7">
            <div>
              <img
                src="/approach-1.webp"
                alt="approach-1"
                className="rounded-2xl"
              />
            </div>
            <div>
              <img
                src="/approach-2.webp"
                alt="approach-2"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
