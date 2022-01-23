import { readFile } from 'fs/promises'
import chalk from 'chalk'

const searchTerms = [
  /(mdi(\/[a-z-]*){1,2})+/gm,
  /(mdi(\/[a-z-]*){1,2})+/gm,
  /(mdi\/([a-z-]*)\/?([a-z-]*)?)+/gm,
  /((mdi)\/([a-z-]*)\/?([a-z-]*)?)+/gm,
  /((mdi|gm|mgg)\/([a-z-]*)\/?([a-z-]*)?)+/gm,
]

const occurrencies = async entries => {
  console.info('occurrencies')

  let entry
  for (entry of entries) {
    const fileContent = await readFile(entry, 'utf8').catch(error => {
      console.error(error)
    })
    console.log(fileContent)

    // // We want full words, so we use full word boundary in regex.
    // const regex = new RegExp('\\b' + filter + '\\b');
    // if (regex.test(fileContent)) {
    //     console.log(`Your word was found in file: ${file}`);
    // }
  }

  // return new Promise(resolve => {
  //   const regEx = new RegExp(text, 'i')
  //   const result = [];

  //   await readFile('file/' + filename + '.txt', 'utf8', (err, contents) => {
  //     console.log(err)
  //     let lines = contents.toString().split("\n");
  //     lines.forEach(line => {
  //       if (line && line.search(regEx) >= 0) {
  //         console.log('found in file ', filename)
  //         result.push(line)
  //       }
  //     })
  //     console.log('finished search');
  //     resolve(result);
  //   })
  // });
}

export {
  occurrencies,
}
