import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from '../components/Head'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

import IndexStyles from "./index.module.scss"
import { FaRegHandshake } from 'react-icons/fa'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { BsAward } from 'react-icons/bs'



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHero{
        slogan
        subHeading
        heroImage{
          resize (width: 1920, height: 900){
            src
          }
        }
      }
      allContentfulServices{
        edges{
            node{
              title
              content{
                childMarkdownRemark{
                  html
                }
              }
              image {
                resize (width: 640, height: 426){
                  src
                }
              }
            }
          }
        }
      contentfulAbout{
        title
        content{
          childMarkdownRemark{
            html
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Home"/>
      <Hero slogan={data.contentfulHero.slogan} image={data.contentfulHero.heroImage.resize.src} subHeading={data.contentfulHero.subHeading}/>
      <section id="about" className={IndexStyles.aboutWrapper}>
        <div className={IndexStyles.about}>
          <h1 className={IndexStyles.sectionHeader}>{data.contentfulAbout.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulAbout.content.childMarkdownRemark.html}} className={IndexStyles.contentBody}></div>
        </div>
        <div className={IndexStyles.whyUs}>
          <div>
            <BsAward size={48} style={{fill:'#8f2c2c'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Premium quality</h3>
            <p className={IndexStyles.contentBody}>We premium products as well as customer service.</p>
          </div>
          <div>
            <AiOutlineFieldTime size={48} style={{fill:'#8f2c2c'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Time</h3> 
            <p className={IndexStyles.contentBody}>We always deliver on time</p>
          </div>
          <div>
            <FaRegHandshake size={48} style={{fill:'#8f2c2c'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Trust</h3>
            <p className={IndexStyles.contentBody}>We have been on the market since 12 years </p>
          </div>
        </div>
      </section>
      <section id="services" className={IndexStyles.servicesWrapper}>
        <div className={IndexStyles.services}>
          <h1 className={IndexStyles.sectionHeader}>Our Services</h1>
        
          <div className={IndexStyles.servicesGrid}>
              {data.allContentfulServices.edges.map((edge)=>{
                return (
                  <>
                    <div><img alt={`Services ${edge.node.title}`} src={edge.node.image.resize.src} className={IndexStyles.servicesImage}/></div>
                    <div>
                      <h2 className={IndexStyles.sectionSubHeader}>{edge.node.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: edge.node.content.childMarkdownRemark.html }} className={IndexStyles.contentBody}></div>
                    </div>
                  </>
                )
              })}
          </div>
        </div>
      </section>
      
      <section id="contact" className={IndexStyles.contactWrapper}>
        <div className={IndexStyles.contact}>
          <h1 className={IndexStyles.sectionHeader}>Contact Us</h1>
          <ContactForm/>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
