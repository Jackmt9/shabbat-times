#!/usr/bin/env node
const fetch = require("node-fetch");
let arg = require('yargs').parse()['_']
let zip = arg.join('')
// https://github.com/yargs/yargs

fetch(`https://www.hebcal.com/shabbat?cfg=json&zip=${zip}&m=50&&a=off`)
.then(r => r.json())
.then(r => {

    let date;
    let title; 

    r.items.forEach(item => {
        if(item[0].title_orig == "Candle lighting"){
            date = item.date
            title = item.title

        }
    })
    console.log(date)
    console.log(title)


    // console.log(`Location: ${location}`)
    // console.log(`Weekend: ${date}`)
    // console.log(`--------------------`)
    // console.log(parasha)
    // console.log(start)
    // console.log(end)
})
.catch(function() {
    console.log("Invalid ZIP code, please try again.");
});