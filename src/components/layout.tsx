import React from 'react'
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'
import {graphql, Link, useStaticQuery} from 'gatsby'
import {readableColor} from 'polished'
import 'typeface-work-sans'
import {Box, Flex} from '../elements'
import theme from '../../config/theme'
import reset from '../styles/reset'
import Logo from './logo'

const GlobalStyles = createGlobalStyle `
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }

    address {
      font-style: normal;
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Acumin Pro', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: white;
    font-size: 18px;
  }
  a {
    transition: all 0.3s ease-in-out;
    color: black;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  
  ${reset}
`

const isPartiallyActive = ({isPartiallyCurrent} : {
  isPartiallyCurrent: boolean
}) => isPartiallyCurrent
  ? {
    className: 'navlink-active navlink'
  }
  : {
    className: 'navlink'
  }

const PartialNavLink = ({
  children,
  to,
  ...rest
} : {
  children: React.ReactNode;
  to: string
}) => (
  <Link getProps={isPartiallyActive} to={to} {...rest}>
    {children}
  </Link>
)

const Wrapper = styled.div `
  display: grid;
  grid-template-columns: ${ (props) => props.theme.sidebarWidth.big} 1fr;
  @media (max-width: ${ (props) => props.theme.breakpoints[4]}) {
    grid-template-columns: ${ (props) => props.theme.sidebarWidth.normal} 1fr;
  }

  @media (max-width: ${ (props) => props.theme.breakpoints[2]}) {
    grid-template-columns: 1fr;
  }
`

const SideBarInner = styled(Box) < {
  bg: string
} > `
  position: fixed;
  height: 100%;
  width: ${ (props) => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  background: ${ (props) => props.bg};

  @media (max-width: ${ (props) => props.theme.breakpoints[4]}) {
    width: ${ (props) => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${ (props) => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }

  svg {
    fill: ${ (props) => readableColor(`${props.bg}`)};
  }
`

const Nav = styled(Flex) < {
  color: string
} > `
  a {
    text-decoration: none;
    color: ${ (props) => readableColor(`${props.color}`)};
    font-size: ${ (props) => props.theme.fontSizes[3]};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${ (props) => props.theme.colors.primary};
    }

    @media (max-width: ${ (props) => props.theme.breakpoints[2]}) {
      font-size: ${ (props) => props.theme.fontSizes[2]};
      margin-left: ${ (props) => props.theme.space[4]};
    }

    @media (max-width: ${ (props) => props.theme.breakpoints[1]}) {
      font-size: ${ (props) => props.theme.fontSizes[1]};
      margin-left: ${ (props) => props.theme.space[3]};
    }

    @media (max-width: ${ (props) => props.theme.breakpoints[0]}) {
      font-size: ${ (props) => props.theme.fontSizes[0]};
      margin-left: ${ (props) => props.theme.space[2]};
    }
  }
`

const Main = styled.main `
  @media (min-width: calc(${ (props) => props.theme.breakpoints[2]} + 1px)) {
    grid-column-start: 2;
  }
`

const Footer = styled.footer < {
  color: string
} > `
  position: fixed;
  width: ${ (props) => props.theme.sidebarWidth.big};
  bottom: 0;

  background: ${ (props) => props.color};

  color: ${ (props) => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')};

  a {
    color: ${ (props) => readableColor(`${props.color}`)};
    text-decoration: none;
    &:hover {
      color: ${ (props) => props.theme.colors.primary};
    }
  }

  @media (max-width: ${ (props) => props.theme.breakpoints[4]}) {
    width: ${ (props) => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${ (props) => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }
`

const MailTo = styled.a `
display: block;`;
const WhatsApp = styled.a `
  display: inline-block;
  background: green;
  color: white !important;
  padding:  8px 16px;
  font-weight: 500;
  height: 16px;
  border-radius: 2em;
  margin-bottom: 16px;
  margin-right: 16px;
`;

type LayoutProps = {
  children: React.ReactNode
} & typeof defaultProps

const defaultProps = {
  color: 'white'
}

interface QueryResult {
  navigation : {
    nodes: {
      name: string,
      link: string
    }[]
  }
}

const Layout = ({children, color} : LayoutProps) => {
  const data : QueryResult = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <> <GlobalStyles/>
      <Wrapper>
        <SideBarInner bg={color} as="aside" p={[6, 6, 8]}>
          <Flex
            flexWrap="nowrap"
            flexDirection={['row', 'row', 'row', 'column']}
            alignItems={['center', 'center', 'center', 'flex-start']}
            justifyContent="space-between">
            <Box width={['3rem', '4rem', '5rem', '6rem']}>
              <Link to="/" aria-label="LekoArts, Back to Home">
                <Logo/>
              </Link>
            </Box>
            <Nav
              color={color}
              mt={[0, 0, 0, 10]}
              as="nav"
              flexWrap="nowrap"
              flexDirection={['row', 'row', 'row', 'column']}
              alignItems="flex-start">
              {data
                .navigation
                .nodes
                .map((item) => (
                  <PartialNavLink to={item.link} key={item.name}>
                    {item.name}
                  </PartialNavLink>
                ))}
            </Nav>
          </Flex>
        </SideBarInner>
        <Main>{children}</Main>
        <Footer color={color}>
          <Box p={[6, 6, 8]} fontSize={0}>
            <p>
              <WhatsApp href="https://wa.me/85295433368" target="_blank">WhatsApp Us</WhatsApp>
              <a href="tel:+852-95433368">+852 9543368</a>
              <MailTo
                href="mailto:info@physioloft.com.hk?subject=Hello%2C%20Physio%20Loft"
                target="_blank">info@physioloft.com.hk
              </MailTo>
            </p>
            Fisica Integrated Ltd. t/a Physio Loft<br/>
            <address>
              14F Union Commercial Building<br/>
              12 Lyndhurst Terrace<br/>
              Central, Hong Kong
            </address>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8841111461006!2d114.15240631533197!3d22.282379349175205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007b41667357%3A0x33a8a6acc76d9326!2sUnion%20Commercial%20Building%2C%2012-16%20Lyndhurst%20Terrace%2C%20Central!5e0!3m2!1sen!2shk!4v1602171554663!5m2!1sen!2shk"
              width="100%"
              height="280"
              frameBorder="0"
              style={{
              border: 0,
              marginTop: 16
            }}></iframe>
          </Box>
        </Footer>
      </Wrapper>
    </>
  </ThemeProvider>
  )
}

export default Layout

Layout.defaultProps = defaultProps

const query = graphql `
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`
