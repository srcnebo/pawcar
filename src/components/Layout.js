import React from 'react'

import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'
import LayoutStyles from './Layout.module.scss'


const Layout = (props) => {
  return (
    <>
    <div className={LayoutStyles.headerWrapper}>
      <Header/>
    </div>
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        {props.children}
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Layout