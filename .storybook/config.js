import { configure } from '@storybook/react';

configure(require.context('../src/components/', true, /\.stories\..sx$/), module);