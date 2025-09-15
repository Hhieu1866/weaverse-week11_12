import { useParams } from "react-router-dom";
import FancyButton from "@/components/ui/FancyButton";
import { Separator } from "@/components/ui/separator";
import { findBlogPost } from "@/data/blog";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { id } = useParams();
  const post = findBlogPost(id || "");

  if (!post) {
    return (
      <main className="bg-main">
        <div className="container mx-auto px-20 py-8">
          <h1 className="font-custom text-6xl font-bold">Post not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-main">
      <section className="container mx-auto flex gap-10 px-20 py-8">
        <div className="flex w-1/2 flex-col justify-between">
          <div className="space-y-5">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-medium"
            >
              {post.category}
            </motion.p>
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-custom text-7xl font-bold"
            >
              {post.title}
            </motion.h1>
          </div>
          <div>
            <Separator className="h-[0.5px] bg-black" />
            <div className="mt-2 flex items-center justify-between">
              {post.date && <p>{post.date}</p>}
              {post.author && <h1>Written by {post.author} .</h1>}
            </div>
          </div>
        </div>

        <div className="relative w-1/2 flex-1 overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.alt}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {post.content && (
        <section className="flex flex-col justify-center px-[450px] py-20">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-custom text-6xl font-bold"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10"
          >
            {post.content}
          </motion.p>
        </section>
      )}

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

        {/* Content */}
        <div className="mt-10 flex flex-col gap-6 md:mt-16 md:flex-row">
          {/* Big left card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative w-full flex-1 overflow-hidden rounded-2xl"
          >
            <img
              src="/NomadBlog.webp"
              alt="NomadBlog"
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-center font-custom text-3xl font-bold text-second drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] md:text-6xl">
                WatchHouse x <br />
                NOMAD.
              </p>
            </div>
          </motion.div>

          {/* Right side cards */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-1 flex-col gap-6"
          >
            {/* First small card */}
            <div className="flex flex-col gap-6 md:flex-row">
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
                    <p className="font-custom text-lg font-bold md:text-xl">
                      Introducing: matcha.
                    </p>
                    <p className="text-sm md:text-base">
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
                  className="w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Second small card */}
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1">
                <img
                  src="/Colombian_Vista.webp"
                  alt="Colombian_Vista"
                  className="w-full rounded-2xl"
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
                    <p className="font-custom text-lg font-bold md:text-xl">
                      Origin: Colombia.
                    </p>
                    <p className="text-sm md:text-base">
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
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
