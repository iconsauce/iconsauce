import { PathLike } from 'fs'
import handlebars, { HelperOptions } from 'handlebars'
import { Config } from '../interface/config'

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
  const prefixes = []
  let plugin
  for (plugin of config.plugin) {
    prefixes.push(plugin.prefix)
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
