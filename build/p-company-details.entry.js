import { r as registerInstance, h } from './index-e2cdb0b4.js';

const pCompanyDetailsCss = "";

const CompanyDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("div", { class: 'flex-row-position' }, h("div", null, "Organization: ", h("b", null, this.company.companyName)), h("div", null, this.company.duration)),
      h("div", { class: 'flex-row-position' }, h("div", null, "Designation: ", this.company.designation), h("div", null)),
      h("div", { class: "accordion width-900", id: "accordion" + this.company.companyName.replace(/[.\s]/g, '') }, this.company.projects.map(project => h("p-project", { project: project, companyName: this.company.companyName })))
    ];
  }
};
CompanyDetails.style = pCompanyDetailsCss;

export { CompanyDetails as p_company_details };
