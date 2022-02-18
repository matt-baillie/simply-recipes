import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        complexData {
          name
          age
        }
        person {
          age
          name
        }
        simpleData
        title
      }
    }
  }
`

const FetchData = () => {
  //   console.log(useStaticQuery(getData))
  const {
    site: {
      info: {
        person: { name },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Site title is : {name}</h1>
    </div>
  )
}

export default FetchData
