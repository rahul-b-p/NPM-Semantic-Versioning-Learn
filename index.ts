import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// used becuse __dirname or __filename not working 
const fileName:string = fileURLToPath(import.meta.url);
const dirName:string =path.dirname(fileName)

const packageJsonPath = path.resolve(dirName,'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));


const dependencies = packageJson.dependencies;
const devDependencies = packageJson.devDependencies;


console.log('Dependencies:');
Object.entries(dependencies).forEach(([pkg, version]) => {
    console.log(`  ${pkg}: ${version}`);
});

console.log('Dev Dependencies:');
Object.entries(devDependencies).forEach(([pkg, version]) => {
    console.log(`  ${pkg}: ${version}`);
});
