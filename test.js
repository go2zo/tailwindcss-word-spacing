const merge = require("lodash/merge");
const cssMatcher = require("jest-matcher-css");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const customPlugin = require("./index");

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      // Default options for your plugin.
      wordSpacing: {},
    },
    variants: {
      // Default variants for your plugin.
      wordSpacing: [],
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process("@tailwind utilities", {
      from: undefined,
    })
    .then(({ css }) => css);
}

test("utility classes can be generated", () =>
  generatePluginCss().then((css) => {
    expect(css).toMatchCss(`
      .word-spacing-tighter {
        word-spacing: -0.05em
      }

      .word-spacing-tight {
        word-spacing: -0.025em
      }

      .word-spacing-normal {
        word-spacing: 0em
      }

      .word-spacing-wide {
        word-spacing: 0.025em
      }

      .word-spacing-wider {
        word-spacing: 0.05em
      }

      .word-spacing-widest {
        word-spacing: 0.1em
      }
    `);
  }));
