import React, { useEffect } from "react";
import { feature } from "../Images";
import { features } from "../Data/dummy";
import { TiTick } from "react-icons/ti";
import "../Styles/feature.scss";
import Control from "./Control";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Feature = () => {
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
    <div className="app__feature">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="feature__container"
      >
        <motion.div variants={item1} className="left__feature">
          <img src={feature} alt="" draggable={false} />
        </motion.div>
        <motion.div variants={item2} className="right__feature">
          <div className="right__text">
            <h1>
            Empowering Your Business
            </h1>
            <p>
            At Dev Spark, we deliver comprehensive web solutions designed to elevate your business in the digital landscape. Our expert services ensure your website not only looks great but performs exceptionally.
            </p>
          </div>
          <div className="feature__content">
              <div className="feature">
                <TiTick />
                <div className="feature__text">
                  <p>Seamless Design</p>
                  <span>
                  Responsive designs that look amazing on every device.
                  </span>
                </div>
              </div>
              <div className="feature">
                <TiTick />
                <div className="feature__text">
                  <p>Full-Service Development</p>
                  <span>
                  Full-service web development, taking care of every detail.
                  </span>
                </div>
              </div>
              <div className="feature">
                <TiTick />
                <div className="feature__text">
                  <p>Precision Work</p>
                  <span>
                  Tailored solutions delivered with transparency and precision.
                  </span>
                </div>
              </div>
              <div className="feature">
                <TiTick />
                <div className="feature__text">
                  <p>Boost Performance</p>
                  <span>
                  Optimize performance, enhance security, and integrate advanced features.
                  </span>
                </div>
              </div>
          </div>
        </motion.div>
      </motion.div>
      <Control />
    </div>
  );
};

export default Feature;
