import * as React from "react"
import { graphql } from "gatsby"


const IndexPage = ({data}) => (
  <div>
    
      {data.allContentfulBand.edges.map(({ node }) => (
       <tr> 
        <td>
          {node.name}
        </td>
        <td>
          {node.genere}
        </td>
        <td>
          {node.website}
        </td>
        </tr> 
        
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
      }
    }
  }
}`
