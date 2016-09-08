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
    // 
    // $("#submitFormbtn").on("click",function(){
    //   var date = $('#date').val();
    //   var time = $('#time').val();
    //   var description = $('#description').val();
    //
    //   data = {
    //     "date": date,
    //     "time": time,
    //     "description": description
    //     }
    //   $.post("/calendersave", data).done(function(){
    //       $('#date').val("");
    //       $('#time').val("");
    //       $('#description').val("");
    //
    //       $("#addEventBtn").show();
    //       $("#addEventForm").hide();
    //       $(".hiddenBtns").hide();
    //     });
    //
    // })



}) //end of document.ready
