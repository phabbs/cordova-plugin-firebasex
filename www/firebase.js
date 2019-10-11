var exec = require('cordova/exec');

exports.startTrace = function(name, success, error) {
    exec(success, error, 'FirebasePlugin', 'startTrace', [name]);
};

exports.incrementCounter = function(name, counterNamed, success, error) {
    exec(success, error, 'FirebasePlugin', 'incrementCounter', [
        name,
        counterNamed
    ]);
};

exports.stopTrace = function(name, success, error) {
    exec(success, error, 'FirebasePlugin', 'stopTrace', [name]);
};

exports.setPerformanceCollectionEnabled = function(enabled, success, error) {
    exec(success, error, 'FirebasePlugin', 'setPerformanceCollectionEnabled', [
        enabled
    ]);
};
