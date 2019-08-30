const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, 'build');
const buildFileNames = fs.readdirSync(buildDir);
buildFileNames.forEach((fileName) => {
  if (!/\.js$/.test(fileName)) return;
  const filePath = path.resolve(buildDir, fileName);
  const file = fs.readFileSync(filePath);
  const fileContents = file.toString();
  const importPattern = /(^ *import\s+(?:\s|.)*?from\s+)(["'])(.+?)(\2)\s*($|;)/gm;
  const newContents = fileContents.replace(importPattern, (fullMatch, importStatement, openQuote, moduleName, closeQuote, terminator) => {
    if (/\.\w{1,4}$/.test(moduleName)) return fullMatch; // it already has an extension
    return `${importStatement}${openQuote}${moduleName}.js${closeQuote}${terminator}`;
  });
  fs.writeFileSync(filePath, newContents);
});
