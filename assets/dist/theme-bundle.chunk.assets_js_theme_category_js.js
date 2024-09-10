"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }











var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    this.initFacetedSearch();
    if (!$('#facetedSearch').length) {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    this.loadProductByCategory();
    this.loadProductByEditorPick();
    this.loadOptionForProductCard(this.context);
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showPaginationInfoToolbar();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.find('.product-listing-content').html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(_this4.context, 'product-listing-container');
      }
      _this4.showProductsPerPage();
      _this4.showMoreProducts();
      _this4.showPaginationInfoToolbar();
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      var $topProduct = $('#faceted-search-container #featured-products .products-list');
      if ($topProduct.length) {
        $topProduct.slick();
      }
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var _this5 = this;
    var context = this.context;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: context.categoryProductsPerPage
          }
        }
      },
      template: {
        productListing: 'category/halo-product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination-list');
    var $showMoreContainer = $('.halo-product-show-more');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $('.pagination-item--current').next(),
        link = nextPage.find("a").attr("href");
      if (link == undefined) {
        if (!$('#listing-showmoreBtn > a').hasClass('disable')) {
          $('#listing-showmoreBtn > a').addClass('disable');
        }
      } else {
        $('#listing-showmoreBtn > a').addClass('loading');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.api.getPage(link.replace("http://", "//"), requestOptions, function (err, content) {
          if (err) {
            throw new Error(err);
          }
          if (content.productListing != '') {
            $productListingContainer.append(content.productListing);
            $paginatorContainer.html($(content.paginator).find('.pagination-list').children());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();
            nextPage = $('.pagination-item--current').next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
              $('.pagination .pagination-info .end').html($(content.paginator).find('.pagination-info .total').text());
            } else {
              if (Number($(content.paginator).find('.pagination-info .end').text()) < Number($(content.paginator).find('.pagination-info .total').text())) {
                $('.pagination .pagination-info .end').html($(content.paginator).find('.pagination-info .end').text());
              }
            }
            var paginationInfo = $('.pagination .pagination-info').html(),
              toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
            toolbarPaginationInfo.html(paginationInfo);
            _this5.showPaginationTotalProgress();
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
          }
        });
      }
    });
    this.showPaginationTotalProgress();
  };
  _proto.showPaginationTotalProgress = function showPaginationTotalProgress() {
    var txt_end = $('.pagination-info .end').text(),
      txt_total = $('.pagination-info .total').text(),
      num_end = num_end != '' ? Number(txt_end.replace(/[^0-9.-]+/g, '')) : 0,
      num_total = num_total != '' ? Number(txt_total.replace(/[^0-9.-]+/g, '')) : 0;
    var percent = parseInt(num_end / num_total * 100);
    percent = percent > 100 ? 100 : percent;
    if (num_end == num_total) {
      percent = 100;
    }
    $('.pagination-total-progress .pagination-total-item').css('width', percent + '%');
  };
  _proto.showPaginationInfoToolbar = function showPaginationInfoToolbar() {
    var paginationInfo = $('.pagination .pagination-info').html(),
      toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
    toolbarPaginationInfo.html(paginationInfo);
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
    if ($('#featured-products').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }
  };
  _proto.loadProductByCategory = function loadProductByCategory() {
    var context = this.context;
    var $options;
    if ($('.sidebarBlock[data-category-id]').length > 0) {
      $('.sidebarBlock[data-category-id]').each(function (index, element) {
        var $wrap,
          $catId = $(element).data('category-id'),
          $catUrl = $(element).data('category-url'),
          $blockId = $(element).attr('id');
        if ($(element).find('.productByCate').length > 0) {
          $wrap = $(element).find('.productByCate');
          $options = {
            template: 'halothemes/sidebar/halo-product-sidebar-tmp-2'
          };
        }
        if (!$('#product-by-cate-' + $catId + ' .productByCate .card').length) {
          loadCategory($catId, $catUrl, $options, $wrap, $blockId);
        }
      });
    }
    function loadCategory(id, url, option, wrap, blockId) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, option, function (err, response) {
        wrap.html(response);
        wrap.parents('.sidebarBlock[data-category-id]').find('.loadingOverlay').remove();
        (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, blockId);
      });
    }
  };
  _proto.loadProductByEditorPick = function loadProductByEditorPick() {
    var context = this.context;
    var $options;
    if ($('.sidebarBlock[data-list-id]').length > 0) {
      $('.sidebarBlock[data-list-id]').each(function (index, element) {
        var $prodWrapId = $(element).attr('id'),
          $wrap,
          $listId = $(element).data('list-id');
        if ($(element).find('.productById').length > 0) {
          $wrap = $(element).find('.productById');
          $options = {
            template: 'halothemes/sidebar/halo-product-sidebar-tmp-3'
          };
        }
        if (!$('#product-by-list-' + $prodWrapId + ' .productById .card').length) {
          loadListID($listId, $options, $wrap, $prodWrapId);
        }
      });
    }
    function loadListID(id, options, wrap, blockId) {
      var arr = id.toString().split(',').map(Number),
        list = arr.slice(0, parseInt(context.themeSettings.sidebar_products_per_page)),
        num = 0;
      for (var i = 0; i <= list.length; i++) {
        var $prodId = list[i];
        if ($prodId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, options, function (err, response) {
            wrap.append(response);
            num++;
            if (num == list.length) {
              (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, blockId);
              wrap.parents('.sidebarBlock[data-list-id]').find('.loadingOverlay').remove();
              return;
            }
          });
        }
      }
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNwQjtBQUNXO0FBQ1M7QUFDSjtBQUNtQztBQUNwQjtBQUNRO0FBQ0Y7QUFDVjtBQUNBO0FBQUEsSUFFMUNZLFFBQVEsMEJBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdYLG1HQUEyQixDQUFDUSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsK0JBQStCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FB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TUFDNUMsSUFBSVEsR0FBRyxHQUFHWCxFQUFFLENBQUNZLFFBQVEsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDbEMsTUFBTSxDQUFDO1FBQzFDbUMsSUFBSSxHQUFHSixHQUFHLENBQUNLLEtBQUssQ0FBQyxDQUFDLEVBQUMzQixRQUFRLENBQUMxSCxPQUFPLENBQUNzSixhQUFhLENBQUNDLHlCQUF5QixDQUFDLENBQUM7UUFDN0VDLEdBQUcsR0FBRyxDQUFDO01BRVgsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUlMLElBQUksQ0FBQ3BJLE1BQU0sRUFBRXlJLENBQUMsRUFBRSxFQUFFO1FBQ25DLElBQUlDLE9BQU8sR0FBR04sSUFBSSxDQUFDSyxDQUFDLENBQUM7UUFFckIsSUFBR0MsT0FBTyxJQUFJbkQsU0FBUyxFQUFDO1VBQ3BCbEgsc0VBQVMsQ0FBQ3NLLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDRixPQUFPLEVBQUVYLE9BQU8sRUFBRSxVQUFDcEMsR0FBRyxFQUFFOEIsUUFBUSxFQUFLO1lBQzNERixJQUFJLENBQUMxQixNQUFNLENBQUM0QixRQUFRLENBQUM7WUFFckJlLEdBQUcsRUFBRTtZQUVMLElBQUdBLEdBQUcsSUFBSUosSUFBSSxDQUFDcEksTUFBTSxFQUFDO2NBQ2xCdEIsK0VBQXVCLENBQUNNLE9BQU8sRUFBRXdJLE9BQU8sQ0FBQztjQUN6Q0QsSUFBSSxDQUFDRyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQzlELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDK0QsTUFBTSxDQUFDLENBQUM7Y0FDNUU7WUFDSjtVQUNKLENBQUMsQ0FBQztRQUNOO01BQ0o7SUFDSjtFQUNKLENBQUM7RUFBQSxPQUFBN0ksUUFBQTtBQUFBLEVBclZpQ1YsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0JztcbmltcG9ydCBoYWxvcHJvZHVjdERpc3BsYXlNb2RlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdERpc3BsYXlNb2RlJztcbmltcG9ydCBoYWxvU2lkZWJhclRvZ2dsZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGViYXJUb2dnbGUnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgICAgICBpZiAoISQoJ1tkYXRhLXNob3AtYnktcHJpY2VdJykubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCQoJy5uYXZMaXN0LWFjdGlvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbi5pcy1hY3RpdmUnKS5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJCgnc3Bhbi5wcmljZS1maWx0ZXItbWVzc2FnZScpLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtYnV0dG9uLXR5cGU9XCJhZGQtY2FydFwiXScpLm9uKCdjbGljaycsIChlKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoZS5jdXJyZW50VGFyZ2V0KS5uZXh0KCksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcblxuICAgICAgICBpZiAoISQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcblxuICAgICAgICAgICAgLy8gUmVmcmVzaCByYW5nZSB2aWV3IHdoZW4gc2hvcC1ieS1wcmljZSBlbmFibGVkXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygnc2VhcmNoX3F1ZXJ5JykpIHtcbiAgICAgICAgICAgICAgICAkKCcucmVzZXQtZmlsdGVycycpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21pblwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWluJykpO1xuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21heFwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWF4JykpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnYS5yZXNldC1idG4nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKCdzcGFuLnJlc2V0LW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG5cbiAgICAgICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIGhhbG9wcm9kdWN0RGlzcGxheU1vZGUoKTtcbiAgICAgICAgaGFsb1NpZGViYXJUb2dnbGUoKTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkoKTtcbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdEJ5RWRpdG9yUGljaygpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhcigpO1xuICAgIH1cblxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKCdbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dJyk7XG4gICAgICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJy5wcm9kdWN0LWxpc3RpbmctY29udGVudCcpLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkc2hvd01vcmVDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KHRoaXMuY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhcigpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgY29uc3QgJHRvcFByb2R1Y3QgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyICNmZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdHMtbGlzdCcpO1xuXG4gICAgICAgICAgICBpZiAoJHRvcFByb2R1Y3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHRvcFByb2R1Y3Quc2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBjb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L2hhbG8tcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50JykubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgaWYgKGxpbmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgYXBpLmdldFBhZ2UobGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LnByb2R1Y3RMaXN0aW5nICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuYXBwZW5kKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRvckNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uLWxpc3QnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCcpLm5leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPCBOdW1iZXIoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvLmh0bWwocGFnaW5hdGlvbkluZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCk7XG4gICAgfVxuXG4gICAgc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCkge1xuICAgICAgICAgICAgY29uc3QgdHh0X2VuZCA9ICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSxcbiAgICAgICAgICAgICAgICB0eHRfdG90YWwgPSAkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSxcbiAgICAgICAgICAgICAgICBudW1fZW5kID0gKG51bV9lbmQgIT0gJycgPyBOdW1iZXIodHh0X2VuZC5yZXBsYWNlKC9bXjAtOS4tXSsvZywnJykpIDogMCksXG4gICAgICAgICAgICAgICAgbnVtX3RvdGFsID0gKG51bV90b3RhbCAhPSAnJyA/IE51bWJlcih0eHRfdG90YWwucmVwbGFjZSgvW14wLTkuLV0rL2csJycpKSA6IDApO1xuXG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IHBhcnNlSW50KG51bV9lbmQvbnVtX3RvdGFsICogMTAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGVyY2VudCA9IChwZXJjZW50ID4gMTAwID8gMTAwIDogcGVyY2VudCk7XG5cbiAgICAgICAgICAgIGlmKG51bV9lbmQgPT0gbnVtX3RvdGFsKXtcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi10b3RhbC1wcm9ncmVzcyAucGFnaW5hdGlvbi10b3RhbC1pdGVtJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpXG4gICAgICAgIH1cblxuICAgIHNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKSB7XG4gICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuXG4gICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mby5odG1sKHBhZ2luYXRpb25JbmZvKTtcbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCkge1xuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cycpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgdmFyICRvcHRpb25zO1xuXG4gICAgICAgIGlmKCQoJy5zaWRlYmFyQmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkd3JhcCxcbiAgICAgICAgICAgICAgICAgICAgJGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS1pZCcpLFxuICAgICAgICAgICAgICAgICAgICAkY2F0VXJsID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGJsb2NrSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZigkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0QnlDYXRlJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICR3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdEJ5Q2F0ZScpO1xuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9zaWRlYmFyL2hhbG8tcHJvZHVjdC1zaWRlYmFyLXRtcC0yJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1jYXRlLScrJGNhdElkKycgLnByb2R1Y3RCeUNhdGUgLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoJGNhdElkLCAkY2F0VXJsLCAkb3B0aW9ucywgJHdyYXAsICRibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpIHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuc2lkZWJhckJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCBibG9ja0lkKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlFZGl0b3JQaWNrKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHZhciAkb3B0aW9ucztcblxuICAgICAgICBpZigkKCcuc2lkZWJhckJsb2NrW2RhdGEtbGlzdC1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2tbZGF0YS1saXN0LWlkXScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kV3JhcElkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgICAgICAgICAkd3JhcCxcbiAgICAgICAgICAgICAgICAgICAgJGxpc3RJZCA9ICQoZWxlbWVudCkuZGF0YSgnbGlzdC1pZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoJChlbGVtZW50KS5maW5kKCcucHJvZHVjdEJ5SWQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgJHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0QnlJZCcpO1xuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9zaWRlYmFyL2hhbG8tcHJvZHVjdC1zaWRlYmFyLXRtcC0zJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1saXN0LScrJHByb2RXcmFwSWQrJyAucHJvZHVjdEJ5SWQgLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBsb2FkTGlzdElEKCRsaXN0SWQsICRvcHRpb25zLCAkd3JhcCwgJHByb2RXcmFwSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZExpc3RJRChpZCwgb3B0aW9ucywgd3JhcCwgYmxvY2tJZCkge1xuICAgICAgICAgICAgdmFyIGFyciA9IGlkLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSxcbiAgICAgICAgICAgICAgICBsaXN0ID0gYXJyLnNsaWNlKDAscGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLnNpZGViYXJfcHJvZHVjdHNfcGVyX3BhZ2UpKSxcbiAgICAgICAgICAgICAgICBudW0gPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kSWQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwLmFwcGVuZChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gbGlzdC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLnNpZGViYXJCbG9ja1tkYXRhLWxpc3QtaWRdJykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiaG9va3MiLCJhcGkiLCJDYXRhbG9nUGFnZSIsInV0aWxzIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImhhbG9TaWRlQWxsQ2F0ZWdvcnkiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImhhbG9wcm9kdWN0RGlzcGxheU1vZGUiLCJoYWxvU2lkZWJhclRvZ2dsZSIsImhhbG9TdGlja3lUb29sYmFyIiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsIm9uUmVhZHkiLCJfdGhpczMiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJzaG93IiwiZ2V0Iiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJsb2FkUHJvZHVjdEJ5Q2F0ZWdvcnkiLCJsb2FkUHJvZHVjdEJ5RWRpdG9yUGljayIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhciIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJwYWdpbmF0b3IiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiZmluZCIsImh0bWwiLCJjaGlsZHJlbiIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIiR0b3BQcm9kdWN0Iiwic2xpY2siLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsInVybCIsIlVSTCIsImhyZWYiLCJjIiwic2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsInZhbHVlIiwic2VsZWN0ZWQiLCJfdGhpczUiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibGluayIsInVuZGVmaW5lZCIsImFkZENsYXNzIiwiZ2V0UGFnZSIsInJlcGxhY2UiLCJlcnIiLCJFcnJvciIsImFwcGVuZCIsInJlbW92ZUNsYXNzIiwiYmx1ciIsInRleHQiLCJOdW1iZXIiLCJwYWdpbmF0aW9uSW5mbyIsInRvb2xiYXJQYWdpbmF0aW9uSW5mbyIsInNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcyIsInR4dF9lbmQiLCJ0eHRfdG90YWwiLCJudW1fZW5kIiwibnVtX3RvdGFsIiwicGVyY2VudCIsInBhcnNlSW50IiwiY3NzIiwiJG9wdGlvbnMiLCJlYWNoIiwiaW5kZXgiLCIkd3JhcCIsIiRjYXRJZCIsImRhdGEiLCIkY2F0VXJsIiwiJGJsb2NrSWQiLCJsb2FkQ2F0ZWdvcnkiLCJpZCIsIm9wdGlvbiIsIndyYXAiLCJibG9ja0lkIiwicmVzcG9uc2UiLCJwYXJlbnRzIiwicmVtb3ZlIiwiJHByb2RXcmFwSWQiLCIkbGlzdElkIiwibG9hZExpc3RJRCIsIm9wdGlvbnMiLCJhcnIiLCJ0b1N0cmluZyIsInNwbGl0IiwibWFwIiwibGlzdCIsInNsaWNlIiwidGhlbWVTZXR0aW5ncyIsInNpZGViYXJfcHJvZHVjdHNfcGVyX3BhZ2UiLCJudW0iLCJpIiwiJHByb2RJZCIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=