import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import {Box, AnimatedBox, Button} from '../elements'
import Img from 'gatsby-image'
import {animated, useSpring, config} from 'react-spring'
import {graphql} from 'gatsby'

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
                <p style={{
                    fontSize: '1.5rem'
                }}>Physio
                    Loft includes a private physiotherapy treatment room, and a clinical exercise
                    space with Pilates equipment for Physio-Pilates programs.
                </p>
                <h4>Electrotherapy Modalities</h4>
                <p>
                    Physio Loft is equipped with various electrotherapy modalities that go well with
                    manual therapy. Treatment sessions feature both eastern and western influences.
                    This approach is proven to be very effective in managing various musculoskeletal
                    conditions like neck pain or stiff neck, low back pain syndromes, shoulder and
                    upper back problems, hip and pelvic joint dysfunctions, and other muscle and
                    joint pains. It is also effective in combination with sports massage and other
                    treatments to relieve stress and tension.

                </p>
                <h5>Vesta - RET Diathermy with IASTM</h5>
                <Img fluid={data.vesta.childImageSharp.fluid}/>
                <p>
                    RET (Resistive Electric Transfer) Diathermy converts electromagnetic energy to
                    thermal energy. This thermal energy is transmitted to a body part through
                    monopolar or bipolar plates, metal tools, and electrodes. The body’s response to
                    heat is vasodilation. It helps in healing injuries, improving circulation, and
                    alleviating pain. VESTA generates deep heat into the damaged tissue to
                    accelerate intra- and extra-cellular exchanges and aids in muscle relaxation.
                </p>
                <p>
                    IASTM (Instrument Assisted Soft Tissue Mobilization), mainly for myofascial
                    release therapy, helps in releasing tightened soft tissues like muscles,
                    tendons, and fascia. With the help of medical grade steel tools, it proves to be
                    effective in breaking down adhesions, trigger points, and scar tissues. It can
                    be administered as an alternative to sports massage.

                </p>
                <p>
                    Combining the RET Diathermy and IASTM is such a practical idea. The core of
                    VESTA’s RF diathermy treatment is to speed up healing by simultaneously using
                    this IASTM tool that can ease the pain and increase the range of movement in a
                    shorter period of time. The eastern and western Influences are combined to
                    create an interesting and effective experience.

                </p>
                <p>
                    Low Frequency Electric Manipulation (Magic Gloves), a unique combination of
                    electric stimulation and manual manipulation, elevates the massage experience
                    and enhances its technical effects.

                </p>
                <p style={{
                    opacity: 0.5
                }}>
                    Made in Korea</p>
                <h5>The Primo Combination 860 Therapeutic Ultrasound</h5>
                <Img fluid={data.primo.childImageSharp.fluid}/>
                <p>Therapeutic Ultrasound unit helps in improving circulation and jumpstarting
                    stagnated healing of chronic musculoskeletal conditions. This modality can be
                    used simultaneously with a built in TENS (Transcutaneous Nerve Stimulator) unit
                    making the ultrasound transducer head as one of the electrodes in transmitting
                    the pain alleviating electric current. This also has a diagnostic feature to
                    help locate difficult pinpoint lesions.
                </p>
                <p
                    style={{
                    marginBottom: 50,
                    opacity: 0.5
                }}>
                    Made in the UK</p>
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