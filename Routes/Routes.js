const PostApi = require('./Route/Posts');
const subscribeAPI = require('./Route/Subscribe');
const contactAPI = require('./Route/Contact');
const Categories = require('./Route/Categories')
module.exports = (app) => {
    app.use('/posts', PostApi);
    app.use('/lists', subscribeAPI);
    app.use('/contact', contactAPI)
    app.use('/', Categories)
};