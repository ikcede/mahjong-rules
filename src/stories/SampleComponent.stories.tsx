import { Meta, StoryObj } from '@storybook/react';

import { SampleComponent } from '../components';

const meta = {
  title: 'Components/SampleComponent',
  component: SampleComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SampleComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
