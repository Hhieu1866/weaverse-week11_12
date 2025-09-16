import FancyButton from "@/components/ui/FancyButton";
import FancyHoverText from "@/components/ui/FancyHoverText";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/products";
import { motion } from "framer-motion";

const CoffeeCollection = () => {
  return (
    <div>
      <section className="bg-second">
        <div className="container mx-auto px-4 py-8 md:px-20">
          {/* Top breadcrumb */}
          <div className="flex items-center justify-between text-xs tracking-widest">
            <p>SHOP</p>
            <p>ELOWEN</p>
          </div>

          {/* Hero heading */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-center font-custom text-4xl font-bold sm:text-6xl md:text-8xl"
            >
              Whole Coffee <br /> Beans
            </motion.p>
            <p className="max-w-[550px] text-center text-sm font-medium sm:text-base">
              Try our coffee in your home, the way you prefer. Order beans or
              ask us to grind to your preference with over 5 choices based on
              your at home set up.
            </p>
          </div>

          <Separator className="my-12 bg-gray-400 md:my-20" />

          {/* Product grid */}
          <div className="my-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:my-28 md:grid-cols-3">
            {PRODUCTS.map((p) => (
              <Link
                to={`/products/${p.id}`}
                key={p.id}
                className="flex flex-col items-center justify-between gap-6 rounded-2xl p-4 md:gap-8 md:p-6"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="max-h-[220px] object-contain"
                  />
                  <p className="font-custom text-base font-bold sm:text-lg">
                    {p.name}
                  </p>
                  <p className="px-3 text-center text-sm sm:text-base">
                    {p.desc}
                  </p>
                  <p className="font-bold">{p.price}</p>
                </div>

                <div className="flex w-full flex-col items-center gap-3">
                  <FancyButton
                    padding="px-6 py-2 sm:px-7"
                    bgColor="bg-black"
                    textColor="text-white"
                    hoverBgColor="bg-white"
                    hoverTextColor="text-black"
                    className="w-full text-sm sm:text-base"
                  >
                    Buy now
                  </FancyButton>
                  <FancyHoverText className="text-xs uppercase tracking-widest">
                    Read more
                  </FancyHoverText>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoffeeCollection;
