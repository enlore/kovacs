;(function (context) {

    function kovacs (api, ejectBtn) {}

    if (context.seele) {
      context.seele.register("kovacs", kovacs);
    } else if (context.require) {
        // stuff
    } else if (context.module && context.module.exports) {
        // other stuff
    }

})(window);

