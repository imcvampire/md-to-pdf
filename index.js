#!/usr/bin/env node
'use strict'

const fs = require('fs'),
  markdownpdf = require('markdown-pdf');

const fileInputPath = process.argv[2] || '*.md',
  fileOutputPath = process.argv[3] || fileInputPath.slice(0, -2) + 'pdf';

fs.createReadStream(fileInputPath)
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(fileOutputPath), () => {
    console.log('Finish convertion')
  })
