$(document).ready(function() {
  $("form#favorite").submit(function(event) {
    event.preventDefault();

    let array = [];

    array.push($("#question1").val());
    array.push($("#question2").val());
    array.push($("#question3").val());
    array.push($("#question4").val());
    array.push($("#question5").val());

    let array2 = [];
    
    const input1 = array[0];
    const input2 = array[1];
    const input3 = array[2];
    const input4 = array[3];
    const input5 = array[4];

    array2.push(input2, input1, input3);


    $("#answers").append("<li id='answer1'></li>");
    $("#answer1").text(array2[0]);
    $("#answers").append("<li id='answer2'></li>");
    $("#answer2").text(array2[1]);
    $("#answers").append("<li id='answer3'></li>");
    $("#answer3").text(array2[2]);



  });
});