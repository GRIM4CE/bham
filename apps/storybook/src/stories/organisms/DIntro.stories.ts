import type { Meta, StoryObj } from '@storybook/vue3';

import { DIntro } from '@bham/design-system';

const meta = {
  title: 'Design System/Organisms/Intro',
  component: DIntro,
  tags: ['autodocs'],
  args: {
    heading: "This is a intro heading",
    subheading: "This is a intro subheading",
    callout: "This is a intro callout"
  },
  render: (args: any) => ({
    components: { DIntro },
    setup() {
      return { args };
    },
    template: `<DIntro>
      <template v-slot:heading>{{args.heading}}</template>
      <template v-slot:subheading>{{args.subheading}}</template>
      <template v-slot:callout>{{args.callout}}</template>
    </DIntro>`,
  }),
} satisfies Meta<typeof DIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

