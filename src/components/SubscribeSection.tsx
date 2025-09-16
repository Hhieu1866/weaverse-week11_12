import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Separator } from "./ui/separator";
import FancyButton from "./ui/FancyButton";
import { motion } from "framer-motion";
import { products, benefits } from "@/data/subscribe";
const SubscribeSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scroll = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    // Calculate single-card width + gap
    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 0;
    const styles = getComputedStyle(el);
    const gapStr = (styles.columnGap || styles.gap || "0").toString();
    const gap = parseFloat(gapStr) || 0;
    const amount = cardWidth + gap;
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-main">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-12 md:px-8 lg:flex-row lg:gap-6 lg:px-20 lg:py-32">
        {/* Left side - static content */}
        <div className="flex w-full flex-col pt-4 lg:w-1/4 lg:justify-between lg:pt-28">
          <div className="space-y-5">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-custom text-4xl font-bold leading-none md:text-5xl lg:text-6xl"
            >
              Subscribe today.
            </motion.h1>
            <p className="font-medium">
              WatchHouse. YourHouse. The Modern Coffee experience in the comfort
              of your own home.
            </p>
            <p className="font-medium">Subscribe for a neverending cup.</p>
          </div>
          <div className="hidden lg:flex lg:items-start lg:gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              className="rounded-full bg-black p-2 transition hover:bg-black/80"
              aria-label="Previous"
            >
              <ChevronLeft className="text-white" />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              className="rounded-full bg-black p-2 transition hover:bg-black/80"
              aria-label="Next"
            >
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
        {/* Right side - scrollable cards */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          ref={scrollerRef}
          className="no-scrollbar -mx-1 flex flex-1 snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto overflow-y-visible px-1 pb-2 pt-4 md:gap-6 lg:gap-7 lg:pt-28"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative mt-12 flex w-[85%] shrink-0 snap-start flex-col rounded-2xl p-5 md:mt-0 md:w-[75%] md:p-6 lg:w-72 lg:p-6 ${product.textColor}`}
              style={{
                background: `linear-gradient(to right, ${product.gradientFrom}, ${product.gradientTo})`,
              }}
            >
              {/* Product image */}
              <img
                src={product.image}
                alt={product.imageAlt}
                className="absolute -top-36 left-1/2 -translate-x-1/2 md:-top-28"
              />
              {/* Card content */}
              <div className="mt-20 flex-1 md:mt-28 lg:mt-28">
                <div className="space-y-3">
                  <h2 className="font-custom text-xl font-bold">
                    {product.title}
                  </h2>
                  <p className="text-sm">{product.description}</p>
                  <p className="font-custom text-lg">{product.price}</p>
                </div>
                <Separator className={`my-3 ${product.separatorColor}`} />
                <p className="text-sm font-bold">Subscribe today.</p>
                <div className="mt-3 space-y-4 text-sm font-medium">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="rounded-full p-0.5"
                        style={{ backgroundColor: product.checkBgColor }}
                      >
                        <Check className="size-3" />
                      </div>
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <FancyButton padding="px-7 py-2" className="mt-6 w-full">
                {product.buttonText}
              </FancyButton>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default SubscribeSection;
