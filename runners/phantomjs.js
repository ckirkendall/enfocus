#!/usr/bin/env phantomjs

// reusable phantomjs script for running clojurescript.test tests
// see http://github.com/cemerick/clojurescript.test for more info

if (phantom.args.length != 1) {
    console.log('Expected a target URL parameter.');
    phantom.exit(1);
}

var p = require('webpage').create();
var url = phantom.args[0];

//var p = require('webpage').create();
//p.injectJs(require('system').args[1]);

p.onConsoleMessage = function (x) { console.log(x); };

p.open(url, function (status) {
    if (status != "success") {
        console.log('Failed to open ' + url);
        phantom.exit(1);
    }
    console.log("opened: " + url);

    p.evaluate(function () {
        cemerick.cljs.test.set_print_fn_BANG_(function(x) {
            x = x.replace(/\n/g, "");
            console.log(x);
        });
    });
    var success = p.evaluate(function () {
        var results = cemerick.cljs.test.run_all_tests();
        console.log(results);
        return cemerick.cljs.test.successful_QMARK_(results);
    });

    phantom.exit(success ? 0 : 1);
});
