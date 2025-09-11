const feedbacks = [
  {
    id: 1,
    image: "/kdfjgrhg.webp",
    alt: "kdfjgrhg",
    content: "Best Independent Coffee Shop - Europe",
  },
  {
    id: 2,
    image: "/wb.webp",
    alt: "wb",
    content:
      "WatchHouse’s well-crafted coffee might just tip into the bucket of essentialism.",
  },
  {
    id: 3,
    image: "/66.webp",
    alt: "66",
    content:
      "WatchHouse have placed a focus on sourcing the best quality coffee, as fairly and sustainably as possible.",
  },
  {
    id: 4,
    image: "/vogue_test.webp",
    alt: "vogue_test",
    content: "The food at every one of its locations is excellent.",
  },
];

const Feedbacks = () => {
  return (
    <section className="w-full overflow-hidden bg-secondary py-14">
      <div className="animate-scroll flex">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="flex flex-shrink-0 items-center gap-6 px-10"
          >
            <div className="w-36">
              <img src={feedback.image} alt={feedback.alt} />
            </div>
            <div className="max-w-80">
              <p>{`"${feedback.content}"`}</p>
            </div>
          </div>
        ))}
        {feedbacks.map((feedback) => (
          <div
            key={`${feedback.id}-duplicate`}
            className="flex flex-shrink-0 items-center gap-6 px-10"
          >
            <div className="w-36">
              <img src={feedback.image} alt={feedback.alt} />
            </div>
            <div className="max-w-80">
              <p>{`"${feedback.content}"`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
