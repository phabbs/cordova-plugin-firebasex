var exec = require('cordova/exec');

exports.startTrace = function(name, success, error) {
    exec(success, error, 'FirebasePerformancePlugin', 'startTrace', [name]);
};

exports.incrementCounter = function(name, counterNamed, success, error) {
    exec(success, error, 'FirebasePerformancePlugin', 'incrementCounter', [
        name,
        counterNamed
    ]);
};

exports.stopTrace = function(name, success, error) {
    exec(success, error, 'FirebasePerformancePlugin', 'stopTrace', [name]);
};

exports.setPerformanceCollectionEnabled = function(enabled, success, error) {
    exec(
        success,
        error,
        'FirebasePerformancePlugin',
        'setPerformanceCollectionEnabled',
        [enabled]
    );
};
