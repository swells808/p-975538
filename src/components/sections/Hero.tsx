export const Hero = () => {
  return (
    <section className="mt-[65px] pt-24 pb-0 px-20 max-sm:pt-12 max-sm:pb-0 max-sm:px-5">
      <div className="max-w-screen-xl flex justify-between gap-8 mx-auto my-0 max-md:px-10 max-md:py-0 max-sm:flex-col max-sm:px-5 max-sm:py-0">
        <div className="max-w-[608px] pt-[178px] max-sm:text-center max-sm:pt-8">
          <h1 className="font-bold text-5xl leading-[48px] text-gray-900 mb-[65px] max-sm:text-[32px] max-sm:leading-9">
            Everything You Need for Seamless Time Tracking
          </h1>
          <p className="text-xl leading-5 text-gray-600 mb-[59px] max-sm:text-lg">
            CICO Timeclock offers powerful yet easy-to-use features to
            streamline workforce management.
          </p>
          <button className="text-white text-base font-semibold cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_10px_15px_rgba(0,0,0,0.1)] bg-[#008000] px-[27px] py-[15px] rounded-lg border-[none] max-sm:w-full">
            Start Free Trial
          </button>
        </div>
        <div className="w-[608px] h-[608px] max-md:w-[450px] max-md:h-[450px] max-sm:w-full max-sm:h-auto max-sm:mt-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/473fa9b67b471a56d813d4d1332671ea6373aeb3?placeholderIfAbsent=true"
            alt="Time tracking interface"
            className="w-full h-full object-cover shadow-[0px_25px_50px_rgba(0,0,0,0.25)] rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
