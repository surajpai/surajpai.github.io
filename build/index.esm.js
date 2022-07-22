import { A as ActiveRouter } from './active-router-9a6f7aec.js';
import './match-path-760e1797.js';
import './index-e2cdb0b4.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
