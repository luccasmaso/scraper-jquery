# scraper-jquery

Jquery plugin that make calls to an embed service for replacing inline links with rich iframes.
Some of the providers supported: Youtube, Vimeo, Soundcloud, Rdio, Spotify, Vine, Facebook.

For now, it is pretty simple and limited to:

1. Defining in your html some selector for the <a> that will be replaced:

```
Check out this video: 
<a class="scraper-jquery" href="https://www.youtube.com/watch?v=gbg27oT8Z9M">https://www.youtube.com/watch?v=gbg27oT8Z9M</a>
```

2. Add to your js file the call that will replace <a>`s with iframe elements:

```
$("a.scraper-jquery").scraper(
  // Optional
  width: 400 // Define some value for the preview. If unset it will get the `element.parent().width`
  done: function(){
    // e.g. Hide some loading UI for feedback.
  }
);
```
