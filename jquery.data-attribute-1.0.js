/*
 * jQuery Data Attr
 *
 * Authors:
 *
 * - Josh Minnich <github.com/joshmosh>
 * - Luke Stebner <github.com/lstebner>
 *
 * Example / Usage:
 *
 * Ever get tired of always doing $(el).attr('data-') to get the value of
 * an HTML5 data tag attribute? We did too, which is why we created a convient
 * method for getting those attributes.
 *
 * An exmaple to get <a href="#" data-beer="boddingtons">Link</a> with the plugin
 * would be as follows:
 *
 * $('a').dataAttr('beer');
 *
 * If you stored this to a variable like so:
 *
 * var beer = $('a').dataAttr('beer');
 *
 * beer would equal "boddingtons"
 *
 * Simple, yet convienient... Cheers!
 */
(function($){
  $.fn.dataAttr = function(dataAttribute){
    if(!dataAttribute) {
      return false;
    }

    var value = this.attr('data-' + dataAttribute);

    if(!value) {
      $.error('Data attribute "' + dataAttribute + '" does not exist!');
    }

    return value;
  };
})(jQuery);
