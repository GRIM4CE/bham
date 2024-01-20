import type { Meta, StoryObj } from '@storybook/vue3';

import { DSocial } from '@bham/design-system';

const socialLinks = [
  { name: "github",  href: "https://github.com/GRIM4CE" },
  { name: "linkedin", href: "https://www.linkedin.com/in/jon-l-a29b93105" },
  { name: "resume", href: "jon-leibham-resume.pdf" }
]

const meta = {
  title: 'Design System/Organisms/Social',
  component: DSocial,
  tags: ['autodocs'],
  args: {
    links: socialLinks
  },
  render: (args: any) => ({
    components: { DSocial },
    setup() {
      return { args };
    },
    template: '<DSocial v-bind="args" />',
  }),
} satisfies Meta<typeof DSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};