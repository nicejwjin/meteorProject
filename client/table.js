Template.table.helpers(
  {
    boards: function() {
      return Boards.find().fetch();
    }
  }
);