export default function Hero() {
  return (
    <div className="flex justify-center text-center pt-28 pb-10 text-white">
      <div>
        <h1 className="text-4xl">Free Link Shortener</h1>
        <p className="my-5 text-xl">
          Custom Short URL Generator & Branded Short Link Management, Powered by
          Clickly.
        </p>
        <div className=" pb-6 rounded-lg">
          <form className="flex gap-6">
            <input
              type="text"
              className="form-input w-full px-4 py-2 rounded-l-lg border-2 border-r-0 border-blue-500 focus:outline-none focus:border-blue-700 text-black"
              placeholder="Enter your long URL"
            />

            <button
              type="submit"
              className="px-8 py-2 bg-blue-500 text-white font-bold rounded-r-lg border-2 border-blue-500 hover:bg-blue-700 focus:outline-none"
            >
              Shorten
            </button>
          </form>
        </div>
        <p>
          By clicking ‘Shorten’, you agree to our terms of use, privacy policy,
          and cookie policy.
        </p>
      </div>
    </div>
  );
}
