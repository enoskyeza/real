import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

interface ListProps {
  text: string;
}

const List: React.FC<ListProps> = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {

  return (
    <section id="about"
             className="pt-16 md:pt-20 lg:pt-28 flex items-center justify-center"
             style={{
               backgroundImage: "url('/images/about/about-bg-01.svg')",
               backgroundSize: 'cover',
               backgroundPosition: "center",
             }}
    >
      <div className="container custom-container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px]">
                <div className="absolute border-8 border-amber-700 top-8 left-8 w-full h-full  hidden sm:block"> </div>
                <Image
                  src="/images/about/about-2-01.jpg"
                  alt="about-image"
                  fill
                  className="max-w-full drop-shadow-three lg:mr-0"
                />
                {/*<Image*/}
                {/*  src="/images/about/about-image-dark.svg"*/}
                {/*  alt="about-image"*/}
                {/*  fill*/}
                {/*  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"*/}
                {/*/>*/}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                  subtitle="About Us"
                title="We create and turn ideas into reality."
                paragraph="Resident Architects is a consultancy firm registered in Kampala, Uganda which specializes
                in Architecture, Interior design, Landscape design and Project Management. The firm was established
                in 2013, by a team of Architects registered to practice in Uganda. "
                mb="44px"
              />

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
    </section>
  );
};

export default AboutSectionOne;





              // <div
              //   className="mb-12 max-w-[570px] lg:mb-0"
              //   data-wow-delay=".15s"
              // >
              //   <div className="mx-[-12px] flex flex-wrap">
              //     <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
              //       <List text="Architectural design" />
              //       <List text="Project management" />
              //       <List text="Interior design" />
              //       <List text="Landscape design" />
              //     </div>
              //
              //     <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
              //       <List text="Urban design & Urban planning" />
              //       <List text="Build cost Engineering" />
              //       <List text="Property Valuation." />
              //     </div>
              //   </div>
              // </div>
