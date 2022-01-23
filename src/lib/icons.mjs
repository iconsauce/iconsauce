import path from 'path'
import { readdir } from 'fs/promises'

const dirpath = path.join(__dirname, '/path')

readdir(dirpath, (err, files) => {
  if (err) {
    console.error(err)
  }
  const icons = files.filter(el => path.extname(el) === '.svg')
  // do something with your files, by the way they are just filenames...
})
