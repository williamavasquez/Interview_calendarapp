$("document").ready(function(){

  // hide form for adding events on load
    $('#addEventForm').hide();
    $('.hiddenBtns').hide();

  $('.form-inline').submit(function () {
    return false;
    });

  $('#searchBtn').on("click",function(){
    var searchText = $("#searchF").val();

    if (searchText=="") {
      // if empty show all the appointments
      $.get( "/allevents", function( data ) {
        //display all appointments with DATA
        alert( "Load was performed." );
        });

    } else {
      
      $("#searchTerm").html("<h2>You Searched:   "+ searchText+"</h2>")
      console.log(searchText);
    }
  })

  $("#addEventBtn").on("click",function(){
      $("#addEventBtn").hide();
      $(".hiddenBtns").show();
      $("#addEventForm").show('slow');

  })//end of addEventBtn function

    $('#cancelBtn').on('click',function(){
      $("#addEventBtn").show();
      $("#addEventForm").hide();
      $(".hiddenBtns").hide();

    }) //end of cancelBtn function


}) //end of document.ready
