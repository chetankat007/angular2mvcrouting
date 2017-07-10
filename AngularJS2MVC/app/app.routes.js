"use strict";
var router_1 = require('@angular/router');
var aboutus_component_1 = require('./aboutus.component');
var home_component_1 = require('./home.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'Home', component: home_component_1.HomeComponent },
    { path: 'About', component: home_component_1.HomeComponent },
    { path: 'Home/Index', component: home_component_1.HomeComponent },
    { path: 'Home/About', component: aboutus_component_1.AboutUsComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map