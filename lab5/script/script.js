'use strict';

let app = angular.module('app', ['ngRoute']);
app.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/first', {
				templateUrl: 'tamplate.html'
			})
			.when('/second', {
				templateUrl: 'tamplate.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);

app.controller('appController', function($scope, $http) {

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

      //var params = JSON.stringify({encoding: "json", pretty: "1", action: "search_listings", country: $('.country').val(), listing_type: $('input:checked').val(), place_name: $('.city').val()});

      /*$http.jsonp("http://api.nestoria.co.uk/api/?data=" + params, {jsonpCallbackParam: 'callback'})
        .then(function(json) {
            $scope.data = json.data.response.listings;
        });*/

      /*$http({
        method : "GET",
        url : url

      }).then(function (response) {
          $scope.data = response.data.response.listings;
          $scope.itemsPerPage = response.data.response.total_pages;
        }, function (response) {
          $alert(response.statusText);
      });*/

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

      /*$http({
        method : "GET",
        url : url
      }).then(function(response) {
          $scope.data = response.data.response.listings;
      });*/
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
