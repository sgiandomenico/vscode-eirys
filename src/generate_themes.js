#!/usr/bin/env node

const { themes, colorThemeData } = require('../data/color-theme');
const fs = require('fs');

const EXPORT_DIR = 'themes';

function themeSelector(themeId) {
  return function (key, value) {
    const target = value[`theme:${themeId}`];
    return target == undefined ? value : target;
  }
}

for (const themeId of themes) {
  const filename = `${EXPORT_DIR}/Eirys-${themeId}-color-theme.json`;
  const jsonData = JSON.stringify(colorThemeData, themeSelector(themeId), 2);
  console.log(`Writing ${filename}`);
  fs.writeFile(filename, jsonData, err => {
    if (err) console.error(err);
    // file written successfully
  });
}
