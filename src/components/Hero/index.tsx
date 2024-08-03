import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px]
        md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] flex justify-center"
        style={{
          backgroundImage: "url('/images/hero/sketch3-01.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/*<div className="absolute inset-0 bg-orange-100 opacity-80"></div>*/}
        {/*<div className="absolute z-0 inset-0 bg-gradient-to-r from-orange-300 to-transparent opacity-100"></div>*/}
        <div className="container custom-container relative z-20 px-12">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="max-w-[600px] text-center md:text-left">
                <h1 className="mb-5 text-3xl font-bold leading-tight brand-text-primary sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Ingenious, Top-Quality Architectural Designs
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Your one-stop center for Architecture, Interior Design, Landscape Design, and Project Management in East Africa.
                </p>
                <div className="flex flex-col items-center justify-center md:justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-sm bg-brand-dark  md:me-5 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-block rounded-sm bg-brand-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 hover:text-white"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-10 bottom-4 -left-12 w-32 h-32 md:bottom-8 md:-left-24 md:h-48 md:w-48 rounded-full bg-peach opacity-100"></div>
        <div className="absolute z-10 -top-12 -right-16 w-48 h-48 md:-top-48 md:right-[20%] md:h-96 md:w-96 rounded-full bg-peach opacity-100"></div>
      </section>
    </>
  );
};

export default Hero;
