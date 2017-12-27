var page     = require('page'),
    empty    = require('empty-element'),
    template = require('./template')

page('/signup', function (ctx, nxt) {
    $('title').html('Platzigram - Signup');
    var main = document.getElementById('main-container')   
    empty(main).appendChild(template);
})