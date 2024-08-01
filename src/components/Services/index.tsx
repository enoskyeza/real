import { Service } from "@/types/service";
import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import "./services.css"

const serviceData: Service[] = [
  {
    id: 1,
    image: "/path/to/image1.jpg",
    title: "ARCHITECTURE",
    description: "Provides an opportunity to not only add beauty and structure to the world, but to profoundly improve the conditions for people."
  },
  {
    id: 2,
    image: "/path/to/image2.jpg",
    title: "CONSULTING & PLANNING",
    description: "Our team's analytical tools and user engagement activities inspire creativity and collaboration that enhance any project."
  },
  {
    id: 3,
    image: "/path/to/image3.jpg",
    title: "CONSTRUCTION",
    description: "Across our firm, we employ a diverse range of professionals with a successful record delivering high-quality projects."
  }
];

const Services = () => {
  return (
    <section
      className="relative z-10 flex justify-center py-16 md:py-20 lg:py-28 bg-orange-100 overflow-hidden h-25"
      style={{ backgroundImage: `url(/images/background/bg-1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}
    >
      <div className="container relative z-20">
        <SectionTitle
          title="Below are some of our services"
          subtitle="Our Services"
          paragraph=" "
          center
        />
        <div className="relative">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 -mt-20 md:-mt-28">
            {serviceData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
