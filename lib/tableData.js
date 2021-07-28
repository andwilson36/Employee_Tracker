const express = require('express');
const db = require('./connection');
const table = require('console.table');

function viewAll() {
    const table = [];
    db.query('SELECT * FROM employee;', (err, results) => {
        if (err) throw err
        console.log(results)
        results.forEach(i => { table.push(i.first_name) })
    })
    console.log(table)
    return table;
}
viewAll()
module.exports = { viewAll }