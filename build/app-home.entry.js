import { r as registerInstance, h } from './index-4e35bdaa.js';

const appHomeCss = ".app-home{padding:10px;display:flex;flex-direction:column;align-items:center}button{background:#5851ff;color:white;margin:8px;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);outline:0;letter-spacing:0.04em;transition:all 0.15s ease;cursor:pointer}button:hover{box-shadow:0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);transform:translateY(1px)}.flex{display:flex;justify-content:flex-start;width:600px}.bold{font-weight:bold}.width-300{width:300px}";

const AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "app-home" }, h("p", null, "Email ID:", ' ', h("a", { href: "mailto:suraj19indya@gmail.com" }, "suraj19indya@gmail.com")), h("h1", null, " Technical Expertise "), h("div", null, h("div", { class: 'flex' }, h("div", { class: 'bold width-300' }, "Programming: "), h("div", { class: 'width-300' }, "ReactJS, Angular, .Net, JavaScript, jQuery")), h("div", { class: 'flex' }, h("div", { class: 'bold width-300' }, "Databases: "), h("div", { class: 'width-300' }, "MongoDB, SQL Server")), h("div", { class: 'flex' }, h("div", { class: 'bold width-300' }, "Other Tools: "), h("div", { class: 'width-300' }, "Visual Studio 2019, VS Code, Azure DevOps, GCP"))), h("stencil-route-link", { url: "/profile/stencil" }, h("button", null, "Profile page"))));
  }
};
AppHome.style = appHomeCss;

export { AppHome as app_home };
