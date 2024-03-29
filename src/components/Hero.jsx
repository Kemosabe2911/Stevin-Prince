import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { logo, portfolioimg } from "../assets"
import { social } from "../constants"

const SocialIcon = ({name, link, icon}) => {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="white-gradient w-10 h-10 rounded-full flex justify-center 
      items-center cursor-pointer mt-10"
    >
      <img
        src={icon}
        alt={name}
        className="object-contain"
      />
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="mt-10">
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm &nbsp;
          <span className="text-[#915eff]">Stevin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Web Developer who always <br className="sm:block hidden" /> 
            welcome new challenges
          </p>
          <div className="w-[200px] m-4 flex justify-evenly">
            {social.map((data, index) => (
              <SocialIcon 
                key={`social-${index}`}
                {...data}
              />
            ))}
          </div>
        </div>

        <div className="w-[350px] h-[400px] flex flex-col justify-end items-end mt-5 m-auto lg:block hidden">
          <img
            src={portfolioimg} 
            alt="logo" 
            className="w-full h-full rounded-full object-cover border-4 border-solid border-white"
          />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2">
            <motion.dev
              animate = {{
                y: [0, 24, 0]
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className= "w-3 h-3 rounded-full bg-secondary mg-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero