import type { Meta, StoryObj } from '@storybook/vue3';

import { DProjectCard } from '@bham/design-system';

const meta = {
  title: 'Design System/Molecules/Project Card',
  component: DProjectCard,
  tags: ['autodocs'],
  args: {
    project: {
      img: {
        src: "bhamdesign.png",
        alt: "alt tag"
      },
      href: "/",
      title: "project title",
      description: "this is a project description",
      keynotes: ["keynote", "vue", "storybook"]
    }
  },
  render: (args: any) => ({
    components: { DProjectCard },
    setup() {
      return { args };
    },
    template: '<DProjectCard v-bind="args" />',
  }),
} satisfies Meta<typeof DProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};