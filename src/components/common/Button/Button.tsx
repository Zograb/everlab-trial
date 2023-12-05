import type { FC, PropsWithChildren } from 'react';
import {
  type ButtonProps as MantineButtonProps,
  type ElementProps,
  Button as MantineButton,
} from '@mantine/core';

export type ButtonProps =
  ElementProps<'button'> &
  Omit<MantineButtonProps, 'fullWidth' | 'gradient' | 'loading' | 'loaderProps' | 'radius' | 'size'> & {
    variant?: 'default' | 'white' | 'outline' | 'filled' | 'light' | 'subtle';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'default',
  size = 'xs',
  children,
  ...otherProps
}) => (
  <MantineButton
    size={size}
    variant={variant}
    {...otherProps}

    // Omit these props
    radius="xmd"
    loading={false}
    loaderProps={{}}
    fullWidth={false}
    gradient={undefined}
  >
    {children}
  </MantineButton>
);
