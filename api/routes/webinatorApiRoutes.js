'use strict';
module.exports = function(app) {
    var webinator = require('../controllers/webinatorApiController');
    var webinator_items = require('../controllers/webinatorItemsApiController');

    // webinator Routes
    app.route('/projects')
        .get(webinator.list_all_projects)
        .post(webinator.create_a_project);

    app.route('/projects/:projectId')
        .get(webinator.read_a_project)
        // .put(webinator.update_a_project)
        .delete(webinator.delete_a_project);

    app.route('/items')
        .get(webinator_items.list_all_items)
        .post(webinator_items.create_a_item);

    app.route('/items/:itemId')
        .get(webinator_items.get_item)
        .delete(webinator_items.delete_item);
};