import { Plugin } from "./plugin";

export interface Config {
  content: string[]
  fontSize: string
  fontFamily: string
  plugin: Plugin[]
  verbose: boolean
  skipWarning: boolean
}
