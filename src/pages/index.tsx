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
    promotions: ChildImageSharp,
    aboutUs: ChildImageSharp,
    education: ChildImageSharp,
    physiotherapy: ChildImageSharp,
    fitness: ChildImageSharp,

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

const Physio = styled(GridItem)`
`
const Fitness = styled(GridItem)`
`
const Education = styled(GridItem)`
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
    aboutUs,
    promotions,
    education,
    physiotherapy,
    fitness
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
        <Promotions
          aria-label="Visit my about page"
          style={{
          background: 'rgb(13, 73, 27)'
        }}>
          {/* <Img fluid={promotions.childImageSharp.fluid}/> */}
          <span style={{
            textShadow: 'none'
          }}>Special Promotion:<br/>
            Save 20% on a 10 session package
          </span>
        </Promotions>
        <ThreeProjects>
          <Physio to="/physiotherapy" aria-label="Physiotherapy">
            <Img fluid={physiotherapy.childImageSharp.fluid}/>
            <span>Physiotherapy</span>
          </Physio>
          <Fitness to="/fitness" aria-label="Physiotherapy">
            <Img fluid={fitness.childImageSharp.fluid}/>
            <span>Fitness</span>
          </Fitness>
          <Education to="/education" aria-label="Education">
            <Img fluid={education.childImageSharp.fluid}/>
            <span>Education</span>
          </Education>
          {/* {threeProjects
            .nodes
            .map((project) => (
              <GridItem
                to={project.slug}
                key={project.slug}
                aria-label={`View project "${project.title}"`}>
                <Img fluid={project.cover.childImageSharp.fluid}/>
                <span>{project.title}</span>
              </GridItem>
            ))} */}
        </ThreeProjects>
      </Area>
    </Layout>
  )
}

export default Index

export const query = graphql `
  query Index {
    aboutUs: file(sourceInstanceName: { eq: "images" }, name: { eq: "about-us" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    promotions: file(sourceInstanceName: { eq: "images" }, name: { eq: "promotions" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    education: file(sourceInstanceName: { eq: "images" }, name: { eq: "education" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    physiotherapy: file(sourceInstanceName: { eq: "images" }, name: { eq: "physiotherapy" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fitness: file(sourceInstanceName: { eq: "images" }, name: { eq: "fitness" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
