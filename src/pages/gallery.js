import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

import Head from '../components/Head'
import Layout from '../components/Layout'
import galleryStyles from "./gallery.module.scss"


const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulGallery{
        gallery
        images{
          resize(width:600, height:600 ){
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Gallery"/>
      <div className={galleryStyles.galleryContainer}>
        <h2 className={galleryStyles.galleryHeading}>{data.contentfulGallery.gallery}</h2>
        <div className={galleryStyles.galleryGrid}>
          {data.contentfulGallery.images.map((image,i) => (
            <div key={i}>
              <img src={image.resize.src} alt={`portfolioItem ${i}`}/>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Gallery