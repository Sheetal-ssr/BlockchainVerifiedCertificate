const routes = require('next-routes')();



routes
.add('/aboutproject', '/')
.add('./validate','/')
.add('./about','/about')
.add('/','/')



module.exports = routes;