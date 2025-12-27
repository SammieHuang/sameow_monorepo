import type { Meta, StoryObj } from '@storybook/react';
import MainMenu from './MainMenu';

const meta: Meta<typeof MainMenu> = {
    title: 'Components/MainMenu',
    component: MainMenu,
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

type Story = StoryObj<typeof MainMenu>;

export const Story: Story = {
    name: 'MainMenu'
}