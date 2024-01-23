# ![Qlik logo](./src/assets/Qlik_Logo.svg) Embed with Angular

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

This is the mashup for Qlik Sense Embed Objects with Angular. This package is experimental and do not supported by Qlik Support.

## Getting Started

Before we get started, you'll need to [install Angular](https://angular.io/guide/setup-local).

### Contributing

Change in index.html file

```js
    <script
      crossorigin="anonymous"
      src="https://cdn.jsdelivr.net/npm/@qlik/embed-web-components"
      data-host="https://<tenant>.eu.qlikcloud.com"
      data-web-integration-id="<web_integration_id>"
      data-cross-site-cookies="true"
    ></script>
```

#### Managing web integrations

You can create web integrations to add origins that are allowlisted to access the tenant. The web integration containing the allowlist is connected to an ID used in for example a mashup that is connecting to your tenant. When a request arrives, Qlik Cloud confirms that the request derives from an allowlisted domain and then approves the request, else not.

source : https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Admin/mc-adminster-web-integrations.htm

## Installation Qlik mashup

Install package

```bash
npm install
```

Start a local server using:

```bash
npm start
```

Check version npm package on package.json

```bash
npx npm-check-updates -u
```
