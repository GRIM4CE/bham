import type { Meta, StoryObj } from '@storybook/vue3';

import { DButton } from '@bham/design-system';
import icons from '@bham/design-system/src/assets/icons';

const meta = {
  title: 'Design System/Atoms/Button',
  component: DButton,
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { DButton },
    setup() {
      return { args };
    },
    template: '<DButton v-bind="args">{{args.text}}</DButton>',
  }),
} satisfies Meta<typeof DButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "action",
  }
};
export const Icon: Story = {
  args: {
    icon: {
      name: "theme",
      alt: "icon alt tag if no text"
    }
  }
};