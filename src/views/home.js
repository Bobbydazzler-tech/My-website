import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quaint Ironclad Goldfish</title>
        <meta property="og:title" content="Quaint Ironclad Goldfish" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">Web Development</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">App Development</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">Graphic Design</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">Contact Me</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Web Development</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">App Development</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">Graphic Design</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact Me</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">View Web Development Projects</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Explore App Development Work</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Explore my web development projects and skills.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Discover my app development projects and expertise.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              View my graphic design portfolio and capabilities.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch to discuss your project needs.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">View Portfolio</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Showcasing my skills as a Web Developer, App Developer, and
              Graphic Designer
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to Ian Kariuki&apos;s Portfolio
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Web Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">App Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Creative Designs</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Customized and Responsive Websites
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">App Development</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">Graphic Design</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">
              Contact me now to discuss your project!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let&apos;s work together to create stunning websites, innovative
              apps, and captivating graphics.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to take your digital presence to the next level?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Web Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">App Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Graphic Design</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Expertise in creating responsive and user-friendly websites using
              HTML, CSS, and JavaScript.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Proficient in developing mobile applications for both Android and
              iOS platforms using React Native and Flutter.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Creative design skills to deliver visually appealing graphics for
              branding and marketing purposes using Adobe Creative Suite.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144">$99</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145">$199</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146">$299</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149">$999</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152">$1999</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153">Get Started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155">$2999</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162">Custom Web Development</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163">Responsive Design</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164">SEO Optimization</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165">Mobile App Development</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166">UI/UX Design</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167">Cross-Platform Compatibility</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169">Graphic Design Services</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170">Brand Identity Creation</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171">
              Print and Digital Assets Design
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186">Web Development</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187">App Development</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188">Graphic Design</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189">Portfolio Showcase</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190">
              I specialize in creating responsive and user-friendly websites
              using HTML, CSS, and JavaScript.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191">
              I have experience developing mobile applications for both Android
              and iOS platforms using languages such as Java and Swift.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192">
              I have a keen eye for design and can create visually appealing
              graphics using tools like Adobe Photoshop and Illustrator.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193">
              View my portfolio to see examples of my work in web development,
              app development, and graphic design.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194">5 stars - Excellent work!</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195">
              Ian is a talented graphic designer. He created stunning visuals
              for our marketing campaigns that truly captured our brand essence.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196">
              Working with Ian on our mobile app project was a breeze. His
              technical skills and problem-solving abilities are top-notch.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197">
              Ian&apos;s expertise in web development helped us revamp our
              online presence. The results were beyond what we imagined.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198">
              Ian did an amazing job developing our company website. His
              attention to detail and creativity exceeded our expectations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199">Client Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202">David Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205">Marketing Manager, XYZ Inc.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206">CTO, Tech Solutions Ltd.</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207">Creative Director, Design Co.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208">
              Feel free to reach out to me for any inquiries or project
              collaborations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209">Contact Me</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Physical Address</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Email</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212">
              Address: 123 Web Developer Street, City, Country
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213">Email: iankariuki@example.com</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214">Portfolio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216">Contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">About Me</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
