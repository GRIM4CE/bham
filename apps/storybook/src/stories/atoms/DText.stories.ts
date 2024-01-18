import type { Meta, StoryObj } from '@storybook/vue3';

import { DText } from '@bham/design-system';

const meta = {
  title: 'Design System/Atoms/Text',
  component: DText,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ["p", "h1"] },
    variant: { control: 'select', options: ["p", "h1"] },
  },
  args: { slot: "This is some test text" },
  render: (args: any) => ({
    components: { DText },
    setup() {
      return { args };
    },
    template: '<DText v-bind="args">{{ args.slot }}</DText>',
  }),
} satisfies Meta<typeof DText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "p",
    variant: "p"
  }
};

export const h1: Story = {
  args: {
    type: "h1",
    variant: "h1"
  }
};