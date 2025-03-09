import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Discography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const albums = [
    {
      title: "Blink Twice",
      year: "2025",
      songCount: "1 Songs",
      type: "Album",
      coverImage: "/Discography/blink-twice.webp",
    },
    {
      title: "Cherry On Top",
      year: "2024",
      songCount: "1 Song",
      type: "Album",
      coverImage: "/Discography/cherry-on-top.webp",
    },
    {
      title: "Talaarawan",
      year: "2024",
      songCount: "6 Songs",
      type: "Album",
      coverImage: "/Discography/talaarawan.webp",
    },
    {
      title: "Feel Good",
      year: "2022",
      songCount: "7 Songs",
      type: "Album",
      coverImage: "/Discography/feelgood.webp",
    },
    {
      title: "Born To Win",
      year: "2021",
      songCount: "12 Songs",
      type: "Album",
      coverImage: "/Discography/borntowin.webp",
    },
    {
      title: "Pantropiko",
      year: "2023",
      songCount: "1 Songs",
      type: "Album",
      coverImage: "/Discography/pantropiko.webp",
    },
  ];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + albums.length) % albums.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % albums.length);
  };

  const getVisibleAlbums = () => {
    const items = [];
    const numVisible = 5; // Number of visible items including the center one

    for (
      let i = -Math.floor(numVisible / 2);
      i <= Math.floor(numVisible / 2);
      i++
    ) {
      const index = (currentIndex + i + albums.length) % albums.length;
      items.push({ ...albums[index], position: i });
    }

    return items;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center py-8 bg-gradient-to-b from-blue-50 to-white min-h-screen w-full"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-serif mb-8 italic relative text-gray-800"
      >
        <span className="relative">
          Discography
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </span>
      </motion.h1>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation arrows with updated styling */}
        <motion.button
          whileHover={{ scale: 1.2, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 rounded-full p-3 shadow-lg"
        >
          <span className="text-4xl text-blue-500 hover:text-blue-600 transition-colors">
            ‹
          </span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 rounded-full p-3 shadow-lg"
        >
          <span className="text-4xl text-blue-500 hover:text-blue-600 transition-colors">
            ›
          </span>
        </motion.button>

        {/* Updated album display container */}
        <div className="flex justify-center items-center h-[400px] relative overflow-hidden mx-auto">
          {getVisibleAlbums().map((item, index) => {
            const { position } = item;
            return (
              <motion.div
                key={`${item.title}-${index}`}
                className="absolute left-1/2 transform"
                style={{
                  zIndex:
                    position === 0 ? 5 : Math.max(5 - Math.abs(position), 0),
                }}
                animate={{
                  x: `calc(${position * 200}px - 50%)`,
                  scale:
                    position === 0
                      ? 1
                      : Math.max(0.8 - Math.abs(position) * 0.1, 0.6),
                  rotateY: position * 3,
                  opacity:
                    position === 0
                      ? 1
                      : Math.max(0.7 - Math.abs(position) * 0.2, 0.3),
                  filter: position === 0 ? "none" : "blur(2px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                  type: "tween",
                }}
                whileHover={{
                  scale: position === 0 ? 1.05 : undefined,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <motion.img
                  src={item.coverImage}
                  alt={item.title}
                  className="w-[300px] h-[300px] object-cover rounded-xl shadow-2xl"
                  layoutId={`album-${index}`}
                  transition={{
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  style={{
                    perspective: 1000,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Updated album info styling */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mt-4"
          >
            <motion.h2
              className="text-2xl font-bold mb-2 text-gray-800"
              layoutId={`title-${currentIndex}`}
            >
              {albums[currentIndex].title}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {albums[currentIndex].type} • {albums[currentIndex].year} •{" "}
              {albums[currentIndex].songCount}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Updated More Music button */}
        <div className="text-center mt-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#7DD1D8] to-[#6BC1C8] text-white px-8 py-2 rounded-full text-base font-semibold transition-all hover:opacity-90 shadow-lg"
          >
            More Music
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Discography;
