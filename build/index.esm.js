import { A as ActiveRouter } from './active-router-fb872a21.js';
import './match-path-760e1797.js';
import './index-4e35bdaa.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
