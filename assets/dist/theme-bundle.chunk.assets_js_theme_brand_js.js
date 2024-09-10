"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
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











var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showPaginationInfoToolbar();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.find('.product-listing-content').html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2.context, 'product-listing-container');
      }
      _this2.showItem();
      _this2.showProductsPerPage();
      _this2.showMoreProducts();
      _this2.showPaginationInfoToolbar();
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
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
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
  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
      limit = this.getUrlParameter('limit'),
      productPerPage;
    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.brandProductsPerPage;
    }
    var start = 1,
      end = total,
      checkLastPage = false,
      lastPage = 1;
    var checkLink = $(".pagination-list .pagination-item--current").next();
    var pageNotLast = lastPage - 1;
    var totalNotLast = pageNotLast * productPerPage;
    var productsLastPage = total - totalNotLast;
    var currentPage = parseInt($('.pagination-item--current > a').text());
    var prevPage = currentPage - 1;
    if (checkLink.length === 0) {
      lastPage = parseInt($(".pagination-item--current").find("a").text());
      checkLastPage = true;
    } else {
      lastPage = parseInt(checkLink.find("a").text());
      checkLastPage = false;
    }
    if (total <= productPerPage) {
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    } else {
      if (currentPage <= 1) {
        end = productPerPage;
      } else {
        start = prevPage * productPerPage + 1;
        if (checkLastPage == true) {
          if ($('.pagination-list .pagination-item--next').length > 0) {
            end = totalNotLast + productsLastPage - 1;
          } else {
            end = totalNotLast + productsLastPage;
          }
        } else {
          end = currentPage * productPerPage - 1;
        }
      }
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
    this.showPaginationTotalProgress();
  };
  _proto.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var _this3 = this;
    var context = this.context;
    var getUrlParameter = this.getUrlParameter('limit');
    var requestOptions = {
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: context.brandProductsPerPage
          }
        }
      },
      template: {
        productListing: 'brand/halo-product-listing',
        sidebar: 'brand/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'brand/show-more'
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
              $('.pagination .pagination-info .end').text($('.toolbar-left .pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                productPerPage,
                pageCurrent = parseInt($(".pagination-item--current > a").text());
              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.brandProductsPerPage;
              }
              var total = parseInt(productPerPage) * pageCurrent;
              $('.pagination .pagination-info .end').text(total);
            }
            var paginationInfo = $('.pagination .pagination-info').html(),
              toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
            toolbarPaginationInfo.html(paginationInfo);
            _this3.showPaginationTotalProgress();
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
          }
        });
      }
    });
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
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNwQjtBQUNXO0FBQ1M7QUFDSjtBQUNtQztBQUNwQjtBQUNRO0FBQ0Y7QUFDVjtBQUNBO0FBQUEsSUFFMUNZLEtBQUssMEJBQUFDLFlBQUE7RUFDdEIsU0FBQUQsTUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdYLG1HQUEyQixDQUFDUSxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sS0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxLQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQ05qQixvRUFBZSxDQUFDLElBQUksQ0FBQ1UsT0FBTyxDQUFDO0lBRTdCLElBQUlRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRDFCLDZEQUFLLENBQUMyQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDRixjQUFjLENBQUM7SUFDckQ7SUFFQWxCLDJFQUFtQixDQUFDLENBQUM7SUFDckJFLDhFQUFzQixDQUFDLENBQUM7SUFDeEJDLHlFQUFpQixDQUFDLENBQUM7SUFDbkJDLHlFQUFpQixDQUFDLElBQUksQ0FBQ0csT0FBTyxDQUFDO0lBRS9CLElBQUksQ0FBQ2Ms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RUEsQ0FBQyxJQUFJb0QsSUFBSSxDQUFDL0ksTUFBTSxFQUFFMkYsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsSUFBSXlELE9BQU8sR0FBR0wsSUFBSSxDQUFDcEQsQ0FBQyxDQUFDO1FBRXJCLElBQUd5RCxPQUFPLElBQUk5RSxTQUFTLEVBQUM7VUFDcEIxRixzRUFBUyxDQUFDeUssT0FBTyxDQUFDQyxPQUFPLENBQUNGLE9BQU8sRUFBRVQsT0FBTyxFQUFFLFVBQUNwQyxHQUFHLEVBQUU2QixRQUFRLEVBQUs7WUFDM0RGLElBQUksQ0FBQ3pCLE1BQU0sQ0FBQzJCLFFBQVEsQ0FBQztZQUVyQmUsR0FBRyxFQUFFO1lBRUwsSUFBR0EsR0FBRyxJQUFJSixJQUFJLENBQUMvSSxNQUFNLEVBQUM7Y0FDbEJmLCtFQUF1QixDQUFDTSxPQUFPLEVBQUU0SSxPQUFPLENBQUM7Y0FDekNELElBQUksQ0FBQ0csT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM3RixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzhGLE1BQU0sQ0FBQyxDQUFDO2NBQzVFO1lBQ0o7VUFDSixDQUFDLENBQUM7UUFDTjtNQUNKO0lBQ0o7RUFDSixDQUFDO0VBQUEsT0FBQWpKLEtBQUE7QUFBQSxFQTdYOEJWLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCc7XG5pbXBvcnQgaGFsb3Byb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGViYXJUb2dnbGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlYmFyVG9nZ2xlJztcbmltcG9ydCBoYWxvU3RpY2t5VG9vbGJhciBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1N0aWNreVRvb2xiYXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGFsb1NpZGVBbGxDYXRlZ29yeSgpO1xuICAgICAgICBoYWxvcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TaWRlYmFyVG9nZ2xlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhcigpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2JyYW5kL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2JyYW5kL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnLnByb2R1Y3QtbGlzdGluZy1jb250ZW50JykuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICRzaG93TW9yZUNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QodGhpcy5jb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbkluZm9Ub29sYmFyKCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICBjb25zdCAkdG9wUHJvZHVjdCA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXIgI2ZlYXR1cmVkLXByb2R1Y3RzIC5wcm9kdWN0cy1saXN0Jyk7XG5cbiAgICAgICAgICAgIGlmICgkdG9wUHJvZHVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkdG9wUHJvZHVjdC5zbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZChjb250ZXh0KXtcbiAgICAgICAgaWYoJCgnI2ZlYXR1cmVkLXByb2R1Y3RzIC5jYXJkJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAnZmVhdHVyZWQtcHJvZHVjdHMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgdmFyIGMgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcImxpbWl0XCIpO1xuICAgICAgICAgICAgaWYoYyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QjbGltaXQgb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChsaW1pdCwgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZhbHVlID09IGMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cblxuICAgIHNob3dJdGVtKCkge1xuICAgICAgICB2YXIgdG90YWwgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSksXG4gICAgICAgICAgICBsaW1pdCA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpLFxuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2U7XG5cbiAgICAgICAgaWYgKGxpbWl0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0YXJ0ID0gMSxcbiAgICAgICAgICAgIGVuZCA9IHRvdGFsLFxuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlLFxuICAgICAgICAgICAgbGFzdFBhZ2UgPSAxO1xuICAgICAgICAgICAgXG4gICAgICAgIHZhciBjaGVja0xpbmsgPSAkKFwiLnBhZ2luYXRpb24tbGlzdCAucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcbiAgICAgICAgdmFyIHBhZ2VOb3RMYXN0ID0gbGFzdFBhZ2UgLSAxO1xuICAgICAgICB2YXIgdG90YWxOb3RMYXN0ID0gcGFnZU5vdExhc3QgKiBwcm9kdWN0UGVyUGFnZTtcbiAgICAgICAgdmFyIHByb2R1Y3RzTGFzdFBhZ2UgPSB0b3RhbCAtIHRvdGFsTm90TGFzdDtcbiAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gcGFyc2VJbnQoJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGEnKS50ZXh0KCkpO1xuICAgICAgICB2YXIgcHJldlBhZ2UgPSBjdXJyZW50UGFnZSAtIDE7XG5cbiAgICAgICAgaWYgKGNoZWNrTGluay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxhc3RQYWdlID0gcGFyc2VJbnQoJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikuZmluZChcImFcIikudGV4dCgpKTtcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludChjaGVja0xpbmsuZmluZChcImFcIikudGV4dCgpKTtcbiAgICAgICAgICAgIGNoZWNrTGFzdFBhZ2UgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRvdGFsIDw9IHByb2R1Y3RQZXJQYWdlKSB7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5zdGFydCcpLnRleHQoc3RhcnQpO1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dChlbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDw9IDEpIHtcbiAgICAgICAgICAgICAgICBlbmQgPSBwcm9kdWN0UGVyUGFnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSAocHJldlBhZ2UgKiBwcm9kdWN0UGVyUGFnZSkgKyAxO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChjaGVja0xhc3RQYWdlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJCgnLnBhZ2luYXRpb24tbGlzdCAucGFnaW5hdGlvbi1pdGVtLS1uZXh0JykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0b3RhbE5vdExhc3QgKyBwcm9kdWN0c0xhc3RQYWdlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IGN1cnJlbnRQYWdlICogcHJvZHVjdFBlclBhZ2UgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCk7XG4gICAgfVxuXG4gICAgZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICAgICAgICB2YXIgc1BhZ2VVUkwgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLFxuICAgICAgICAgICAgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyksXG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNQYXJhbWV0ZXJOYW1lID0gc1VSTFZhcmlhYmxlc1tpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzUGFyYW1ldGVyTmFtZVsxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNQYXJhbWV0ZXJOYW1lWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd01vcmVQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0Jyk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvaGFsby1wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdicmFuZC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3I6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LXBhZ2luYXRvcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHBhZ2luYXRvckNvbnRhaW5lciA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcbiAgICAgICAgY29uc3QgJHNob3dNb3JlQ29udGFpbmVyID0gJCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKTtcblxuICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xuXG4gICAgICAgICAgICBpZiAobGluayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBhcGkuZ2V0UGFnZShsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksIHJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQucHJvZHVjdExpc3RpbmcgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hcHBlbmQoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdG9yQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24tbGlzdCcpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50JykubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKCcudG9vbGJhci1sZWZ0IC5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZ2V0VXJsUGFyYW1ldGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUN1cnJlbnQgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCA+IGFcIikudGV4dCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsID0gcGFyc2VJbnQocHJvZHVjdFBlclBhZ2UpKnBhZ2VDdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCh0b3RhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvLmh0bWwocGFnaW5hdGlvbkluZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcygpIHtcbiAgICAgICAgY29uc3QgdHh0X2VuZCA9ICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSxcbiAgICAgICAgICAgIHR4dF90b3RhbCA9ICQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpLFxuICAgICAgICAgICAgbnVtX2VuZCA9IChudW1fZW5kICE9ICcnID8gTnVtYmVyKHR4dF9lbmQucmVwbGFjZSgvW14wLTkuLV0rL2csJycpKSA6IDApLFxuICAgICAgICAgICAgbnVtX3RvdGFsID0gKG51bV90b3RhbCAhPSAnJyA/IE51bWJlcih0eHRfdG90YWwucmVwbGFjZSgvW14wLTkuLV0rL2csJycpKSA6IDApO1xuXG4gICAgICAgIHZhciBwZXJjZW50ID0gcGFyc2VJbnQobnVtX2VuZC9udW1fdG90YWwgKiAxMDApO1xuICAgICAgICBcbiAgICAgICAgcGVyY2VudCA9IChwZXJjZW50ID4gMTAwID8gMTAwIDogcGVyY2VudCk7XG5cbiAgICAgICAgaWYobnVtX2VuZCA9PSBudW1fdG90YWwpe1xuICAgICAgICAgICAgcGVyY2VudCA9IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5wYWdpbmF0aW9uLXRvdGFsLXByb2dyZXNzIC5wYWdpbmF0aW9uLXRvdGFsLWl0ZW0nKS5jc3MoJ3dpZHRoJywgcGVyY2VudCArICclJyk7XG4gICAgfVxuXG4gICAgc2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhcigpIHtcbiAgICAgICAgdmFyIHBhZ2luYXRpb25JbmZvID0gJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbycpLmh0bWwoKSxcbiAgICAgICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mbyA9ICQoJy50b29sYmFyLXdyYXBwZXIgLnRvb2xiYXItbGVmdCAucGFnaW5hdGlvbi1pbmZvJyk7XG5cbiAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvLmh0bWwocGFnaW5hdGlvbkluZm8pO1xuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlDYXRlZ29yeSgpe1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICAgIHZhciAkb3B0aW9ucztcblxuICAgICAgICBpZigkKCcuc2lkZWJhckJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAkKCcuc2lkZWJhckJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgJHdyYXAsXG4gICAgICAgICAgICAgICAgICAgICRjYXRJZCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgJGNhdFVybCA9ICQoZWxlbWVudCkuZGF0YSgnY2F0ZWdvcnktdXJsJyksXG4gICAgICAgICAgICAgICAgICAgICRibG9ja0lkID0gJChlbGVtZW50KS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoJChlbGVtZW50KS5maW5kKCcucHJvZHVjdEJ5Q2F0ZScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAkd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RCeUNhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvc2lkZWJhci9oYWxvLXByb2R1Y3Qtc2lkZWJhci10bXAtMidcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighJCgnI3Byb2R1Y3QtYnktY2F0ZS0nKyRjYXRJZCsnIC5wcm9kdWN0QnlDYXRlIC5jYXJkJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbG9hZENhdGVnb3J5KCRjYXRJZCwgJGNhdFVybCwgJG9wdGlvbnMsICR3cmFwLCAkYmxvY2tJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkQ2F0ZWdvcnkoaWQsIHVybCwgb3B0aW9uLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHdyYXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcuc2lkZWJhckJsb2NrW2RhdGEtY2F0ZWdvcnktaWRdJykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCBibG9ja0lkKTtcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRQcm9kdWN0QnlFZGl0b3JQaWNrKCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgdmFyICRvcHRpb25zO1xuXG4gICAgICAgIGlmKCQoJy5zaWRlYmFyQmxvY2tbZGF0YS1saXN0LWlkXScpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgJCgnLnNpZGViYXJCbG9ja1tkYXRhLWxpc3QtaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgJHByb2RXcmFwSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAgICAgICAgICR3cmFwLFxuICAgICAgICAgICAgICAgICAgICAkbGlzdElkID0gJChlbGVtZW50KS5kYXRhKCdsaXN0LWlkJyk7XG5cbiAgICAgICAgICAgICAgICBpZigkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0QnlJZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAkd3JhcCA9ICQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RCeUlkJyk7XG4gICAgICAgICAgICAgICAgICAgICRvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3NpZGViYXIvaGFsby1wcm9kdWN0LXNpZGViYXItdG1wLTMnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoISQoJyNwcm9kdWN0LWJ5LWxpc3QtJyskcHJvZFdyYXBJZCsnIC5wcm9kdWN0QnlJZCAuY2FyZCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRMaXN0SUQoJGxpc3RJZCwgJG9wdGlvbnMsICR3cmFwLCAkcHJvZFdyYXBJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsb2FkTGlzdElEKGlkLCBvcHRpb25zLCB3cmFwLCBibG9ja0lkKXtcbiAgICAgICAgICAgIHZhciBhcnIgPSBpZC50b1N0cmluZygpLnNwbGl0KCcsJykubWFwKE51bWJlciksXG4gICAgICAgICAgICAgICAgbGlzdCA9IGFyci5zbGljZSgwLHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5zaWRlYmFyX3Byb2R1Y3RzX3Blcl9wYWdlKSksXG4gICAgICAgICAgICAgICAgbnVtID0gMDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciAkcHJvZElkID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgIGlmKCRwcm9kSWQgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZCgkcHJvZElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JhcC5hcHBlbmQocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09IGxpc3QubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCBibG9ja0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy5zaWRlYmFyQmxvY2tbZGF0YS1saXN0LWlkXScpLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiYXBpIiwiQ2F0YWxvZ1BhZ2UiLCJ1dGlscyIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJoYWxvU2lkZUFsbENhdGVnb3J5IiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJoYWxvcHJvZHVjdERpc3BsYXlNb2RlIiwiaGFsb1NpZGViYXJUb2dnbGUiLCJoYWxvU3RpY2t5VG9vbGJhciIsIkJyYW5kIiwiX0NhdGFsb2dQYWdlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJzaG93SXRlbSIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhciIsIl90aGlzMiIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInBhZ2luYXRvciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiZmluZCIsImh0bWwiLCJjaGlsZHJlbiIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIiR0b3BQcm9kdWN0Iiwic2xpY2siLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImMiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwidmFsdWUiLCJzZWxlY3RlZCIsImUiLCJ0b3RhbCIsInBhcnNlSW50IiwidGV4dCIsImdldFVybFBhcmFtZXRlciIsInByb2R1Y3RQZXJQYWdlIiwidW5kZWZpbmVkIiwic3RhcnQiLCJlbmQiLCJjaGVja0xhc3RQYWdlIiwibGFzdFBhZ2UiLCJjaGVja0xpbmsiLCJuZXh0IiwicGFnZU5vdExhc3QiLCJ0b3RhbE5vdExhc3QiLCJwcm9kdWN0c0xhc3RQYWdlIiwiY3VycmVudFBhZ2UiLCJwcmV2UGFnZSIsInNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcyIsInNQYXJhbSIsInNQYWdlVVJMIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNwbGl0Iiwic1BhcmFtZXRlck5hbWUiLCJpIiwiX3RoaXMzIiwiJHBhZ2luYXRvckNvbnRhaW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsImxpbmsiLCJhdHRyIiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsImdldFBhZ2UiLCJyZXBsYWNlIiwiZXJyIiwiRXJyb3IiLCJhcHBlbmQiLCJyZW1vdmVDbGFzcyIsImJsdXIiLCJwYWdlQ3VycmVudCIsInBhZ2luYXRpb25JbmZvIiwidG9vbGJhclBhZ2luYXRpb25JbmZvIiwidHh0X2VuZCIsInR4dF90b3RhbCIsIm51bV9lbmQiLCJOdW1iZXIiLCJudW1fdG90YWwiLCJwZXJjZW50IiwiY3NzIiwibG9hZFByb2R1Y3RCeUNhdGVnb3J5IiwiJG9wdGlvbnMiLCJlYWNoIiwiaW5kZXgiLCIkd3JhcCIsIiRjYXRJZCIsImRhdGEiLCIkY2F0VXJsIiwiJGJsb2NrSWQiLCJsb2FkQ2F0ZWdvcnkiLCJpZCIsIm9wdGlvbiIsIndyYXAiLCJibG9ja0lkIiwicmVzcG9uc2UiLCJwYXJlbnRzIiwicmVtb3ZlIiwibG9hZFByb2R1Y3RCeUVkaXRvclBpY2siLCIkcHJvZFdyYXBJZCIsIiRsaXN0SWQiLCJsb2FkTGlzdElEIiwib3B0aW9ucyIsImFyciIsInRvU3RyaW5nIiwibWFwIiwibGlzdCIsInNsaWNlIiwidGhlbWVTZXR0aW5ncyIsInNpZGViYXJfcHJvZHVjdHNfcGVyX3BhZ2UiLCJudW0iLCIkcHJvZElkIiwicHJvZHVjdCIsImdldEJ5SWQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==