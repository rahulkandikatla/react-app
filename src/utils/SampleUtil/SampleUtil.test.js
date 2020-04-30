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