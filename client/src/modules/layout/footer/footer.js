import React from 'react';
<<<<<<< HEAD:client/src/components/footer/index.js
import { Container, Wrapper, Row, Column, Link, LocalLink, Title, Icon, Mail} from './styles/footer';
=======
import { Container, Wrapper, Row, Column, Link, LocalLink, Title, Icon, Mail} from './styles'
>>>>>>> b83daba77ce8161d03607684f58c778718c3a6ae:client/src/modules/layout/footer/footer.js

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Footer.LocalLink = function FooterLocalLink({ children, ...restProps }) {
  return <LocalLink {...restProps}>{children}</LocalLink>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Footer.Icon = function FooterIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Footer.Mail = function FooterMail({ children, ...restProps }) {
  return <Mail {...restProps}>{children}</Mail>;
};

