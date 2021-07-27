import React from 'react'
import{Container,Title,Logo} from'./styles'

export default function Sponsors({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sponsors.Title = function SponsorsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Sponsors.Logo = function SponsorsLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
