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
              We specialized in providing custom solutions to business is all aspects of their operations.
              This included system integration, administration tools, automation, and business strategy.
            </p>
            <p>
              By 2017 I was managing several clients - from quoting, design, and architecture through the implementation and delivery.
              During this time we expanded our services, providing an incubator space and engineering services for companies developing IOT solutions.
              I was moved out to Denver, and oversaw the smooth transition of our existing clients to our newly branded company, Solderworks.
            </p>
            <p>
              In 2020, Solderworks was acquired by BIRD Analytics - a Business Analytics and Intelligence for Big Data company.
              I was promoted to head of development, and oversaw our US and India teams.
              I worked to integrate these two teams - developing culture, company processes, and technical advisement.
              I continued to maintain relationships with out existing clients, and oversaw the quality of our deliverables.
              In addition, I tracked the health and profitability of our department.


            </p>
          </Section>
          <Section
            title="Silver Oak Wineries"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
          <Section
            title="Concept Services"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
          <Section
            title="MACOM"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
          <Section
            title="Four Seasons Heating & Cooling"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
          <Section
            title="FEDA"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
          <Section
            title="Allegro Microsystems"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
          <Section
            title="WineXRay"
          >
            <p>
              Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
            </p>
          </Section>
        </div>

      </div>


    </div>
  )
}

export default Resume;