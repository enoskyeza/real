import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden pb-16 md:pb-20 lg:pb-28 flex justify-center">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="relative w-full px-4 lg:w-5/12 xl:w-1/2">
                <Image
                  src="/images/contact/contact-1.png"
                  alt="contact-us-image"
                  fill
                  className="max-w-full lg:mr-0"
                />
          </div>
          <div className="w-full px-4 lg:w-7/12 xl:w-1/2 pt-16 md:pt-20 lg:pt-28">
              <h2 className="mb-3 text-2xl font-bold text-black  sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in touch with our team.
              </h2>
              <p className="mb-12 text-base font-medium brand-text-primary">
                Let&apos;s work together!
              </p>

            <div
              className="mb-12 rounded-lg bg-brand-dark px-8 py-11 shadow-xl sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color
                        outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base
                        text-body-color outline-none focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-brand-primary px-9 py-4 text-base font-medium text-white shadow-submit
                    duration-300 hover:bg-primary/90">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
