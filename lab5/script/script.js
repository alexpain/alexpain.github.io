'use strict';

let app = angular.module('app', ['ngRoute']);
app.config( ['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/0', {
				templateUrl: 'tamplate.html',
				controller: 'zero'
			})
      .when('/1', {
				templateUrl: 'tamplate.html',
				controller: 'first'
			})
      .when('/2', {
				templateUrl: 'tamplate.html',
				controller: 'second'
			})
      .when('/3', {
				templateUrl: 'tamplate.html',
				controller: 'third'
			})
      .when('/4', {
				templateUrl: 'tamplate.html',
				controller: 'fourth'
			})
      .when('/5', {
				templateUrl: 'tamplate.html',
				controller: 'fifth'
			})
      .when('/6', {
				templateUrl: 'tamplate.html',
				controller: 'sixth'
			})
      .when('/7', {
				templateUrl: 'tamplate.html',
				controller: 'seventh'
			})
      .when('/8', {
				templateUrl: 'tamplate.html',
				controller: 'eighth'
			})
      .when('/9', {
				templateUrl: 'tamplate.html',
				controller: 'ninth'
			})
      .when('/10', {
				templateUrl: 'tamplate.html',
				controller: 'tenth'
			})
      .when('/11', {
				templateUrl: 'tamplate.html',
				controller: 'eleventh'
			})
      .when('/12', {
				templateUrl: 'tamplate.html',
				controller: 'twelfth'
			})
      .when('/13', {
				templateUrl: 'tamplate.html',
				controller: 'thirteenth'
			})
      .when('/14', {
				templateUrl: 'tamplate.html',
				controller: 'fourteenth'
			})
      .when('/15', {
				templateUrl: 'tamplate.html',
				controller: 'fifteenth'
			})
      .when('/16', {
				templateUrl: 'tamplate.html',
				controller: 'sixteenth'
			})
      .when('/17', {
				templateUrl: 'tamplate.html',
				controller: 'seventeenth'
			})
      .when('/18', {
				templateUrl: 'tamplate.html',
				controller: 'eighteenth'
			})
      .when('/19', {
				templateUrl: 'tamplate.html',
				controller: 'nineteenth'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

	app.controller('zero', function ($scope) {
		$scope.indx = 0;
		let map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
	    zoom: 17
	  });
		let marker = new google.maps.Marker({
	    position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
	    map: map,
	    title: $scope.data[$scope.indx].title
  	});

	});

app.controller('first', function ($scope) {
	$scope.indx = 1;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('second', function ($scope) {
	$scope.indx = 2;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('third', function ($scope) {
	$scope.indx = 3;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('fourth', function ($scope) {
	$scope.indx = 4;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('fifth', function ($scope) {
	$scope.indx = 5;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('sixth', function ($scope) {
	$scope.indx = 6;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('seventh', function ($scope) {
	$scope.indx = 7;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('eighth', function ($scope) {
	$scope.indx = 8;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('ninth', function ($scope) {
	$scope.indx = 9;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('tenth', function ($scope) {
	$scope.indx = 10;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('eleventh', function ($scope) {
	$scope.indx = 11;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('twelfth', function ($scope) {
	$scope.indx = 12;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('thirteenth', function ($scope) {
	$scope.indx = 13;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('fourteenth', function ($scope) {
	$scope.indx = 14;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('fifteenth', function ($scope) {
	$scope.indx = 15;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('sixteenth', function ($scope) {
	$scope.indx = 16;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('seventeenth', function ($scope) {
	$scope.indx = 17;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('eighteenth', function ($scope) {
	$scope.indx = 18;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('nineteenth', function ($scope) {
	$scope.indx = 19;
	let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
    zoom: 17
  });
	let marker = new google.maps.Marker({
		position: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		map: map,
		title: $scope.data[$scope.indx].title
	});
});

app.controller('appController', function($scope, $http) {

    $scope.indx = 0;

    $scope.itemsPerPage = 1;

    $scope.search = function () {
      let price_min = $('[name = price_min]:first').val() || 0;
      let price_max = $('[name = price_max]:first').val() || 999999999;
      let bedroom_min = $('[name = bedroom_min]:first').val() || 0;
      let bedroom_max = $('[name = bedroom_max]:first').val() || 99;
      let room_min = $('[name = room_min]:first').val() || 0;
      let room_max = $('[name = room_max]:first').val() || 99;
      let bathroom_min = $('[name = bathroom_min]:first').val() || 0;
      let bathroom_max = $('[name = bathroom_max]:first').val() || 99;

      $('.item').html("");
      let url = "http://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=" +  + "&listing_type=" + $('input:checked').val() + "&place_name="+ $('.city').val() +"&price_min=" + price_min + "&price_max=" + price_max + "&bedroom_min=" + bedroom_min + "&bedroom_max=" + bedroom_max +"&room_min=" + room_min;
      url += "&bathroom_min=" + bathroom_min + "&bathroom_max=" + bathroom_max;

      $.ajax({
        type: "GET",
        url: "http://api.nestoria.co.uk/api",
        dataType: "jsonp",
        data: {
          'encoding': 'json',
          'pretty': '1',
          'action': 'search_listings',
          'country': $('.country').val(),
          'listing_type': $('input:checked').val(),
          'place_name': $('.city').val(),
          'price_min': price_min,
          'price_max': price_max,
          'bedroom_min': bedroom_min,
          'bedroom_max': bedroom_max,
          'room_min': room_min,
          'room_max': room_max,
          'bathroom_min': bathroom_min,
          'bathroom_max': bathroom_max
        },
        beforeSend: function () {

        },
        success: function (data) {
          $scope.data = data.response.listings;
          $scope.itemsPerPage = data.response.total_pages;

        },

        error: function () {
          alert('not ok');
        }
      });
			let map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: $scope.data[$scope.indx].latitude, lng:  $scope.data[$scope.indx].longitude},
		    zoom: 17
		  });
    };


    $scope.liked = function(e) {
      $(e.target).attr("class", "like liked");
      $('.liked').attr("src","img/heart-black.png");

      let i = $(e.target).attr('name');
          i = +i;

          let todos = localStorage.getItem('todos') + '\
          <div class="listing-list">\
            <img src='+ $scope.data[i].img_url +'>\
            <span class="price">'+ $scope.data[i].price_formatted +'</span><br>\
            <span class="title">'+ $scope.data[i].title +'</span><br>\
            <span class="summary">'+ $scope.data[i].summary +'</span><br>\
            <span class="updated">'+ $scope.data[i].updated_in_days_formatted +'</span>\
          </div>';


          localStorage.setItem('todos', todos);
    }

    $scope.like = function() {
      $('.items').html("");
      if(localStorage.getItem('todos')){
      $('.item').html(localStorage.getItem('todos') + "<span id=\"clear\" class=\"show-more\">Clear</clear>");
      $('#clear').click(function () {
        localStorage.setItem('todos', "");
        $('.items').html("");
        $('.item').html("");
      });
      }else{
        alert('LocalStorage clear');
      }
    }

    $scope.currentPage = 0;

    $scope.firstPage = function() {
      return $scope.currentPage == 0;
    }
    $scope.lastPage = function() {
      var lastPageNum = Math.ceil($scope.itemsPerPage - 1);
      return $scope.currentPage == lastPageNum;
    }
    $scope.numberOfPages = function(){
      return Math.ceil($scope.itemsPerPage);
    }
    $scope.startingItem = function() {
      return $scope.currentPage * $scope.itemsPerPage;
    }
    $scope.pageBack = function() {
      $scope.currentPage = $scope.currentPage - 1;

      $.ajax({
        type: "GET",
        url: "http://api.nestoria.co.uk/api",
        dataType: "jsonp",
        data: {
          'encoding': 'json',
          'pretty': '1',
          'action': 'search_listings',
          'country': $('.country').val(),
          'listing_type': $('input:checked').val(),
          'place_name': $('.city').val(),
          'price_min': price_min,
          'price_max': price_max,
          'bedroom_min': bedroom_min,
          'bedroom_max': bedroom_max,
          'room_min': room_min,
          'room_max': room_max,
          'bathroom_min': bathroom_min,
          'bathroom_max': bathroom_max,
          'page': $scope.currentPage
        },
        beforeSend: function () {

        },
        success: function (data) {
          $scope.data = data.response.listings;

        },

        error: function () {
          alert('not ok');
        }
      });
    }
    $scope.pageForward = function() {
      $scope.currentPage = $scope.currentPage + 1;

      let price_min = $('[name = price_min]:first').val() || 0;
      let price_max = $('[name = price_max]:first').val() || 999999999;
      let bedroom_min = $('[name = bedroom_min]:first').val() || 0;
      let bedroom_max = $('[name = bedroom_max]:first').val() || 99;
      let room_min = $('[name = room_min]:first').val() || 0;
      let room_max = $('[name = room_max]:first').val() || 99;
      let bathroom_min = $('[name = bathroom_min]:first').val() || 0;
      let bathroom_max = $('[name = bathroom_max]:first').val() || 99;

      $('.item').html("");
      let url = "http://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=" + $('.country').val() + "&listing_type=" + $('input:checked').val() + "&place_name="+ $('.city').val() +"&price_min=" + price_min + "&price_max=" + price_max + "&bedroom_min=" + bedroom_min + "&bedroom_max=" + bedroom_max +"&room_min=" + room_min;
      url += "&bathroom_min=" + bathroom_min + "&bathroom_max=" + bathroom_max + "&page=" + $scope.currentPage;

      $.ajax({
        type: "GET",
        url: "http://api.nestoria.co.uk/api",
        dataType: "jsonp",
        data: {
          'encoding': 'json',
          'pretty': '1',
          'action': 'search_listings',
          'country': $('.country').val(),
          'listing_type': $('input:checked').val(),
          'place_name': $('.city').val(),
          'price_min': price_min,
          'price_max': price_max,
          'bedroom_min': bedroom_min,
          'bedroom_max': bedroom_max,
          'room_min': room_min,
          'room_max': room_max,
          'bathroom_min': bathroom_min,
          'bathroom_max': bathroom_max,
          'page': $scope.currentPage
        },
        beforeSend: function () {

        },
        success: function (data) {
          $scope.data = data.response.listings;

        },

        error: function () {
          alert('not ok');
        }
      });
    }

});
