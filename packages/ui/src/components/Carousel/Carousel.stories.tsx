import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { images } from "./data";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  args: {
    imageUrls: images,
  },
};

export const WithFewImages: Story = {
  args: {
    imageUrls: images.slice(0, 3),
  },
};

export const WithSingleImage: Story = {
  args: {
    imageUrls: [images[0]],
  },
};

