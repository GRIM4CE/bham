import type { Meta, StoryObj } from '@storybook/vue3';

import { DNavigation } from '@bham/design-system';

export const navigationLinks = [
  {text: "About", href: "#about"},
  {text: "Projects", href: "#projects"},
]

const meta = {
  title: 'Design System/Organisms/Navigation',
  component: DNavigation,
  tags: ['autodocs'],
  args: {
    links: navigationLinks
  },
  render: (args: any) => ({
    components: { DNavigation },
    setup() {
      return { args };
    },
    template: '<DNavigation v-bind="args" />',
  }),
} satisfies Meta<typeof DNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};