var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/Valentines', function (req, res, next) {
    console.log(req.query);

    var returnData;
    switch (Number(req.query.type)) {
        case 1:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144661" frameborder="0" scrolling="no"></iframe>';
            break;
        case 2:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144636" frameborder="0" scrolling="no"></iframe>';
            break;
        case 3:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144637" frameborder="0" scrolling="no"></iframe>';
            break;
        case 4:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144638" frameborder="0" scrolling="no"></iframe>';
            break;
        case 5:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144639" frameborder="0" scrolling="no"></iframe>';
            break;
        case 6:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144647" frameborder="0" scrolling="no"></iframe>';
            break;
        case 7:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144648" frameborder="0" scrolling="no"></iframe>';
            break;
        case 8:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144649" frameborder="0" scrolling="no"></iframe>';
            break;
        case 9:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144650" frameborder="0" scrolling="no"></iframe>';
            break;
        case 10:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144651" frameborder="0" scrolling="no"></iframe>';
            break;
        case 11:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144652" frameborder="0" scrolling="no"></iframe>';
            break;
        case 12:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144654" frameborder="0" scrolling="no"></iframe>';
            break;
        case 13:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144655" frameborder="0" scrolling="no"></iframe>';
            break;
        case 14:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144656" frameborder="0" scrolling="no"></iframe>';
            break;
        case 15:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144657" frameborder="0" scrolling="no"></iframe>';
            break;
        case 16:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144658" frameborder="0" scrolling="no"></iframe>';
            break;
        case 17:
            returnData = '<iframe width="100%" height="55" src="https://www.iradeo.com/station/embed/144659" frameborder="0" scrolling="no"></iframe>';
            break;
    }

    res.render('valentines', {title: 'Express', data: returnData});
});

module.exports = router;
