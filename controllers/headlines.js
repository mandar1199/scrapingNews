//dependancies
var scrape = require("../scripts/scrape");
var makeDate = require("../scripts/date");
var HeadLine = require("../models/Headlines");

module.exports = {
    //callback function
    fetch: function (cb) {
        //for the scraping
        scrape(function (data) {
            var articles = data;
            //for-loop on whether the article is saved
            for (var i = 0; i < articles.length; i++) {
                articles[i].date = makeDate();
                articles[i].saved = false;
            }
            HeadLine.collection.insertMany(articles, {ordered:false}, function(err, docs) {
                cb(err, docs);
            });
        });
    },
    delete: function(query, cb) {
        HeadLine.remove(query, cb);
    },
    get: function(query, cb) {
        HeadLine.find(query)
        .sort({
            _id: -1
        })
        .exec(function(err, doc) {
            cb(doc);
        });
    },
    update: function(query, cb) {
        HeadLine.update({_id: query._id}, {
            $set: query 
        }, {}, cb);
    }
}