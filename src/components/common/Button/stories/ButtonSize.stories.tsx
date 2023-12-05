import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Size',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Xs: Story = {
  args: {
    variant: 'filled',
    size: 'xs',
    color: 'beige',
    children: 'Button',
  },
};

export const Sm: Story = {
  args: {
    variant: 'filled',
    size: 'sm',
    color: 'beige',
    children: 'Button',
  },
};

export const Md: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    color: 'beige',
    children: 'Button',
  },
};

export const Lg: Story = {
  args: {
    variant: 'filled',
    size: 'lg',
    color: 'beige',
    children: 'Button',
  },
};

export const Xl: Story = {
  args: {
    variant: 'filled',
    size: 'xl',
    color: 'beige',
    children: 'Button',
  },
};

