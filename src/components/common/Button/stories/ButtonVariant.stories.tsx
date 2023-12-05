import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Variant',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    color: 'beige',
    children: 'Default',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    size: 'md',
    color: 'beige',
    children: 'White',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    color: 'beige',
    children: 'Outline',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    color: 'beige',
    children: 'Filled',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    size: 'md',
    color: 'beige',
    children: 'Light',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    size: 'md',
    color: 'beige',
    children: 'Subtle',
  },
};

