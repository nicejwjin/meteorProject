Accounts.onLogin(function() {
  var user = Meteor.user();
  if (!user) { return; }
  var connectionLimit = 1;
  var arrTokens = user.services.resume.loginTokens;
  if (arrTokens.length > 1) {
    arrTokens.splice(0, arrTokens.length - 1);
    Meteor.users.update({_id: user._id}, {
      $set: {'services.resume.loginTokens': arrTokens}
    });
  }
});