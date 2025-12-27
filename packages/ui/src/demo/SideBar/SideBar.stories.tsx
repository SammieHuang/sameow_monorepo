import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'DEMO/SideBar',
    component: SideBar,
    parameters: {
        viewMode: 'docs'
    },
    decorators: [
        (Story) => (
            <div className='flex justify-center items-center'>
                <Story />
            </div>
        )
    ]
}

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Story: Story = {
    name: 'SideBar'
}