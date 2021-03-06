import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content"
import Project from "../components/Project/project"

const repos = [
  {
    name: "PersonalWebsite",
    description:
      "The site you're on right now. A responsive, modern React app built on top of Gatsby. Fetches the DEV api for my blog posts. Uses GraphQL for internal site queries.",
    githubURL: "https://github.com/stevenbruno/PersonalWebsite",
    landingURL: "https://stevenbruno.dev/",
    tags: ["React", "Gatsby", "GraphQL", "CSSModules"],
  },
  {
    name: "GifSearch",
    description: "Search for gifs! Fetches the Giphy API for your search term.",
    githubURL: "https://github.com/stevenbruno/GifSearch",
    landingURL: null,
    tags: ["GiphyAPI", "Webpack", "Javascript", "Promises"],
  },
  {
    name: "GridSketch",
    description:
      "A vanilla-javascript desktop drawing game that utilizes CSS Grid.",
    githubURL: "https://github.com/stevenbruno/GridSketch",
    landingURL: "https://stevenbruno.github.io/GridSketch/",
    tags: ["Javascript", "CSSGrid", "HTML5"],
  },
]

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Content>
      <h1>Projects</h1>
      {repos.map(repo => {
        return <Project repo={repo} />
      })}
    </Content>
  </Layout>
)

export default ProjectsPage
