// Generated by CoffeeScript 1.7.1
(function() {
  var socket, term, toggle, toggles;

  socket = io.connect();

  term = $.terminal.active();

  toggles = {
    '#create-btn': {
      hide: ['#create-btn'],
      show: ['#create-char-btn', '#create-btn-cancel']
    },
    '#create-char-btn': {
      hide: ['#create-char-btn', '#create-btn-cancel', '#char-form button[data-cmd="edit"]'],
      show: ['#create-btn', '#char-form button[data-cmd="create"]', '#char']
    },
    '#create-btn-cancel': {
      hide: ['#create-char-btn', '#create-btn-cancel'],
      show: ['#create-btn']
    },
    '#edit-btn': {
      hide: ['#edit-btn'],
      show: ['#edit-char-btn', '#edit-btn-cancel']
    },
    '#edit-char-btn': {
      hide: ['#edit-char-btn', '#edit-btn-cancel'],
      show: ['#edit-btn']
    },
    '#edit-btn-cancel': {
      hide: ['#edit-char-btn', '#edit-btn-cancel'],
      show: ['#edit-btn']
    }
  };

  toggle = function(button) {
    var thing, _i, _j, _len, _len1, _ref, _ref1, _results;
    _ref = toggles[button].hide;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      thing = _ref[_i];
      $(thing).hide();
    }
    _ref1 = toggles[button].show;
    _results = [];
    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
      thing = _ref1[_j];
      _results.push($(thing).show());
    }
    return _results;
  };

  $('#help').click(function() {
    return socket.emit('help');
  });

  $('#create-btn').click(function() {
    return toggle('#create-btn');
  });

  $('#create-char-btn').click(function() {
    term.pause();
    return toggle('#create-char-btn');
  });

  $('#create-btn-cancel').click(function() {
    return toggle('#create-btn-cancel');
  });

  $('#edit-btn').click(function() {
    return toggle('#edit-btn');
  });

  $('#edit-char-btn').click(function() {
    toggle('#edit-char-btn');
    return socket.emit('edit', ['char']);
  });

  $('#edit-btn-cancel').click(function() {
    return toggle('#edit-btn-cancel');
  });

}).call(this);
