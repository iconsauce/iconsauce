import chalk from 'chalk'
import handlebars from 'handlebars'

const template = handlebars.compile(`
@font-face {
  font-family: "{{fontFamily}}";
  src: url(data:font/truetype;charset=utf-8;base64,{{fontBase64}});
}
{{#each classPrefixes}}
[class^="{{this}}/"],
{{#if @last}}[class*=" {{this}}/"]{{else}}[class*=" {{this}}/"],{{/if}}{{/each}} {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "{{fontFamily}}" !important;
  font-size: {{fontSize}};
  font-style: normal;
}
{{#each selectors}}
.{{@key}}::before { content: "{{this}}"; }
{{/each}}
`)

const css = opts => {
  return template({
    fontBase64: 'aabbccddee',
    classPrefixes: ['gm'],
    fontFamily: 'omnicon',
    fontSize: '24px',
    selectors: [
      { 'gm\/icon-name': '\ea01' },
    ],
  })
}

export {
  css,
}
