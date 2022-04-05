import * as React from 'react';
import {render} from 'react-dom';
import {Hello} from './components/Hello';

const element = (
  <Hello />
);

render(element, document.getElementById('app'));
