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
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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