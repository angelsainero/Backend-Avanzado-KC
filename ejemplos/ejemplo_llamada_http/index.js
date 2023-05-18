'use strict';

const axios = require('axios');
const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkMmJlZmJhOTA5YTA5NWRiZGViZGEiLCJpYXQiOjE2ODQ0Mzg3MjEsImV4cCI6MTY4NDYxMTUyMX0.jzFsWcQSa274d0lOO0PoBkX1iPYoa4LWRqdc5xuJefI';

axios.get(`http://localhost:3000/api/agentes?jwt=${jwtToken}`)
  .then(response => {
    console.log(response.data);
  })