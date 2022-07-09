#!/usr/bin/env node
import fs from 'fs';
import { colorThemeData, themes } from '../data/color-theme.js';

const EXPORT_DIR = 'themes';

function isThemed(obj) {
  if (obj == null || typeof obj !== 'object') return false;
  for (const key in obj) return key.startsWith('theme:');
  return false;
}

function themeSelector(themeId) {
  const themeKey = `theme:${themeId}`;
  return function (key, value) {
    return isThemed(value) ? value[themeKey] : value;
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
