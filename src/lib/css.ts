import { PathLike } from 'fs'
import handlebars, { HelperOptions } from 'handlebars'
import { Config } from '../interface/config'

const template = handlebars.compile(`@font-face {
  font-family: "{{fontFamily}}";
  src: url("data:font/truetype;charset=utf-8;base64,{{{fontBase64}}}") format("truetype");
}

{{#each classPrefixes}}[class^="{{this}}/"], [class*=" {{this}}/"]{{#if @last}}{{else}}, {{/if}}{{/each}} {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "{{fontFamily}}" !important;
  font-size: {{fontSize}};
  font-style: normal;
  text-align: center;
}

{{#eachInMap selectors}}
{{iconselector key value }}
{{/eachInMap}}
`)

handlebars.registerHelper( 'iconselector', (key: string, value: string) => {
  return new handlebars.SafeString(`.${key.replace(/\//g, '\\/')}::before { content: "\\${value.toString().codePointAt(0)?.toString(16) as string}"}`)
})

handlebars.registerHelper( 'eachInMap', (map: Map<string, PathLike>, block: HelperOptions ) => {
  let out = ''
  for (const key of map.keys()){
    out += block.fn({ key, value: map.get(key) })
  }
  return out
})

const css = (config: Config, base64font: string, dictionary: Map<string, PathLike>): string => {
  const prefixes = new Set()

  for (const key of dictionary.keys()) {
    prefixes.add(key.toString().split('/')[0])
  }

  return template({
    fontBase64: base64font,
    classPrefixes: prefixes,
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    selectors: dictionary,
  })
}

export {
  css,
}
