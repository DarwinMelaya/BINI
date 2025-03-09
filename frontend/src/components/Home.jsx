import heroImage from "../assets//Banner.jpeg";
import heroImageMobile from "../assets/BannerMobile.webp";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="w-full h-full absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <picture>
          <source media="(max-width: 768px)" srcSet={heroImageMobile} />
          <img
            src={heroImage}
            alt="BINI Hero"
            className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
            loading="eager"
          />
        </picture>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            <span className="block font-serif italic">Welcome to</span>
            <span className="bg-gradient-to-r from-[#7DD1D8] to-white bg-clip-text text-transparent">
              BINI
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-200">
            The Philippines' fastest-rising P-pop girl group, breaking records
            and making history.
          </p>
          <div className="flex gap-4 animate-fade-in-up animation-delay-400">
            <button className="px-8 py-3 bg-[#7DD1D8] text-white rounded-full hover:bg-[#6BC1C8] transition-all transform hover:scale-105">
              Listen Now
            </button>
            <a
              href="https://www.youtube.com/@BINIPH/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 text-white rounded-full backdrop-blur-sm hover:bg-white/20 transition-all border border-white/30 inline-block"
            >
              Watch Videos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default Home;
