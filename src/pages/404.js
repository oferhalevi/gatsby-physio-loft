import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {Box, AnimatedBox, Button} from '../elements'

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

const Default404 = ({data}) => {
    return <Layout>
        <PBox py={6} px={[6, 6, 8, 10]}>
            <h1>Page not found</h1>
        </PBox>
        <Content py={0}>
            <PBox px={[6, 6, 8, 10]}>
                <p style={{
                    fontSize: '1.5rem'
                }}>
                    Oops... The page you're looking for has been removed or relocated.
                    <p>
                        <Link to="/">Try this instead</Link>
                    </p>
                </p>
            </PBox>
        </Content>
    </Layout>
}

export default Default404;