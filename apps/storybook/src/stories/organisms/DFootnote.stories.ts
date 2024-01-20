import type { Meta, StoryObj } from '@storybook/vue3';

import { DFootnote } from '@bham/design-system';

const meta = {
  title: 'Design System/Organisms/Footnote',
  component: DFootnote,
  tags: ['autodocs'],
  args: {
    text: "This is a footnote describing the project"
  },
  render: (args: any) => ({
    components: { DFootnote },
    setup() {
      return { args };
    },
    template: '<DFootnote>{{args.text}}</DFootnote>',
  }),
} satisfies Meta<typeof DFootnote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};