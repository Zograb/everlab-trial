import { createTheme, rem } from '@mantine/core';
import { themeToVars } from '@mantine/vanilla-extract';

import { ButtonExtended } from './ButtonExtended';
import { variantColorResolver } from './variantColorResolver';

export const theme = createTheme({
  colors: {
    beige: ['#fffcf8', '#faf7f4', '#f3e8de', '#eedac9', '#e0bfa2', '#ae9d87', '#343a40', '#343a40', '#8e7d66', '#605648'],
    dark: ['#C1C2C5', '#A6A7AB', '#909296', '#737985', '#575861', '#221F20', '#25262b', '#1A1B1E', '#141517', '#101113'],
    gray: ['#F3F3F3', '#E8E7E7', '#E8E7E7', '#E2E4ED', '#D7D8E3', '#AFB4BF', '#868e96', '#495057', '#343a40', '#212529']
  },
  radius: {
    xmd: rem(10),
  },
  components: {
    Button: ButtonExtended,
  },
  variantColorResolver,
  other: {
    button: {
      root: {
        padding: {
          x: {
            xs: rem(12),
            sm: rem(16),
            md: rem(20),
            lg: rem(24),
            xl: rem(32),
          }
        },
        height: {
          xs: rem(24),
          sm: rem(32),
          md: rem(40),
          lg: rem(48),
          xl: rem(56),
        }
      },
      section: {
        margin: {
          // Section margins is always 8px for all button sizes
          xs: rem(8),
          sm: rem(8),
          md: rem(8),
          lg: rem(8),
          xl: rem(8),
        }
      },
    }
  }
});

export const themeVars = themeToVars(theme);
