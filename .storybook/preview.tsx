import React from 'react';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

import { theme } from '../src/theme';

export const decorators = [
  (renderStory: any) => (
    <MantineProvider theme={theme}>{renderStory()}</MantineProvider>
  ),
];
