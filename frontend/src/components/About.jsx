import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: 1,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205452%2FBINI-GROUP-PHOTO.jpg&w=1080&q=75",
    alt: "BINI Group Photo",
  },
  {
    id: 2,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205606%2FBINI-AIAH.jpg&w=1080&q=75",
    alt: "AIAH",
  },
  {
    id: 3,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205720%2FBINI-COLET.jpg&w=1080&q=75",
    alt: "COLET",
  },
  {
    id: 4,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205737%2FBINI-GWEN.jpg&w=1080&q=75",
    alt: "GWEN",
  },
  {
    id: 5,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205825%2FBINI-MALOI.jpg&w=1080&q=75",
    alt: "MALOI",
  },
  {
    id: 6,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205843%2FBINI-JHOANNA.jpg&w=1080&q=75",
    alt: "JHOANNA",
  },
  {
    id: 7,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205920%2FBINI-MIKHA.jpg&w=1080&q=75",
    alt: "MIKHA",
  },
  {
    id: 8,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205940%2FBINI-SHEENA.jpg&w=1080&q=75",
    alt: "SHEENA",
  },
  {
    id: 9,
    url: "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F13205954%2FBINI-STACEY.jpg&w=1080&q=75",
    alt: "STACEY",
  },
];

const memberImages = {
  AIAH: "https://placehold.co/300x300?text=AIAH",
  COLET: "https://placehold.co/300x300?text=COLET",
  GWEN: "https://placehold.co/300x300?text=GWEN",
  MALOI: "https://placehold.co/300x300?text=MALOI",
  JHOANNA: "https://placehold.co/300x300?text=JHOANNA",
  MIKHA: "https://placehold.co/300x300?text=MIKHA",
  SHEENA: "https://placehold.co/300x300?text=SHEENA",
  STACEY: "https://placehold.co/300x300?text=STACEY",
};

