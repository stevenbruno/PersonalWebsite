import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import LeftNav from "../components/LeftNav/leftNav"
import Content from "../components/Content/content";
import { graphql } from "gatsby";
import Img from "gatsby-image"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LeftNav />
    <Content>
      <h1>Steven Bruno</h1>
      <p>
        I'm a web designer and developer working in Chicago. 
        Before this, I studied Civil Engineering (Northwestern University '18)
      </p>
      <p>
        At work, I focus on front-end web technologies, but at home, 
        I enjoy anything and everything Python. 
      </p>
      <p>
        Reach me at <b>sbruno636@gmail.com</b>
      </p>
      <Img fixed={props.data.imageOne.childImageSharp.fixed} />
    </Content>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "headshotV6.jpg" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`