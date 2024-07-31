import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '@/components/Projects/carouselStyles.css'

const slideWidth = 30;

interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface ProjectItem {
  project: Project;
}

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

interface ItemStyles {
  transform: string;
  filter?: string;
  opacity?: number;
}

interface CarouselItem {
  styles: ItemStyles;
  project: Project;
}

const createItem = (position: number, idx: number, projects: ProjectItem[]): CarouselItem => {
  const item: CarouselItem = {
    styles: {
      transform: `translateX(${position * (slideWidth / 3)}rem)`,
    },
    project: projects[idx].project,
  };

  const length = projects.length;

  if (position >= length || position < 0) {
    item.styles = { ...item.styles, opacity: 0 };
  }

  return item;
};

interface CarouselSlideItemProps {
  pos: number;
  idx: number;
  projects: ProjectItem[];
}

const CarouselSlideItem: React.FC<CarouselSlideItemProps> = ({ pos, idx, projects }) => {
  const item = createItem(pos, idx, projects);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.project.imageUrl} alt={item.project.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.project.title}</h4>
        <p>{item.project.subtitle}</p>
      </div>
    </li>
  );
};

interface CarouselProps {
  projects: Project[];
}

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
  const items = projects.map((project) => ({ project }));
  const length = items.length;
  items.push(...items);

  const keys = Array.from(Array(items.length).keys());

  const [carouselItems, setCarouselItems] = useState<number[]>(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = carouselItems.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setCarouselItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setCarouselItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx: number) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (carouselItems[0] % length)) % length); // prettier-ignore
  }, [carouselItems]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {carouselItems.map((pos, i) => (
              <CarouselSlideItem key={i} idx={i} pos={pos} projects={items} />
            ))}
          </ul>
        </div>
        <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {carouselItems.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
