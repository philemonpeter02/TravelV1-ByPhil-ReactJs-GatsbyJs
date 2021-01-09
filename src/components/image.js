import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './image.css'

const Image = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile(
      filter: {
        extension: {regex: "/(png)|(jpg)|(jpeg)/"}
         name: {nin: ["background", "background2", "gatsby-icon"]}
        }
        ) {
      edges {
        node {
          base
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
  `)
  return(
    <div className="ImageContainer">
      <h1>View Our Destinations</h1>
      <div className="ImageGrid">
        {data.allFile.edges.map((image, key) => (
          <Img key={key} className="ImageItem" fluid={image.node.childImageSharp.fluid} alt={image.node.base.split('.')[0]} />
        ))}
      </div>
    </div>
  )
}

export default Image
