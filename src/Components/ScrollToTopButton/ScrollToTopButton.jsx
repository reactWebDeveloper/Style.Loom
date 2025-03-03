import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "./ScrollToTopButton.css";


export default function ScrollToTopButton() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {backToTop && (
        <button className="scrolButton centring" onClick={scrollUp}>
          <FaArrowUp />
        </button>
      )}
    </section>
  );
}
