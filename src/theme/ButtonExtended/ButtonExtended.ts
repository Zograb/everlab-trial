import { Button } from '@mantine/core';
import { sectionStyle } from './ButtonExtended.css';

export const ButtonExtended = Button.extend({
  classNames: {
    section: sectionStyle,
  },
  vars: (theme, props) => {
    const sizeWithFallback = props.size || 'xs';

    return {
      root: {
        '--button-height': theme.other.button.root.height[sizeWithFallback],
        '--button-padding-x': theme.other.button.root.padding.x[sizeWithFallback],
        '--_button-padding-left': theme.other.button.root.padding.x[sizeWithFallback],
        '--_button-padding-right': theme.other.button.root.padding.x[sizeWithFallback],
      },
      // Section margins is always 8px for all button sizes
      section: {
        '--_button-section-margin-left': theme.other.button.section.margin[sizeWithFallback],
        '--_button-section-margin-right': theme.other.button.section.margin[sizeWithFallback],
      },
    }
  }
});
