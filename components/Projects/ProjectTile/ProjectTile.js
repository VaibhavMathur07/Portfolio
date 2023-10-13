import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";

const ProjectTile = ({ project, classes, isDesktop }) => {
  const { image, gradient, url } = project;
  const projectCard = useRef(null);
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  // const options = {
  //   max: 10,
  //   speed: 400,
  //   glare: true,
  //   "max-glare": 0.2,
  //   gyroscope: false,
  // };

  // useEffect(() => {
  //   VanillaTilt.init(projectCard.current, options);
  // }, [projectCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl ${additionalClasses}`}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-[24rem] w-[30rem] bg-white ${styles.ProjectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `url(${image})`, // Set dynamic background image
          backgroundSize: "cover",
        }}
      >
        {/* Background overlays */}
        <div
          className="absolute top-0 left-0 w-full h-16"
          style={{
            // background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-full h-24"
          style={{
            // background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        ></div>

        {/* Project title */}
        <h1
          className="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>

        {/* Tech icons (empty for now) */}
        <div
          className={`
            ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
          `}
        >
          {/* You can add tech icons here if needed */}
        </div>

        {/* Project description */}
        <h2
          className="text-lg z-10 tracking-wide font-medium text-white transform-gpu"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {/* {description} */}
        </h2>
      </div>
    </a>
  );
};

export default ProjectTile;
