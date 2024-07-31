import { Service } from "@/types/service";
import Image from "next/image";

const SingleService = ({ service }: { service: Service }) => {
  const { title, image, description } = service;

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-8 shadow-two duration-300 hover:shadow-one lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">
          <Image src={image} alt={title} width={50} height={50} className="rounded-full" />
        </div>
        <h3 className="mb-4 text-lg font-semibold text-dark lg:text-base xl:text-lg">{title}</h3>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color">
          {description}
        </p>
        <a href='#'>Request quote</a>
      </div>
    </div>
  );
};

export default SingleService;
