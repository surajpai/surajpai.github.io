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
            tenure: 'Aug 2015 till date',
            details: 'Developed and managed a large suite of applications which enable auditors to perform complex audit processes with system and team interactions and timely submissions. The applications being built interacts with many up-stream data sources and transforms the information to be displayed as a dashboard as well as workflow management tools.',
            roles: [
              '• Implemented new user stories to develop UI functionality as per the requirements',
              '• Led a team of around 10 developers working on building the platforms',
              '• Worked directly with clients and other development and testing teams associated with clients',
              '• Built peripheral applications to enable and support the functioning of the tool',
              '• Configured .Net Core APIs as a separate business component for separation of concerns',
              '• Provided essential guidance and team management structures to the team for streamlined work',
              '• Ensured iterative approach of code lifecycle using Agile methodology'
            ]
          },
          {
            domain: 'Manufacturing & Retail',
            tenure: 'Feb 2015 – Aug 2015',
            details: 'Project deals with the requirement to automate internal applications for client to simplify testing needs. The scripts provided to clients comprise of different test cases for that application. The goal is to validate the interface versus the backend data or to verify the functional flow. For detailed validation and comprehensive reports, the project requires use of programming algorithms and multi-level data fetch.',
            roles: [
              '• Developed a scripting framework using VSTS to enable testers to automate test cases without coding',
              '• Managed and led a team of developers and testers for one complete segment automation',
              '• Provided defect free scripts to functional teams and supported execution until sign off',
              '• Conducted training sessions for peers to accomplish technical skills'
            ]
          }]
      },
      {
        companyName: 'Sonata Software Ltd.',
        designation: 'Systems Analyst',
        duration: 'Sep. 2013 – Jan 2015',
        projects: [{
            domain: 'MFG Retail',
            tenure: 'Sep 2013- Jan 2015',
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
        companyName: 'Sonata Software Ltd.',
        designation: 'Systems Analyst',
        duration: 'Sep. 2013 – Jan 2015',
        projects: [
          {
            domain: 'Banking and Financial Services',
            tenure: 'Sep 2010 – Feb 2013',
            details: 'Statements and letters team deals with generating online statements to credit card holders of a banking client and providing various card member messages to customers informing them about the schemes and benefits provided in their credit card. SALT also deals with segregating the messages based on portfolios and populating these messages into the credit card statement.',
            roles: [
              '• Developed statement generation tool to allow customized bills and letters to be sent to customers',
              '• Developing modules which prints accounting information and images into statements',
              '• Coding of Letters and Coupon Messages into account statements',
              '• Using back-end queries for separating the message list to be populated for a particular credit card customer’s statement'
            ]
          }
        ]
      }
    ];
  }
  render() {
    return (h("div", { class: "p-profile" }, h("div", { class: 'flex-row-position small-bold direction space-around' }, h("div", null, h("a", { href: "mailto:suraj19indya@gmail.com" }, "suraj19indya@gmail.com")), h("div", null, "|"), h("div", null, h("a", { href: "https://github.com/surajpai" }, "https://github.com/surajpai")), h("div", null, "|"), h("div", null, h("a", { href: "https://linkedin.com/in/surpai" }, "https://linkedin.com/in/surpai"))), h("br", null), h("button", { onClick: () => { window.open('/assets/Suraj_Pai.pdf', '_blank'); } }, "Download PDF"), h("h1", { class: 'title' }, " Technical Expertise "), h("div", null, h("p-technical-expertise", { name: 'Programming:', value: 'ReactJS, Angular, .Net, JavaScript, jQuery' }), h("p-technical-expertise", { name: 'Databases: ', value: 'MongoDB, SQL Server' }), h("p-technical-expertise", { name: 'Other Tools:', value: 'Visual Studio 2019, VS Code, Azure DevOps, GCP' })), h("h1", { class: 'title' }, "Professional Experience "), h("table", { class: "table table-bordered  align-middle text-align-center" }, h("thead", null, h("tr", null, h("th", { scope: "col" }, "Company"), h("th", { scope: "col" }, "Tenure"))), h("tbody", null, h("tr", null, h("th", { scope: "row" }, "INFOSYS LIMITED"), h("td", null, "FEB 2015 \u2013 Till Date")), h("tr", null, h("th", { scope: "row" }, "SONATA SOFTWARE LTD."), h("td", null, "SEP 2013 \u2013JAN 2015")), h("tr", null, h("th", { scope: "row" }, "CAPGEMINI"), h("td", null, "AUG 2010 \u2013 FEB 2013")))), this.companies.map(company => h("p-company-details", { company: company })), h("br", null), h("div", null, h("b", null, "Certifications")), h("div", null, h("div", null, "\u2022 Microsoft Certified Technology Specialist (MCTS) on ", h("b", null, "Microsoft .Net Framework 3.5 \u2013 ASP.NET"), " Application Development"), h("div", null, "\u2022 Microsoft Azure Fundamentals \u2013 AZ 900 & AZ-204 - ", h("b", null, "Developing Solutions for Microsoft Azure")), h("div", null, "\u2022 70-519: ", h("b", null, "Designing and Developing Web Applications Using Microsoft .NET Framework 4"))), h("br", null), h("button", { onClick: () => this.showCalendar = !this.showCalendar, style: { position: 'fixed', right: '10%', bottom: '5%', zIndex: '11' } }, this.showCalendar ? 'Close (X)' : 'Schedule Meeting'), this.showCalendar ?
      h("span", null, h("div", { class: "calendly-inline-widget", "data-url": "https://calendly.com/surajpai", style: { minWidth: '320px', height: '600px', position: 'fixed', right: '10%', bottom: '5%', zIndex: '10' } }), h("script", { type: "text/javascript", src: "https://assets.calendly.com/assets/external/widget.js", async: true })) : null));
  }
};
Profile.style = pProfileCss;

export { Profile as p_profile };
