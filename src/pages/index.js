import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import HeroSection from "../components/Hero/index"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
