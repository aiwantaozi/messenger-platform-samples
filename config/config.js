'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN || 'PL3GRMDRNDLNFUU6TYDA62G4BWXWQ7MH'
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}

var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAAN8ISa17ZBUBAG5YADZAcrp3ZBkS7OSP63cWQM8BRCGheXS5XODcIGEWKhiZC4X8zpVZAJrGC1bapvocU7p2t726UonoOLVPMd0MPGdhbYNGZAgeLNrHuL2UdgY6n3hZCXZCWo1xQR52vy99UcuSKIeucA0dfbxAdUDHurHY0Q5GwZDZD'
var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'validate_token'

if (!(FB_PAGE_TOKEN && FB_VERIFY_TOKEN)) {
  throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var APP_SECRET = process.env.APP_SECRET || 'app_secret'

var SERVER_URL = process.env.SERVER_URL || 'https://cryptic-ridge-83272.herokuapp.com'

if (!(APP_SECRET && SERVER_URL)) {
  throw new Error('Missing APP_SECRET or SERVER_URL')
}


module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
  SERVER_URL: SERVER_URL,
  APP_SECRET: APP_SECRET,
}