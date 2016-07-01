
Template.table.onCreated(function() {
  Session.set('pageNum', 1);
  console.log(Session.get('pageNum'));
});

Template.table.helpers(
  {
    boards: function() {
      return Boards.find({}, {limit: 5 * Session.get('pageNum')}).fetch();
    }
  }
);

Template.table.events(
  {
    "click tr": function(evt, tmpl) {
      Session.set('selectedData', this);
      //console.log('tr clicked');
      //console.log($(this)[0].inpTextarea);
      //$('#targetModal').text($(this)[0].inpTextarea);
      //$('#myModalLabel').text($(this)[0].inpName)
      ////console.log($(evt).find('tr').attr('dataId'));
    },
    "click #btnMore": function(evt, tmpl) {
      Session.set('pageNum', Session.get('pageNum')+1);
    }
  }
);