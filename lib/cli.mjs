import arg from 'arg'
import {build} from "./index.mjs"

let config = "./omnicon.config.js" 

const args = arg({
    '--config': String,

    //Alias
    '-c': '--config',
});

if(args['--config']) {
    config = args['--config']
}

console.log(args);

build()