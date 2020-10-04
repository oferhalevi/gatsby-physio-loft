import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {animated, useSpring, config} from 'react-spring'
import Layout from '../components/layout'
import GridItem from '../components/grid-item'
import SEO from '../components/SEO'
import {ChildImageSharp} from '../types'

type PageProps = {
  data: {
    firstProject: {
      title: string,
      slug: string,
      cover: ChildImageSharp
    }
    threeProjects: {
      nodes: {
        title: string,
        slug: string,
        cover: ChildImageSharp
      }[]
    }
    promotions: ChildImageSharp,
    aboutUs: ChildImageSharp,
    //     instagram: ChildImageSharp
  }
}

const Area = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 40vw 30vw;
  grid-template-areas:
  'three-projects three-projects three-projects'
  'promotions about-us about-us';

  @media (max-width: ${ (props) => props.theme.breakpoints[3]}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 30vw 30vw 38vw;

    grid-template-areas:
      'three-projects three-projects three-projects'
      'three-projects three-projects three-projects'
      'promotions about-us about-us';
  }

  @media (max-width: ${ (props) => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 38vw);

    grid-template-areas:
      'three-projects three-projects'
      'three-projects three-projects'
      'three-projects three-projects'
      'promotions about-us';
  }

  @media (max-width: ${ (props) => props.theme.breakpoints[0]}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 50vw);

    grid-template-areas:
      'three-projects'
      'three-projects'
      'three-projects'
      'promotions'
      'about-us';
  }
`

const FirstProject = styled(GridItem)`
  grid-area: first-project;
`

const AboutUs = styled(GridItem)`
  grid-area: about-us;
`

const Promotions = styled(GridItem)`
  grid-area: promotions;
`

const ThreeProjects = styled.div `
  grid-area: three-projects;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${ (props) => props.theme.breakpoints[1]}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const Index : React.FunctionComponent < PageProps > = ({
  data: {
    firstProject,
    threeProjects,
    aboutUs,
    promotions
  }
}) => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })

  return (
    <Layout>
      <SEO/>
      <Area style={pageAnimation}>
        <AboutUs to="/about" aria-label="Visit my about page">
          <Img fluid={aboutUs.childImageSharp.fluid}/>
          <span>About</span>
        </AboutUs>
        <Promotions to="/about" aria-label="Visit my about page">
          <Img fluid={promotions.childImageSharp.fluid}/>
          <span>Promotions</span>
        </Promotions>
        <ThreeProjects>
          {threeProjects
            .nodes
            .map((project) => (
              <GridItem
                to={project.slug}
                key={project.slug}
                aria-label={`View project "${project.title}"`}>
                <Img fluid={project.cover.childImageSharp.fluid}/>
                <span>{project.title}</span>
              </GridItem>
            ))}
        </ThreeProjects>
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql `
  query Index {
    firstProject: projectsYaml {
      title
      slug
      cover {
        childImageSharp {
          fluid(quality: 95, maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    threeProjects: allProjectsYaml(limit: 4, skip: 0) {
      nodes {
        title
        slug
        cover {
          childImageSharp {
            fluid(quality: 95, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    promotions: file(sourceInstanceName: { eq: "images" }, name: { eq: "instagram" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
