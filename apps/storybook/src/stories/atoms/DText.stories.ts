import type { Meta, StoryObj } from '@storybook/vue3';

import { DText } from '@bham/design-system';

const meta = {
  title: 'Design System/Atoms/Text',
  component: DText,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ["h1", "h2", "h3", "p"] },
    variant: { control: 'select', options: ["h1", "h2", "h3", "p", "footnote"] },
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

export const Default: Story = {};

export const heading1: Story = {
  args: {
    type: "h1",
    variant: "h1"
  }
};

export const heading2: Story = {
  args: {
    type: "h2",
    variant: "h2"
  }
};

export const heading3: Story = {
  args: {
    type: "h3",
    variant: "h3"
  }
};


export const p: Story = {
  args: {
    variant: "p"
  }
};

export const footnote: Story = {
  args: {
    variant: "footnote"
  }
};