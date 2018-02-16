<script>
  (function() {
    var LINK = '#drift'

    function ready(fn) {
      if (document.readyState != 'loading') {
        fn();
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
      } else {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState != 'loading')
            fn();
        });
      }
    }
    function forEachElement(link, fn) {
     var links = document.getElementsByTagName('a');
      var elements = [];
     for (var i = 0; i < links.length; i++){
       if (links[i].hash == link){
            elements.push(links[i]);
        }
      }
      for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
    }
    function openSidebar(driftApi, event) {
      event.preventDefault();
      driftApi.sidebar.open();
      return false;
    }
    ready(function() {
      drift.on('ready', function(api) {
        var handleClick = openSidebar.bind(this, api)
        forEachElement(LINK, function(el) {
          el.addEventListener('click', handleClick);
        });
      });
    });
  })();
</script>
