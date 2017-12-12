var mongoose = require('mongoose'),
    Item = mongoose.model('Item');

exports.list_all_items = function(req, res) {
    Item.find({}, function(err, items) {
        if (err)
            res.send(err);
        res.json(items);
    });
};

exports.create_a_item = function(req, res) {
    var new_item = new Item(req.body);
    new_item.save(function(err, item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};

exports.get_item = function(req, res) {
    Item.findById(req.params.itemId, function(err,item) {
        if (err)
            res.send(err);
        res.json(item);
    });
};


exports.delete_item = function(req, res) {
    Item.remove({
        _id: req.params.itemId
    }, function(err, item) {
        if (err)
            res.send(err);
        res.json({ message: 'Item successfully deleted' });
    });
};