import {engineering ,research, technology } from "./images"
const features = [
    {
        Title: 'Biomedical Engineering',
        Image: engineering,
        Description: 'A lot of interesting articles about biomedical engineering fields',
    },

    {
        Title: 'New Technology',
        Image: technology,
        Description: 'Discover the latest technology in biomedical engineering',
    },

    {
        Title: 'Latest Researchs & Projects',
        Image: research,
        Description: 'Explore the latest researchs and projects in biomedical engineering',
    }
]

const title = "BEAT Magazine"

const description = {
    a: " Follow the latest updates in biomedical engineering with",
    b: "BEAT Magazine."
}

export const magazine = {
  title,features,description
}
