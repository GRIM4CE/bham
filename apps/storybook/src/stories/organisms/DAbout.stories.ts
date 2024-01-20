import type { Meta, StoryObj } from '@storybook/vue3';

import { DAbout } from '@bham/design-system';

const meta = {
  title: 'Design System/Organisms/About',
  component: DAbout,
  tags: ['autodocs'],
  args: {
    about: ["This is a placeholder paragraph for the about section.", "This is another placeholder paragraph for the about section."]
  },
  render: (args: any) => ({
    components: { DAbout },
    setup() {
      return { args };
    },
    template: '<DAbout v-bind="args" />',
  }),
} satisfies Meta<typeof DAbout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};