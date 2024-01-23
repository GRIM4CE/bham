import type { Preview } from "@storybook/vue3";

import "@bham/design-system/dist/style.css"
import "./storybook.css"


const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'dark',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ["dark", "light", "blue", "green", "robin"],
      },
    },
  },
  parameters: {
    options: {
      storySort: (a, b) => {
        const order = ["General", "Atoms", "Layout"]
        const aPaths = a.title.split('/');
        const bPaths = a.title.split('/');
        const rootA = aPaths[0];
        const rootB = bPaths[0];

        const indexA = order.indexOf(rootA);
        const indexB = order.indexOf(rootB);

        if (indexA === indexB) {
          if (a.type === 'docs') {
            return 1;
          } else if (b.type === 'docs') {
            return -1;
          }
          return 0;
        }
        return indexA > indexB ? 1 : -1;
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
  },
      decorators: [
      (story, context) => {
        const activeTheme = context.globals.theme || 'dark';
        const body = document.body

        const inactiveThemes = ["dark", "light", "blue", "green", "robin"].filter(theme => theme !== activeTheme)
        inactiveThemes.forEach(theme => {
          if(body.classList.contains(theme)) {
            body.classList.remove(theme)
          }
        })

        body.classList.add(activeTheme);
        return {
          components: { story },
          template: `<story />`
        };
      },
    ]
};

export default preview;
