define(function () {

    /**
     * Array forEach
     * @version 0.8.0 (2012/12/18)
     */
    function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            n = arr.length;
        while (++i < n) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }

    return forEach;

});
