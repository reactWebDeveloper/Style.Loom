import Design from "./../../assets/imgs/Testimonials/Design.png";
import "./TestimonialCard.css";
import { FaStar } from "react-icons/fa6";
import { RiTwitterFill } from "react-icons/ri";

export default function TestimonialCard({
  person,
  personName,
  personCity,
  description,
  border,
}) {
  return (
    <section className={` ${border} testimonialCard`}>
      <div className="forPerson">
        <div className="left centring">
          <img src={person} />
          <div className="personData centring">
            <span className="name "> {personName}</span>
            <span className="city">{personCity}</span>
          </div>
        </div>

        {/* how i can make it svg ? */}
        <RiTwitterFill className="icon" />
      </div>
      <div className="forStars">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
      </div>
      <p className="text-18">{description}</p>
      <img src={Design} className="designe" />
    </section>
  );
}
