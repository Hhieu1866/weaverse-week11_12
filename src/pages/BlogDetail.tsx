import { useParams } from "react-router-dom";
import FancyButton from "@/components/ui/FancyButton";
import { Separator } from "@/components/ui/separator";
import { findBlogPost, BLOG_TOPICS } from "@/data/blog";
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
            {BLOG_TOPICS.map((topic) => (
              <p
                key={topic}
                className="cursor-pointer text-xs uppercase tracking-widest underline underline-offset-4"
              >
                {topic}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
