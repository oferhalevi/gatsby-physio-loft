import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import {Box, AnimatedBox, Button} from '../elements'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import {animated, useSpring, config} from 'react-spring'
import {graphql} from 'gatsby'
import {ChildImageSharp} from '../types'

const PBox = styled(AnimatedBox)`
  max-width: 1400px;
  margin: 0 auto;
`

const Content = styled(Box)`
   max-width: 960px; 
  .gatsby-image-wrapper:not(:last-child) {
    margin-bottom: ${ (props) => props.theme.space[10]};

    @media (max-width: ${ (props) => props.theme.breakpoints[3]}) {
      margin-bottom: ${ (props) => props.theme.space[8]};
    }
  }
`

const Category = styled(AnimatedBox)`
  letter-spacing: 0.05em;
  font-size: ${ (props) => props.theme.fontSizes[1]};
  text-transform: uppercase;
`

const Description = styled(animated.div)`
  max-width: 960px;
  letter-spacing: -0.003em;
  --baseline-multiplier: 0.179;
  --x-height-multiplier: 0.35;
  line-height: 1.58;
`

const PhysioPage = ({data}) => {
  return <Layout>
    <PBox py={6} px={[6, 6, 8, 10]}>
      <h1>About</h1>
    </PBox>
    <Content py={0}>
      <PBox px={[6, 6, 8, 10]}>
        <p>Physio Loft is a modern boutique space in Central Hong Kong that offers
          Physiotherapy, Private Pilates Equipment Training, and Mentoring for
          Professionals. A very quiet and personal space that caters to both body and
          mind, fitting the contrast of a fast paced lifestyle in a typical bustling city
          like Hong Kong.</p>
        <p>Your treatment starts with your senses... In Physio Loft, We put attention on
          details that would be pleasing to your eyes, your sense of smell, and to the
          things that you would touch. These positive stimulations open up the body to
          receive, so that proper healing can take place.
        </p>
        <p>
          Experience a very friendly, welcoming, warm environment. Feel at home in Physio
          Loft.
        </p>
        <h4>Meet Ervin Paunan</h4>
        <p>
          Ervin Paunan is a registered physiotherapist in Hong Kong and Philippines. He’s
          not your typical physio, expect to be moving and sweating. He believes that
          faulty movement is the reason for body pains and it’s proper movement that would
          fix it. Having been practicing for more than 18 years, Ervin has developed his
          skills in effective physiotherapy management specialising in alleviating various
          musculoskeletal pathologies and Instructing corrective movement strategies.
        </p>
        <p>
          He is a senior educator for Polestar Pilates Asia since 2015 and had been hosted
          in Korea, China, Hong Kong, Macau, Malaysia, Philippines, Singapore, and
          Thailand in doing Comprehensive Certification Courses for both Pilates Studio
          Teachers and Physiotherapists.
        </p>
        <p>
          His approach to rehabilitation through different exercise regimen like Pilates,
          Gyrotonics, weight training and other functional training programs is
          complimented with his great eye for movement, teaching skills, and of course a
          clear understanding of anatomy and physiology. He is also empathic and knows how
          to really LISTEN, putting priority to client’s needs.
        </p>
        <h4>Collaboration</h4>
        <p style={{
          paddingBottom: 50
        }}>The clinic is open for rental
          arrangements and collaborative projects with other practitioners or companies.
          Please visit the clinic and see if it’s suitable for your practice. Arrangements
          can be made depending on availability and agreed conditions.</p>
      </PBox>
    </Content>
  </Layout>
}

export const query = graphql `
  query {
    vesta: file(name: { eq: "vesta" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    primo: file(name: { eq: "primo" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default PhysioPage