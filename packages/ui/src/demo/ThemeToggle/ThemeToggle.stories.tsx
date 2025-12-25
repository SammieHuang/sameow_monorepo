import type { Meta, StoryObj } from "@storybook/react";
import ThemeToggle from "./ThemeToggle";
import { Moon, Sun, Palette, Sparkles, CloudSunIcon, MoonStarIcon } from "lucide-react";

const meta: Meta<typeof ThemeToggle> = {
  title: "DEMO/ThemeToggle",
    component: ThemeToggle,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem' }}>
                <Story />
            </div>
      )
  ]
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {
    size : 24
  }
};

export const Large: Story = {
  args: {
    size: 48
  }
}

export const CustomizedIcon: Story = {
  args: {
    size: 24,
    darkIcon: MoonStarIcon,
    lightIcon: CloudSunIcon
  }
}

