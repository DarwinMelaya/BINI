import { motion } from "framer-motion";

const Shop = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12 px-4 sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={fadeInUp}
        >
          <motion.h1
            className="text-5xl mb-8 font-serif text-[#94b0b3] relative"
            variants={fadeInUp}
          >
            <span className="relative">
              Shop
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-[#8CD4D9]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="mb-4 text-xl font-medium text-gray-700"
            variants={fadeInUp}
          >
            Step into the BINIverse! ⭐ 🎁
          </motion.p>

          <motion.p
            className="max-w-2xl mb-8 text-gray-600 leading-relaxed"
            variants={fadeInUp}
          >
            We're bringing the ultimate BINIverse vibes with our collection!
            Grab your own BINI Enamel Pins, BINI Magnets, BINI Group & Solo
            Posters, BINIverse Mini Album, and for the international fans – the
            exclusive BLINK TWICE Bomber Jacket!
          </motion.p>

          <motion.p
            className="mb-12 text-lg text-[#8CD4D9] font-medium"
            variants={fadeInUp}
          >
            All orders will be shipped straight to your doorstep!! 📦✨
          </motion.p>

          <motion.div className="relative mb-12" variants={fadeInUp}>
            <motion.img
              src="https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F03%2F05072623%2FWITH-EMPHASIS-FEB-27-COLLECTION-1.png&w=1920&q=75"
              alt="BINIverse Official Merchandise featuring Enamel Pins, Magnets, Posters, Mini Album, and Bomber Jacket"
              className="relative rounded-lg shadow-2xl max-w-3xl w-full"
            />
          </motion.div>

          <motion.a
            href="https://shop.abs-cbn.com/collections/bini"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block group"
            variants={fadeInUp}
          >
            <motion.button
              className="bg-[#8CD4D9] text-white px-12 py-3 rounded-full text-lg font-medium
                shadow-lg hover:shadow-xl hover:bg-[#7BC0C5] transform transition-all duration-300
                relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
              <span className="ml-2">→</span>
            </motion.button>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-[#8CD4D9] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Shop;
