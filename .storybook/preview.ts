import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          value: 'rgb(25, 25, 25)',
        },
        {
          name: 'light',
          value: 'rgb(245, 245, 245)',
        },
      ],
    },
  },
};

export default preview;
