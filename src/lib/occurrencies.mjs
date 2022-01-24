import { readFile } from 'fs/promises'
import chalk from 'chalk'

const searchIcons = /(mdi|gm|mgg)(\/{1}[a-z\-]+){1,2}/gm

const occurrencies = async entries => {
  console.info('occurrencies')

  let entry
  let inputIcons = []
  for (entry of entries) {
    const fileContent = await readFile(entry, 'utf8').catch(error => {
      console.error(error)
    })
    inputIcons = [...new Set([...inputIcons, ...fileContent.match(searchIcons)])]
  }
  console.info(`Found ${chalk.green(inputIcons.length)} icons`)
  console.info(inputIcons.sort())
}

export {
  occurrencies,
}
