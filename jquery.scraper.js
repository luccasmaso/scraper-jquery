(function($) {

  $.fn.scraper = function (options){
    this.each(function(){
      var element = $(this);
      var defaults = {width: element.parent().width()}
      options = $.extend(defaults, options || {});
      var href = element.attr('href');
      $.ajax({
        url: "https://scraper.luccasmaso.com/api/v1/oembed?url=" + encodeURIComponent(href) + "&width=" + options.width + "&autoplay=1"
      }).done(function(response){
        if(response.type == "rich" || response.type == "video"){
          element.replaceWith(response.html);
          if(options.done){
            options.done.call();
          }
        }
      });
    });
  };

}(jQuery, window));
