var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var JobInstanceSchema = new Schema(
    {
        job: {type: Schema.Types.ObjectId, ref: "JobInstance", required: true }, //reference to associated job
        imprint: {type: String, required: true},
        category: {type: String, required: true, enum: ["Jobs", "Network", "SelfCare", "Portfolio"], default: "Jobs"},
        follow_up: {tpe: Date, default: Date.now}
    }
);

//Virtual for jobinstance's URL
JobInstanceSchema
.virtual('url')
.get(function() {
    return '/jobs/jobinstance' + this._id;
});

module.exports = mongoose.model('JobInstance', JobInstanceSchema);