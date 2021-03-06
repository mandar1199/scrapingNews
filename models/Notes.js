var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
    _headLineId: {
        type: Schema.Types.ObjectId,
        ref: "HeadLine"
    },
    date: String,
    noteText: String
});

var Notes = mongoose.model("Note", noteSchema);

module.exports = Notes;