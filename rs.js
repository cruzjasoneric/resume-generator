import fs from 'fs';
import PDFDocument from 'pdfkit';
import { primaryLayout } from './layouts/primary.js';
import { myData as data } from './data.js';
import { PAGE_OPTIONS as pageOptions } from "./constants.js";

const targetOutputDirectory = './output/';

const doc = new PDFDocument(pageOptions);

primaryLayout(doc);

doc.pipe(fs.createWriteStream(`${targetOutputDirectory}${data.name} - RESUME.pdf`));

// Finalize PDF file
doc.end('All rights reserved.');















