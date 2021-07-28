import React from 'react'
import{Container,Title,Logo} from'./styles'
import Carousel ,{ autoplayPlugin, slidesToShowPlugin }from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Sponsors({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sponsors.Title = function SponsorsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Sponsors.Logo = function SponsorsLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
Sponsors.Carousel = function SponsorsCarousel({children, ...restProps}){
  return(
    <Carousel
      plugins={[
        'infinite',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 6
          }
        },
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
          }
        },
      ]}
      animationSpeed={1700}
      itemWidth={240}
      {...restProps}
    >
      {children}
    </Carousel>
  )
}
