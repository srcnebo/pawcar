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
          fluid (maxWidth: 2560){
            ...GatsbyContentfulFluid
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
                fluid (maxWidth: 960){
                  ...GatsbyContentfulFluid
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
      <Hero slogan={data.contentfulHero.slogan} image={data.contentfulHero.heroImage.fluid.src} subHeading={data.contentfulHero.subHeading}/>

      <section id="about" className={IndexStyles.aboutWrapper}>
        <div className={IndexStyles.about}>
          <h1 className={IndexStyles.sectionHeader}>{data.contentfulAbout.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.contentfulAbout.content.childMarkdownRemark.html}} className={IndexStyles.contentBody}></div>
        </div>
        <div className={IndexStyles.whyUs}>
          <div>
            <BsAwardFill size={48} style={{fill:'#1D1D2C'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Quality Control</h3>
            <p className={IndexStyles.contentBody}>We always ensure that our products are free from any fault before the final purchase. It eliminates any extra costs customers have to pay after delivery. We want you to enjoy your new purchase as soon as possible!</p>
          </div>
          <div>
            <GiReceiveMoney size={48} style={{fill:'#1D1D2C'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Value for Money</h3> 
            <p className={IndexStyles.contentBody}>We consider three major factors when purchasing vehicles: safety, style, and budget are equally important. As our customer you dont have to compromise on any of it. Your satisfaction is our priority!</p>
          </div>
          <div>
            <FaHandshake size={48} style={{fill:'#1D1D2C'}}/>
            <h3 className={IndexStyles.sectionSubHeader}>Trust</h3>
            <p className={IndexStyles.contentBody}>PAWCAR was est. in 2010 in Poland. Thanks to chain of recommendations now we are serving customers from all over the world. No matter how demaning the order is, we deliver on time and within your budget. It's been 10 years, thank you for believing in us!</p>
          </div>
        </div>
      </section>

      <section id="services" className={IndexStyles.servicesWrapper}>
        <div className={IndexStyles.services}>
          <h1 className={IndexStyles.sectionHeader}>Our Services</h1>
          <div className={IndexStyles.reverseFlex}>
            {servicesArray.map((edge, i)=>{
              return (
                <div key={i} className={IndexStyles.servicesGrid}>
                  <div className={IndexStyles.servicesImage} style={{backgroundImage:`url(${edge.node.image.fluid.src})`}}></div>
                  <div>
                    <div className={IndexStyles.servicesText} id={edge.node.systemName}>
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
