import React from 'react'
import {
    StyledContainer,
    Title,
    Description,
    FeatureList,
    Shelf,
    Feature,
    FeatureImage,
    FeatureTitle,
    FeatureDescription,
} from './styles/magazine'
export default function Magazine({ children, ...restProps }) {
    return <StyledContainer {...restProps}> {children} </StyledContainer>
}

Magazine.Title = function MagazineTitle({ children, ...restProps }) {
    return <Title {...restProps}> {children} </Title>
}

Magazine.Description = function MagazineDescription({
    children,
    ...restProps
}) {
    return <Description {...restProps}> {children} </Description>
}

Magazine.FeatureList = function MagazineFeatureList({
    children,
    ...restProps
}) {
    return <FeatureList container {...restProps}> {children} </FeatureList>
}

Magazine.Shelf = function MagazineShelf({ children, ...restProps }) {
    return <Shelf {...restProps}> {children} </Shelf>
}
Magazine.FeatureImage = function MagazineImage({ ...restProps }) {
    return (
        <StyledContainer>
            <FeatureImage {...restProps} />
        </StyledContainer>
    )
}
Magazine.FeatureTitle = function MagazineTitle({ children, ...restProps }) {
    return <FeatureTitle {...restProps}> {children} </FeatureTitle>
}
Magazine.FeatureDescription = function MagazineDescription({ children, ...restProps }) {
    return <FeatureDescription {...restProps}> {children} </FeatureDescription>
}
Magazine.Feature= function MagazineFeature({ children,item, ...restProps }) {
    return <Feature container item md={4} sm={4} xs={12} {...restProps}> {children} </Feature>
}

/*export function MagazineContainer() {
            <Magazine.Feature>
               <Magazine.FeatureImage/>
               <Magazine.FeatureTitle/>
               <Magazine.FeatureDescription/>
            </Magazine.Feature>
*/
