import React from 'react';
import Card from '../components/Card';
import {render} from 'react-dom'



describe('>>>> Card ', () => {
  let container = null

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it('should render Card component',() =>{
    render(<Card/>,container);
    expect(container).toBeDefined();
  })
})
