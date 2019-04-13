import React from "react"

import Links from "../components/links"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class About extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Shreya Shankar">
        <SEO
          title="About"
          keywords={[`about`]}
        />
        <Links/>
        <div style={{marginBottom: '40px'}}></div>
        <p>
          I'm a software engineer at an e-commerce company, where I work on productionalizing recommendation models. 
        </p>
        <p>
          My goal in keeping this blog is to become a better engineer and researcher.
        </p>
      </Layout>
    )
  }
}