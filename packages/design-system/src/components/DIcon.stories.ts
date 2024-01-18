import type { Meta, StoryObj } from '@storybook/vue3';

import DIcon from './DIcon.vue';
import icons from "../assets/icons"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Base/Icon',
  component: DIcon,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: icons.map((icon) => icon.name) },
  },
  args: { name: "email" }, // default value
} satisfies Meta<typeof DIcon>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {};