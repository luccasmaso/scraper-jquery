(function($) {

  $.fn.scraper = function (options){
    this.each(function(){
      var width = options.width || element.parent().width()
      var element = $(this);
      var href = element.attr('href');
      $.ajax({

        url: "http://scraper.luccasmaso.com/api/v1/oembed?url=" + encodeURIComponent(href) + "&width=" + width + "&autoplay=1"
      }).done(function(response){
        if(response.type == "rich" || response.type == "video"){
          element.replaceWith(response.html);
        }
      });
    });
  };

}(jQuery, window));
