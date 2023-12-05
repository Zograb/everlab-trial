
import { style } from '@vanilla-extract/css';

export const sectionStyle = style({
  selectors: {
    '&[data-position="left"]': {
      marginRight: 'var(--_button-section-margin-right)',
      marginLeft: 'initial',
    },
    '&[data-position="right"]': {
      marginRight: 'initial',
      marginLeft: 'var(--_button-section-margin-left)',
    },
  }
});