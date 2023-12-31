import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({data}) => (
  
  <div>
      <h1>Hi Welcome to,{process.env.GATSBY_VAR}</h1>
      {data.allContentfulBand.edges.map(({ node }) => (
        
        <div>
          <h1>Info about music bands</h1>
          <h3>{node.name}</h3> 
        <p>{node.about.about}</p>
        <a href={node.website}>click here to listen to the music of {node.name}</a>
        </div> 
      ))
      }
      
  </div>
)



export default IndexPage

export const data = graphql`query{
  allContentfulBand {
    edges {
      node {
        id
        genere
        name
        website
        about {
          about
        }
      }
    }
  }
}`
