import type { Meta, StoryObj } from '@storybook/vue3';

import { DLink } from '@bham/design-system';

const meta = {
  title: 'Design System/Atoms/Link',
  component: DLink,
  tags: ['autodocs'],
  args: { label: "link" },
  render: (args: any) => ({
    components: { DLink },
    setup() {
      return { args };
    },
    template: '<DLink v-bind="args">{{ args.label }}</DLink>',
  }),
} satisfies Meta<typeof DLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};