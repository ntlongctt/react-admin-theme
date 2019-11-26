import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
.add('primary', () => (
  <div>
    <Button styleType="primary" size="medium">Primary</Button>
  </div>
))
.add('secondary', () => (
  <Button styleType="secondary" size="medium">Secondary</Button>
))
.add('sucsess', () => (
  <Button styleType="success" size="medium">Success</Button>
));