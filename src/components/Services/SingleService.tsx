import { Service } from "@/types/service";
import Image from "next/image";

const SingleService = ({ service }: { service: Service }) => {
  const { title, image, description } = service;

  return (
      <div className="w-full flex flex-col bg-white rounded overflow-hidden shadow-lg p-4  duration-300 hover:shadow-one">
        <div className="mb-2 flex items-center space-x-1">
          <Image src={image} alt={title} width={80} height={80} className="rounded-full" />
        </div>
        <h3 className="mb-4 text-lg font-semibold text-dark lg:text-base xl:text-lg">{title}</h3>
        <p className="pb-8 text-sm leading-relaxed text-body-color">
          {description}
        </p>
        <a className="pt-4 border-t border-body-color border-opacity-10 mt-auto" href='#'>Request Quote</a>
      </div>
  );
};

export default SingleService;
