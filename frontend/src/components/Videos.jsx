import { motion, AnimatePresence } from "framer-motion";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useState } from "react";

const Videos = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    {
      id: 1,
      title: "BINI 'Blink Twice' Official Music Video",
      embedId: "PlySXiQDGsM",
    },
    {
      id: 2,
      title: "Cherry On Top",
      embedId: "wufUX5P2Ds8",
    },
    {
      id: 3,
      title: "Pantropiko Performance Video",
      embedId: "Zx31bB2vMns",
    },
    {
      id: 4,
      title: "Salamin Salamin Official Music Video",
      embedId: "J1Ip2sC_lss",
    },
    {
      id: 5,
      title: "Karera Official Music Video",
      embedId: "QNV2DmBxChQ",
    },
    {
      id: 6,
      title: "Lagi Official Music Video",
      embedId: "KyndoXN4_ns",
    },
    {
      id: 7,
      title: "Na Na Na Official Music Video",
      embedId: "wJ6GCeSR4ss",
    },
    {
      id: 8,
      title: "I Feel Good Official Music Video",
      embedId: "UMogVGvhs7U",
    },
    {
      id: 9,
      title: "Pantropiko Dance Practice",
      embedId: "wyxmSOidPzA",
    },
    {
      id: 10,
      title: "Born To Win Official Music Video",
      embedId: "cUMH4XhQTGI",
    },
    {
      id: 11,
      title: "Strings Music Video",
      embedId: "OGBS-8IsPJ0",
    },
    {
      id: 12,
      title: "Golde Arrow Music Video",
      embedId: "beaF9FnJ1IA",
    },
  ];

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#F0F8FF] via-[#E6F3FF] to-white py-12 px-4"
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Enhanced Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl text-center font-serif text-gray-800 mb-12 relative"
        >
          <span className="relative inline-block">
            Featured Videos
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </span>
        </motion.h1>

        {/* Main Video Section */}
        <div className="relative mb-16">
          {/* Enhanced Navigation Arrows */}
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 z-30 
                     bg-white/90 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handlePrevious}
          >
            <IoChevronBackOutline size={24} className="text-gray-800" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 z-30 
                     bg-white/90 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={handleNext}
          >
            <IoChevronForwardOutline size={24} className="text-gray-800" />
          </motion.button>

          {/* Enhanced Video Container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideoIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videos[currentVideoIndex].embedId}`}
                title={videos[currentVideoIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Video Title */}
          <motion.div
            key={videos[currentVideoIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-6"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {videos[currentVideoIndex].title}
            </h2>
            <p className="text-gray-500 mt-2">
              Video {currentVideoIndex + 1} of {videos.length}
            </p>
          </motion.div>
        </div>

        {/* Video Thumbnails Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setCurrentVideoIndex(index)}
              className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-all duration-300
                        ${
                          currentVideoIndex === index
                            ? "ring-2 ring-pink-400"
                            : ""
                        }`}
            >
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${video.embedId}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-sm font-medium text-center p-2">
                    {video.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Videos;
