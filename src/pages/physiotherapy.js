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
            <h1>Physiotherapy</h1>
        </PBox>
        <Content py={0}>
            <PBox px={[6, 6, 8, 10]}>
                <p>Physio Loft is primarily a clinical exercise facility. We start by helping
                    people see, feel, and understand their conditions through movements. Then we
                    teach people how to correct those movements. Eventually, we help people maintain
                    and progress what they have learned. We compliment all these with manual
                    therapy.</p>
                <p>
                    Physio Loft is also equipped with electrotherapy modalities that go very well
                    with manual therapy. Both eastern and western influences are apparent in
                    treatment sessions. This approach is proven to be very effective in managing
                    various musculoskeletal conditions like neck pain or stiff neck, low back pain
                    syndromes, shoulder and upper back problems, hip and pelvic joint dysfunctions,
                    other muscle and joint pains. It is great also to be associating with massage
                    and body works to relieve stress and tension.
                </p>
                <h4>Vesta Myofascial Release therapy with RET Diathermy</h4>
                <figure><Img fluid={data.vesta.childImageSharp.fluid}/>
                    <figcaption>RET (Resistive Electric Transfer) Diathermy + IASTM (Instrument
                        Assisted Soft Tissue Mobilization) + Low Frequency Electric Manipulation (Magic
                        Gloves). Made in Korea.</figcaption>
                </figure>
                <p>
                    RET Diathermy converts electromagnetic energy to thermal energy. This thermal
                    energy is transmitted to a body part through monopolar or bipolar plates, metal
                    tools, and electrodes. The body’s response to heat is vasodilation. It helps in
                    healing injuries, improving circulation, and alleviating pain. VESTA generates
                    deep heat into the damaged tissue to accelerate intra and extra cellular
                    exchanges and also aids in muscle relaxation.
                </p>
                <p>
                    IASTM helps in manipulating soft tissues like muscles, tendons, and fascia. With
                    the help of medical grade steel tools, it proves to be effective in breaking
                    down adhesions, tightness, trigger points, and scar tissues. It can be
                    administered as an alternative to sports massage.
                </p>
                <p>
                    Combining the RET Diathermy and IASTM is such a practical idea. The core of
                    VESTA’s RF diathermy treatment is to speed up healing by simultaneously using
                    this IASTM tool that can ease the pain and increase the range of movement in a
                    shorter period of time. The Eastern and Western Influences put together to
                    create a surely interesting effective experience.
                </p>
                <p>
                    Low Frequency Electric Manipulation (Magic Gloves). Making your massages more
                    interesting in both physical experience and technical effects of the modality.
                    This combines electric stimulation of muscles and manual manipulation like
                    massages, myofascial release, or trigger point release. Quite an electric
                    experience.
                </p>
                <h4>Therapeutic Ultrasound</h4>
                <Img fluid={data.primo.childImageSharp.fluid}/>
                <p>The Primo Combination 860 offers dual frequency ultrasound (1MHz and 3MHz)
                    and the complete range of stimulation outputs that can be used individually or
                    simultaneously in combination therapy.</p>
                <p>
                    Therapeutic Ultrasound unit helps in improving circulation and jumpstarting
                    stagnated healing of chronic musculoskeletal conditions. This modality can be
                    used simultaneously with a built in TENS (Transcutaneous Nerve Stimulator) Unit
                    making the Ultrasound transducer head as one of the electrodes in transmitting
                    the pain alleviating electric current.</p>
                <p>Stimulation outputs: two and four pole interferential, Diadynamic, TENS,
                    Sinusoidal, Galvanic and interrupted galvanic, Faradic, Trabert, Medi-Wave,
                    Russian & Microcurrent output.
                </p>
                <p>Diagnostic feature to help locate difficult to pinpoint lesions. Made in UK.</p>
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