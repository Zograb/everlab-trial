import type { Meta, StoryObj } from '@storybook/react';
import { IconPlus } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';

import { Button } from '../Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Icon',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const WithIconOnLeft: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    color: 'beige',
    leftSection: <IconPlus />,
    children: 'Button',
  },
};

export const WithIconOnRight: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    color: 'beige',
    rightSection: <IconPlus />,
    children: 'Button',
  },
};

export const WithIconOnBothSides: Story = {
  args: {
    variant: 'filled',
    size: 'md',
    color: 'beige',
    leftSection: <IconPlus />,
    rightSection: <IconArrowRight />,
    children: 'Button',
  },
};

