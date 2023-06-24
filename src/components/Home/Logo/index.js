import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import FlowerLogo from "../../../assets/images/FlowerLogo.svg";
import "./index.scss";

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" src={FlowerLogo} alt="Flower"></img>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="500"
        height="500"
        viewBox="0 0 375 374.999991"
        version="1.0"
      >
        <g
          className="svg-container"
          fill="none"
          transform="translate(0 457) scale(.1 -.1)"
        >
          <path
            d="M 188.832031 115.523438 C 198.40625 116.527344 208.078125 116.988281 
217.515625 118.722656 C 223.507812 119.824219 229.859375 121.78125 234.808594 125.167969 
C 248.757812 134.710938 260.433594 146.785156 269.082031 161.414062 C 277.289062 175.296875 277.796875 
190.507812 274.636719 205.789062 C 269.761719 229.355469 260.894531 251.109375 241.101562 266.289062 
C 222.597656 280.476562 201.695312 285.238281 178.722656 279.546875 C 172.453125 277.992188 166.085938 
276.820312 159.738281 275.617188 C 149.277344 273.640625 141.464844 267.011719 132.980469 261.261719 C 
122.082031 253.878906 114.195312 244.121094 107.601562 233.089844 C 95.484375 212.804688 93.210938 191.574219 
102.769531 169.714844 C 105.226562 164.101562 108.757812 158.78125 112.617188 153.988281 C 132.144531 129.730469 
156.429688 114.722656 188.832031 115.523438 Z M 188.832031 115.523438 "
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
