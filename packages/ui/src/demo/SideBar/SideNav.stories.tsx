import type { Meta, StoryObj } from '@storybook/react';
import SideNav from './SideNav';

const meta: Meta<typeof SideNav> = {
    title: 'Components/SideNav',
    component: SideNav,
    parameters: {
        viewMode: 'docs'
    },
    decorators: [
        (Story) => (
            <div className='flex justify-start items-center'>
                <Story />
            </div>
        )
    ]
}

export default meta;

type Story = StoryObj<typeof SideNav>;

export const Story: Story = {
    name: 'SideNav'
}