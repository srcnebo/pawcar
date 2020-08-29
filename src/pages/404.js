import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>Click <Link to="/">here</Link> to return to the home page</p>
      
    </Layout>
  )
}

export default  NotFound