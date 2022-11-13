# camtjs

![npm version](https://img.shields.io/npm/v/camtjs)
![npm total downloads](https://img.shields.io/npm/dt/camtjs)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=proohit_camtjs&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=proohit_camtjs)
[![coverage](https://codecov.io/gh/proohit/camtjs/branch/master/graph/badge.svg?token=QYOGLSBELR)](https://codecov.io/gh/proohit/camtjs)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=proohit_camtjs&metric=bugs)](https://sonarcloud.io/summary/new_code?id=proohit_camtjs)
![Known Vulnerabilities](https://snyk.io/test/github/proohit/camtjs/badge.svg)

JS package to work with Camt transactions.

:warning: Still work in progress. :warning:

## Features

- [ ] Camt052 (WIP)
- [ ] Camt053
- [ ] Validation

The Camt052 implementation is currently based on V10, but may work for e.g. V8 as well.

For easier working inside JS, the camt tags are renamed to their description according to [ISO 20022](https://www.iso20022.org/iso-20022-message-definitions?business-domain%5B0%5D=1&search=Bank-to-Customer%20Cash%20Management). For instance `BkToCstmrAcctRpt.Rpt.Ntry` is renamed to `messageRoot.report.entry`.

## Installation

```bash
npm i camtjs
```

Natively supported in node. For browser there are polyfills needed, because of the underlying `xml2js`. I tested it with `nextjs` and `vite`, which both worked out of the box.

## Usage

```ts
import { Camt052 } from 'camtjs';

const camt052 = await Camt052.parseCamt('your camt xml');

// You then have access to the complete Camt052 document tree
console.log(camt052.document.messageRoot.report.entry);
```
