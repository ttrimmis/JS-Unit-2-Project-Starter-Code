/*  
  GA JS-SF-9
  Tina Trimmis
*/
'use-strict';

// Initial load
$(window).on('load', function () {
  $('#popUp').removeClass('hidden');
  $('#popUp a').hide();
});

// This will display on page load
$(function redditOnPageLoad() {
  $.ajax({
    type: 'GET',
    url: 'https://www.reddit.com/top.json',
    error: function () {
      alert('Unable to load feed.');
    },
    success: function (results) {
      results.data.children.forEach(function (result) {
        let redditThumbnail = result.data.thumbnail;
        let redditLogo = './images/reddit.png';
        if (redditThumbnail === 'default' || redditThumbnail === 'self' || redditThumbnail === 'image') {
          var $redditTemplate = $('<article class="article"><section class="featuredImage"><img src="' + redditLogo + '" /></section><section class="articleContent"><a href="' + result.data.url + '"><h3>' + result.data.title + '</h3></a><h6>' + result.data.subreddit + '</h6></section><section class="impressions">' + result.data.ups + '</section><div class="clearfix"></div></article>').appendTo("#main");
        } else {
          var $redditTemplate = $('<article class="article"><section class="featuredImage"><img src="' + redditThumbnail + '" /></section><section class="articleContent"><a href="' + result.data.url + '"><h3>' + result.data.title + '</h3></a><h6>' + result.data.subreddit + '</h6></section><section class="impressions">' + result.data.ups + '</section><div class="clearfix"></div></article>').appendTo("#main");
        }

        $redditTemplate.on('click', function (event) {
          event.preventDefault();
          $('#popUp .container, #popUp a').show();
          $('#popUp').removeClass('loader hidden');
          $('#popUp .container h1').text(result.data.title);
          $('#popUp .container p').text('Reddit does not provide descriptions. Click the button to view more about this title.');
        });

        // This is the button that takes you to the specific media's page
        $('#source').on('click', function () {
          $('#source').attr('href', result.data.url);
        });

      });

      $('#popUp').addClass('hidden');
    }
  });
});

// Mashable feed
$('#mashable').on('click', function mashable() {
  $('#newsSource').text('Mashable');
  $.ajax({
    type: 'GET',
    url: 'http://feedr-api.wdidc.org/mashable.json',
    error: function () {
      alert('Unable to load feed.');
    },
    success: function (results) {
      $("#main").empty();
      results.new.forEach(function (result) {
        var $mashableTemplate = $('<article class="article"><section class="featuredImage"><img src="' + result.feature_image + '" alt="" /></section><section class="articleContent"><a href="' + result.short_url + '"><h3>' + result.title + '</h3></a><h6>' + result.channel + '</h6></section><section class="impressions">' + result.formatted_shares + '</section><div class="clearfix"></div></article>').appendTo("#main");

        $mashableTemplate.on('click', function (event) {
          $('#popUp .container').show();
          event.preventDefault();
          $('#popUp a').show();
          $('#popUp').removeClass('loader hidden');
          $('#popUp .container h1').text(result.title);
          $('#popUp p').text(result.excerpt);
        });

        // This is the button that takes you to the specific media's page
        $('#source').on('click', function () {
          $('#source').attr('href', result.link);
        });
      });
    }
  });
});

// Digg feed
$('#digg').on('click', function digg() {
  $('#newsSource').text('Digg');
  $.ajax({
    type: 'GET',
    url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
    error: function () {
      alert('Unable to load feed.');
    },
    success: function (results) {
      $("#main").empty();
      results.data.feed.forEach(function (result) {
        var $diggTemplate = $('<article class="article"><section class="featuredImage"><img src="' + result.content.media.images[0].url + '" alt="" /></section><section class="articleContent"><a href="' + result.content.url + '"><h3>' + result.content.title + '</h3></a><h6>' + result.content.tags[0].display_name + '</h6></section><section class="impressions">' + result.diggs.count + '</section><div class="clearfix"></div></article>').appendTo("#main");

        $diggTemplate.on('click', function (event) {
          $('#popUp .container').show();
          event.preventDefault();
          $('#popUp a').show();
          $('#popUp').removeClass('loader hidden');
          $('#popUp .container h1').text(result.content.title);
          $('#popUp p').text(result.content.description);
        });

        // This is the button that takes you to the specific media's page
        $('#source').on('click', function () {
          $('#source').attr('href', result.content.url);
        });
      });
    }
  });
});

// Reddit feed
$('#reddit, #logo').on('click', function reddit() {
  $('#newsSource').text('Reddit');
  $.ajax({
    type: 'GET',
    url: 'https://www.reddit.com/top.json',
    error: function () {
      alert('Unable to load feed.');
    },
    success: function (results) {
      $("#main").empty();
      results.data.children.forEach(function (result) {
        let redditThumbnail = result.data.thumbnail;
        let redditLogo = './images/reddit.png';
        if (redditThumbnail === 'default' || redditThumbnail === 'self' || redditThumbnail === 'image') {
          var $redditTemplate = $('<article class="article"><section class="featuredImage"><img src="' + redditLogo + '" /></section><section class="articleContent"><a href="' + result.data.url + '"><h3>' + result.data.title + '</h3></a><h6>' + result.data.subreddit + '</h6></section><section class="impressions">' + result.data.ups + '</section><div class="clearfix"></div></article>').appendTo("#main");
        } else {
          var $redditTemplate = $('<article class="article"><section class="featuredImage"><img src="' + redditThumbnail + '" /></section><section class="articleContent"><a href="' + result.data.url + '"><h3>' + result.data.title + '</h3></a><h6>' + result.data.subreddit + '</h6></section><section class="impressions">' + result.data.ups + '</section><div class="clearfix"></div></article>').appendTo("#main");
        }

        $redditTemplate.on('click', function (event) {
          event.preventDefault();
          $('#popUp .container, #popUp a').show();
          $('#popUp').removeClass('loader hidden');
          $('#popUp .container h1').text(result.data.title);
          $('#popUp .container p').text('Reddit does not provide descriptions. Click the button to view more about this title.');
        });

        // This is the button that takes you to the specific media's page
        $('#source').on('click', function () {
          $('#source').attr('href', result.data.url);
        });

      });

      $('#popUp').addClass('hidden');
    }
  });
}); 

// Search bar
$('#search_button').click(function () {
  $('#search').toggleClass('active');
});

$(document).keypress(function (event) {
  if (event.which === 13) {
    $('#search').removeClass('active');
  }
});

// Close Pop Up
$('.closePopUp').on('click', function () {
  $('#popUp').addClass('hidden loader');
  $('#popUp a').hide();
});