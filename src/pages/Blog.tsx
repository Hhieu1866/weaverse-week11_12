import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOG_POSTS, BLOG_TOPICS } from "@/data/blog";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <main className="bg-main">
      <div className="container mx-auto flex flex-col px-20 py-8">
        <section>
          <div className="flex items-center justify-between text-xs tracking-widest">
            <p>SHOP</p>
            <p>ELOWEN</p>
          </div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="font-custom text-9xl font-bold"
          >
            Journal.
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-6 font-medium"
          >
            Our latest news, coffee musings and sourcing stories.
          </motion.p>
          <div className="mt-8 flex items-center gap-5">
            <h3 className="font-medium">Topics:</h3>
            {BLOG_TOPICS.map((topic) => (
              <p
                key={topic}
                className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4"
              >
                {topic}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16 flex gap-6">
          <Link
            to={`/blog/${BLOG_POSTS[0].id}`}
            className="relative w-full flex-1 overflow-hidden rounded-2xl"
          >
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              src={BLOG_POSTS[0].image}
              alt={BLOG_POSTS[0].alt}
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="px-32 text-center font-custom text-6xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {BLOG_POSTS[0].title}
              </p>
            </div>
          </Link>
          <div className="flex-1">
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col justify-between">
                <div className="w-full">
                  <div className="space-y-1">
                    <Separator className="bg-black" />
                    <p className="font-bold">{BLOG_POSTS[1].category}</p>
                  </div>
                </div>
                <div>
                  <Separator className="bg-gray-400" />
                  <div className="space-y-4">
                    <p className="font-custom text-xl font-bold">
                      {BLOG_POSTS[1].title}
                    </p>
                    <p>{BLOG_POSTS[1].excerpt}</p>
                    <Link
                      to={`/blog/${BLOG_POSTS[1].id}`}
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                    >
                      Read more.
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <Link to={`/blog/${BLOG_POSTS[1].id}`}>
                  <motion.img
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    src={BLOG_POSTS[1].image}
                    alt={BLOG_POSTS[1].alt}
                    className="rounded-2xl"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="flex-1">
                <Link to={`/blog/${BLOG_POSTS[2].id}`}>
                  <motion.img
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    src={BLOG_POSTS[2].image}
                    alt={BLOG_POSTS[2].alt}
                    className="rounded-2xl"
                  />
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="w-full">
                  <div className="space-y-1">
                    <Separator className="bg-black" />
                    <p className="font-bold">{BLOG_POSTS[2].category}</p>
                  </div>
                </div>
                <div>
                  <Separator className="bg-gray-400" />
                  <div className="space-y-4">
                    <p className="font-custom text-xl font-bold">
                      {BLOG_POSTS[2].title}
                    </p>
                    <p>{BLOG_POSTS[2].excerpt}</p>
                    <Link
                      to={`/blog/${BLOG_POSTS[2].id}`}
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                    >
                      Read more.
                    </Link>
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
              to the hottest coffee beans while they're still cooling.
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
                    <p className="font-bold">{BLOG_POSTS[3].category}</p>
                  </div>
                </div>
                <div>
                  <Separator className="bg-gray-400" />
                  <div className="space-y-4">
                    <p className="font-custom text-xl font-bold">
                      {BLOG_POSTS[3].title}
                    </p>
                    <p>{BLOG_POSTS[3].excerpt}</p>
                    <Link
                      to={`/blog/${BLOG_POSTS[3].id}`}
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                    >
                      Read more.
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <Link to={`/blog/${BLOG_POSTS[3].id}`}>
                  <motion.img
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    src={BLOG_POSTS[3].image}
                    alt={BLOG_POSTS[3].alt}
                    className="rounded-2xl"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="flex-1">
                <Link to={`/blog/${BLOG_POSTS[4].id}`}>
                  <motion.img
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    src={BLOG_POSTS[4].image}
                    alt={BLOG_POSTS[4].alt}
                    className="rounded-2xl"
                  />
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="w-full">
                  <div className="space-y-1">
                    <Separator className="bg-black" />
                    <p className="font-bold">{BLOG_POSTS[4].category}</p>
                  </div>
                </div>
                <div>
                  <Separator className="bg-gray-400" />
                  <div className="space-y-4">
                    <p className="font-custom text-xl font-bold">
                      {BLOG_POSTS[4].title}
                    </p>
                    <p>{BLOG_POSTS[4].excerpt}</p>
                    <Link
                      to={`/blog/${BLOG_POSTS[4].id}`}
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                    >
                      Read more.
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={`/blog/${BLOG_POSTS[5].id}`}
            className="relative w-full flex-1 overflow-hidden rounded-2xl"
          >
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              src={BLOG_POSTS[5].image}
              alt={BLOG_POSTS[5].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="px-24 text-center font-custom text-6xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {BLOG_POSTS[5].title}
              </p>
            </div>
          </Link>
        </section>

        <section className="mb-24 mt-6 flex gap-6">
          <Link
            to={`/blog/${BLOG_POSTS[7].id}`}
            className="relative w-full flex-1 overflow-hidden rounded-2xl"
          >
            <motion.img
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              src={BLOG_POSTS[7].image}
              alt={BLOG_POSTS[7].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center font-custom text-6xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {BLOG_POSTS[7].title}
              </p>
            </div>
          </Link>
          <div className="flex-1">
            <div className="flex gap-6">
              <div className="flex flex-1 flex-col justify-between">
                <div className="w-full">
                  <div className="space-y-1">
                    <Separator className="bg-black" />
                    <p className="font-bold">{BLOG_POSTS[6].category}</p>
                  </div>
                </div>
                <div>
                  <Separator className="bg-gray-400" />
                  <div className="space-y-4">
                    <p className="font-custom text-xl font-bold">
                      {BLOG_POSTS[6].title}
                    </p>
                    <p>{BLOG_POSTS[6].excerpt}</p>
                    <Link
                      to={`/blog/${BLOG_POSTS[6].id}`}
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                    >
                      Read more.
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <Link to={`/blog/${BLOG_POSTS[6].id}`}>
                  <motion.img
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    src={BLOG_POSTS[6].image}
                    alt={BLOG_POSTS[6].alt}
                    className="rounded-2xl"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-6 flex gap-6">
              <div className="flex-1">
                <Link to={`/blog/${BLOG_POSTS[8].id}`}>
                  <motion.img
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    src={BLOG_POSTS[8].image}
                    alt={BLOG_POSTS[8].alt}
                    className="rounded-2xl"
                  />
                </Link>
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="w-full">
                  <div className="space-y-1">
                    <Separator className="bg-black" />
                    <p className="font-bold">{BLOG_POSTS[8].category}</p>
                  </div>
                </div>
                <div>
                  <Separator className="bg-gray-400" />
                  <div className="space-y-4">
                    <p className="font-custom text-xl font-bold">
                      {BLOG_POSTS[8].title}
                    </p>
                    <p>{BLOG_POSTS[8].excerpt}</p>
                    <Link
                      to={`/blog/${BLOG_POSTS[8].id}`}
                      className="after:ease-[cubic-bezier(0.65_0.05_0.36_1)] relative font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 hover:after:origin-bottom hover:after:scale-x-100"
                    >
                      Read more.
                    </Link>
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
