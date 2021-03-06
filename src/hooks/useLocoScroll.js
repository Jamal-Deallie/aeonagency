import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.css";

export default function useLocoScroll(start) {
  useEffect(() => {
      if (!start) return;
      
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".smooth-scroll"),
      smooth: true,
      multiplier: 1,
      class:"is-revealed"
    });
  }, [start]);
}
 