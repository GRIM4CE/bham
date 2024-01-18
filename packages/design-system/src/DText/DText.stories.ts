import type { Meta, StoryObj } from '@storybook/vue3';

import DText from './DText.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Base/Text',
  component: DText,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ["p", "h1"] },
    variant: { control: 'select', options: ["p", "h1"] },
  },
  args: { label: "This is some test text", type: "p", variant: "p" }
  render: (args: any) => ({
    components: { DText },
    setup() {
        return { args };
    },
    template: `
      <DText>
      </DText>
    `
}),
} satisfies Meta<typeof DText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  type: "p",
  variant: "p"
};

export const h1: Story = {
  type: "h1",
  variant: "h1"
};