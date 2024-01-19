import type { Meta, StoryObj } from '@storybook/vue3';

import { DIcon } from '@bham/design-system';
import icons from '@bham/design-system/src/assets/icons';

const meta = {
  title: 'Design System/Atoms/Icon',
  component: DIcon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: icons.map((icon) => icon.name) },
  },
  args: { name: "email" },
} satisfies Meta<typeof DIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};