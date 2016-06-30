Router.configure(
  {
    layoutTemplate: 'layout'
  }
);

Router.route('/', function () {
  this.render('home', {
    data: function () { return; }
  });
});

Router.route('/test', function () {
  this.render('test', {
    data: function () { return; }
  });
});