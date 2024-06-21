import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { analytics } from "../Data/dummy";
import { onephone } from "../Images";
import "../Styles/analytics.scss";

const Analytics = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("vissible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    vissible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  const item1 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const item2 = {
    vissible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stifness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__analytics">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="analytics__container"
      >
        <motion.div variants={item1} className="left__analytics">
          <div className="left__text">
            <h1>Welcome to Dev Spark</h1>
            <p>
              At Dev Spark, we specialize in crafting premium web solutions that not only meet but exceed expectations. With a relentless focus on innovation and quality, we transform ideas into powerful digital experiences. Whether you're a startup, SME, or enterprise, our dedicated team is committed to turning your vision into reality.
            </p>
          </div>
          <div className="left__analytics__container">
            <div className="analytic__container">
              <div className="analytics__icon">4+</div>
              <p>Years of Experience</p>
            </div>
            <div className="analytic__container">
              <div className="analytics__icon">25+</div>
              <p>Projects Completed</p>
            </div>
            <div className="analytic__container">
              <div className="analytics__icon">98%</div>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__analytics">
          <img src={onephone} alt="" draggable={false} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Analytics;
