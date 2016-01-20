'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyComponent = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Label = _ref => {
  let name = _ref.name;
  return _react2.default.createElement(
    'p',
    { style: { color: '#ddd' } },
    `Hello ${ name } 😉`
  );
};
let Button = _ref2 => {
  let label = _ref2.label;
  return _react2.default.createElement(
    'button',
    { type: 'button', onClick: () => console.log('REACT IS MOUNTED') },
    label
  );
};

class MyComponent extends _react2.default.Component {
  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(Label, { name: 'Yannick' }),
      _react2.default.createElement(Button, { label: 'CLICK ME' })
    );
  }
}
exports.MyComponent = MyComponent;