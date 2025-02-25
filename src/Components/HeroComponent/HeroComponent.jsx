import React, { useState } from "react";
import "./HeroComponent.css";
import icon from "./../../assets/imgs/Icons/Icon-8.png";
// import img1 from "./../../assets/imgs/Hero/child1.jpg";
import { tabData } from "./../../Data/HeroCompData";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function HeroComponent() {
  const [activeTab, setActiveTab] = useState("All");

  const [counterOn, setCounterOn] = useState(false);

  const { num, desc, title, descTab, backgroundClass } = tabData[activeTab];

  return (
    <div className="AM-hero-comp p-162">
      <div className={`AM-img-hero border2 ${backgroundClass}`}>
        <button className="border1 centring text-btn-18">
          Shop Now <img src={icon} alt="icon"></img>
        </button>
      </div>
      <div className="AM-bottom-side-hero border2">
        <div className="AM-left-side">
          {/*tabs list*/}
          <ul className="AM-tabs">
            {Object.keys(tabData).map((tab) => (
              <li
                key={tab}
                className={`text-18 border1 ${
                  activeTab === tab ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
          <h2 className="title text-48">{title}</h2>
          <p className="desc-tab">{descTab}</p>
        </div>

        {/*enable effects on counters when scrolling*/}
        <ScrollTrigger
          className="AM-right-side"
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            <div className="row1">
              <div className="rate border2">
                <span className="num">
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={num[0]}
                      duration={3}
                      delay={0.3}
                      separator="," //add commas to large numbers
                    />
                  ) : (
                    num[0]
                  )}
                  +
                </span>
                <p className="desc text-18">{desc[0]}</p>
              </div>
              <div className="rate border2">
                <span className="num">
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={num[1]}
                      duration={3}
                      delay={0.3}
                      separator=","
                    />
                  ) : (
                    num[1]
                  )}
                  +
                </span>
                <p className="desc text-18">{desc[1]}</p>
              </div>
            </div>
            <div className="row2">
              <div className="rate border2">
                <span className="num">
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={num[2]}
                      duration={3}
                      delay={0.3}
                      suffix="%" //add percentage sign after completion
                    />
                  ) : (
                    num[2]
                  )}
                </span>
                <p className="desc text-18">{desc[2]}</p>
              </div>
              <div className="rate border2">
                <span className="num">
                  {counterOn ? (
                    <CountUp
                      start={0}
                      end={num[3]}
                      duration={3}
                      delay={0.3}
                      suffix="%"
                    />
                  ) : (
                    num[3]
                  )}
                </span>
                <p className="desc text-18">{desc[3]}</p>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}
