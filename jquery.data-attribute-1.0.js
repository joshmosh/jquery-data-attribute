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
  $.fn.dataAttr = function(dataAttribute, dataValue){
    if(!dataAttribute) {
      return false;
    }

    //if dataAttribute is an object, we will use it to set a data attribute for every key
    if (typeof(dataAttribute) == "object"){
        for (var key in dataAttribute){
            this.attr('data-' + key, dataAttribute[key]);
        }

        return this;
    }
    //if a value was passed, we'll set that value for the specified dataAttribute
    else if (dataValue){
        return this.attr('data-' + dataAttribute, dataValue);
    }
    //lastly, try to just return the requested dataAttribute's value from the element
    else{
        var value = this.attr('data-' + dataAttribute);

        //specifically checking for undefined in case "value" ends up evaluating to false
        if(value == undefined) {
          $.error('Data attribute "' + dataAttribute + '" does not exist!');
        }

        return value;
    }
  };
})(jQuery);
