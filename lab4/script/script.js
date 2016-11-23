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
          <% } %>\
          <span class="show-more" onClick="showMore()">Show more</span>';
        $('.items').html( _.template(tmpl)({count: arr}) );
        $('#wrap').css("display","none");
        $('.load').css("display","none");
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
          <div class="listing-list" onClick="moreInfo(<%=i%>)" >\
            <img class="" src="<%=count[i].img_url%>"> \
            <span class="price"><%=count[i].price_formatted%></span><br>\
            <span class="title"><%=count[i].title%></span><br>\
            <span class="summary"><%=count[i].summary%></span><br>\
            <span class="updated"><%=count[i].updated_in_days_formatted%></span>\
          </div>\
        <% } %>\
        <span class="show-more" onClick="showMore()">Show more</span>';
      $('.items').append( _.template(tmpl)({count: a}) );
      $('#wrap').css("display","none");
      $('.load').css("display","none");
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
}
