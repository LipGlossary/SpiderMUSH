// Generated by CoffeeScript 1.7.1
(function() {
  var socket, term;

  socket = io.connect();

  term = $.terminal.active();

  socket.on('connecting', function() {
    return console.log('connecting');
  });

  socket.on('connect', function() {
    return console.log('connect');
  });

  socket.on('disconnect', function() {
    return console.log('disconnect');
  });

  socket.on('reconnecting', function() {
    return console.log('reconnecting');
  });

  socket.on('reconnect', function() {
    return console.log('reconnect');
  });

  socket.on('connect_failed', function() {
    return console.log('connect_failed');
  });

  socket.on('reconnect_failed', function() {
    return console.log('reconnect_failed');
  });

  socket.on('error', function() {
    return console.log('error');
  });

  socket.emit('ready');

  socket.on('update', function(user) {
    var char, index, _i, _len, _ref;
    $('#info').empty();
    $('#info').append('<p>Hello, </p>');
    if (user.currentChar === 0) {
      $('#info p').append('<b>' + user.chars[0].name + '</b>.');
    } else {
      $('#info p').append(user.chars[0].name + '.');
    }
    if (user.chars.length > 1) {
      $('#info').append('<p>Characters:</p>', '<ul></ul>');
      _ref = user.chars;
      for (index = _i = 0, _len = _ref.length; _i < _len; index = ++_i) {
        char = _ref[index];
        if (index !== 0) {
          if (index === user.currentChar) {
            $('#info ul').append('<li><b>' + char.name + '</b></li>');
          } else {
            $('#info ul').append('<li>' + char.name + '</li>');
          }
        }
      }
    }
    if (user.visible) {
      return $('#info').append('<p>You are currently visible.</p>');
    } else {
      return $('#info').append('<p>You are currently invisible.</p>');
    }
  });

  socket.on('tutorial', function() {
    term.pause();
    return $('#tutorial').show();
  });

  socket.on('message', function(message) {
    return term.echo(message);
  });

  socket.on('prompt', function(data) {
    term.echo(data.message);
    term.echo("    TIP: Enter \"q\" to cancel.");
    return term.push(function(input, term) {
      if (data.args == null) {
        data.args = [];
      }
      input = $.terminal.parseArguments(input)[0];
      if (input !== 'q') {
        data.args.push(input);
        socket.emit(data.command, data.args);
      }
      term.pop();
    }, {
      prompt: '? > '
    });
  });

  socket.on('create-char', function() {
    term.pause();
    $('#char-form button[data-cmd="edit"]').hide();
    $('#char-form button[data-cmd="create"]').show();
    return $('#char').show();
  });

  socket.on('edit-char', function(data) {
    term.pause();
    $('#char-form input[name="name"]').val(data.name);
    $('#char-form input[name="list"]').val(data.list);
    $('#char-form textarea[name="look"]').val(data.look);
    $('#char-form input[name="move"]').val(data.move);
    $('#char-form input[name="appear"]').val(data.appear);
    $('#char-form button[data-cmd="create"]').hide();
    $('#char-form button[data-cmd="edit"]').show();
    return $('#char').show();
  });

  socket.on('ooc', function(data) {
    return term.echo("[[;yellow;black](OOC) " + data.user + ": " + data.message + "]");
  });

}).call(this);
