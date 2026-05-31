/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'canvas', value: '#1E1E1E' },
        { name: 'grey', value: '#F5F5F5' },
      ],
    },
    layout: 'fullscreen',
  },
};

export default preview;
