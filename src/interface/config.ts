import { IconsaucePlugin } from './plugin'

export interface Config {
  content: string[]
  fontSize: string
  fontFamily: string
  plugin: IconsaucePlugin[]
  verbose: boolean
  skipWarning: boolean
}
