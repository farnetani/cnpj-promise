'use strict'
import CnpjPromise from './src/cnpj-promise'

CnpjPromise('14994399000188').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
