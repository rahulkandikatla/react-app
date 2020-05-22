import React from 'react';
import { SignInPage } from '../Authentication/components/SignInPage';
import {Button} from '../E-Commerce/components/Product/styledComponents'
import {SubmitButton} from '../Authentication/components/SubmitButton'
import {Theme} from '../components/EmojisGame/styledComponents';
import { withKnobs, text,number,color } from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions'
 
export default { title: 'Button'};

export const AllButtons = () => (
  <SubmitButton 
    onClick={action('clicked')}
    style={{background:color('red','red')}} 
    children={'Hello'}
  />
);

AllButtons.story= {
  decorators: [withKnobs]
}