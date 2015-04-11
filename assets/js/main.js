$(document).ready( function () {
	//init
	SC.initialize({
	  client_id: '2880be10afa0a3fa61b8825c547b2511'
	});
	
	 //Get User ID
	 //SC.get('/resolve', {
     // url: 'https://soundcloud.com/vibin-fm'
	 //}, function(user) {
	 //  console.log(user.id); //vibin-fm user id = 12749813
	 //  $('#isotope').append(user.id);
	 //});
	 
	 
	 //GET wrapper
	 SC.get("/playlists/1/", function(playlists) {
	 	 
	 	 //loop
	 	 $.each(playlists,function(i,item) {
		 	//set variables
	 	    var title = playlists.tracks[0].title; 
	 	    var id = playlists.tracks[0].id;
	 	    
	 	    //set structures
	 	    var trackHTML = "<div class=\"review-item message width2 height2\">" + 
                             "<a class=\"review-group\">" + 
                             "<h3>" + 
                             title +
                             "</h3>" +
                             "<h5>" + "Label" + ": " + title + "</h5>" +
                             "<p>" + 
                             title + 
                             "</p>" + 
                             "<div class=\"full-content message-content\">" +
                             "<h3>" +
                             title +
                             "</h3>" +
                             "<h5>" + "Policyholder" + ", " + title + ", " + "FL" + "</h5>" +
                             "<p>" +
                             title +
                             "</p>" +
                             "</div>" +
                             "</a>" + 
                             "</div>";
	 	    
	 	    
	 	    //conditions
	 	 	
	 	 	 if (id === 43 ) { 
		 	   $('#isotope').append(trackHTML);
		 	   console.log(title);
		 	 } else {
               console.log(title + "genre not found");
             }
	 	 	
	 	 	
	 	 })//end .each
	 	 
	 });//end .get
	 
       $(document).ready(function() {       
            /* Init Isotope */
            var $container = $('#isotope').isotope({
                // options
                itemSelector: '.review-item',
                //transformsEnabled: false,
                layoutMode: 'masonry',
                masonry: {
                    // columnWidth: 322,
                    // gutterWidth: 5
                }
            });


            /* Filtering */  
            $(document).on('click', '#filters a', function() {
                var selector = $(this).attr('data-filter');
                $('#isotope').isotope({ filter: selector });
                reGroup();
                return false;
            });
             
            /* Remove / Add .is-checked when clicked */
            $('.filter-container ul li a').on('click', function () {
                $('.filter-container ul li a').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        
            function reGroup() {
                $('.review-group').colorbox({
                    rel: 'nofollow'
                });
                $('.review-item:not(.isotope-hidden) .review-group').colorbox({
                    rel: 'reviews',
                    transition: 'none',
                    loop: false,
                    width: '75%',
                    maxWidth: '100%',
                    maxHeight: '100%'
                });
            }
            
            //init
            reGroup();
            
            var windowHeight = $(window).outerHeight();
            
            $('.full-content').each(function() {
                if ($(this).outerHeight(true) < windowHeight) {
                    $(this).addClass('centeredY');
                }else{
                    $(this).removeClass('centeredY');
                }
            });


              /* Assigning Colorbox event to item classes */
              $(".review-item.video a").colorbox({ inline:true, href: function(){ return $(this).children('.full-content') } });
              $(".review-item.message a").colorbox({ inline:true, href: function(){ return $(this).children('.full-content') } });
              $(".review-item.social a").colorbox({ inline:true, href: function(){ return $(this).children('.full-content') } });
              $(".review-item.photo a").colorbox({ inline:true, href: function(){ return $(this).children('.full-content') } });
              });

// end .ready()
});
