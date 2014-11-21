// Generated by CoffeeScript 1.7.1
(function() {
  var MongoStore, app, configDB, express, flash, mongoose, mongooseDB, passport, port;

  express = require('express.io');

  app = express().http().io();

  port = process.env.PORT || 8080;

  MongoStore = require('connect-mongo')(express);

  mongoose = require('mongoose');

  passport = require('passport');

  flash = require('connect-flash');

  configDB = require('./config/database.js');

  mongooseDB = mongoose.connect(configDB.url);

  require('./config/passport')(passport);

  app.configure(function() {
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express["static"](__dirname + '/public'));
    app.use('/lib', express["static"](__dirname + '/bower_components'));
    app.set('view engine', 'ejs');
    app.use(express.session({
      store: new MongoStore({
        mongoose_connection: mongooseDB.connections[0]
      }),
      secret: 'buymeaprettyhorse'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    return app.use(flash());
  });

  require('./app/routes')(app, passport);

  require('./app/events')(app);

  require('./app/world')();

  app.listen(port);

  console.log("The magic happens on port " + port);

}).call(this);
