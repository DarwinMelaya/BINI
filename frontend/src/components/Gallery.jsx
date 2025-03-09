import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample image data - replace with your actual image data
  const images = [
    // Page 1 images
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103833%2FAIAH-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103849%2FGWEN-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103853%2FJHOANNA-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103905%2FSHEENA-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103845%2FGROUP-1ver2-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103856%2FMALOI-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103900%2FMIKHA-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103909%2FSTACEY-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09103837%2FCOLET-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104032%2FAIAH1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104037%2FCOLET2.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104044%2FGWEN1.jpg&w=384&q=75",

    // Page 2 images
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104048%2FJHOANNA1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104040%2FGROUP-PHOTO-2.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104052%2FMALOI-1-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104056%2FMIKHA-1-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104101%2FSHEENA1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09104105%2FSTACEY-1-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09105206%2FSTACEY-AIAH-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09105218%2FJHOANNA-MALOI-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09105228%2FMIKHA-GWEN-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F12%2F09105242%2FSHEENA-COLET-1.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182347%2FJhoanna-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182352%2FJhoanna-Wide-scaled.jpg&w=384&q=75",

    // ... add all your image paths here
    // Page 2 images
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182316%2FColet-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182321%2FColet-Wide-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182306%2FAiah-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182311%2FAiah-Wide-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182336%2FGwen-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182341%2FGwen-Wide-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182433%2FStacey-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182438%2FStacey-Wide-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182409%2FMikha-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182414%2FMikha-Wide-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182357%2FMaloi-CU-scaled.jpg&w=384&q=75",
    "https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2024%2F10%2F18182404%2FMaloi-Wide-scaled.jpg&w=384&q=75",
  ];

  const imagesPerPage = 12;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const getPageImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return images.slice(startIndex, endIndex);
  };

  // Add this modal component inside Gallery
  const ImageModal = ({ image, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-900/90"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
        className="relative w-screen h-screen flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-w-[90%] max-h-[90%]">
          <img
            src={image}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
          />
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 z-10 transform translate-x-0 translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-2 sm:px-4 py-4 sm:py-8"
    >
      <motion.h1
        className="text-3xl sm:text-5xl text-center mb-6 sm:mb-12 text-[#324b4e]"
        style={{ fontFamily: "__Roboto_37cf7d, __Roboto_Fallback_37cf7d" }}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Gallery
      </motion.h1>

      {/* Image Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6"
        >
          {getPageImages().map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-lg sm:rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      {/* Pagination */}
      <motion.div className="flex justify-center items-center mt-6 sm:mt-12 gap-2 sm:gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium"
        >
          Previous
        </motion.button>

        <span className="text-base sm:text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 sm:px-6 py-1 sm:py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium"
        >
          Next
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
