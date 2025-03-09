import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import About from "../components/About";
import Announcements from "../components/Announcements";
import Discography from "../components/Discography";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Home from "../components/Home";
import Layout from "../components/layout/Layout";
import Shop from "../components/Shop";
import Videos from "../components/Videos";
import Subscribe from "../components/Subscribe";

const Petal = ({ delay }) => (
  <motion.div
    className="absolute w-4 h-4 text-pink-300"
    initial={{
      scale: 0,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }}
    animate={{
      scale: [0, 1, 0.5, 0],
      x: [window.innerWidth / 2, Math.random() * window.innerWidth],
      y: [window.innerHeight / 2, Math.random() * window.innerHeight + 500],
      rotate: [0, 360 + Math.random() * 360],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    🌸
  </motion.div>
);

const Butterfly = ({ delay }) => (
  <motion.div
    className="absolute text-2xl"
    initial={{
      scale: 0,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }}
    animate={{
      scale: [0, 1, 1, 0],
      x: [
        window.innerWidth / 2,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
        Math.random() * window.innerWidth,
      ],
      y: [
        window.innerHeight / 2,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      rotate: [0, 45, -45, 90, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    🦋
  </motion.div>
);

const Sparkle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      rotate: 360,
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Extended to 4 seconds to show full animation
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-900 overflow-hidden relative"
      >
        {/* Background gradient circles */}
        <motion.div
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.2, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-20" />
        </motion.div>

        {/* Petals */}
        {[...Array(12)].map((_, i) => (
          <Petal key={`petal-${i}`} delay={i * 0.2} />
        ))}

        {/* Butterflies */}
        {[...Array(8)].map((_, i) => (
          <Butterfly key={`butterfly-${i}`} delay={i * 0.3} />
        ))}

        {/* Sparkles */}
        {[...Array(30)].map((_, i) => (
          <Sparkle
            key={`sparkle-${i}`}
            delay={i * 0.1}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Logo section with creator credit */}
        <motion.div className="relative flex flex-col items-center gap-8">
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Multiple glow layers */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`glow-${i}`}
                className="absolute inset-0 blur-xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [0.8 + i * 0.1, 1 + i * 0.1, 0.8 + i * 0.1],
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                <img
                  src="src/assets/bini-logo.webp"
                  alt=""
                  className={`w-32 h-32 opacity-${30 - i * 10}`}
                />
              </motion.div>
            ))}

            {/* Main logo */}
            <motion.img
              src="src/assets/bini-logo.webp"
              alt="Logo"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="w-32 h-32 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            />
          </motion.div>

          {/* Creator Credit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center"
          >
            <motion.p
              className="text-white/80 text-sm font-light tracking-widest"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Created by
            </motion.p>
            <motion.h2
              className="text-xl font-semibold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 text-transparent bg-clip-text"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% auto" }}
            >
              Darwin Melaya
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <Layout>
      {[
        { Component: Home, id: "home" },
        { Component: About, id: "profile" },
        { Component: Discography, id: "music" },
        { Component: Videos, id: "videos" },
        { Component: Gallery, id: "gallery" },
        { Component: Shop, id: "shop" },
        { Component: Announcements, id: "articles" },
        { Component: Events, id: "events" },
        { Component: Subscribe, id: "subscribe" },
      ].map(({ Component, id }, index) => (
        <motion.div
          key={id}
          id={id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Component />
        </motion.div>
      ))}
    </Layout>
  );
};

export default Main;
