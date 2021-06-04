import { r as registerInstance, h } from './index-e2cdb0b4.js';

const pProjectCss = "";

const Project = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { class: "accordion-item" }, h("h2", { class: "accordion-header", id: 'heading' + this.project.tenure.replace(/[.\s]/g, '') }, h("button", { class: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapse" + this.project.tenure.replace(/[.\s]/g, ''), "aria-controls": "collapse" + this.project.tenure.replace(/[.\s]/g, '') }, h("div", { class: 'flex-row-position' }, h("div", null, "Domain: ", this.project.domain), h("div", null, "Tenure: ", this.project.tenure)))), h("div", { id: "collapse" + this.project.tenure.replace(/[.\s]/g, ''), class: "accordion-collapse collapse show", "aria-labelledby": 'heading' + this.project.tenure.replace(/[.\s]/g, ''), "data-bs-parent": '#accordion' + this.companyName.replace(/[.\s]/g, '') }, h("div", { class: "accordion-body" }, h("strong", null, "Details: "), this.project.details, h("div", null, h("br", null), h("strong", null, "Roles and Responsibilities:"), " ", h("br", null), this.project.roles.length > 0 ? this.project.roles.map(role => h("div", null, role)) : null))));
  }
};
Project.style = pProjectCss;

export { Project as p_project };
