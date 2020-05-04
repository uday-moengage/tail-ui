import React from 'react';
import { render } from 'test-utils';
import  Button from 'uielements/button/button.component.js';

it('should take a snapshot', () => {
    const { asFragment } = render(<Button buttonText="test button" />)
    
    expect(asFragment(<Button buttonText="test button" />)).toMatchSnapshot()
});

it ('should render a button with text color', () => {
    const { asFragment } = render(<Button  color="green" />)
    
    expect(asFragment(<Button color="green"  />)).toMatchSnapshot()
});
