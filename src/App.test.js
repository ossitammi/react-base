import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('App test suite', () => {
  it('Renders App without crashing', () => {
    const app = mount(<App/>);
    app.unmount();
  });
});
