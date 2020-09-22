#!/usr/bin/env node
const fetch = require("node-fetch");
let arg = require('yargs').parse()['_']
let zip = arg.join('')

fetch(`https://www.hebcal.com/shabbat?cfg=json&zip=${zip}&m=50&&a=off`)
.then(r => r.json())
.then(r => {
    // console.log(r)
    // need to adjust for holiday
    let date = r['date'].substr(0,10)
    let location = r['location']['title']
    let start = r['items'][0]['title']
    let end = r['items'][r['items'].length - 1]['title']
    let parasha = r['items'][2]['title']

    console.log(`Location: ${location}`)
    console.log(`Weekend: ${date}`)
    console.log(`--------------------`)
    console.log(parasha)
    console.log(start)
    console.log(end)
})
.catch(function() {
    console.log("Invalid ZIP code, please try again.");
});