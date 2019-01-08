var config = require('../../config/config').cfg;
var authCtrl = require('./models/auth');  


function REST_ROUTER(router,md5) {
    var self = this;
    self.handleRoutes(router,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,md5) {
    var self = this;

    router.post('/auth/login', authCtrl.adminLogin);
    //router.get('/example',middleware.ensureAuthenticated, example.list);
    
}

module.exports = REST_ROUTER;
