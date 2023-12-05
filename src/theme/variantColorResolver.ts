import { type VariantColorsResolver, defaultVariantColorsResolver, parseThemeColor } from '@mantine/core';

export const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Please note:
  // Mantine by default use shade 6 for background and shade 7 for hover,
  // so we need to override it for each variant to match design.
  // And this is only for beige color. We need to do this for each custom color.
  if (parsedColor.isThemeColor && parsedColor.color === 'beige' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      background: 'var(--mantine-color-beige-5)',
      hover: 'var(--mantine-color-beige-8)',
    };
  }

  if (parsedColor.isThemeColor && parsedColor.color === 'beige' && input.variant === 'light') {
    return {
      ...defaultResolvedColors,
      background: 'var(--mantine-color-beige-3)',
      hover: 'var(--mantine-color-beige-4)',
    };
  }

  if (parsedColor.isThemeColor && parsedColor.color === 'beige' && input.variant === 'subtle') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-beige-8)',
      hover: 'var(--mantine-color-beige-1)',
    };
  }

  if (parsedColor.isThemeColor && parsedColor.color === 'beige' && input.variant === 'outline') {
    return {
      ...defaultResolvedColors,
      border: 'calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-beige-8)',
      color: 'var(--mantine-color-beige-8)',
      hover: 'var(--mantine-color-beige-0)',
    };
  }

  if (parsedColor.isThemeColor && parsedColor.color === 'beige' && input.variant === 'white') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-beige-8)',
      hoverColor: 'var(--mantine-color-beige-9)',
    };
  }

  if (parsedColor.isThemeColor && input.variant === 'default') {
    return {
      ...defaultResolvedColors,
      border: 'calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-dark-5)',
      color: 'var(--mantine-color-dark-5)',
      hover: 'var(--mantine-color-gray-1)',
    };
  }

  return defaultResolvedColors;
};
