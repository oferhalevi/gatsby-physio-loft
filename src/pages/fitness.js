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
            <h1>Fitness</h1>
        </PBox>
        <Content py={0}>
            <PBox px={[6, 6, 8, 10]}>
                <p>Physio Loft is equipped with a complete set of standard Pilates Equipment
                    (Reformer, Trapeze Table, Combo chair, Ladder Barrel, Spine Corrector). All
                    equipment is original Balanced Body Brand from the US. Pilates Mat instructions
                    are also taught in the studio to help clients understand their home exercise
                    programs. Small props are available as well like foam rollers, fit balls, rings,
                    and various myofascial release props. All fitness training sessions are
                    conducted in private setting. Arrangements can be possible for people who wish
                    to exercise in pairs for Pilates equipments, and maximum of 4 for mat/floor
                    work.</p>
                <p>Experience training with Pilates equipments in a safe and conducive
                    environment with very minimal people traffic compared to other Pilates studios.
                    We have to be COVID smart about things.</p>
                <p>Also, experience not just a great workout that makes you achieve your fitness
                    goals but a program that leaves you with a clearer understanding of the concepts
                    behind what you are doing from someone who practices the same thing.
                </p>
                <p>Polestar Pilates: Impacting the world with intelligent movements.</p>
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