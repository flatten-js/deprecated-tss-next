import React from "react";
import type { Preview } from "@storybook/react";

import '../app/globals.css';
import { NextUIProvider } from "../src/providers/NextUIProvider";

const preview: Preview = {
  decorators: [
    Story => (
      <NextUIProvider>
        <Story />
      </NextUIProvider>
    )
  ],
  parameters: {
    nextjs: {
      appDirectory: true
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
};

export default preview;
