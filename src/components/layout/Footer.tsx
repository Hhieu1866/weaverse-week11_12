import { ArrowRight } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-second">
      <div className="rounded-t-2xl bg-black">
        <div className="container mx-auto px-4 py-16 md:px-20 md:py-14">
          {/* Top CTA */}
          <div className="flex flex-col items-start gap-10 text-main md:flex-row md:items-center md:gap-28">
            <div className="max-w-none md:max-w-[688px]">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="font-custom text-3xl font-bold sm:text-4xl md:text-6xl"
              >
                Proudly originating in a former 19th century watch house on
                London's famous Bermondsey Street.
              </motion.p>
            </div>

            <div className="w-full space-y-4">
              <p className="font-custom text-xl font-bold md:text-2xl">
                Perk up your inbox.
              </p>
              <p className="text-sm md:text-base">
                Become a subscriber and enjoy 10% off your first order plus
                access to the hottest coffee beans while they’re still cooling.
              </p>
              <div className="relative">
                <Input
                  className="h-12 rounded-full pl-5 pr-16 placeholder:font-medium placeholder:text-main md:h-14"
                  placeholder="Enter your email address."
                  aria-label="Email address"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-main bg-second text-black transition-transform hover:translate-x-0.5"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <Separator className="my-12 bg-main md:my-20" />

          {/* Bottom: nav + payments */}
          <div className="flex flex-col-reverse items-stretch justify-between gap-10 md:flex-row md:items-start md:gap-0">
            {/* Left: navigation columns */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-10 tracking-wide text-main sm:grid-cols-3 md:grid-cols-4 md:gap-14">
              <div>
                <p className="mb-4 font-bold">Shop.</p>
                <ul className="space-y-3 text-xs uppercase tracking-widest">
                  <li>Beans.</li>
                  <li>Decaf.</li>
                  <li>Equipment.</li>
                  <li>Merch.</li>
                  <li>Bundles.</li>
                  <li>Gifts.</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 font-bold">Locations.</p>
                <ul className="space-y-3 text-xs uppercase tracking-widest">
                  <li>Visit us.</li>
                  <li>Our app.</li>
                  <li>Our food.</li>
                  <li>Events.</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 font-bold">About us.</p>
                <ul className="space-y-3 text-xs uppercase tracking-widest">
                  <li>Our journal.</li>
                  <li>Our story.</li>
                  <li>Careers.</li>
                  <li>Franchise.</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 font-bold">Enquiries.</p>
                <ul className="space-y-3 text-xs uppercase tracking-widest">
                  <li>FAQs.</li>
                  <li>Shipping.</li>
                  <li>Returns.</li>
                  <li>Contact.</li>
                </ul>
              </div>
            </div>

            {/* Right: payment methods */}
            <div className="flex flex-col items-center gap-4 md:items-end">
              <p className="text-sm font-bold text-main">Payment Methods.</p>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <img
                  src="/MasterCard.webp"
                  alt="MasterCard"
                  className="h-8 w-auto md:h-10"
                />
                <img
                  src="/visa.webp"
                  alt="VISA"
                  className="h-8 w-auto md:h-10"
                />
                <img
                  src="/american_express.webp"
                  alt="American Express"
                  className="h-8 w-auto md:h-10"
                />
                <img
                  src="/paypal.webp"
                  alt="PayPal"
                  className="h-8 w-auto md:h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
