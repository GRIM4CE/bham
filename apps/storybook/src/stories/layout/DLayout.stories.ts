import type { Meta, StoryObj } from '@storybook/vue3';

import { DLayout, DContainer } from '@bham/design-system';

const meta = {
  title: 'Design System/Layout/Layout',
  component: DLayout,
  render: (args: any) => ({
    components: { DLayout, DContainer },
    setup() {},
    template: `
    <DLayout>
      <template v-slot:aside>
        <DContainer :variant="['inverted', 'fill-height']">aside</DContainer>
      </template>
      <template v-slot:main>
        <DContainer :variant="['inverted', 'fill-height']">main</DContainer>
      </template>
    </DLayout>
    `
  }),
} satisfies Meta<typeof DLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};