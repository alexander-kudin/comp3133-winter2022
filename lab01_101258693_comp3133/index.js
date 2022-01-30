// Alexander Kudin 101258693
const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const canadaRecords = [];
const usaRecords = [];

const csvWriterCanada = createCsvWriter({
    path: 'canada.csv',
    header: [
        {id: 'country', title: 'country'},
        {id: 'year', title: 'year'},
        {id: 'population', title: 'population'},
    ]
});

const csvWriterUSA = createCsvWriter({
    path: 'usa.csv',
    header: [
        {id: 'country', title: 'country'},
        {id: 'year', title: 'year'},
        {id: 'population', title: 'population'},
    ]
});

fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.country == 'Canada') { canadaRecords.push(row); }
        if (row.country == 'United States') { usaRecords.push(row); }
    })
    .on('end', () => {
        writeData();
    });

const writeData = () => {
    csvWriterCanada
        .writeRecords(canadaRecords)
        .then(()=> console.log('The CSV file was written successfully'));

    csvWriterUSA
        .writeRecords(usaRecords)
        .then(()=> console.log('The CSV file was written successfully'));
}