var page = require('page')

var main = document.getElementById('main-container')

page('/', function (ctx, next) {
    main.innerHTML = 'HOME <a href="/signup">SIGNUP</a>'
})

page('/signup', function (ctx, nxt) {
    main.innerHTML = '<a href="/">HOME</a> SIGNUP'
})

page()