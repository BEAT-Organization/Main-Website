import React from 'react'
import{Container,Link,Title,Logo,Logo1} from'./styles/sponsors'

export default function Sponsors({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Sponsors.Link = function SponsorsLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Sponsors.Title = function SponsorsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Sponsors.Logo = function SponsorsLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};
Sponsors.Logo1 = function SponsorsLogo1({ children, ...restProps }) {
  return <Logo1 {...restProps}>{children}</Logo1>;
};