import { ArrowRight } from "lucide-react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="rounded-t-2xl bg-black">
        <div className="container mx-auto px-20 py-14">
          <div className="flex items-center gap-28 text-primary">
            <div className="max-w-[688px]">
              <p className="font-custom text-6xl font-bold">
                Proudly originating in a former 19th century watch house on
                London's famous Bermondsey Street.
              </p>
            </div>
            <div className="w-full space-y-4">
              <p className="font-custom text-2xl font-bold">
                Perk up your inbox.
              </p>
              <p>
                Become a subscriber and enjoy 10% off your first order plus
                access to the hottest coffee beans while they’re still cooling.
              </p>
              <div className="relative">
                <Input
                  className="h-14 rounded-full pl-5 pr-16 placeholder:font-medium placeholder:text-primary"
                  placeholder="Enter your email address."
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-secondary text-black transition-transform hover:translate-x-0.5"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>

          <Separator className="my-20 bg-primary" />

          <div>
            <div className="flex items-start justify-between">
              {/* Left: navigation columns */}
              <div className="grid grid-cols-4 gap-14 tracking-wide text-primary">
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
              <div className="flex flex-col items-end gap-4">
                <p className="text-sm font-bold text-primary">
                  Payment Methods.
                </p>
                <div className="flex items-center gap-6">
                  <img
                    src="/MasterCard.webp"
                    alt="MasterCard"
                    className="h-10 w-auto"
                  />
                  <img src="/visa.webp" alt="VISA" className="h-10 w-auto" />
                  <img
                    src="/american_express.webp"
                    alt="American Express"
                    className="h-10 w-auto"
                  />
                  <img
                    src="/paypal.webp"
                    alt="PayPal"
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
