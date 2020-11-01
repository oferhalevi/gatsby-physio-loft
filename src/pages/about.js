import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import {Box, AnimatedBox, Button} from '../elements'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

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

const InlineImg = styled(Img)`
  display: inline-block;
  float: left;
  margin-right: 16px;
  width: 200px;
  margin-bottom: 16px;
  @media (max-width: ${ (props) => props.theme.breakpoints[0]}) {
    display: block;
    float: none;
    width: 100%;
  }
`

const AboutPage = ({data}) => {
  console.log(data);
  return <Layout>
    <PBox py={6} px={[6, 6, 8, 10]}>
      <h1>About</h1>
    </PBox>
    <Content py={0}>
      <PBox px={[6, 6, 8, 10]}>
        <p style={{
          fontSize: '1.5rem'
        }}>Physio Loft is a modern
          boutique clinic in Central Hong Kong that offers physiotherapy, private Pilates
          training, and mentoring for professionals.
        </p>
        <Img fluid={data.lounge.childImageSharp.fluid}/>
        <p style={{
          fontSize: '1.5rem'
        }}>A quiet and personal space
          for both body and mind. Escape your fast paced lifestyle, and experience the
          cozy relaxed environment in Physio Loft.</p>
        <p>
          <InlineImg fluid={data.ervin.childImageSharp.fluid} style={{}}/>

          Physio Loft was founded by Ervin Paunan, a registered physiotherapist in Hong
          Kong and Philippines. Having been practicing for more than 18 years, Ervin
          developed skills in effectively treating various musculoskeletal pathologies and
          instructing corrective movement strategies.
        </p>
        <p>
          He is a senior educator for Polestar Pilates Asia since 2015, and had been
          hosted in Korea, China, Hong Kong, Macau, Malaysia, Philippines, Singapore, and
          Thailand in conducting comprehensive certification courses for both Pilates
          studio teachers and physiotherapists.
        </p>
        <p>
          Ervin’s approach to rehabilitation is a combination of manual therapy, practical
          use of electrotherapy, and different exercise regimens like Pilates, GYROTONIC®
          , weight training and other functional training programs.
        </p>
        <p>The clinic is open for rental arrangements and collaborative projects with
          other practitioners or companies. Arrangements can be made depending on
          availability and agreed conditions.
        </p>
        <p style={{
          marginBottom: 50
        }}>Please contact us to arrange a visit.
        </p>
      </PBox>
    </Content>
  </Layout>
}

export default AboutPage;

export const query = graphql `
  query AboutPage {
    ervin: file(sourceInstanceName: { eq: "images" }, name: { eq: "ervin" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lounge: file(sourceInstanceName: { eq: "images" }, name: { eq: "lounge" }) {
      childImageSharp {
        fluid(quality: 95, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
