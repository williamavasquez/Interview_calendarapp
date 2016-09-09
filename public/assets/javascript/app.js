$("document").ready(function(){

  // hide form for adding events on load
    $('#addEventForm').hide();
    $('.hiddenBtns').hide();
    $('#searchTerm').hide();

  $('.form-inline').submit(function () {
    return false;
    });

  $('#searchBtn').on("click",function(){
    var searchText = $("#searchF").val();
    $("#searchTerm").show();

    if (searchText=="") {
      // if empty show all the appointments
      $.get( "/allevents", function( data ) {
        //display all appointments with DATA
        $('.eventTable').DataTable( {
          data: data,
        "ordering": false,
        "info":     false,
          columns: [
        { data: 'date' },
        { data: 'time' },
        { data: 'description' },
            ]
          } );

        });

    } else {
      var lookup = '/search/'+ searchText;

      $.get(lookup, function(data){

        $('.eventTable').DataTable( {
        data: data,
        "ordering": false,
        "info":     false,
          columns: [
        { data: 'date' },
        { data: 'time' },
        { data: 'description' },
            ]
          } );
      })
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

function getAppointments(){

}

}) //end of document.ready
