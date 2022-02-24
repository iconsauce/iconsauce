import { IconsaucePlugin } from '@iconsauce/plugin'

export interface Config {
  content: string[]
  fontSize: string
  fontFamily: string
  plugin: IconsaucePlugin[]
  verbose: boolean
  skipWarnings: boolean
}
