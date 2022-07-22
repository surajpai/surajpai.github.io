import { r as registerInstance, h } from './index-e2cdb0b4.js';

const pProfileCss = ".p-profile{padding:10px;display:flex;flex-direction:column;align-items:center}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}.flex{display:flex;justify-content:flex-start;width:100%}.flex-row-position{display:flex;width:100%;justify-content:space-between}.space-around{justify-content:space-around}.direction{flex-direction:row}.small-bold{font-size:small;font-weight:bold}@media only screen and (max-width: 600px){.direction{flex-direction:column !important;width:auto;align-items:center}}.bold{font-weight:bold}.width-300{width:40%}.width-500{width:60%}@media only screen and (min-width: 600px){.width-900{width:900px}}.text-align-center{text-align:center}h1.title{font-size:1.4rem;font-weight:500;padding:15px}";

const Profile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showCalendar = false;
    this.companies = [];
    this.calendlyWidget = () => h("span", null, h("div", { class: "calendly-inline-widget", "data-url": "https://calendly.com/surajpai", style: { minWidth: '320px', height: '630px', position: 'absolute', right: '5%', bottom: '5%', zIndex: '10' } }));
    this.companies = [
      {
        companyName: 'Infosys Limited',
        designation: 'Technology Lead',
        duration: 'Feb 2015 – Till Date',
        projects: [{
            domain: 'Auditing, Services',
            tenure: 'Nov 2020 till date',
            details: 'Designed and configured the microservice architecture for a greenfield ecosystem that enables auditors to collaborate and structure the audit process. This workflow system improves the quality of data flow and coordinate timely audit submissions.',
            roles: [
              '• Designing the workflow process and identify the appropriate design patterns for setting up a cloud-based infrastructure',
              '• Configure the Authentication process using session based oAuth for authorized users within the domain as well as client access',
              '• Configure access-control list (ACL) based roles for external client users by enabling Active directory synchronization (Azure AD connect)',
              '• Generated build and deployment scripts to automate DevOps pipeline configuration using Kubernetes Helm Charts',
              '• Built architecture diagrams and wiki documentation for functional guidance to consumers',
              '• Implemented a micro-frontend architectural approach and defined the infrastructure pattern to integrate other micro-frontends',
              '• Built templating tools to generate boilerplate code and spin-up new micro-frontend applications',
              '• Created a web component utility to inject dependencies at runtime using JavaScript bundles',
              '• Built a component library using React Storybook to isolate reusable components'
            ]
          },
          {
            domain: 'Auditing, Services',
            tenure: 'Aug 2015 till Nov 2020',
            details: 'Designed and built an application that integrates and processes information from various auditing systems to perform consolidated workflow management',
            roles: [
              '• Create an API schema which provides app integration to display consolidated information on workflow guidance tool',
              '• Migrated the existing infrastructure from on-premise windows servers to hybrid territory-independent Azure cloud servers',
              '• Configured the deployment and infrastructure for scaling and localizing workloads to handle peaks and territorial demand',
              '• Interact with enterprise customers to plan the design and delivery based on business requirements',
              '• Provided essential guidance and management structures to the team for streamlined work',
              '• Implemented development process to provide incremental upgrades by business prioritization',
              '• Configured .Net Core APIs and SQL Server Database models as a separate business components for separation of concerns',
            ]
          },
          {
            domain: 'Manufacturing & Retail',
            tenure: 'Feb 2015 – Aug 2015',
            details: 'Built a consolidated framework to simplify the automation configuration process and simulate a testing environment',
            roles: [
              '• Created a scripting framework using Microsoft VSTS to enable users to generate automation scripts',
              '• Managed and led a team of developers and testers for building the scripting framework',
              '• Built templates and marketplace tools to generate automation scripts based on common logic within the organization',
              '• Conducted business review discussions to enhance the framework capabilities'
            ]
          }]
      },
      {
        companyName: 'Sonata Software Ltd.',
        designation: 'Systems Analyst',
        duration: 'Sep. 2013 – Jan 2015',
        projects: [{
            domain: 'MFG Retail',
            tenure: 'Sep 2013 - Jan 2015',
            details: 'Project requires the development of a full-fledged framework for automating test cases. The team works on a custom developed framework (termed as End-to-End Framework) for performing pre-configured operations and generating execution reports for various types of applications.',
            roles: [
              '• Creating configuration modules for performing UI and database actions',
              '• Generating test scripts for web/windows-based applications by performing incremental actions',
              '• Creating UI control instances and data access functions to provide framework compatibility for applications',
              '• Validating the database records with the results obtained from automation scripts'
            ]
          }]
      },
      {
        companyName: 'Capgemini Ltd.',
        designation: 'Senior Software Engineer',
        duration: 'Aug. 2010 – Feb 2013',
        projects: [
          {
            domain: 'Banking and Financial Services',
            tenure: 'Sep 2010 – Feb 2013',
            details: 'Configuring statements and letters to banking customers to communicate important updates about the bank and provide relevant supplemental content',
            roles: [
              '• Developed statement generation tool to allow customized monthly bills and letters to be sent to customers',
              '• Developing modules which extracts accounting information and images and integrates into statements',
              '• Coding of Letters and Coupon Messages into account statements',
              '• Scripted SQL database queries for separating the message list to be populated based on credit card customers’ parameters'
            ]
          }
        ]
      }
    ];
  }
  render() {
    return (h("div", { class: "p-profile" }, h("div", { class: 'flex-row-position small-bold direction space-around' }, h("div", null, h("a", { href: "mailto:suraj19indya@gmail.com" }, "suraj19indya@gmail.com")), h("div", null, "|"), h("div", null, h("a", { href: "https://github.com/surajpai" }, "https://github.com/surajpai")), h("div", null, "|"), h("div", null, h("a", { href: "https://linkedin.com/in/surpai" }, "https://linkedin.com/in/surpai"))), h("br", null), h("button", { onClick: () => { window.open('/assets/Suraj_Pai.pdf', '_blank'); } }, "Download PDF"), h("br", null), h("div", null, h("b", null, "Summary")), h("div", null, h("div", null, "\u2022 12+ years of experience in designing, building and delivering software solutions across various business domains"), h("div", null, "\u2022 Strong expertise on configuring application infrastructure using Microsoft Azure cloud service design patterns"), h("div", null, "\u2022 Highly skilled in creating deployment scripts and automating build pipelines based on specific business cases"), h("div", null, "\u2022 Designed and developed enterprise apps using .Net Core and React with centralized Azure Active Directory authentication")), h("h1", { class: 'title' }, "Professional Experience "), h("table", { class: "table table-bordered  align-middle text-align-center" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, "Company"), h("th", { scope: "col" }, "Tenure"))), h("tbody", null, h("tr", null, h("th", { scope: "row" }, "INFOSYS LIMITED"), h("td", null, "FEB 2015 \u2013 Till Date")), h("tr", null, h("th", { scope: "row" }, "SONATA SOFTWARE LTD."), h("td", null, "SEP 2013 \u2013JAN 2015")), h("tr", null, h("th", { scope: "row" }, "CAPGEMINI"), h("td", null, "AUG 2010 \u2013 FEB 2013")))), this.companies.map(company => h("p-company-details", { company: company })), h("br", null), h("div", null, h("b", null, "Certifications")), h("div", null, h("div", null, h("img", { src: "/assets/microsoft-certified-azure-solutions-architect-expert.1.png", alt: "Microsoft Certified: Azure Solutions Architect Expert", width: "80", height: "80" }), h("a", { href: "https://www.credly.com/badges/5f3bf183-5a6e-4cf3-a365-09dd17c42fab/public_url" }, "Microsoft Certified: Azure Solutions Architect Expert")), h("div", null, h("img", { src: "/assets/microsoft-certified-azure-developer-associate.1.png", alt: "Microsoft Certified: Azure Developer Associate", width: "80", height: "80" }), h("a", { href: "https://www.credly.com/badges/10342b98-8867-485a-a047-b0e9e189dbe0/public_url" }, "Microsoft Certified: Azure Developer Associate")), h("div", null, h("img", { src: "/assets/microsoft-certified-azure-administrator-associate.2.png", alt: "Microsoft Certified: Azure Administrator Associate", width: "80", height: "80" }), h("a", { href: "https://www.credly.com/badges/5f3bf183-5a6e-4cf3-a365-09dd17c42fab/public_url" }, "Microsoft Certified: Azure Administrator Associate"))), h("br", null), h("button", { onClick: () => this.showCalendar = !this.showCalendar, style: { position: 'fixed', right: '10%', bottom: '5%', zIndex: '11' } }, this.showCalendar ? 'Close (X)' : 'Schedule Meeting'), this.showCalendar ?
      h("span", null, h("div", { class: "calendly-inline-widget", "data-url": "https://calendly.com/surajpai", style: { minWidth: '320px', height: '600px', position: 'fixed', right: '10%', bottom: '5%', zIndex: '10' } }), h("script", { type: "text/javascript", src: "https://assets.calendly.com/assets/external/widget.js", async: true })) : null));
  }
};
Profile.style = pProfileCss;

export { Profile as p_profile };
