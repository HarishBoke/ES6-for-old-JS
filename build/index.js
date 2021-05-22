import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "core-js/modules/es6.array.map.js";

function getPosts() {
  return _getPosts.apply(this, arguments);
}

function _getPosts() {
  _getPosts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var response, posts, res;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://jsonplaceholder.typicode.com/posts');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            posts = _context.sent;
            res = posts.map(function (post) {
              return "<li>".concat(post.title, "</li>");
            });
            document.getElementById('posts').innerHTML = res;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPosts.apply(this, arguments);
}

function init() {
  getPosts();
}

init();