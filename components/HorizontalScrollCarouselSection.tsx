import HorizontalScrollCarousel from "./ui/HorizontalScrollCarousel";

const HorizontalScrollCarouselSection = () => {
  return (
    <section id="trending" className="bg-neutral-800  text-white w-full ">
      <div className=" container flex justify-center items-center  w-full pt-20  px-5">
        <h2 className="mainHeadline uppercase leading-[50px] sm:leading-[120px] tracking-tighter">
          H<span className="font">ot</span> r<span className="font">i</span>g
          <span className="font">ht</span> n<span className="font">o</span>w
        </h2>
      </div>
      <HorizontalScrollCarousel />
    </section>
  );
};

export default HorizontalScrollCarouselSection;
