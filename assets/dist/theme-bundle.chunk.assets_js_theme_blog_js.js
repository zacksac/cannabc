"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_blog_js"],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Blog = /*#__PURE__*/function (_PageManager) {
  function Blog(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Blog, _PageManager);
  var _proto = Blog.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.loadOptionForProductCard(this.context);
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_2__["default"])(context, 'featured-products');
    }
  };
  return Blog;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/halothemes/haloSidebarToggle.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloSidebarToggle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $('.page-sidebar-mobile').on('click', function (event) {
    if ($(event.currentTarget).hasClass('is-open')) {
      $(event.currentTarget).removeClass('is-open');
      $('.page-sidebar').removeClass('is-open');
      $('body').removeClass('openSidebar');
    } else {
      $(event.currentTarget).addClass('is-open');
      $('.page-sidebar').addClass('is-open');
      $('body').addClass('openSidebar');
    }
  });
  $('.page-sidebar .page-sidebar-close .close').on('click', function (event) {
    event.preventDefault();
    $('.page-sidebar-mobile').removeClass('is-open');
    $('.page-sidebar').removeClass('is-open');
    $('body').removeClass('openSidebar');
  });
  $(document).on('click', function (event) {
    if ($('.page-sidebar').hasClass('is-open')) {
      if ($(event.target).closest('.page-sidebar').length === 0 && $(event.target).closest('.page-sidebar-mobile').length === 0) {
        $('.page-sidebar-mobile').removeClass('is-open');
        $('.page-sidebar').removeClass('is-open');
        $('body').removeClass('openSidebar');
      }
    }
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ibG9nX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtCO0FBQ3VCO0FBQ2tDO0FBQ1o7QUFBQSxJQUUxQ0csSUFBSSwwQkFBQUMsWUFBQTtFQUNyQixTQUFBRCxLQUFZRSxPQUFPLEVBQUU7SUFBQSxPQUNqQkQsWUFBQSxDQUFBRSxJQUFBLE9BQU1ELE9BQU8sQ0FBQztFQUNsQjtFQUFDRSxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FFSkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUNIUix5RUFBaUIsQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQ1Msd0JBQXdCLENBQUMsSUFBSSxDQUFDTixPQUFPLENBQUM7RUFDL0MsQ0FBQztFQUFBRyxNQUFBLENBRURHLHdCQUF3QixHQUF4QixTQUFBQSx3QkFBd0JBLENBQUNOLE9BQU8sRUFBQztJQUM3QixJQUFHTyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBQztNQUN4Q1osK0VBQXVCLENBQUNJLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQztJQUN6RDtFQUNKLENBQUM7RUFBQSxPQUFBRixJQUFBO0FBQUEsRUFmNkJILHFEQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FDTDdDLDZCQUFlLHNDQUFXO0VBQ3RCWSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBQyxLQUFLLEVBQUk7SUFDM0MsSUFBR0osQ0FBQyxDQUFDSSxLQUFLLENBQUNDLGFBQWEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUM7TUFDMUNOLENBQUMsQ0FBQ0ksS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQ0UsV0FBVyxDQUFDLFNBQVMsQ0FBQztNQUM3Q1AsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDTyxXQUFXLENBQUMsU0FBUyxDQUFDO01BQ3pDUCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNPLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDeEMsQ0FBQyxNQUFLO01BQ0ZQLENBQUMsQ0FBQ0ksS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQ0csUUFBUSxDQUFDLFNBQVMsQ0FBQztNQUMxQ1IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDUSxRQUFRLENBQUMsU0FBUyxDQUFDO01BQ3RDUixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNRLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDckM7RUFDSixDQUFDLENBQUM7RUFFRlIsQ0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQy9EQSxLQUFLLENBQUNLLGNBQWMsQ0FBQyxDQUFDO0lBRXRCVCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFNBQVMsQ0FBQztJQUNoRFAsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDTyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3pDUCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNPLFdBQVcsQ0FBQyxhQUFhLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0VBRUZQLENBQUMsQ0FBQ1UsUUFBUSxDQUFDLENBQUNQLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQUMsS0FBSyxFQUFJO0lBQzdCLElBQUlKLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ00sUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQ3hDLElBQUtOLENBQUMsQ0FBQ0ksS0FBSyxDQUFDTyxNQUFNLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDWCxNQUFNLEtBQUssQ0FBQyxJQUFNRCxDQUFDLENBQUNJLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDWCxNQUFNLEtBQUssQ0FBRSxFQUFDO1FBQzFIRCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ08sV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUNoRFAsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDTyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3pDUCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNPLFdBQVcsQ0FBQyxhQUFhLENBQUM7TUFDeEM7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9ibG9nLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2ZhbmN5Ym94JztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0JztcbmltcG9ydCBoYWxvU2lkZWJhclRvZ2dsZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGViYXJUb2dnbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuXG5cdG9uUmVhZHkoKSB7XG4gICAgICAgIGhhbG9TaWRlYmFyVG9nZ2xlKCk7XG5cbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCl7XG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJChldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnaXMtb3BlbicpKXtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuU2lkZWJhcicpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3BlblNpZGViYXInKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLnBhZ2Utc2lkZWJhciAucGFnZS1zaWRlYmFyLWNsb3NlIC5jbG9zZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICgkKCcucGFnZS1zaWRlYmFyJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnBhZ2Utc2lkZWJhcicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICQoJy5wYWdlLXNpZGViYXItbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiaGFsb1NpZGViYXJUb2dnbGUiLCJCbG9nIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCIkIiwibGVuZ3RoIiwiZGVmYXVsdCIsIm9uIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwicHJldmVudERlZmF1bHQiLCJkb2N1bWVudCIsInRhcmdldCIsImNsb3Nlc3QiXSwic291cmNlUm9vdCI6IiJ9