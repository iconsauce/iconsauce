import { PathLike } from 'fs'
import handlebars from 'handlebars'
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
{{#each selectors}}
.{{@key}}::before { content: "{{this}}"; }
{{/each}}
`)

const css = async (config: Config, base64font: string, dictionary: Map<string, PathLike>): Promise<string> => {
  const prefixes = []
  let plugin
  for (plugin of config.plugin) {
    prefixes.push(plugin.prefix)
  }
  const sanitizedDictionary = sanitize(dictionary)

  return template({
    fontBase64: base64font,
    classPrefixes: prefixes,
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    selectors: sanitizedDictionary,
  })
}

const sanitize = (dictionary: Map<string, PathLike>): Map<string, string> => {
  const sanitizedDictionary : Map<string, string> = new Map()

  for (const key of dictionary.keys()) {
    sanitizedDictionary.set(key.replace(/\//g, '\\/'), '\\'+ dictionary.get(key)?.toString().codePointAt(0)?.toString(16))
  }
  return sanitizedDictionary
}

export {
  css,
}
