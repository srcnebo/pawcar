import React from 'react'
import { Link } from "gatsby"
import Head from '../components/Head'

import Layout from '../components/Layout'

const Gallery = () => {

  return (
    <Layout>
      <Head title="Home"/>
      <h1>This is the Gallery page</h1>
      <p><Link to="https://www.google.com">Go to google</Link></p>
    </Layout>
  )
}

export default Gallery