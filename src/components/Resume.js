import React from 'react';
import Section from './Section';
import Header from './Header';
import Sidebar from './Sidebar';


const nameStyle = {
  width: '100%',
  // backgroundColor: '#747474',
  fontFamily: 'Roboto',
  fontSize: '22px',
  borderBottom: '1px solid #ccc'
}
const paperStyle = {
  width: '8.5in',
  // width: '100%',
  height: '11in',
  margin: '0'
}

const paperRightStyle = {
  width: '6.5in',
  display: 'inline-block'
}


const Resume = () => {

  return (
    <div
      style={paperStyle}
      // className="paper"
    >
      <Header />
      <Sidebar />
      <div
        style={paperRightStyle}
        // className="paper-left"
      >
        <div style={{ padding: '20px' }}>

          <Section
            title="SmartSource - Solderworks - BIRD Analytics"
            subtitle="June 2014 - Present"
          >
            <p>
              In 2014 I joined SmartSource Management as a Jr. developer working out of Seattle.
              We specialized in providing technical and business consulting for companies of all sizes.
              {/* We specialized in providing custom solutions to business is all aspects of their operations. */}
              This included system integration, administration tools, automation, ecommerce, and business strategy.
            </p>
            <p>
              By 2017 I was managing several clients - from quoting, design, and architecture through implementation and delivery.
              During this time we expanded our services and launched the Solderworks brand.
              Solderworks provided an incubator space and engineering services for companies developing IOT solutions.
              I was moved out to Denver, and oversaw the smooth transition of our existing clients to our newly branded company.
            </p>
            <p>
              In 2021, Solderworks was acquired by BIRD Analytics - an analytics and intelligence solution for big data.
              I was promoted to head of development, and oversaw our US and India teams.
              During this transition, I worked to develop culture in my department, institute company processes, and offer technical advisement.
              As a department head, I tracked the health and profitability of all projects in our department.
              I continued to maintain relationships with our existing clients, and oversaw the continued quality of our deliverables.
            </p>
          </Section>
          <Section
            title="Silver Oak Wineries"
          >
            <p>
              Actively managed a family of four ecommerce web applications. Built and maintained custom ERP system
              to process purchase orders including payment, shipment, and accounting integration.
              {/* Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains. */}
            </p>
          </Section>
          <Section
            title="Concept Services"
            minititle="Foodservice Equipment"
          >
            <p>
              Designed and developed an integrated import tool to transition projects from a quoting platform
              to Sage ERP. This process famously reduced a manual 4hr import process to 15 minutes.
              Created an ecommerce platform with complex authentication layers and customizable shop experiences.
            </p>
          </Section>
          <Section
            title="WineXRay"
            minititle="Phenolic insights and Analytics"
          >
            <p>
              Worked with the founder to use his proprietary method of measuring wine phenolics to create a SAAS product.
              This service provides rapid insight to the phenolic properties of berries and wine, enabling wine makers to make
              real-time data driven decisions.
            </p>
          </Section>
          <Section
            title="MACOM"
            minititle="Partners from RF to Light"
          >
            <p>
              Created a family of internal administrative applications, including a central product repository that provides
              APIs, authentication, and priviledged file access to a variety of applications.
            </p>
          </Section>
          <Section
            title="Allegro Microsystems"
            minititle="Semiconductor Technologies"
          >
            <p>
              Created a family of internal administrative appliactions. The central application was a product hub
              that served as a central repository of product data. 
            </p>
          </Section>
          <Section
            title="Four Seasons Heating & Cooling"
          >
            <p>
              Created Mobile and Desktop web based applications to track material pickups and schedule inspections
              across jobistes.

            </p>
          </Section>
          {/* <Section
            title="FEDA"
          >
            <p>
              Priviledged
            </p>
          </Section> */}
        </div>

      </div>


    </div>
  )
}

export default Resume;