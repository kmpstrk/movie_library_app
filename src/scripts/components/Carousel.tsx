import { CarouselProps } from "../../interfaces/CarouselProps";
import CategoryButton from "./CategoryButton";
import Slider from 'react-slick';
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import '../../styles/Carousel.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel : React.FC<CarouselProps> = ({genres})=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {genres.map((genre)=>(
          <CategoryButton key={genre.id} id={genre.id} name={genre.name}/>
        ))}
      </Slider>
    </>
  )
}


export default Carousel;