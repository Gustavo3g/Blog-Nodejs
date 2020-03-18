if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://deploy:gurustavo@cluster0-lshmk.mongodb.net/test?retryWrites=true&w=majority"}
} else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}