import React from 'react';
import SearchBox from '../components/SearchBox';
import {render} from 'react-dom'

describe('>>>> Search Box', () => {
  let container = null

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it('should render Search Box',() =>{
    render(<SearchBox/>,container);
    expect(container).toBeDefined();
  })
})
