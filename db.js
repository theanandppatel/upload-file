const mongoose = require("mongoose");

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        console.log("mongodb+srv://anandpatel95374:MkOTrhxwClCVtL1s@cluster0.iflrhoh.mongodb.net/upload?retryWrites=true&w=majority")
        await mongoose.connect("mongodb+srv://anandpatel95374:MkOTrhxwClCVtL1s@cluster0.iflrhoh.mongodb.net/upload?retryWrites=true&w=majority", connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};
