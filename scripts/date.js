//obtaining the date the article was written
var makeDate = function() {
    var d = new Date();
    var formattedDate = "";
    
    //grabbing month
    formattedDate += (d.getMonth() + 1) + "_";
    //grabbing day
    formattedDate += d.getDate() + "_";
    //grabbing year
    formattedDate += d.getFullYear();

    return formattedDate;
};

module.exports = makeDate;