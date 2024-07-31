import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import '@/components/Projects/item.css'

// import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface CarouselProps {
  projects: Project[];
}

const SwiperCarousel: React.FC<CarouselProps> = ({ projects }) => {
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
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="carousel-slide-item">
            <img src={project.imageUrl} alt={project.title} />
            <div className="carousel-slide-item__body">
              <h4>{project.title}</h4>
              <p>{project.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;