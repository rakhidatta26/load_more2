// wow animation
wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  })
  wow.init();


// load more

$(document).ready(function(){
	 $('.example').showMoreItems({
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        startNum: 2,
        afterNum: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        startNum: 1,
        afterNum: 1
      }
    }
  ]
});  
});

