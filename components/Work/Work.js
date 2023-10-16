import { useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fade } from "react-reveal";
import { Howl } from "howler";
import Button from "../Button/Button";
import { MENULINKS, WORK } from "../../constants";


const Work = ({ clientWidth }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reveal, setReveal] = useState(0);
  const targetSection = useRef(null);
  const inputRef = useRef(null);
  const heightRef = useRef(null);

  const checkedSound = new Howl({
    src: ["/sounds/pop-down.mp3"],
    volume: 0.7,
  });

  const getHeight = (position) => heightRef.current + 53 * position;

  const handleChange = (position) => {
    const height = getHeight(position);

    setTimeout(() => {
      checkedSound.play();
    }, 1500);

    setTimeout(() => {
      inputRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 3000);
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".work-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  useEffect(() => {
    if (inputRef.current) {
      const handlePosition = () => {
        const { top } = inputRef.current.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        const clientTop = document.documentElement.clientTop;
        const output = Math.floor((top + scrollTop - clientTop) / 100) + 60;
        heightRef.current = output;
      };

      handlePosition();
      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);

      return () => {
        window.removeEventListener("resize", handlePosition);
        window.removeEventListener("scroll", handlePosition);
      };
    }
  }, []);

  return (
    <section
      className="w-full relative select-none xs:mt-40 sm:mt-72 mb-20"
      id={MENULINKS[3].ref}
      ref={targetSection}
    >
        {/* <Image
          src="/left-pattern.svg"
          className="absolute top-0 right-0 w-1/12 max-w-xs md:block"
          alt=""
          layout="responsive"
          height={100}
          width={320}
        
        /> */}
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              Resume
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              My Resume
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-3">
              Learn about my experience, education, and other details by reviewing my resume.
            </h2>
          </div>
        </div>

        {clientWidth > 767 ? (
          <>
            {/* Download Resume Button */}
            <div className="flex justify-center">
              <Fade spy={reveal} duration={1} delay={0.5}>
                <Button
                  classes={`text-lg mt-6 primary__button__active`}
                  url={"https://drive.google.com/file/d/1OWVbDSKCtPBywEVd2ChyjzTRMrIgH7ED/view?usp=sharing"}  // Replace with your actual resume URL
                  type="primary"
                  onClick={() => {
                    const downloadLink = document.createElement('a');
                    downloadLink.href = 'https://drive.google.com/file/d/1OWVbDSKCtPBywEVd2ChyjzTRMrIgH7ED/view?usp=sharing';  // Replace with your actual resume URL
                    downloadLink.download = 'VaibhavMathurResume.pdf';  // Replace with your desired filename
                    downloadLink.click();
                    // Handle download resume logic
                  }}
                >
                  Download Resume
                </Button>
              </Fade>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <div className="flex seq">
                <div className="py-5">
                  {WORK.map((job, index) => {
                    const { company } = job;
                    return (
                      <div key={company}>
                        <Button
                          key={company}
                          classes={`text-lg mb-4 ${index === activeIndex && "primary__button__active"}`}
                          href={`#${company.toLowerCase()}`}
                          type="primary"
                          onClick={() => {
                            setActiveIndex(index);
                            setReveal((prev) => prev + 1);
                          }}
                        >
                          {company}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Work;