//backend

var cost = function(childCost, adultCost, adultMatineeCost, seniorCost) {
  return (childCost + adultCost + adultMatineeCost + seniorCost);
}

var slider = function(time) {
  if (time === "matinee") {
    $("#adultTixDiv").hide();
  } else {
    $("#adultMatineeTixDiv").hide();
  }
  $("#movieRow").hide("slide", { direction: "left" }, 1000);
  $("#orderPage").delay(1100).show("slide", { direction: "left" }, 1000);
}

//frontend
$(document).ready(function(){
  var time = "";
  $(".btn").click(function(){
    time = $(this).val();
    slider(time);
  });
  $("#orderForm").submit(function(event) {
    event.preventDefault();
    var childCost = parseInt($("#childTix").val());
    var adultCost = parseInt($("#adultTix").val());
    var adultMatineeCost = parseInt($("#adultMatineeTix").val());
    var seniorCost = parseInt($("#seniorTix").val());
    var totalCost = cost(childCost, adultCost, adultMatineeCost, seniorCost);
    $("#total").text(totalCost);
    $("#childResult").text(childCost);
    $("#adultResult").text(adultMatineeCost + adultCost);
    $("#seniorResult").text(seniorCost);
  });
});
