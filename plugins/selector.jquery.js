/*!
 * @file ScrollMagic jQuery plugin.
 *
 * requires: jQuery >=1.11
 */
function ScrollMagicPluginJQuery(ScrollMagic, $) {
  "use strict";
  var NAMESPACE = "jquery.ScrollMagic";

  var
    console = window.console || {},
    err = Function.prototype.bind.call(console.error || console.log || function () { }, console);
  if (!ScrollMagic) {
    err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
  }
  if (!$) {
    err("(" + NAMESPACE + ") -> ERROR: jQuery could not be found. Please make sure it's loaded before ScrollMagic or use an asynchronous loader like requirejs.");
  }

  ScrollMagic._util.get.elements = function (selector) {
    return $(selector).toArray();
  };
  ScrollMagic._util.addClass = function (elem, classname) {
    $(elem).addClass(classname);
  };
  ScrollMagic._util.removeClass = function (elem, classname) {
    $(elem).removeClass(classname);
  };
  $.ScrollMagic = ScrollMagic;
};

export default ScrollMagicPluginJQuery;
