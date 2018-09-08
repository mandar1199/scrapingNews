//dependacies
var Note = require("../models/Notes");
var makeDate = require("../scripts/date");

module.exports = {
    get: function(data, cb) {
        Note.find({
            _headLineId: data._id
        }, cb);
    },
    save: function(data, cb) {
        var newNote = {
            _headLineId: data._id,
            date: makeDate(),
            noteText: data.noteText
        };

        Note.create(newNote, function(err, doc) {
            if (error) {
                console.log(error);
            } else {
                console.log(doc);
                cb(doc);
            }
        });
    },
    delete: function(data, cb) {
        Note.remove({
            _id: data._id
        }, cb);
    }
};