'use strict';
module.exports = function(app) {
    var webinator = require('../controllers/webinatorApiController');

    // todoList Routes
    app.route('/projects')
        .get(webinator.list_all_projects)
        .post(webinator.create_a_project);


    app.route('/projects/:projectId')
        .get(webinator.read_a_project)
        .put(webinator.update_a_project)
        .delete(webinator.delete_a_project);
};