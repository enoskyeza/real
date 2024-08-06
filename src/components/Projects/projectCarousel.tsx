import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import  { Project } from '@/types/project'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface CarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<CarouselProps> = ({ projects }) => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // loop={true}
        breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-slide-item shadow-lg mb-12" style={{ height: '100%'}}>
            <div className="w-full relative mx-auto h-auto overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="transition-all duration-300 hover:scale-110"/>
            </div>
            <div className="carousel-slide-item__body px-6 py-4">
              <h4 className="font-bold text-l mb-2 uppercase">{project.title}</h4>
              <p className="font-light text-sm">
                <span className="brand-text-primary font-bold">Our role:</span> {project.our_role}
              </p>
              { project.location ?? <p>{project.location}</p>}
              <p className="font-light text-sm mb-4">
                <span className="brand-text-primary font-bold">Status:</span> {project.status}
              </p>
                <div className="w-full brand-text-dark border-t border-body-color border-opacity-10 pt-2">
              <a href="#" className="transition-opacity duration-300 hover:opacity-80">More Details</a>
                </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;