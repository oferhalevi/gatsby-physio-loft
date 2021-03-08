import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

type Props = {} & typeof defaultProps

const defaultProps = {
  title: '',
  desc: '',
  banner: '',
  pathname: '',
  node: {
    modifiedTime: '',
    birthTime: ''
  },
  individual: false
}

const SEO = ({
  title,
  desc,
  banner,
  pathname,
  node,
  individual
} : Props) => {
  const {site} = useStaticQuery(query)

  const {
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      siteLanguage
    }
  } = site

  const seo = {
    title: title || defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || ''}`
  }

  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage}/>
      <meta name="description" content={seo.description}/>
      <meta name="image" content={seo.image}/> {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      <link rel="stylesheet" href="https://use.typekit.net/aee4gtg.css"></link>
      <script>{'if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"oferhalevi@gmail.com",utcoffset:"8"}))};sessionStorage.setItem("_swa","1");'}
      </script>
    </Helmet>
  )
}

export default SEO;

SEO.defaultProps = defaultProps;

const query = graphql `
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        defaultTitle: titleAlt
        defaultDescription: description
        defaultBanner: logo
        headline
        siteLanguage
        ogLanguage
        author
      }
    }
  }
`