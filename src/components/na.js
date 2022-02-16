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


const Resume = () => {

  return (
    <div className="paper">
      <Header />
      <Sidebar />
      <div className="paper-left">
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
{/* 
          <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
            <div style={{ flex: '1', fontWeight: '500' }}>
              SmartSource - Solderworks - BIRD Analytics
            </div>
            <div>
              June 2014 - Present
            </div>
          </div> */}
          {/* <h4 style={{ display: 'inline-block' }}>SmartSource - Solderworks - BIRD Analytics</h4> */}
          {/* &nbsp; */}
          {/* June 2014 - Present */}
          {/* <p>
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


          </p> */}
          {/* <p>
            I worked as a project manager and lead developer for this consulting company.
            We specialized in providing custom solutions to business is all aspects of their operations.
            This included system integration, administration tools, automation, and business strategy.

            Often we worked on the existing platforms available at the company, providing me exposure to lot's
            of different languages and development environments.

          </p> */}


          <h3>Clients</h3>
          <h4>Silver Oak Wineries</h4>
          <a href="https://www.silveroak.com" className="project-link">silveroak.com</a>
          <a href="https://www.twomey.com" className="project-link">twomey.com</a>
          <a>Point of Sale</a>

          <p>
            Created ERP system that integated traditional POS and eCommerce purchase orders with Great Plains.
          </p>
          <p>
            <b>Project Manager / Lead Developer</b>
            In addition to managing the ecommerce websites and integration, I was also responsible for the
            Point of Sale, and admin applications. A major player in the Napa Valley wine community,
            The custom administrator applications managed all aspects of the
            business including inventory, shipping, products, business reports, etc.

          </p>
          <h4>WineXRay</h4>
          <a href="https://www.winexray.com" className="project-link">winexray.com</a>
          <p>
            <b>Project Manager / Lead Developer</b>
            I worked with the owner of this company to develop the software that powers this b2b product.
            WineXRay provides real-time analysis of berries and wine during the vinification process.
            Working closely with the founder of WineXRay, we automated the analysis technique,
            and provided a variety of graphs and reports to analyze the data produced.

          </p>
          <h4>Macom</h4>
          <a href="https://www.macom.com/" className="project-link">macom.com</a>
          <p>
            <b>Project Manager / Lead Developer</b>
            A leader in the US semi-conductor industry, I worked with the Macom team to provide
            administrator tools to streamline and provide quality insurance in their business operations.

          </p>
          <h4>Allegro MicroSystems</h4>
          <a href="https://www.allegromicro.com/" className="project-link">allegromicro.com</a>
          <p>
            <b>Project Manager / Lead Developer</b>
            Another player in the semi-conductor industry, we provided Allegro additional tools to manage
            their product database, and implented many of their customer portals.

          </p>
        </div>

      </div>


    </div>
  )
}

export default Resume;