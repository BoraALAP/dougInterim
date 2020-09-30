import React from "react"

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import styled from "styled-components"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "bookImage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("====================================")
  console.log(data.book.childImageSharp.fluid)
  console.log("====================================")
  return (
    <Layout>
      <Container>
        <SEO title="Pre-Order Now" />

        <H2>
        First and foremost, thank you for visiting my website, I am truly grateful. 
        </H2>

        <Description>
        I am currently creating a brand new digital experience and new website, which will launch in early November. Until then please check out my new podcast here, and follow me on social media here to keep up to date. For any business requests please feel free to reach out to me here. Until then, I hope you enjoy my newly released book and all I have to offer over on my social channels.
        </Description>

        <H3>MY NEW BOOK, THE CLASSICS VEGANIZED IS NOW AVAILABLE! </H3>

        <Description>
        This book has been a long time coming, and is truly a labor of love and all things VEGAN. I am so full of gratitude and love to be able to finally share it with you all.
        </Description>

        <Description>
        This new book is packed with some of my favourite recipes and “go to” dishes such as Boneless Wings and Calamari, to my signature NY striploin Steak and a brand new recipe for Hickory Smoked Rack of Ribs.
        </Description>

        <Description>
        Please click here to order your copy, or head to my social media pages and find the best link for your region in the world!
        </Description>

        <Description>
        Thank you everyone for the support, and thank you to each and everyone of you who has supported me over the years, it means more than you can imagine.
        </Description>

        <Description>
          <strong>
            Doug McNish
            <br />
            #kaleisthenewbeef
          </strong>
        </Description>

        <ImgContainer fluid={data.book.childImageSharp.fluid} />

        <H2>
          The Classics Veganized: Over 120 Favourite Comfort Food Recipes for a
          Vegan Lifestyle Paperback – Sept. 29 2020
        </H2>

        <Description>
          <i>
            Vegan cuisine is exploding in popularity around the world, and now
            more than ever, people are adopting a plant-based diet or vegan
            lifestyle. Not only can you thrive eating a healthy plant-based
            diet, but also you can now enjoy all those familiar comfort food
            dishes that you have been craving.
          </i>
        </Description>

        <Description>
          <i>
            In The Classics Veganized, you will find over 120 drool-worthy
            dishes that reinvent classic comfort foods with a modern spin.
            Standout vegan dishes that no one would know are meatless! Start
            with appetizers, like Crispy Mushroom Calamari, Cheesy Tex-Mex
            Quesadillas, and Boneless Wings, because really, is there any other
            way to kick-off a meal? You will find lots of hearty mains like
            Hickory Smoked Ribs, Chickpea Pot Pie, Home-Style Meatloaf, White
            Widow Mac and Cheese, and Shepherd’s Pie. Round out dishes with
            sides and salads like Buttermilk Onion Rings, Creamy Caesar Salad,
            and Twice Baked Vegan Taters. Weekend brunch is a must with
            Buttermilk Blueberry Pancakes, Breakfast in Bed Scones, Quiche
            Lorraine, and Sunny Side Up Vegan Eggs with Yolks. Easy-to-make
            vegan desserts put the finishing touch on any meal. Classic desserts
            like Chocolate Fudge Cake with Buttercream Frosting, Soft and Chewy
            Chocolate Chip Cookies, and Pineapple Upside Down Cake are a breeze
            to throw together with basic ingredients. The Classics Veganized
            also includes recipes to make your own vegan pantry staples and
            condiments from cheeses and butters to dressings and sauces.
          </i>
        </Description>
        <List id="list">
          <PurchaseBox>
            <H4>Canada</H4>
            <Buttons>
              <a
                href="https://www.amazon.ca/gp/product/0735237069/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=0735237069&linkCode=as2&tag=dougmcnish-20&linkId=60e5efb3776b43105b83e3d4ba75734a"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Amazon</Button>
              </a>
              <a
                href="https://www.chapters.indigo.ca/en-ca/books/product/9780735237063-item.html?s_campaign=aff-001-5056941-Penguin+Random+House+Canada+Limited-PLA-books-00-09-13710563-8727424&cjevent=5c2672f29adb11ea802f07b50a24060b"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Chapters Indigo</Button>
              </a>
            </Buttons>
          </PurchaseBox>
          <PurchaseBox>
            <H4>USA</H4>
            <Buttons>
              <a
                href="https://www.amazon.com/gp/product/0735237069?tag=randohouseinc7986-20#ace-6796040015"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Amazon</Button>
              </a>
              <a
                href="https://www.barnesandnoble.com/w/the-classics-veganized-doug-mcnish/1136201449;jsessionid=D42EF3C0C9AB07D7D5929C4BA2503DBF.prodny_store01-atgap14?ean=9780735237063&st=AFF&2sid=Random%20House%20Inc_8373827_NA&sourceId=AFFRandom%20House%20Inc"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Barnes and Noble</Button>
              </a>
              <a
                href="https://www.booksamillion.com/p/9780735237063?AID=10747236&PID=8373827&SID=PRHEFFDF5A7F1--9780735237063&cjevent=8318bf789adb11ea8035089b0a240611#"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Books a Million (BAM)</Button>
              </a>
            </Buttons>
          </PurchaseBox>
          <PurchaseBox>
            <H4>Eastern Europe</H4>
            <Buttons>
              <a
                href="https://www.amazon.de/Classics-Veganized-Favourite-Comfort-Lifestyle-ebook/dp/B084787TB9/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=the+classics+veganized&qid=1598632675&sr=8-1"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Amazon</Button>
              </a>
            </Buttons>
          </PurchaseBox>
          <PurchaseBox>
            <H4>Western Europe and the UK</H4>
            <Buttons>
              <a
                href="https://www.amazon.co.uk/Classics-Veganized-Favourite-Comfort-Lifestyle-ebook/dp/B084787TB9/ref=sr_1_1?dchild=1&keywords=the+classics+veganized&qid=1592841073&sr=8-1"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Amazon</Button>
              </a>
            </Buttons>
          </PurchaseBox>
          <PurchaseBox>
            <H4>Australia</H4>
            <Buttons>
              <a
                href="https://www.amazon.com.au/gp/offer-listing/0735237069/ref=tmm_pap_new_olp_0?ie=UTF8&condition=new&qid=1597260208&sr=8-1"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Amazon</Button>
              </a>
            </Buttons>
          </PurchaseBox>
        </List>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  justify-items: start;
  margin-top: 175px;
`

const ImgContainer = styled(Img)`
  width: 60%;
  margin: 56px auto;
`
const H2 = styled.h2`
  max-width: 600px;
  font-size: 1.25em;
  line-height: 1.5em;
  margin-bottom: 0;
`
const H3 = styled.h3`
  max-width: 600px;
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 0;
`

const H4 = styled.h4`
  max-width: 600px;
  font-size: 0.875em;
  line-height: 0.875em;
  margin-bottom: 0;
`
const Description = styled.p`
  font-size: 0.875em;
  line-height: 2em;
  margin-bottom: 0;
`

const List = styled.div`
display: grid;
grid-gap: 32px;
width: 100%;
`
const Button = styled.button`
  padding: 8px 16px;
  color: ${({ theme }) => theme.color.positive};
  background-color: ${({ theme }) => theme.color.negative};
  width: 100%;
`
const Buttons = styled.div`display: grid;
grid-auto-flow: row;
grid-gap: 8px;



@media screen and (min-width: 768px) { 
  grid-auto-flow: column;
  justify-content: start;
}
`
const PurchaseBox = styled.div`display: grid;
grid-gap: 16px;`

export default IndexPage
