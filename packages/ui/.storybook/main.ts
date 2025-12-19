import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "!../src/components/ui/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  addons: ["@storybook/addon-essentials"],
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const path = await import("path");
    const { fileURLToPath } = await import("url");
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const isCI = process.env.CI === 'true';
    
    return mergeConfig(config, {
      base: isCI ? '/sameow_monorepo/' : '/',
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../src"),
        },
      },
    });
  },
};

export default config;
