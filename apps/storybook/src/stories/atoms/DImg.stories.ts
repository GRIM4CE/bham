import type { Meta, StoryObj } from '@storybook/vue3';

import { DImg } from '@bham/design-system';

const meta = {
  title: 'Design System/Atoms/Image',
  component: DImg,
  tags: ['autodocs'],
  args: {
    src: "bhamdesign.png",
    alt: "alt tag"
  },
  render: (args: any) => ({
    components: { DImg },
    setup() {
      return { args };
    },
    template: '<DImg v-bind="args" />',
  }),
} satisfies Meta<typeof DImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};