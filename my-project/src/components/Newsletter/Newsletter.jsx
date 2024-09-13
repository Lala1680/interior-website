const Newsletter = () => {
  return (
    <div className="max-w-[500px] mx-auto space-y-5 text-center py-14">
      <h1 className="text-3xl font-bold font-serif">
        Subscribe to our Newsletter
      </h1>
      <p className="max-w-[350px] mx-auto text-gray-500 text-sm text-center">
        Bring your dream home to life with one-on-one design and hand picked
        products
      </p>
      <div className="flex justify-center !mt-8">
        <input
          type="text"
          placeholder="Enter your mail"
          className="p-4 border-[1px] border-black"
        />
        <button className="bg-black text-white px-6 py-3 uppercase">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
