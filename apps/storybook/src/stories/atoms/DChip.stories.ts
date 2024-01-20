import type { Meta, StoryObj } from '@storybook/vue3';

import { DChip } from '@bham/design-system';

const meta = {
  title: 'Design System/Atoms/Chip',
  component: DChip,
  tags: ['autodocs'],
  args: {
    text: "chip text"
  },
  render: (args: any) => ({
    components: { DChip },
    setup() {
      return { args };
    },
    template: '<DChip v-bind="args" />',
  }),
} satisfies Meta<typeof DChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};