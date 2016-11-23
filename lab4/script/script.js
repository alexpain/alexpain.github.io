'use strict';

let arr = [];
let page = 1;

$(document).ready(function () {

  $('.position-01').bind('click',function () {

    $('.tile').css("background-image","url('img/background3.jpg')");
  });

  $('.position-02').bind('click',function () {

    $('.tile').css("background-image","url('img/background2.jpg')");
  });

  $('.position-03').bind('click',function () {

    $('.tile').css("background-image","url('img/background1.jpg')");
  });

  $('.position-04').bind('click',function () {

    $('.tile').css("background-image","url('img/background4.jpg')");
  });

  $('.position-05').bind('click',function () {

    $('.tile').css("background-image","url('img/background5.jpg')");
  });

  $('.position-1').bind('click',function () {

    $('.tile').css("background-image","url('img/background6.jpg')");
  });

  $('.position-2').bind('click',function () {

    $('.tile').css("background-image","url('img/background7.jpg')");
  });

  $('.position-3').bind('click',function () {

    $('.tile').css("background-image","url('img/background8.jpg')");
  });

  $('.position-4').bind('click',function () {

    $('.tile').css("background-image","url('img/background9.jpg')");
  });

  $('.position-5').bind('click',function () {

    $('.tile').css("background-image","url('img/background10.jpg')");
  });



  $('.likedd').click(function () {
    if(localStorage.getItem('todos')){
      $('.items').html(localStorage.getItem('todos') + "<span id=\"clear\" class=\"show-more\">Clear</clear>");
      $('#clear').click(function () {
        //localStorage.clear();
        localStorage.setItem('todos', "");
        $('.items').html("");
      });
    }else{
      alert('LocalStorage clear');
    }
  });

  $('.close').click(function() {
    $('.m-window').css("display","none");
    $('#wrap').css("display","none");
  })

  $('#wrap').click(function () {
    $('.m-window').css("display","none");
    $('#wrap').css("display","none");
    $('.load').css("display","none");
  });

  $('.city').keydown(function(event) {
    if(event.keyCode == 13){
      page = 0;
      showMore();

    }
  });

  $('#search').click(function() {
    let city = $('.city').val();

    $.ajax({
      type: "GET",
      url: "http://api.nestoria.co.uk/api",
      dataType: "jsonp",
      data:{
        'encoding': 'json',
        'pretty': '1',
        'action': 'search_listings',
        'country': 'uk',
        'listing_type': 'buy',
        'place_name': city
      },
      beforeSend: function () {
        $('#wrap').css("display","block");
        $('.load').css("display","block");
      },
      success: function (data) {
        arr = data.response.listings;

        let tmpl = '\
          <% for (var i=0; i < count.length; i++) { %> \
            <div class="listing-list" onClick="moreInfo(<%=i%>)" >\
              <img class="" src="<%=count[i].img_url%>"> \
              <span class="price"><%=count[i].price_formatted%></span><br>\
              <span class="title"><%=count[i].title%></span><br>\
              <span class="summary"><%=count[i].summary%></span><br>\
              <span class="updated"><%=count[i].updated_in_days_formatted%></span>\
            </div>\
            <img class="like" src="img/heart-outline.png" name="<%=i%>">\
          <% } %>\
          <span class="show-more" onClick="showMore()">Show more</span>';
        $('.items').html( _.template(tmpl)({count: arr}) );

        $('#wrap').css("display","none");
        $('.load').css("display","none");

        $('.like').bind('click',function() {

          $(this).attr("class", "like liked");
          $('.liked').attr("src","img/heart-black.png");
          let i = $(this).attr('name');
          i = +i;

          let tmpl = '\
              <div class="listing-list" onClick="moreInfo(<%=ii%>)" >\
                <img class="" src="<%=count[ii].img_url%>"> \
                <span class="price"><%=count[ii].price_formatted%></span><br>\
                <span class="title"><%=count[ii].title%></span><br>\
                <span class="summary"><%=count[ii].summary%></span><br>\
                <span class="updated"><%=count[ii].updated_in_days_formatted%></span>\
              </div>';
          let todos = localStorage.getItem('todos') +  _.template(tmpl)({count: arr, ii: i});

          localStorage.setItem('todos', todos);
        });

        $('html, body').animate({
          scrollTop:$('.items').offset().top
        },1000);

      },

      error: function () {
        alert('not ok');
      }
    });

  });



});
function showMore() {
  let city = $('.city').val();
  let a = [];
  $.ajax({
    type: "GET",
    url: "http://api.nestoria.co.uk/api",
    dataType: "jsonp",
    data:{
      'encoding': 'json',
      'pretty': '1',
      'action': 'search_listings',
      'country': 'uk',
      'listing_type': 'buy',
      'page': ++page,
      'place_name': city
    },
    beforeSend: function () {
      $('#wrap').css("display","block");
      $('.load').css("display","block");
    },
    success: function (data) {
      a = data.response.listings;
      $('.show-more').remove();
      let tmpl = '\
        <% for (var i=0; i < count.length; i++) { %> \
          <div class="listing-list" onClick="moreInfo(<%=i+((p-1)*20)%>)" >\
            <img class="" src="<%=count[i].img_url%>"> \
            <span class="price"><%=count[i].price_formatted%></span><br>\
            <span class="title"><%=count[i].title%></span><br>\
            <span class="summary"><%=count[i].summary%></span><br>\
            <span class="updated"><%=count[i].updated_in_days_formatted%></span>\
          </div>\
          <img class="like" src="img/heart-outline.png" name="<%=i%>">\
        <% } %>\
        <span class="show-more" onClick="showMore()">Show more</span>';
      $('.items').append( _.template(tmpl)({count: a, p: page}) );
      $('#wrap').css("display","none");
      $('.load').css("display","none");

      $('.like').bind('click',function() {

        $(this).attr("class", "like liked");
        $('.liked').attr("src","img/heart-black.png");
        let i = $(this).attr('name');
        i = +i;

        let tmpl = '\
            <div class="listing-list" onClick="moreInfo(<%=ii%>)" >\
              <img class="" src="<%=count[ii].img_url%>"> \
              <span class="price"><%=count[ii].price_formatted%></span><br>\
              <span class="title"><%=count[ii].title%></span><br>\
              <span class="summary"><%=count[ii].summary%></span><br>\
              <span class="updated"><%=count[ii].updated_in_days_formatted%></span>\
            </div>';
        let todos = localStorage.getItem('todos') +  _.template(tmpl)({count: arr, ii: i});

        localStorage.setItem('todos', todos);
      });

      if(page == 1){
        $('html, body').animate({
          scrollTop:$('.items').offset().top
        },1000);
      }
      arr = _.union(arr, a);
    },
    error: function () {
      alert('not ok');
    }
  });
}

function moreInfo(i) {
  $('.m-window').css("display","block");
  $('#wrap').css("display","block");
  $('.photo').attr("src",arr[i].img_url);
  $('.price').html(arr[i].price_formatted);
  $('.bathroom').html(arr[i].bathroom_number);
  $('.bedroom').html(arr[i].bedroom_number);
  $('.type').html(arr[i].property_type);

  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: arr[i].latitude, lng: arr[i].longitude},
    zoom: 17
  });
}
