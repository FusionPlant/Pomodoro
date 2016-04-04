/*jslint node: true */
/*jslint plusplus: true */
/*jslint browser: true */
/*global $, alert, moment, FB, MarkitInteractiveChartApi */
"use strict";

function showTimeLength(evt, ui) {
  if (ui) {
    $('#timeLengthLabel').text(ui.value + " min");
  } else {
    $('#timeLengthLabel').text($('#timeLength').slider("option", "value") + " min");
  }
}

function deleteItem(evt) {
  alert('del');
}

$(document).ready(function () { // when document is ready
  
/*  var availableTags = [
      "Project Pomodoro",
      "Paper Writing",
      "Reading Paper",
      "Learning"
    ];
  //$("#workItem").css("width", "500px");
  $("#workItem").autocomplete({
    source: availableTags
  });
  
  
  $(".selectmenu").selectmenu();*/
  
  $.fn.disableSelection = function () {
    return this
      .attr('unselectable', 'on')
      .css('user-select', 'none')
      .on('selectstart', false);
  };
  
  $('#schedule').sortable({
    axis: "y",
    containment: '.container',
    revert: 100
  }).on("sortstop", function (evt, ui) {
    ui.item.removeAttr("style");
  });
  
  $('#todoList .listItem').draggable({
    connectToSortable: '#schedule',
    containment: '.container',
    helper: "clone",
    opacity: 0.7,
    revert: "invalid",
    revertDuration: 250
  }).on("dragstart", function (evt, ui) {
    ui.helper.outerWidth($('#todoList').width())
      .on("click", false)
      .find('.delIcon').on("click", deleteItem);
  });
  
  $('.listItem').disableSelection().on("click", false);
  $('.delIcon').on("click", deleteItem);
  
  $("#pomodoroType").tabs();
  
  $('#timeLength').slider().slider("option", {
    max: 60,
    min: 15,
    step: 5,
    value: 25
  }).on("slide", showTimeLength);
  showTimeLength();
  
  $('#startFixed').button().on("click", false);
  $('#giveUp').button().on("click", false);
  $('#settings').button().on("click", false);
  $('#statistics').button().on("click", false);
  
});