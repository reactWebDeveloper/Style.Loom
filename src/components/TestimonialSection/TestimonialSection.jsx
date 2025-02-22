import { useState } from "react";
import "./TestimonialSection.css";
import TestimonialCard from "../testimonialCard/testimonialCard";
import img1 from "./../../assets/imgs/Testimonials/Image-1.png";
import img2 from "./../../assets/imgs/Testimonials/Image-2.png";
import img3 from "./../../assets/imgs/Testimonials/Image-3.png";
import img4 from "./../../assets/imgs/Testimonials/Image-4.png";
import img5 from "./../../assets/imgs/Testimonials/Image-5.png";
import img6 from "./../../assets/imgs/Testimonials/Image-6.png";
import arrow from "./../../assets/imgs/Icons/arrow.png";
import deecor from "./../../assets/imgs/Testimonials/Abstract Design.png";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function TestimonialSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewAll = () => {
    setIsExpanded(true);
  };

  const handleViewLess = () => {
    setIsExpanded(false);
  };

  return (
    <section className="p-162 TestimonialSection">
      <div className="forTitle">
        <TitleComponent
          desc={"At StyleLoom, our customers are the heartbeat of our brand."}
          title={"The StyleLoom Testimonial Collection."}
          fullImage={true}
          img={deecor}
        />
      </div>

      <div className="forcard centring">
        {/* visible testimonials */}
        <div className="nothidden">
          <TestimonialCard
            description={
              "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!"
            }
            person={img1}
            personCity={"New York, USA"}
            personName={"Sarah Thompson"}
            border={"border1"}
          />
        </div>
        <div className="nothidden">
          <TestimonialCard
            description={
              "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!"
            }
            person={img2}
            personCity={"Mumbai, India"}
            personName={"Rajesh Patel"}
            border={"border2"}
          />
        </div>
        <div className="nothidden">
          <TestimonialCard
            description={
              "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista."
            }
            person={img3}
            personCity={"London, UK"}
            personName={"Emily Walker"}
            border={"border3"}
          />
        </div>

        {/* invisible testimonials */}
        <div className={`hidden ${isExpanded ? "show" : ""}`}>
          <TestimonialCard
            description={
              "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!"
            }
            person={img4}
            personCity={"Barcelona, Spain"}
            personName={"Alejandro Martinez"}
            border={"border4"}
          />
        </div>
        <div className={`hidden ${isExpanded ? "show" : ""}`}>
          <TestimonialCard
            description={
              "Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings."
            }
            person={img5}
            personCity={"Delhi, India"}
            personName={"Priya Sharma"}
            border={"border5"}
          />
        </div>
        <div className={`hidden ${isExpanded ? "show" : ""}`}>
          <TestimonialCard
            description={
              "Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality."
            }
            person={img6}
            personCity={"Mexico City, Mexico"}
            personName={"Maria Rodriguez"}
            border={"border6"}
          />
        </div>

        {/* buttons */}
        {!isExpanded ? (
          <button className="toview" onClick={handleViewAll}>
            View All <img src={arrow} alt="Arrow" />
          </button>
        ) : (
          <button className="tohide" onClick={handleViewLess}>
            View Less
          </button>
        )}
      </div>
    </section>
  );
}
