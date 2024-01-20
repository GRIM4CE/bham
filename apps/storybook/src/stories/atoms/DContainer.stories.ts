import type { Meta, StoryObj } from '@storybook/vue3';

import { DContainer } from '@bham/design-system';

const meta = {
  title: 'Design System/Atoms/Container',
  component: DContainer,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ["main", "aside", "section", "div", "span", "nav", "ul"] },
    variant: { control: 'select', options: [["inverted"], ["grid"], ["flex"], ["fill-height"], ["padding"]] },
  },
  args: {
    label: "container",
  },
  render: (args: any) => ({
    components: { DContainer },
    setup() {
      return { args };
    },
    template: '<DContainer v-bind="args">{{ args.label }}</DContainer>',
  }),
} satisfies Meta<typeof DContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Inverted: Story = {
  args: {variant: ["inverted"]}
};
export const Padded: Story = {
  args: {variant: ["padding", "inverted"]}
};
export const FullHeight: Story = {
  args: {variant: ["fill-height", "inverted"]}
};