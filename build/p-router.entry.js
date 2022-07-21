import { r as registerInstance, h } from './index-e2cdb0b4.js';

const pRouterCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);justify-content:center}main{display:flex;align-items:center;justify-content:center}h1.header{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

const Router = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", null, h("h1", { class: 'header' }, "Suraj Pai - Portfolio")), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "p-profile", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }), h("stencil-route", { url: "/", component: "p-profile" }))))));
  }
};
Router.style = pRouterCss;

export { Router as p_router };
