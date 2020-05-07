import React, {Component} from 'react';
import {add} from './SampleUtil';
import {HelloMessage} from '../../components/HelloMessage';
import {render} from '@testing-library/react';

describe('add tests',()=>{
    it('should return sum of two numbers',()=>{expect (add(1,2)).toBe(3)});
    it('should return only sum of first two numbers',()=>{expect(add(1,2,3)).toBe(3)});

});
describe('HelloMessage tests', ()=>{it('should render given message',()=>{const {getByText, debug}=render(<HelloMessage message={'world'}/>);

getByText(/Hello world/i);
debug();
   });
})

function compileAndroidCode() {

    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });