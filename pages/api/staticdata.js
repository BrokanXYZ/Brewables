import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const csvDirectory = path.join(process.cwd(), 'csv');
  //Read the json data file data.json
  const fileContents = await fs.readFile(csvDirectory + '/brewables.csv', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents);
}