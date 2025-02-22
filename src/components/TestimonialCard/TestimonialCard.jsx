import icon from "./../../assets/imgs/Icons/Capa 2.svg";
import star from "./../../assets/imgs/Icons/Shape-3.png";
import Design from "./../../assets/imgs/Testimonials/Design.png";
import './TestimonialCard.css'


export default function TestimonialCard({ person, personName, personCity, description ,border }) {
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
        <img src={icon} className="icon" />
      </div>
      <div className="forStars">
        <img src={star} className="starIcon" />
        <img src={star} className="starIcon" />
        <img src={star} className="starIcon" />
        <img src={star} className="starIcon" />
        <img src={star} className="starIcon" />
      </div>
      <p className="text-18">{description}</p>
      <img src={Design} className="designe"/>
    </section>
  );
}
