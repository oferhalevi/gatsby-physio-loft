import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import {Box, AnimatedBox, Button} from '../elements'
import {animated, useSpring, config} from 'react-spring'

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
      <h1>Education</h1>
    </PBox>
    <Content py={0}>
      <PBox px={[6, 6, 8, 10]}>
        <p style={{
          fontSize: '1.5rem'
        }}>Physio Loft caters for
          aspiring professional instructors for both Studio Pilates and Physio-Pilates.
          Arrangements can be made for private or group mentorship.
        </p>
        <p>The clinic is equipped with a Pilates library and an audio-visual area ideal
          for lectures and study groups.
        </p>
        <p>Please contact us for availability.
        </p>
      </PBox>
    </Content>
  </Layout>
}

export default PhysioPage