import FancyButton from "@/components/ui/FancyButton";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="bg-main">
      {/* Hero intro */}
      <section className="container mx-auto flex flex-col gap-10 px-4 py-10 md:flex-row md:items-start md:gap-10 md:px-20 md:py-20">
        <div className="flex-1 space-y-5">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="font-custom text-3xl font-bold sm:text-4xl md:text-7xl"
          >
            Born in Bermondsey, discovered worldwide.
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full font-medium md:w-1/2"
          >
            From humble beginnings in South London, we're building a local
            community far and wide. Approachable, considered, full of quality
            and provenance; thoughtful products and paraphernalia for your daily
            cup. Our House or yours.
          </motion.p>
        </div>

        <div className="flex-1">
          <img src="/learn-page-header.webp" alt="learn-page-header" />
        </div>
      </section>

      {/* Banner with overlay */}
      <section className="relative h-[60vh] w-full py-10 md:h-screen md:py-20">
        <img
          src="/about-banner.webp"
          alt="about-banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <p className="max-w-4xl font-custom text-2xl font-bold tracking-wide text-main sm:text-4xl md:max-w-6xl md:text-7xl">
            Pourers of the world’s best coffees and providers of the tools and
            techniques that make it yours.
          </p>
          <FancyButton
            bgColor="bg-transparent"
            hoverBgColor="bg-main"
            textColor="text-main"
            hoverTextColor="text-black"
            className="mt-10 border border-main md:mt-14"
          >
            Visit us
          </FancyButton>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-16 md:px-20 md:py-32">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center font-custom text-3xl font-bold sm:text-4xl md:text-7xl"
        >
          25 square meters on London’s famous Bermondsey Street was all it took
          to conceive WatchHouse and lay the foundations of everything to come.
        </motion.h1>

        <div className="relative mt-10 flex flex-col gap-10 md:mt-20 md:flex-row md:gap-16">
          <div className="w-full md:w-2/3">
            <img src="/image-text-desc.webp" alt="image-text-desc" />
          </div>

          <div className="w-full space-y-4 font-medium md:sticky md:top-32 md:w-1/3 md:self-start">
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

      {/* Approach */}
      <section className="bg-second">
        <div className="container mx-auto px-4 py-16 md:px-20 md:py-20">
          <div className="flex flex-col gap-7 md:flex-row md:items-start">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-1 font-custom text-3xl font-bold sm:text-4xl md:text-7xl"
            >
              Our approach.
            </motion.h1>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-1 space-y-5 text-sm md:text-base"
            >
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
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col gap-6 md:mt-20 md:flex-row md:gap-7">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <img
                src="/approach-1.webp"
                alt="approach-1"
                className="rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <img
                src="/approach-2.webp"
                alt="approach-2"
                className="rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
