import React from "react"

import Layout from "../components/Layout"
import Head from '../components/Head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Sup guys!</h1>
      <p>This is some text on the home page</p>
    </Layout>
  )
}

export default IndexPage
