import type { Meta, StoryObj } from '@storybook/vue3';

import DIcon from '@/components/DIcon/DIcon.vue';
import DText from '@/components/DText/DText.vue';
import icons from "@/assets/icons"

const meta = {
    title: 'Global/Icons',
    render: (args: any) => ({
      components: { DIcon, DText },
      setup() {
        return { icons };
      },
      template: `
      <div :style="{display: 'flex', flexWrap: 'wrap'}">
        <div :style="{
            display: 'grid',
            justifyItems: 'center',
            margin: '1.5rem .5rem',
            width: '80px'
        }" v-for="icon in icons" :key="icon.name">
            <DIcon :style="{marginBottom: '.5rem'}" :name="icon.name" />
            <DText>{{icon.name}}</DText>
        </div>
      </div>
      `
    }),
  } satisfies Meta<typeof DText>;
  
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};