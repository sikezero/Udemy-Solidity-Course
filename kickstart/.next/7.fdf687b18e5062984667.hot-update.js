webpackHotUpdate(7,{

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(467);

var _Layout = __webpack_require__(1138);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1164);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(969);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1166);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = __webpack_require__(711);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/isaacmiller/Documents/Programming/Udemy Solidity Course/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of manager',
        description: 'The manager created this campaign and can create requests to withdraw money.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute this much wei to become an approver.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign.',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend.',
        style: { overflowWrap: 'break-word' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Campaign Show'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7OztrQ0FjVTttQkFPUixLQVBRLEFBT0g7VUFQRyxBQUVWLGlCQUZVLEFBRVY7VUFGVSxBQUdWLGlCQUhVLEFBR1Y7VUFIVSxBQUlWLDZCQUpVLEFBSVY7VUFKVSxBQUtWLHVCQUxVLEFBS1Y7VUFMVSxBQU1WLHdCQU5VLEFBTVYsQUFHRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQUxDLEFBQ1osQUFJUyxBQUFnQjtBQUp6QixBQUNFLE9BRlU7Z0JBT1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0FYQyxBQU9aLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQWpCQyxBQWFaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQXZCQyxBQW1CWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBTVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDdCLEFBQ1UsQUFBNEIsQUFDcEM7Y0FGRixBQUVRLEFBQ047cUJBSEYsQUFHZSxBQUNiO2VBQU8sRUFBRSxjQTdCYixBQUFjLEFBeUJaLEFBSVMsQUFBZ0IsQUFJM0I7QUFSRSxBQUNFOzsyQ0FPRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNHO0FBREg7Y0FERixBQUNFLEFBQ0csQUFBSyxBQUVSLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFOTixBQUNFLEFBSUUsQUFDRSxBQUlKO0FBSkk7NEJBSUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FqQmQsQUFDRSxBQUVFLEFBVUUsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVFmOzs7OzsyR0FwRjRCLEE7Ozs7O21CQUNyQjtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VCQUNoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhLEFBQWpCLEFBQThCOzttQkFBOUM7QTs7MkJBRUssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFFBTkosQUFNSSxBQUFRLEE7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTHFCLEEsQUF3RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2lzYWFjbWlsbGVyL0RvY3VtZW50cy9Qcm9ncmFtbWluZy9VZGVteSBTb2xpZGl0eSBDb3Vyc2Uva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/isaacmiller/Documents/Programming/Udemy Solidity Course/kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/isaacmiller/Documents/Programming/Udemy Solidity Course/kickstart/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5mZGY2ODdiMThlNTA2Mjk4NDY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YzljOWRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG4gICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgcmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxuICAgIH07XG4gIH1cblxuICByZW5kZXJDYXJkcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBiYWxhbmNlLFxuICAgICAgbWFuYWdlcixcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICByZXF1ZXN0c0NvdW50LFxuICAgICAgYXBwcm92ZXJzQ291bnRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAge1xuICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXG4gICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIG1hbmFnZXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leS4nLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgbXVzdCBjb250cmlidXRlIHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyLicsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIFJlcXVlc3RzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzLicsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24uJyxcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCd9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCAnZXRoZXInKSxcbiAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC4nLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9ICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cbiAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGFkZHJlc3M9e3RoaXMucHJvcHMuYWRkcmVzc30gLz5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PlZpZXcgUmVxdWVzdHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFKQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFRQTs7Ozs7Ozs7OztBQW5GQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==