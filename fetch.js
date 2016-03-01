"use strict"

var request = require('request');
var cheerio = require('cheerio');

var pages = [{
    name: "Wiggle",
    url: "http://www.wiggle.co.uk/continental-grand-prix-4000s-ii-folding-road-tyre-twin-pack/",
    expression: ".js-unit-price"
},
{
    name: "ProBikeKit",
    url: "http://www.probikekit.ca/bicycle-tyres/continental-grand-prix-4000s-ii-folding-road-tyre/10918169.html",
    expression: "[itemprop='price']"
},
{
    name: "Merlin",
    url: "https://www.merlincycles.com/continental-grand-prix-4000-s-ii-folding-road-tyres-gp4000s-ii-with-2-free-inner-tubes-700c-71989.html",
    expression: ".merlin-price .price"
},
{
    name: "Chain Reaction",
    url: "http://www.chainreactioncycles.com/ca/en/continental-grand-prix-4000s-ii-road-tyre-25c-pair/rp-prod122746",
    expression: ".pdpsave"
},
{
    name: "Ribble",
    url: "http://www.ribblecycles.co.uk/continental-gp4000s-ii-twinpack/",
    expression: ".full-product-price"
}];

for (var i = 0; i < pages.length; i++) {
    let page = pages[i];

    request(page.url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var price = $(page.expression).text().trim();
        } else {
            console.log("Error on " + page.name);
        }

        console.log(page.name + ' - ' + price);
    })
}
