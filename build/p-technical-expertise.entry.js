import { r as registerInstance, h } from './index-e2cdb0b4.js';

const pTechnicalExpertiseCss = "";

const TechnicalExpertise = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", { class: 'flex' }, h("div", { class: 'bold width-500' }, this.name), h("div", { class: 'width-500' }, this.value));
  }
};
TechnicalExpertise.style = pTechnicalExpertiseCss;

export { TechnicalExpertise as p_technical_expertise };
