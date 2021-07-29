import React from 'react'
import Magazine from '../components/magazine'
import { magazine } from './data/magazine'
export function MagazineContainer() {
    return (
        <Magazine>
            <Magazine.Title> BEAT Magazine </Magazine.Title>
            <Magazine.Description>
                {magazine.description.a} <b>{magazine.description.b}</b>
            </Magazine.Description>
            <Magazine.FeatureList>
                {magazine.features.map((feature) => {
                    return (
                        <Magazine.Feature>
                            <Magazine.FeatureImage src={feature.Image} />
                            <Magazine.FeatureTitle>
                                {feature.Title}
                            </Magazine.FeatureTitle>
                            <Magazine.FeatureDescription>
                                {feature.Description}
                            </Magazine.FeatureDescription>
                        </Magazine.Feature>
                    )
                })}
            </Magazine.FeatureList>
            <Magazine.Shelf />
        </Magazine>
    )
}