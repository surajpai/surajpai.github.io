import{r as s,h as l}from"./p-6f15ff19.js";const i=class{constructor(l){s(this,l)}render(){return l("div",{class:"accordion-item"},l("h2",{class:"accordion-header",id:"heading"+this.project.tenure.replace(/[.\s]/g,"")},l("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+this.project.tenure.replace(/[.\s]/g,""),"aria-controls":"collapse"+this.project.tenure.replace(/[.\s]/g,"")},l("div",{class:"flex-row-position"},l("div",null,"Domain: ",this.project.domain),l("div",null,"Tenure: ",this.project.tenure)))),l("div",{id:"collapse"+this.project.tenure.replace(/[.\s]/g,""),class:"accordion-collapse collapse show","aria-labelledby":"heading"+this.project.tenure.replace(/[.\s]/g,""),"data-bs-parent":"#accordion"+this.companyName.replace(/[.\s]/g,"")},l("div",{class:"accordion-body"},l("strong",null,"Details: "),this.project.details,l("div",null,l("br",null),l("strong",null,"Roles and Responsibilities:")," ",l("br",null),this.project.roles.length>0?this.project.roles.map((s=>l("div",null,s))):null))))}};i.style="";export{i as p_project}