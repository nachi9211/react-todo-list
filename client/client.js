import React from 'react'
import { render } from 'react-dom'
//var render = require('react-dom').render;
import App from '../components/App.js'


render(
  //define encompassing component,
  //DOM element we want to mount it to.
  App,
  document.getElementById('app')
)
