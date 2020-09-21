import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import Head from '../components/Head'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

import IndexStyles from "./index.module.scss"
import { FaHandshake } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsAwardFill } from 'react-icons/bs'

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
              systemName
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

  const nameOrder = [
        "truck",
        "heavy",
        "parts",
        "import",
      ];

  let servicesArray = [];

  // Sort the array of objects based on nameOrder array
  for (const service of data.allContentfulServices.edges) {
    const inputIndex = nameOrder.findIndex(
      (value) => value === service.node.systemName
    );
    if (inputIndex >= 0) {
      servicesArray[inputIndex] = service;
    }
  }
  // Filter empty elements
  servicesArray = servicesArray.filter(() => true);

  

  return (
    <Layout>
      <Head title="Home"/>
      <Hero slogan={data.contentfulHero.slogan} image={data.contentfulHero.heroImage.resize.src} subHeading={data.contentfulHero.subHeading}/>

      <section id="services" className={IndexStyles.servicesWrapper}>
        <div className={IndexStyles.services}>
          <h1 className={IndexStyles.sectionHeader}>Our Services</h1>
          <div className={IndexStyles.reverseFlex}>
            {servicesArray.map((edge, i)=>{
              return (
                <div key={i} className={IndexStyles.servicesGrid}>
                  <div className={IndexStyles.servicesImage} style={{backgroundImage:`url(${edge.node.image.resize.src})`}}></div>
                  <div>
                    <div className={IndexStyles.servicesText}>
                      <h2 className={IndexStyles.sectionSubHeader}>{edge.node.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: edge.node.content.childMarkdownRemark.html }} className={IndexStyles.contentBody}></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="about" className={IndexStyles.aboutWrapper}>
        <div className={IndexStyles.about}>
          <h1 className={IndexStyles.sectionHeader}>{data.contentfulAbout.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulAbout.content.childMarkdownRemark.html}} className={IndexStyles.contentBody}></div>
        </div>
        <div className={IndexStyles.whyUs}>
          <div>
            <BsAwardFill size={48} style={{fill:'#8f2c2c'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Pawcar Quality Control</h3>
            <p className={IndexStyles.contentBody}>We always insure that a product is free from any fault before the final purchase in order to eliminate any extra costs customers have to pay after delivery. We want you to enjoy your new purchase as soon as possible!</p>
          </div>
          <div>
            <GiReceiveMoney size={48} style={{fill:'#8f2c2c'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Value for Money</h3> 
            <p className={IndexStyles.contentBody}>We consider three major factors when purchasing vehicles: safety, style, and budget are equally important so our customers don’t have to compromise on any of it. Your satisfaction is our priority!</p>
          </div>
          <div>
            <FaHandshake size={48} style={{fill:'#8f2c2c'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Trust</h3>
            <p className={IndexStyles.contentBody}>PAWCAR was est. in 2008 in Poland. Since then we have been serving customers from all over the world. It has been a learning experience to meet different challenging orders. Thank you for believing in us!</p>
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
