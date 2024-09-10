"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
















var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action').addClass('navBar-action-color--active');
    $('[data-product-results-toggle]').parent('.navBar-item').addClass('navBar-item--active');
    $('[data-product-results-toggle]').parent('.navBar-item').siblings().removeClass('navBar-item--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action').addClass('navBar-action-color--active');
    $('[data-content-results-toggle]').parent('.navBar-item').addClass('navBar-item--active');
    $('[data-content-results-toggle]').parent('.navBar-item').siblings().removeClass('navBar-item--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_12__["default"])();
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_13__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_14__["default"])(this.context);
    this.loadProductByCategory();
    this.loadProductByEditorPick();
    this.loadOptionForProductCard(this.context);
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showPaginationInfoToolbar();
    this.showItem();
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.find('.product-listing-content').html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
        _this5.showProducts(false);
        _this5.showProductsPerPage();
        _this5.showMoreProducts();
        _this5.showPaginationInfoToolbar();
        _this5.showItem();
        if ($('#product-listing-container .product').length > 0) {
          (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context, 'product-listing-container');
        }
      }
      $('body').triggerHandler('compareReset');
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
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
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
      productPerPage = this.context.searchProductsPerPage;
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
          end = currentPage * productPerPage;
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
    var _this6 = this;
    var context = this.context;
    var getUrlParameter = this.getUrlParameter('limit');
    var requestOptions = {
      config: {
        product_results: {
          shop_by_price: true,
          products: {
            limit: context.searchProductsPerPage
          }
        }
      },
      template: {
        productListing: 'search/halo-product-listing',
        sidebar: 'search/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'search/show-more'
    };
    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination-list');
    var $showMoreContainer = $('.halo-product-show-more');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $('.pagination-item--current').next(),
        link = nextPage.find('a').attr('href');
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
                pageCurrent = parseInt($('.pagination-item--current > a').text());
              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.searchProductsPerPage;
              }
              var total = parseInt(productPerPage) * pageCurrent;
              $('.pagination .pagination-info .end').text(total);
            }
            var paginationInfo = $('.pagination .pagination-info').html(),
              toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
            toolbarPaginationInfo.html(paginationInfo);
            _this6.showPaginationTotalProgress();
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
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
        (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, blockId);
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
              (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, blockId);
              wrap.parents('.sidebarBlock[data-list-id]').find('.loadingOverlay').remove();
              return;
            }
          });
        }
      }
    }
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDcEI7QUFDVztBQUNLO0FBQ2tCO0FBQ2Q7QUFDUjtBQUMxQjtBQUNnQztBQUN0QztBQUNlO0FBQ29DO0FBQ1E7QUFDRjtBQUNWO0FBQ0E7QUFFL0QsSUFBTWdCLFlBQVksR0FBRyxFQUFFO0FBQ3ZCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0FBQUMsSUFFSkMsTUFBTSwwQkFBQUMsWUFBQTtFQUFBLFNBQUFELE9BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosTUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxNQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN2QkUsMkJBQTJCLEdBQTNCLFNBQUFBLDJCQUEyQkEsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUM5QixJQUFNQyxRQUFRLEdBQUc7TUFDYkMsSUFBSSxFQUFFSCxJQUFJLENBQUNJLElBQUk7TUFDZkMsRUFBRSxFQUFFTCxJQUFJLENBQUNNLFFBQVEsQ0FBQ0QsRUFBRTtNQUNwQkUsS0FBSyxFQUFFO1FBQ0hDLFFBQVEsRUFBRVIsSUFBSSxDQUFDUTtNQUNuQjtJQUNKLENBQUM7SUFFRCxJQUFJUixJQUFJLENBQUNPLEtBQUssRUFBRTtNQUNaTCxRQUFRLENBQUNLLEtBQUssQ0FBQ0UsTUFBTSxHQUFHVCxJQUFJLENBQUNPLEtBQUssS0FBSyxNQUFNO01BQzdDTCxRQUFRLENBQUNRLFFBQVEsR0FBRyxJQUFJO0lBQzVCO0lBRUEsSUFBSVYsSUFBSSxDQUFDVSxRQUFRLEVBQUU7TUFDZlIsUUFBUSxDQUFDUSxRQUFRLEdBQUcsRUFBRTtNQUN0QlYsSUFBSSxDQUFDVSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxT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UUFBUTtRQUNsQkcsUUFBUSxFQUFFLFVBQVU7UUFDcEJDLFlBQVksRUFBRUosUUFBUSxDQUFDdFAsSUFBSSxDQUFDLGNBQWM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047SUFFQSxPQUFPLElBQUk7RUFDZixDQUFDO0VBQUFQLE1BQUEsQ0FFRHlGLEtBQUssR0FBTCxTQUFBQSxLQUFLQSxDQUFBLEVBQUc7SUFDSixJQUFJLElBQUksQ0FBQ1QsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDa0wsWUFBWSxDQUFDLENBQUM7TUFDN0IsT0FBTyxJQUFJLENBQUNsTCxTQUFTLENBQUNtTCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3pDO0lBRUEsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFBQSxPQUFBeFEsTUFBQTtBQUFBLEVBaHBCK0JoQixnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBoYWxvU2lkZUFsbENhdGVnb3J5IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU2lkZUFsbENhdGVnb3J5JztcbmltcG9ydCBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QnO1xuaW1wb3J0IGhhbG9wcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlYmFyVG9nZ2xlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZSc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcblxuY29uc3QgbGVmdEFycm93S2V5ID0gMzc7XG5jb25zdCByaWdodEFycm93S2V5ID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5wYXJlbnQoJy5uYXZCYXItaXRlbScpLmFkZENsYXNzKCduYXZCYXItaXRlbS0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucGFyZW50KCcubmF2QmFyLWl0ZW0nKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCduYXZCYXItaXRlbS0tYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5wYXJlbnQoJy5uYXZCYXItaXRlbScpLmFkZENsYXNzKCduYXZCYXItaXRlbS0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucGFyZW50KCcubmF2QmFyLWl0ZW0nKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCduYXZCYXItaXRlbS0tYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpKTtcblxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQgc3BhbicpLmRhdGEoKTtcbiAgICAgICAgY29uc3QgdXJsID0gKHNlYXJjaERhdGEuY291bnQgPiAwKSA/IHNlYXJjaERhdGEudXJsIDogdXJsVXRpbHMucmVwbGFjZVBhcmFtcyhzZWFyY2hEYXRhLnVybCwge1xuICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlVGFiKCR0YWJUb0FjdGl2YXRlKSB7XG4gICAgICAgIGNvbnN0ICR0YWJzQ29sbGVjdGlvbiA9ICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKTtcblxuICAgICAgICAkdGFic0NvbGxlY3Rpb24uZWFjaCgoaWR4LCB0YWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YWIgPSAkKHRhYik7XG5cbiAgICAgICAgICAgIGlmICgkdGFiLmlzKCR0YWJUb0FjdGl2YXRlKSkge1xuICAgICAgICAgICAgICAgICR0YWIucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICAkdGFiLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR0YWIuYXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25UYWJDaGFuZ2VXaXRoQXJyb3dzKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50S2V5ID0gZXZlbnQud2hpY2g7XG4gICAgICAgIGNvbnN0IGlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24gPSBldmVudEtleSA9PT0gbGVmdEFycm93S2V5XG4gICAgICAgICAgICB8fCBldmVudEtleSA9PT0gcmlnaHRBcnJvd0tleTtcbiAgICAgICAgaWYgKCFpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xuXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlRWxlbWVudE5vdFRhYiA9ICR0YWJzQ29sbGVjdGlvbi5pbmRleCgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSA9PT0gLTE7XG4gICAgICAgIGlmIChpc0FjdGl2ZUVsZW1lbnROb3RUYWIpIHJldHVybjtcblxuICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJChgIyR7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZH1gKTtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCRhY3RpdmVUYWIpO1xuICAgICAgICBjb25zdCBsYXN0VGFiSWR4ID0gJHRhYnNDb2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgbGV0IG5leHRUYWJJZHg7XG4gICAgICAgIHN3aXRjaCAoZXZlbnRLZXkpIHtcbiAgICAgICAgY2FzZSBsZWZ0QXJyb3dLZXk6XG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSAwID8gbGFzdFRhYklkeCA6IGFjdGl2ZVRhYklkeCAtIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSByaWdodEFycm93S2V5OlxuICAgICAgICAgICAgbmV4dFRhYklkeCA9IGFjdGl2ZVRhYklkeCA9PT0gbGFzdFRhYklkeCA/IDAgOiBhY3RpdmVUYWJJZHggKyAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgkdGFic0NvbGxlY3Rpb24uZ2V0KG5leHRUYWJJZHgpKS5mb2N1cygpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICBjb25zdCAkc2VhcmNoRm9ybSA9ICQoJ1tkYXRhLWFkdmFuY2VkLXNlYXJjaC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyID0gJHNlYXJjaEZvcm0uZmluZCgnW2RhdGEtc2VhcmNoLWNhdGVnb3J5LXRyZWVdJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHRyZWVEYXRhID0gW107XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudCcpO1xuXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykub24oJ2tleXVwJywgdGhpcy5vblRhYkNoYW5nZVdpdGhBcnJvd3MpO1xuXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0JykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5pbml0VmFsaWRhdGlvbigkc2VhcmNoRm9ybSlcbiAgICAgICAgICAgIC5iaW5kVmFsaWRhdGlvbigkc2VhcmNoRm9ybS5maW5kKCcjc2VhcmNoX3F1ZXJ5X2FkdicpKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRyZWVEYXRhLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhdGVnb3J5VHJlZURhdGEgPSB0cmVlRGF0YTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XG5cbiAgICAgICAgJHNlYXJjaEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvci5jaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SWQgb2Ygc2VsZWN0ZWRDYXRlZ29yeUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeVtdJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCAkc2VhcmNoUmVzdWx0c01lc3NhZ2UgPSAkKGA8cFxuICAgICAgICAgICAgY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXG4gICAgICAgICAgICA+JHt0aGlzLmNvbnRleHQuc2VhcmNoUmVzdWx0c0NvdW50fTwvcD5gKVxuICAgICAgICAgICAgLnByZXBlbmRUbygnYm9keScpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJHNlYXJjaFJlc3VsdHNNZXNzYWdlLmZvY3VzKCksIDEwMCk7XG5cbiAgICAgICAgaGFsb1NpZGVBbGxDYXRlZ29yeSgpO1xuICAgICAgICBoYWxvcHJvZHVjdERpc3BsYXlNb2RlKCk7XG4gICAgICAgIGhhbG9TaWRlYmFyVG9nZ2xlKCk7XG4gICAgICAgIGhhbG9TdGlja3lUb29sYmFyKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUNhdGVnb3J5KCk7XG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3RCeUVkaXRvclBpY2soKTtcbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKTtcbiAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJy5wcm9kdWN0LWxpc3RpbmctY29udGVudCcpLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICAkc2hvd01vcmVDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG5cbiAgICAgICAgICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgY29uc3QgJHRvcFByb2R1Y3QgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyICNmZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdHMtbGlzdCcpO1xuXG4gICAgICAgICAgICBpZiAoJHRvcFByb2R1Y3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHRvcFByb2R1Y3Quc2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCl7XG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93SXRlbSgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gcGFyc2VJbnQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpLFxuICAgICAgICAgICAgbGltaXQgPSB0aGlzLmdldFVybFBhcmFtZXRlcignbGltaXQnKSxcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlO1xuXG4gICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSAxLFxuICAgICAgICAgICAgZW5kID0gdG90YWwsXG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2UsXG4gICAgICAgICAgICBsYXN0UGFnZSA9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIGNoZWNrTGluayA9ICQoXCIucGFnaW5hdGlvbi1saXN0IC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuICAgICAgICB2YXIgcGFnZU5vdExhc3QgPSBsYXN0UGFnZSAtIDE7XG4gICAgICAgIHZhciB0b3RhbE5vdExhc3QgPSBwYWdlTm90TGFzdCAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICB2YXIgcHJvZHVjdHNMYXN0UGFnZSA9IHRvdGFsIC0gdG90YWxOb3RMYXN0O1xuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XG4gICAgICAgIHZhciBwcmV2UGFnZSA9IGN1cnJlbnRQYWdlIC0gMTtcblxuICAgICAgICBpZiAoY2hlY2tMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KGNoZWNrTGluay5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodG90YWwgPD0gcHJvZHVjdFBlclBhZ2UpIHtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IChwcmV2UGFnZSAqIHByb2R1Y3RQZXJQYWdlKSArIDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGFzdFBhZ2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZigkKCcucGFnaW5hdGlvbi1saXN0IC5wYWdpbmF0aW9uLWl0ZW0tLW5leHQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2UgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQgPSB0b3RhbE5vdExhc3QgKyBwcm9kdWN0c0xhc3RQYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY3VycmVudFBhZ2UgKiBwcm9kdWN0UGVyUGFnZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcygpO1xuICAgIH1cblxuICAgIGdldFVybFBhcmFtZXRlcihzUGFyYW0pIHtcbiAgICAgICAgdmFyIHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKSxcbiAgICAgICAgICAgIHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpLFxuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHNQYXJhbWV0ZXJOYW1lWzBdID09PSBzUGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGdldFVybFBhcmFtZXRlciA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9oYWxvLXByb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBwYWdpbmF0b3I6ICdoYWxvdGhlbWVzL2dhbGxlcnkvaGFsby1wcm9kdWN0LXBhZ2luYXRvcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50JykubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKCdhJykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICBpZiAobGluayA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBhcGkuZ2V0UGFnZShsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksIHJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQucHJvZHVjdExpc3RpbmcgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hcHBlbmQoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdG9yQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24tbGlzdCcpLmNoaWxkcmVuKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBhZ2UgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50JykubmV4dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2Rpc2FibGUnKS50ZXh0KCdObyBtb3JlIHByb2R1Y3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKCcudG9vbGJhci1sZWZ0IC5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZ2V0VXJsUGFyYW1ldGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUN1cnJlbnQgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBjb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWwgPSBwYXJzZUludChwcm9kdWN0UGVyUGFnZSkqcGFnZUN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KHRvdGFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhZ2luYXRpb25JbmZvID0gJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbycpLmh0bWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mbyA9ICQoJy50b29sYmFyLXdyYXBwZXIgLnRvb2xiYXItbGVmdCAucGFnaW5hdGlvbi1pbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8uaHRtbChwYWdpbmF0aW9uSW5mbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCkge1xuICAgICAgICBjb25zdCB0eHRfZW5kID0gJCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpLFxuICAgICAgICAgICAgdHh0X3RvdGFsID0gJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCksXG4gICAgICAgICAgICBudW1fZW5kID0gKG51bV9lbmQgIT0gJycgPyBOdW1iZXIodHh0X2VuZC5yZXBsYWNlKC9bXjAtOS4tXSsvZywnJykpIDogMCksXG4gICAgICAgICAgICBudW1fdG90YWwgPSAobnVtX3RvdGFsICE9ICcnID8gTnVtYmVyKHR4dF90b3RhbC5yZXBsYWNlKC9bXjAtOS4tXSsvZywnJykpIDogMCk7XG5cbiAgICAgICAgdmFyIHBlcmNlbnQgPSBwYXJzZUludChudW1fZW5kL251bV90b3RhbCAqIDEwMCk7XG4gICAgICAgIFxuICAgICAgICBwZXJjZW50ID0gKHBlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50KTtcblxuICAgICAgICBpZihudW1fZW5kID09IG51bV90b3RhbCl7XG4gICAgICAgICAgICBwZXJjZW50ID0gMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnBhZ2luYXRpb24tdG90YWwtcHJvZ3Jlc3MgLnBhZ2luYXRpb24tdG90YWwtaXRlbScpLmNzcygnd2lkdGgnLCBwZXJjZW50ICsgJyUnKTtcbiAgICB9XG5cbiAgICBzaG93UGFnaW5hdGlvbkluZm9Ub29sYmFyKCkge1xuICAgICAgICB2YXIgcGFnaW5hdGlvbkluZm8gPSAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvJykuaHRtbCgpLFxuICAgICAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvID0gJCgnLnRvb2xiYXItd3JhcHBlciAudG9vbGJhci1sZWZ0IC5wYWdpbmF0aW9uLWluZm8nKTtcblxuICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8uaHRtbChwYWdpbmF0aW9uSW5mbyk7XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RCeUNhdGVnb3J5KCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgdmFyICRvcHRpb25zO1xuXG4gICAgICAgIGlmKCQoJy5zaWRlYmFyQmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkd3JhcCxcbiAgICAgICAgICAgICAgICAgICAgJGNhdElkID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS1pZCcpLFxuICAgICAgICAgICAgICAgICAgICAkY2F0VXJsID0gJChlbGVtZW50KS5kYXRhKCdjYXRlZ29yeS11cmwnKSxcbiAgICAgICAgICAgICAgICAgICAgJGJsb2NrSWQgPSAkKGVsZW1lbnQpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBpZigkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0QnlDYXRlJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICR3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdEJ5Q2F0ZScpO1xuICAgICAgICAgICAgICAgICAgICAkb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9zaWRlYmFyL2hhbG8tcHJvZHVjdC1zaWRlYmFyLXRtcC0yJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCEkKCcjcHJvZHVjdC1ieS1jYXRlLScrJGNhdElkKycgLnByb2R1Y3RCeUNhdGUgLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBsb2FkQ2F0ZWdvcnkoJGNhdElkLCAkY2F0VXJsLCAkb3B0aW9ucywgJHdyYXAsICRibG9ja0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRDYXRlZ29yeShpZCwgdXJsLCBvcHRpb24sIHdyYXAsIGJsb2NrSWQpe1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgd3JhcC5odG1sKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy5zaWRlYmFyQmxvY2tbZGF0YS1jYXRlZ29yeS1pZF0nKS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZFByb2R1Y3RCeUVkaXRvclBpY2soKXtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICB2YXIgJG9wdGlvbnM7XG5cbiAgICAgICAgaWYoJCgnLnNpZGViYXJCbG9ja1tkYXRhLWxpc3QtaWRdJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAkKCcuc2lkZWJhckJsb2NrW2RhdGEtbGlzdC1pZF0nKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgJHdyYXAsXG4gICAgICAgICAgICAgICAgICAgICRsaXN0SWQgPSAkKGVsZW1lbnQpLmRhdGEoJ2xpc3QtaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmKCQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RCeUlkJykubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICR3cmFwID0gJChlbGVtZW50KS5maW5kKCcucHJvZHVjdEJ5SWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvc2lkZWJhci9oYWxvLXByb2R1Y3Qtc2lkZWJhci10bXAtMydcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighJCgnI3Byb2R1Y3QtYnktbGlzdC0nKyRwcm9kV3JhcElkKycgLnByb2R1Y3RCeUlkIC5jYXJkJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbG9hZExpc3RJRCgkbGlzdElkLCAkb3B0aW9ucywgJHdyYXAsICRwcm9kV3JhcElkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRMaXN0SUQoaWQsIG9wdGlvbnMsIHdyYXAsIGJsb2NrSWQpe1xuICAgICAgICAgICAgdmFyIGFyciA9IGlkLnRvU3RyaW5nKCkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSxcbiAgICAgICAgICAgICAgICBsaXN0ID0gYXJyLnNsaWNlKDAscGFyc2VJbnQoY29udGV4dC50aGVtZVNldHRpbmdzLnNpZGViYXJfcHJvZHVjdHNfcGVyX3BhZ2UpKSxcbiAgICAgICAgICAgICAgICBudW0gPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kSWQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYoJHByb2RJZCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwLmFwcGVuZChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihudW0gPT0gbGlzdC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsIGJsb2NrSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAucGFyZW50cygnLnNpZGViYXJCbG9ja1tkYXRhLWxpc3QtaWRdJykuZmluZCgnLmxvYWRpbmdPdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsImFwaSIsIkNhdGFsb2dQYWdlIiwidXRpbHMiLCJGYWNldGVkU2VhcmNoIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiaGFsb3Byb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TaWRlYmFyVG9nZ2xlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJfdGhpcyIsIm5vZGVEYXRhIiwidGV4dCIsImRhdGEiLCJpZCIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFjdGl2YXRlVGFiIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwicmVwbGFjZVBhcmFtcyIsInBhZ2UiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCIkdGFiVG9BY3RpdmF0ZSIsIiR0YWJzQ29sbGVjdGlvbiIsImZpbmQiLCJlYWNoIiwiaWR4IiwidGFiIiwiJHRhYiIsImlzIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJvblRhYkNoYW5nZVdpdGhBcnJvd3MiLCJldmVudCIsImV2ZW50S2V5Iiwid2hpY2giLCJpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duIiwiaXNBY3RpdmVFbGVtZW50Tm90VGFiIiwiaW5kZXgiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCIkYWN0aXZlVGFiIiwiYWN0aXZlVGFiSWR4IiwibGFzdFRhYklkeCIsImxlbmd0aCIsIm5leHRUYWJJZHgiLCJnZXQiLCJmb2N1cyIsInRyaWdnZXIiLCJvblJlYWR5IiwiX3RoaXMyIiwiY29udGV4dCIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0cmVlRGF0YSIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhdGVnb3J5SWQiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJhcHBlbmQiLCIkc2VhcmNoUmVzdWx0c01lc3NhZ2UiLCJzZWFyY2hSZXN1bHRzQ291bnQiLCJwcmVwZW5kVG8iLCJzZXRUaW1lb3V0IiwibG9hZFByb2R1Y3RCeUNhdGVnb3J5IiwibG9hZFByb2R1Y3RCeUVkaXRvclBpY2siLCJsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQiLCJzaG93UHJvZHVjdHNQZXJQYWdlIiwic2hvd01vcmVQcm9kdWN0cyIsInNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIiLCJzaG93SXRlbSIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiX3RoaXMkY29udGV4dCIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsInBhZ2luYXRvciIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkdG9wUHJvZHVjdCIsInNsaWNrIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJVUkwiLCJjIiwic2VhcmNoUGFyYW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiY2FsbCIsImVsZW1lbnQiLCJlIiwidG90YWwiLCJwYXJzZUludCIsImdldFVybFBhcmFtZXRlciIsInByb2R1Y3RQZXJQYWdlIiwidW5kZWZpbmVkIiwic3RhcnQiLCJlbmQiLCJjaGVja0xhc3RQYWdlIiwibGFzdFBhZ2UiLCJjaGVja0xpbmsiLCJuZXh0IiwicGFnZU5vdExhc3QiLCJ0b3RhbE5vdExhc3QiLCJwcm9kdWN0c0xhc3RQYWdlIiwiY3VycmVudFBhZ2UiLCJwcmV2UGFnZSIsInNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcyIsInNQYXJhbSIsInNQYWdlVVJMIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoIiwic3Vic3RyaW5nIiwic1VSTFZhcmlhYmxlcyIsInNwbGl0Iiwic1BhcmFtZXRlck5hbWUiLCJpIiwiX3RoaXM2Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwiJHBhZ2luYXRvckNvbnRhaW5lciIsIm5leHRQYWdlIiwibGluayIsImhhc0NsYXNzIiwiZ2V0UGFnZSIsInJlcGxhY2UiLCJlcnIiLCJFcnJvciIsImJsdXIiLCJwYWdlQ3VycmVudCIsInBhZ2luYXRpb25JbmZvIiwidG9vbGJhclBhZ2luYXRpb25JbmZvIiwidHh0X2VuZCIsInR4dF90b3RhbCIsIm51bV9lbmQiLCJOdW1iZXIiLCJudW1fdG90YWwiLCJwZXJjZW50IiwiY3NzIiwiJG9wdGlvbnMiLCIkd3JhcCIsIiRjYXRJZCIsIiRjYXRVcmwiLCIkYmxvY2tJZCIsImxvYWRDYXRlZ29yeSIsIm9wdGlvbiIsIndyYXAiLCJibG9ja0lkIiwicmVzcG9uc2UiLCJwYXJlbnRzIiwiJHByb2RXcmFwSWQiLCIkbGlzdElkIiwibG9hZExpc3RJRCIsIm9wdGlvbnMiLCJhcnIiLCJ0b1N0cmluZyIsIm1hcCIsImxpc3QiLCJzbGljZSIsInRoZW1lU2V0dGluZ3MiLCJzaWRlYmFyX3Byb2R1Y3RzX3Blcl9wYWdlIiwibnVtIiwiJHByb2RJZCIsInByb2R1Y3QiLCJnZXRCeUlkIiwiJGZvcm0iLCJzdWJtaXQiLCJ0YXAiLCIkZWxlbWVudCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJlcnJvck1lc3NhZ2UiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==