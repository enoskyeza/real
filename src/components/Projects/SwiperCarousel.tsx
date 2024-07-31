import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/components/Projects/item.css'

// import SwiperCore, { Navigation, Pagination } from 'swiper';

// Install Swiper modules
// SwiperCore.use([Navigation, Pagination]);

const SwiperCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="carousel-item">
          <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="people"
          />
          <div className="carousel-item__details">
            <div className="controls">
              <span className="fas fa-play-circle"></span>
              <span className="fas fa-plus-circle"></span>
            </div>
            <h5 className="carousel-item__details--title">Descriptive Title</h5>
            <h6 className="carousel-item__details--subtitle">Date and Duration</h6>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperCarousel