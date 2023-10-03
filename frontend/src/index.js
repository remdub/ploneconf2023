/**
 * Replace with custom runner when needed.
 * @module index
 */

import dns from 'dns';
import start from '@plone/volto/start-server';

dns.setDefaultResultOrder('ipv4first');

const reloadServer = start();

if (module.hot) {
  reloadServer();
}
