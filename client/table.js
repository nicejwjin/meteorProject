Template.table.helpers(
  {
    boards: function() {
      return Boards.find().fetch();
    }
  }
);

Template.table.events(
  {
    "click tr": function(evt, tmpl) {

      console.log('tr clicked');
      console.log($(this)[0].inpTextarea);
      $('#targetModal').text($(this)[0].inpTextarea);
      //console.log($(evt).find('tr').attr('dataId'));
    }
  }
);