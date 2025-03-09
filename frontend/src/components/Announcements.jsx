const Announcements = () => {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      <h1 className="text-3xl italic mb-6 text-[#94b0b3]">Announcements</h1>

      <div className="max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">
          @BINI Exclusive Members, are you ready for the BINIverse World Tour?
        </h2>

        <p className="mb-8">
          The BINIverse World Tour Dubai & London shows are happening soon!
          Whether you're looking for the ultimate VIP experience or a
          budget-friendly way to join the fun, there's a ticket option for
          everyone. Check out the full pricing and VIP package details below and
          get ready to be part of this unforgettable experience!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <img
            src="https://bini.abs-cbn.com/_next/image?url=https%3A%2F%2Fartist-images.abs-cbn.com%2Fwp-content%2Fuploads%2F2025%2F02%2F18114912%2FFandom-Process-Flow.jpg&w=1920&q=75"
            alt="Dubai Tour Pricing"
            className="max-w-[400px] w-full"
          />
        </div>

        <button className="bg-[#8CD6E6] text-white px-8 py-3 rounded-full hover:bg-[#7BC5D5] transition-colors">
          BOOK YOUR TICKETS NOW
        </button>
      </div>
    </div>
  );
};

export default Announcements;