const memberDetails = {
  AIAH: {
    fullName: "Maraiah Queen Arceta",
    birthDate: "January 27, 2001",
    imageUrl: memberImages.AIAH,
  },
  COLET: {
    fullName: "Ma. Nicolette Vergara",
    birthDate: "September 14, 2001",
    imageUrl: memberImages.COLET,
  },
  GWEN: {
    fullName: "Gweneth L. Apul",
    birthDate: "June 19, 2003",
    imageUrl: memberImages.GWEN,
  },
  MALOI: {
    fullName: "Mary Loi Yves Ricalde",
    birthDate: "May 27, 2002",
    imageUrl: memberImages.MALOI,
  },
  JHOANNA: {
    fullName: "Jhoanna Marie Robles",
    birthDate: "January 26, 2004",
    imageUrl: memberImages.JHOANNA,
  },
  MIKHA: {
    fullName: "Mikhaela Janna Lim",
    birthDate: "November 8, 2003",
    imageUrl: memberImages.MIKHA,
  },
  SHEENA: {
    fullName: "Sheena Mae Catacutan",
    birthDate: "May 9, 2004",
    imageUrl: memberImages.SHEENA,
  },
  STACEY: {
    fullName: "Stacey Aubrey Sevilleja",
    birthDate: "Stacey Aubrey Sevilleja",
    imageUrl: memberImages.STACEY,
  },
};

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const currentImage = images[currentImageIndex];

  const handlePrevious = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsFlipping(false);
    }, 150); // Half of transition duration
  };

  const handleNext = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsFlipping(false);
    }, 150);
  };

  // Get current member info based on image
  const getCurrentContent = () => {
    if (currentImage.alt === "BINI Group Photo") {
      return {
        title: "About",
        description: `Filipino pop phenomenon BINI features 8 multi-talented members, Aiah, Colet, Maloi, 
          Gwen, Stacey, Mikha, Jhoanna, and Sheena. The girls have quickly become the biggest female 
          Filipino artist in history, and second biggest artist overall in the Philippines, holding both 
          the #1 & #2 spots on the top Filipino music charts simultaneously with the hits "Salamin, 
          Salamin" and "Pantropiko."

          BINI's sound is shaped by homegrown artists and global sensations alike. On the heels of their 
          unprecedented growth in socials and in streaming listenership (30M +), the girls recently sold 
          out their "BINIverse" tour in record-breaking time, and have been heralded as one of Teen 
          Vogue's 2024 Girl Groups to watch!`,
      };
    }
    return memberDetails[currentImage.alt];
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-[#F0F8FF] to-white relative py-8 sm:py-16 px-4"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16 max-w-[1200px]">
        {/* Left side - Image carousel */}
        <div className="w-full lg:w-[400px] relative mx-auto lg:mx-0 max-w-[500px]">
          <div className="relative group">
            <div className="relative bg-white rounded-2xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage.url}
                  src={currentImage.url}
                  alt={currentImage.alt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full aspect-square object-cover rounded-xl"
                />
              </AnimatePresence>

              {/* Decorative elements - Only visible on larger screens */}
              <div className="hidden lg:flex absolute -left-3 top-1/2 -translate-y-1/2 flex-col gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={`left-${i}`}
                    className="h-6 w-1 bg-[#7DD1D8] rounded-full"
                    style={{ opacity: 1 - i * 0.2 }}
                  ></div>
                ))}
              </div>

              <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 flex-col gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={`right-${i}`}
                    className="h-6 w-1 bg-[#7DD1D8] rounded-full"
                    style={{ opacity: 1 - i * 0.2 }}
                  ></div>
                ))}
              </div>

              {/* Navigation controls */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-400 hover:text-[#7DD1D8] hover:shadow-lg transition-all"
                >
                  &#x2039;
                </button>
                <span className="text-sm font-medium text-gray-500">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-400 hover:text-[#7DD1D8] hover:shadow-lg transition-all"
                >
                  &#x203A;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center content and Right sidebar layout */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12 mt-16 lg:mt-0">
          {/* Center content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentImage.alt === "BINI Group Photo" ? (
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-serif italic mb-6 bg-gradient-to-r from-[#7DD1D8] to-[#5B9EA6] bg-clip-text text-transparent">
                      About
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {getCurrentContent()
                        .description.split("\n\n")
                        .map((paragraph, index) => (
                          <p key={index} className="text-base sm:text-lg">
                            {paragraph}
                          </p>
                        ))}
                    </div>
                  </div>
                ) : (
                  <div className="mb-8">
                    <h3 className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-1">
                      BINI
                    </h3>
                    <h2 className="text-[#7DD1D8] text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
                      {currentImage.alt}
                    </h2>
                    <div className="space-y-4 bg-white/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                        <span className="text-gray-500 sm:w-32 text-sm font-medium">
                          Full Name
                        </span>
                        <span className="text-gray-700 font-medium">
                          {getCurrentContent().fullName}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
                        <span className="text-gray-500 sm:w-32 text-sm font-medium">
                          Date of Birth
                        </span>
                        <span className="text-gray-700 font-medium">
                          {getCurrentContent().birthDate}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right sidebar - Members list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="border-t lg:border-t-0 lg:border-l border-[#7DD1D8]/30 pt-6 lg:pt-0 lg:pl-6"
          >
            <div className="flex flex-row flex-wrap lg:flex-col gap-4 lg:gap-0">
              {[
                "AIAH",
                "COLET",
                "GWEN",
                "MALOI",
                "JHOANNA",
                "MIKHA",
                "SHEENA",
                "STACEY",
              ].map((member) => (
                <div
                  key={member}
                  className={`py-2 text-sm font-medium tracking-wide ${
                    currentImage.alt === member
                      ? "text-[#7DD1D8]"
                      : "text-gray-500"
                  } hover:text-[#7DD1D8] cursor-pointer transition-all hover:translate-x-1`}
                >
                  {member}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
