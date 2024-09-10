"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_page_js"],{

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  var $element = element,
    $popup = $element.find('.halo-lookbook-popup');
  var $options = {
    template: 'halothemes/lookbook/halo-lookbook-tmp'
  };
  $element.find('[data-product-lookbook]').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.currentTarget).data('product-id'),
      position = $(event.currentTarget).offset(),
      container = $element.offset();
    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $popup.html(response);
      });
      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 200,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }
      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.halo-lookbook-close', function (event) {
    event.preventDefault();
    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('[data-product-lookbook]').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
}

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

/***/ }),

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Page = /*#__PURE__*/function (_PageManager) {
  function Page(context) {
    return _PageManager.call(this, context) || this;
  }
  _inheritsLoose(Page, _PageManager);
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__["default"])($('#halo-lookbook-slider'));
    this.faqsToggle();
    this.lookbookSlider();
    this.haloMultiMap();
  };
  _proto.faqsToggle = function faqsToggle() {
    $('.faq-desc').appendTo('.halo-faqs-sidebar .haloFaqs-header__des');
    $('.page-normal .card .title').on('click', function (event) {
      event.preventDefault();
      var target = $(event.currentTarget);
      $('.page-normal .card .title').not(target).removeClass('collapsed');
      if (target.hasClass('collapsed')) {
        target.removeClass('collapsed');
        target.parents('.card').css('border-bottom-color', '#e6e6e6');
      } else {
        target.addClass('collapsed');
        target.parents('.card').css('border-bottom-color', 'none');
      }
      $('.page-normal .card').each(function (index, element) {
        if ($('.title', element).hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };
  _proto.lookbookSlider = function lookbookSlider() {
    if ($('#halo-lookbook-slider').length > 0) {
      var $block = $('#halo-lookbook-slider'),
        wrap = $block.find('.halo-lookbook-slider');
      slickCarousel(wrap);
    }
    function slickCarousel(wrap) {
      if (wrap.length > 0) {
        wrap.slick({
          dots: true,
          arrows: false,
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          infinite: true,
          fade: true,
          responsive: [{
            breakpoint: 1025,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  };
  _proto.haloMultiMap = function haloMultiMap() {
    var itemMap = document.querySelectorAll('.halo_maps_elist'),
      thisMap = document.querySelector('#haloMap');
    if (itemMap) {
      itemMap.forEach(function (item) {
        item.addEventListener('click', function () {
          document.querySelector('.map-active').classList.remove('map-active');
          mapItemClick(item);
        });
      });
    }
    ;
    function mapItemClick(item) {
      var mapHtml = item.querySelector('.map-hidden').innerHTML;
      item.classList.add('map-active');
      thisMap.innerHTML = mapHtml;
    }
  };
  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wYWdlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUUvQyw2QkFBZSxvQ0FBU0MsT0FBTyxFQUFFO0VBQzdCLElBQUlDLFFBQVEsR0FBR0QsT0FBTztJQUNsQkUsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztFQUVsRCxJQUFNQyxRQUFRLEdBQUc7SUFDYkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUVESixRQUFRLENBQUNFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUMxREwsTUFBTSxDQUFDTSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLElBQUlDLE9BQU8sR0FBR0MsQ0FBQyxDQUFDSixLQUFLLENBQUNLLGFBQWEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ25EQyxRQUFRLEdBQUdILENBQUMsQ0FBQ0osS0FBSyxDQUFDSyxhQUFhLENBQUMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDMUNDLFNBQVMsR0FBR2YsUUFBUSxDQUFDYyxNQUFNLENBQUMsQ0FBQztJQUVqQyxJQUFHTCxPQUFPLElBQUlPLFNBQVMsRUFBQztNQUNwQmxCLHNFQUFTLENBQUNvQixPQUFPLENBQUNDLE9BQU8sQ0FBQ1YsT0FBTyxFQUFFTixRQUFRLEVBQUUsVUFBQ2lCLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1FBQzVELElBQUdELEdBQUcsRUFBQztVQUNILE9BQU8sS0FBSztRQUNoQjtRQUVBbkIsTUFBTSxDQUFDcUIsSUFBSSxDQUFDRCxRQUFRLENBQUM7TUFDekIsQ0FBQyxDQUFDO01BRUYsSUFBSVgsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDMUJ2QixNQUFNLENB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LE1BQUEsQ0FFREssWUFBWSxHQUFaLFNBQUFBLFlBQVlBLENBQUEsRUFBRztJQUNqQixJQUFJd0IsT0FBTyxHQUFHM0MsUUFBUSxDQUFDNEMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7TUFDMURDLE9BQU8sR0FBRzdDLFFBQVEsQ0FBQzhDLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFFN0MsSUFBSUgsT0FBTyxFQUFFO01BQ1pBLE9BQU8sQ0FBQ0ksT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBSTtRQUN2QkEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtVQUNwQ2pELFFBQVEsQ0FBQzhDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0ksU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO1VBQ3BFQyxZQUFZLENBQUNKLElBQUksQ0FBQztRQUNuQixDQUFDLENBQUM7TUFDSCxDQUNELENBQUM7SUFBQTtJQUFDO0lBRUYsU0FBU0ksWUFBWUEsQ0FBQ0osSUFBSSxFQUFDO01BQzFCLElBQU1LLE9BQU8sR0FBR0wsSUFBSSxDQUFDRixhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNRLFNBQVM7TUFFM0ROLElBQUksQ0FBQ0UsU0FBUyxDQUFDSyxHQUFHLENBQUMsWUFBWSxDQUFDO01BQ2hDVixPQUFPLENBQUNTLFNBQVMsR0FBR0QsT0FBTztJQUM1QjtFQUNFLENBQUM7RUFBQSxPQUFBNUMsSUFBQTtBQUFBLEVBOUY2QkgscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vay5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1NpZGViYXJUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICB2YXIgJGVsZW1lbnQgPSBlbGVtZW50LFxuICAgICAgICAkcG9wdXAgPSAkZWxlbWVudC5maW5kKCcuaGFsby1sb29rYm9vay1wb3B1cCcpO1xuICAgICAgICBcbiAgICBjb25zdCAkb3B0aW9ucyA9IHtcbiAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL2xvb2tib29rL2hhbG8tbG9va2Jvb2stdG1wJ1xuICAgIH07XG5cbiAgICAkZWxlbWVudC5maW5kKCdbZGF0YS1wcm9kdWN0LWxvb2tib29rXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJykuZW1wdHkoKTtcblxuICAgICAgICB2YXIgJHByb2RJZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJvZHVjdC1pZCcpLFxuICAgICAgICAgICAgcG9zaXRpb24gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLm9mZnNldCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gJGVsZW1lbnQub2Zmc2V0KCk7XG5cbiAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCAkb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHBvcHVwLmh0bWwocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA1NTEpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCAtIDIwMCwgJ2xlZnQnOiBwb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyLmxlZnQgKyAzMH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHsndG9wJzogcG9zaXRpb24udG9wIC0gY29udGFpbmVyLnRvcCArIDE1LCAnbGVmdCc6IDE1fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuaGFsby1sb29rYm9vay1jbG9zZScsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoJHBvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZigkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICBpZigoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJHBvcHVwKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1sb29rYm9va10nKS5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgJCgnLnBhZ2Utc2lkZWJhci1tb2JpbGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2lzLW9wZW4nKSl7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3BlblNpZGViYXInKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnLnBhZ2Utc2lkZWJhcicpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5wYWdlLXNpZGViYXIgLnBhZ2Utc2lkZWJhci1jbG9zZSAuY2xvc2UnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJCgnLnBhZ2Utc2lkZWJhci1tb2JpbGUnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuU2lkZWJhcicpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoJCgnLnBhZ2Utc2lkZWJhcicpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgIGlmICgoJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5wYWdlLXNpZGViYXInKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnBhZ2Utc2lkZWJhci1tb2JpbGUnKS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLnBhZ2Utc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuU2lkZWJhcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBoYWxvU2lkZWJhclRvZ2dsZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGViYXJUb2dnbGUnO1xuaW1wb3J0IGhhbG9Qcm9kdWN0TG9va2Jvb2sgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0TG9va2Jvb2snO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgaGFsb1NpZGViYXJUb2dnbGUoKTtcbiAgICAgICAgaGFsb1Byb2R1Y3RMb29rYm9vaygkKCcjaGFsby1sb29rYm9vay1zbGlkZXInKSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmZhcXNUb2dnbGUoKTtcbiAgICAgICAgdGhpcy5sb29rYm9va1NsaWRlcigpO1xuICAgICAgICB0aGlzLmhhbG9NdWx0aU1hcCgpO1xuICAgIH1cblxuICAgIGZhcXNUb2dnbGUoKXtcbiAgICAgICAgJCgnLmZhcS1kZXNjJykuYXBwZW5kVG8oJy5oYWxvLWZhcXMtc2lkZWJhciAuaGFsb0ZhcXMtaGVhZGVyX19kZXMnKTtcblxuICAgICAgICAkKCcucGFnZS1ub3JtYWwgLmNhcmQgLnRpdGxlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCAudGl0bGUnKS5ub3QodGFyZ2V0KS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG5cbiAgICAgICAgICAgIGlmKHRhcmdldC5oYXNDbGFzcygnY29sbGFwc2VkJykpe1xuICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudHMoJy5jYXJkJykuY3NzKCdib3JkZXItYm90dG9tLWNvbG9yJywnI2U2ZTZlNicpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnBhcmVudHMoJy5jYXJkJykuY3NzKCdib3JkZXItYm90dG9tLWNvbG9yJywnbm9uZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcucGFnZS1ub3JtYWwgLmNhcmQnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKCQoJy50aXRsZScsIGVsZW1lbnQpLmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVEb3duKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZmluZCgnLmNvbGxhcHNlJykuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvb2tib29rU2xpZGVyKCkge1xuICAgICAgICBpZigkKCcjaGFsby1sb29rYm9vay1zbGlkZXInKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHZhciAkYmxvY2sgPSAkKCcjaGFsby1sb29rYm9vay1zbGlkZXInKSxcbiAgICAgICAgICAgICAgICB3cmFwID0gJGJsb2NrLmZpbmQoJy5oYWxvLWxvb2tib29rLXNsaWRlcicpO1xuXG4gICAgICAgICAgICBzbGlja0Nhcm91c2VsKHdyYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpY2tDYXJvdXNlbCh3cmFwKXtcbiAgICAgICAgICAgIGlmKHdyYXAubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFsb011bHRpTWFwKCkge1xuXHRcdHZhciBpdGVtTWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbG9fbWFwc19lbGlzdCcpLFxuXHRcdFx0dGhpc01hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYWxvTWFwJyk7XG5cblx0XHRpZiAoaXRlbU1hcCkge1xuXHRcdFx0aXRlbU1hcC5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAtYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnbWFwLWFjdGl2ZScpO1xuXHRcdFx0XHRcdG1hcEl0ZW1DbGljayhpdGVtKVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpfTtcblxuXHRcdGZ1bmN0aW9uIG1hcEl0ZW1DbGljayhpdGVtKXtcblx0XHRcdGNvbnN0IG1hcEh0bWwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5tYXAtaGlkZGVuJykuaW5uZXJIVE1MO1xuXHRcdFx0XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoJ21hcC1hY3RpdmUnKTtcblx0XHRcdHRoaXNNYXAuaW5uZXJIVE1MID0gbWFwSHRtbDtcblx0XHR9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbInV0aWxzIiwiZWxlbWVudCIsIiRlbGVtZW50IiwiJHBvcHVwIiwiZmluZCIsIiRvcHRpb25zIiwidGVtcGxhdGUiLCJvbiIsImV2ZW50IiwicmVtb3ZlQ2xhc3MiLCJlbXB0eSIsIiRwcm9kSWQiLCIkIiwiY3VycmVudFRhcmdldCIsImRhdGEiLCJwb3NpdGlvbiIsIm9mZnNldCIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJodG1sIiwid2luZG93Iiwid2lkdGgiLCJjc3MiLCJ0b3AiLCJsZWZ0IiwiYWRkQ2xhc3MiLCJkb2N1bWVudCIsInByZXZlbnREZWZhdWx0IiwiaGFzQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwiUGFnZU1hbmFnZXIiLCJoYWxvU2lkZWJhclRvZ2dsZSIsImhhbG9Qcm9kdWN0TG9va2Jvb2siLCJQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJmYXFzVG9nZ2xlIiwibG9va2Jvb2tTbGlkZXIiLCJoYWxvTXVsdGlNYXAiLCJhcHBlbmRUbyIsIm5vdCIsInBhcmVudHMiLCJlYWNoIiwiaW5kZXgiLCJzbGlkZURvd24iLCJzbGlkZVVwIiwiJGJsb2NrIiwid3JhcCIsInNsaWNrQ2Fyb3VzZWwiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJtb2JpbGVGaXJzdCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiaW5maW5pdGUiLCJmYWRlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsIml0ZW1NYXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhpc01hcCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJtYXBJdGVtQ2xpY2siLCJtYXBIdG1sIiwiaW5uZXJIVE1MIiwiYWRkIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=