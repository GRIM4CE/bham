import type { Meta, StoryObj } from '@storybook/vue3';

import { DProjects } from '@bham/design-system';

const projects = [
  { 
      img: {
        src: "design-system.png",
        alt: "Portfolio Design System Web Screencap"
      },
      href: "https://design.jonleibham.com",
      title: "Portfolio Design-System Storybook",
      description: 'test',
      keynotes: ["Vue3", "Typescript", "Storybook", "Design-System", "A11y"]
    },
    { 
      img: {
        src: "bhamdesign.png",
        alt: "Old Portfolio Site Web Screencap"
      },
      href: "https://bhamdesigns.com",
      title: "bhamdesigns",
      description: 'Old portfolio site, built in nuxt3 and Typescript',
      keynotes: ["Vue", "Typescript"]
    }
  ]

const meta = {
  title: 'Design System/Organisms/Projects',
  component: DProjects,
  tags: ['autodocs'],
  args: {
    projects
  },
  render: (args: any) => ({
    components: { DProjects },
    setup() {
      return { args };
    },
    template: '<DProjects v-bind="args" />',
  }),
} satisfies Meta<typeof DProjects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};