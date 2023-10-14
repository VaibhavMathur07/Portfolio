/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const targetSection = useRef(null);
  const customSkillNames = {
    "cpp": "Maven",
    "python": "Jira",
    "nodejs": "Tomcat",
    "webpack": "Postman",
    "moralis":"Swagger",
    "vite": "IntelliJ",
    "stripe": "Vs Code",
    "figma": "Eclipse",
    "mongodb": "Rest API",
    "tanstack-query": "Graph QL",
    "react": "Canva",
    "redux": "Design Pattern",
    "nextjs": "Photoshop",
    "tailwindcss": "Graphic Designing",
    "git" : "Git",
    "Html" : "Html",
    "Css" : "CSS",
    

    // Add more custom names as needed
  };

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });

    // Animation to reveal elements with class "seq"
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    // ScrollTrigger to trigger animation when ".skills-wrapper" is in view
    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: "center center",
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  return (
    <section
      className="w-full relative select-none mt-44"
      id={MENULINKS[1].ref}
      ref={targetSection}
    >
      <div className="section-container py-16 flex flex-col justify-center">
        {/* Right pattern image */}
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={2000}
          width={320}
        />

        <div className="flex flex-col skills-wrapper">
          {/* Skills heading */}
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">SKILLS</p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
            Building user experiences that stand out is my responsibility, accomplished through up-to-date backend architecture.
            </h2>
          </div>

          {/* Programming Languages */}
          <div className="mt-14 seq">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              PROGRAMMING LANGUAGES
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.languages.map((skill) => (
                <div key={skill} className="flex flex-col items-center">
                  <Image
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                  <p className="text-m mt-2">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture and Frameworks */}
          <div className="mt-14 seq">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              FRAMEWORKS AND ARCHITECTURES
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <div key={skill} className="flex flex-col items-center">
                  <Image
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                  <p className="text-m mt-2">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="mt-14 seq">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              PLATFORM
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.platform.map((skill) => (
                <div key={skill} className="flex flex-col items-center">
                  <Image
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                  />
                  <p className="text-m mt-2">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="mt-14 seq">
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
                DATABASES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu seq">
                {SKILLS.databases.map((skill) => (
                  <div key={skill} className="flex flex-col items-center">
                    <Image
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      width={50}
                      height={50}
                    />
                    <p className="text-m mt-2">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

          
            <div className="mt-14 seq">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">TOOLS AND IDE</h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.ToolsandIDE.map((skill) => (
                  <div key={skill} className="flex flex-col items-center">
                    <Image
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      width={50}
                      height={50}
                    />
                    <p className="text-m mt-2">{customSkillNames[skill] || skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* API Technology */}
            <div className="mt-14 seq">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">API TECHNOLOGY</h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.APITechnology.map((skill) => (
                  <div key={skill} className="flex flex-col items-center">
                    <Image
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      width={50}
                      height={50}
                    />
                     <p className="text-m mt-2">{customSkillNames[skill] || skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Web Development Technologies */}
            <div className="mt-14 seq">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">WEB DEVELOPMENT TECHNOLOGY</h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.WebDevelopmentTechnologies.map((skill) => (
                  <div key={skill} className="flex flex-col items-center">
                    <Image
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      width={50}
                      height={50}
                    />
                    <p className="text-m mt-2">{skill}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design and Graphics */}
            <div className="mt-14 seq">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">DESIGN AND GRAPHICS</h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.DesignandGraphics.map((skill) => (
                  <div key={skill} className="flex flex-col items-center">
                    <Image
                      src={`/skills/${skill}.svg`}
                      alt={skill}
                      width={50}
                      height={50}
                    />
                     <p className="text-m mt-2">{customSkillNames[skill] || skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
