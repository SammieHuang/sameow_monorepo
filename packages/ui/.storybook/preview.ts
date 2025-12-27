import type { Preview } from "@storybook/react";
import "@/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'UI','Components', 'demo', ],
      },
    },
  },
};

export default preview;
