"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_home_js"],{

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./halothemes/haloYoutubeVideo */ "./assets/js/theme/halothemes/haloYoutubeVideo.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.initHomeMainCarousel();
  };
  _proto.initHomeMainCarousel = function initHomeMainCarousel() {
    if (this.context.hasMainCarousel) {
      (0,_halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_1__["default"])($('.heroCarousel-wrapper'));
    }
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ob21lX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUN1QjtBQUFBLElBRTNDRSxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ1QsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxDQUFDO0VBQzVCLENBQUM7RUFBQUgsTUFBQSxDQUVERyxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFDbkIsSUFBRyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsZUFBZSxFQUFFO01BQzdCWCx3RUFBbUIsQ0FBQ1ksQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDbkQ7RUFDSixDQUFDO0VBQUEsT0FBQVgsSUFBQTtBQUFBLEVBVDZCRixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGhhbG9Zb3V0dWJlQ2Fyb3VzZWwgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Zb3V0dWJlVmlkZW8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgXHR0aGlzLmluaXRIb21lTWFpbkNhcm91c2VsKCk7XG4gICAgfVxuXG4gICAgaW5pdEhvbWVNYWluQ2Fyb3VzZWwoKSB7XG4gICAgICAgIGlmKHRoaXMuY29udGV4dC5oYXNNYWluQ2Fyb3VzZWwpIHtcbiAgICAgICAgICAgIGhhbG9Zb3V0dWJlQ2Fyb3VzZWwoJCgnLmhlcm9DYXJvdXNlbC13cmFwcGVyJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsIkhvbWUiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImluaXRIb21lTWFpbkNhcm91c2VsIiwiY29udGV4dCIsImhhc01haW5DYXJvdXNlbCIsIiQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==