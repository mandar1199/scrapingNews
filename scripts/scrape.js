//dependancies
var request = require("request");
var cheerio = require("cheerio");

//scrape callback function
var scrape = function(cd) {
    //from nytimes.com
    request("https://www.nytimes.com", function(err, res, body) {
        var $ = cheerio.load(body);
        var articles = [];

        //pull headline and summary of article
        $(".theme-summary").each(function(i, element) {
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();
            
            //cleaning up result from callback request
            if (head && sum) {
                var headNeat = head.replace(/{\r\n|\n|\r|\t|\s+}/gm, " ").trim();
                var sumNeat = sum.replace(/{\r\n|\n|\r|\t|\s+}/gm, " ").trim();

                var dataToAdd = {
                    headLine: headNeat,
                    summary: sumNeat
                };

                articles.push(dataToAdd);
            }
        });

        createImageBitmap(articles);
    });
};

module.exports = scrape;