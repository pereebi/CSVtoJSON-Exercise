  // modules imported for this api task
import express from 'express';
import csvtojson from 'csvtojson';
import { Converter } from 'csvtojson/v2/Converter';
import { promises as fs } from 'fs';

// express Router object
const routes = express.Router();

// csv object
const csv: Converter = csvtojson();

// csv file
const csvFilePath = './src/names.csv';

// get method for the csv file
routes.get('/', async (req: express.Request, res: express.Response) => {
   
    res.send('Converting CSV file to JSON')

        // convert csv file
    const jsonFile = await csv.fromFile(csvFilePath);

    // map through json file
    let jsonArray = jsonFile.map((json) => {
        if(json.phone === undefined) {
            json.phone = 'missing data'
        }
        return json
    })
    console.log(jsonArray);

    // store the converted file in json file
    fs.writeFile('names.json', JSON.stringify(jsonFile), 'utf-8');
})


export default routes;