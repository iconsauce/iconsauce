import { Plugin } from "./plugin";

export interface Config {
  content: String[]
  fontSize: String
  fontFamily: String
  plugin: Plugin[]
  verbose: Boolean
  skipWarning: Boolean
}
