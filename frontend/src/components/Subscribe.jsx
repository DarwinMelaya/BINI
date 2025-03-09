const Subscribe = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-3xl text-center mb-4 font-serif italic">
        Subscribe to Our Newsletter
      </h2>

      <p className="text-center text-gray-600 mb-6">
        Sign up below for updates about new releases, ticket pre-sales, and
        exclusive events from BINI.
      </p>

      <form className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
            required
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Full Name (optional)"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none"
          />
        </div>

        {/* Actual reCAPTCHA component */}
        <div className="flex justify-center">
          <div className="g-recaptcha" data-sitekey="your-site-key"></div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#8CD3D7] text-white rounded-full"
        >
          Sign Up
        </button>

        <div className="space-y-2">
          <div className="flex items-start">
            <input type="checkbox" id="terms" className="mr-2 mt-1" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I confirm that I have read and agree to{" "}
              <a href="#" className="underline">
                Terms and Conditions
              </a>
              .
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacy"
              className="mr-2 mt-1"
              required
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I confirm that I have read and agree to{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
