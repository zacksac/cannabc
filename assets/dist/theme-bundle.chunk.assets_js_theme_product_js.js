"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeString: () => (/* binding */ safeString)
/* harmony export */ });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  var thisProuctId = parseInt(context.productId),
    $relateTab = $('#halo-related-products'),
    $bundle = $('#halo-bundle-products'),
    $bundleList = $bundle.find('.halo-product-list');
  var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('#modal')[0];
  var currency = context.money;
  showBundle();
  $(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    $('.halo-toggle-options').not($target).removeClass('is-focus');
    $('.halo-detail-options').not($target.next('.halo-detail-options')).removeClass('is-open');
    if (!$target.next('.halo-detail-options').hasClass('is-open')) {
      $target.addClass('is-focus');
      $target.next('.halo-detail-options').addClass('is-open');
    } else {
      $target.next('.halo-detail-options').removeClass('is-open');
      $target.removeClass('is-focus');
    }
  });
  $(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    $('.halo-detail-options').removeClass('is-open');
    $('.halo-toggle-options').removeClass('is-focus');
  });
  $(document).on('click', function (event) {
    if ($('.halo-detail-options').hasClass('is-open')) {
      if ($(event.target).closest('.halo-detail-options').length === 0 && $(event.target).closest('.halo-toggle-options').length === 0) {
        $('.halo-detail-options').removeClass('is-open');
        $('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  $(document).on('change', '.halo-detail-checkbox', function (event) {
    var $target = $(event.currentTarget),
      id = $target.attr('id').replace('fbt_product', ''),
      product = $('.halo-product-item[data-product-id="' + id + '"]');
    if ($target.is(':checked') == false) {
      product.removeClass('isChecked');
    } else {
      product.addClass('isChecked');
    }
    totalPrice();
  });
  $(document).on('click', '#halo-addAll', function (event) {
    event.preventDefault();
    var $form = $('form', $bundle);
    var arrPro = new Array();
    $('.halo-detail-checkbox').each(function (index, val) {
      if ($(val).is(':checked')) {
        arrPro.push(index);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        var k = arrPro.length;
        $bundle.find('.loadingOverlay').show();
        addToCart($form, 0, arrPro, k);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';
      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(tmp.textContent || tmp.innerText);
      }
    }
    event.preventDefault();
  });
  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/product/halo-bundle-products-tmp',
        options: 'halothemes/product/halo-bundle-products-options'
      }
    };
    var prodBundleId = [],
      totalBlock = '';
    firstItem();
    if ($bundle.hasClass('halo-bundle-login')) {
      totalBlock = '<div class="halo-product-total">\
                            <a class="button button--secondary halo-product-total-button" disabled href="#">Log in for pricing</a>\
                        </div>';
    } else {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text"><span>Total price:</span></span>\
                                <span class="price"></span>\
                            </div>\
                            <a class="button button--secondary halo-product-total-button" id="halo-addAll" href="#">Add All To Cart</a>\
                        </div>';
    }
    $bundle.find('.bundle-product-right').append(totalBlock);
    $.each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    prodBundleId = $.grep(prodBundleId, function (value) {
      return value != thisProuctId;
    });
    if ($bundle.length > 0 && prodBundleId.length == 0) {
      var num = 0,
        list = [];
      $relateTab.find('.card').each(function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = $(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
              }
            });
            num++;
            if (num == $relateTab.find('.card').length) {
              showList(list);
            }
          });
        }
      });
    } else if ($bundle.length > 0 && prodBundleId.length > 0) {
      var num = 0,
        list = [],
        listFilter = $.unique(prodBundleId);
      $.each(prodBundleId, function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = prodBundleId[i];
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }
  function firstItem() {
    var firstItem = $bundleList.find('.halo-product-itemFirst'),
      pId = firstItem.data('product-id'),
      form = firstItem.find('form'),
      hasOptions = form.find('[data-fbt-option-change]').length,
      hasDefaultOptions = form.find('[data-default]').length;
    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes(form, attributesData);
        if (hasDefaultOptions) {
          updateView(form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      if (response != undefined && response != null && response != '') {
        $bundleList.append(response.item);
        if (response.options.trim() != "") {
          var pId = $(response.item).data('product-id'),
            $form = $bundleList.find('.halo-product-item[data-product-id="' + pId + '"] form');
          $form.append(response.options);
          var $productOptionsElement = $('[data-fbt-option-change]', $form);
          var hasOptions = $productOptionsElement.html().trim().length;
          var hasDefaultOptions = $(response.options).find('[data-default]').length;
          if (hasDefaultOptions && hasOptions) {
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
              if (response != undefined) {
                var attributesData = response.data || {};
                var attributesContent = response.content || {};
                updateProductAttributes($form, attributesData);
                if (hasDefaultOptions) {
                  updateView($form, attributesData, attributesContent);
                } else {
                  updateDefaultAttributesForOOS(attributesData);
                }
              }
            });
          }
          setProductVariant();
        }
      }
    });
    productOptions();
    showSlickSlider($bundleList);
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }
    $bundle.removeClass('halo-block-disable');
  }
  function showSlickSlider(wrap) {
    if (wrap.length > 0) {
      wrap.slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true
          }
        }]
      });
    }
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0; i < arrPro.length; i++) {
      var k = arrPro[i],
        $form = $(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) {
          return false;
        }
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true,
      att = "";
    $attributes.find('input:text, input:password, input:file, textarea').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('input:radio, input:checkbox').each(function (index, element) {
      if (att != $(element).attr("name")) {
        att = $(element).attr("name");
        if (!$(element).prop('required')) {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP, k) {
    if (window.FormData === undefined) {
      return;
    }
    var prod = arrP[i];
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[prod])), function (err, response) {
      var errorMessage = err || response.data.error;
      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
        k = k - 1;
      }
      i++;
      if (i >= arrP.length) {
        $bundle.find('.loadingOverlay').hide();
        if (context.themeSettings.haloAddToCartAction === 'sidebar') {
          var options = {
            template: 'common/cart-preview'
          };
          var loadingClass = 'is-loading';
          var $body = $('body');
          var $cartDropdown = $('#halo-cart-sidebar .halo-sidebar-wrapper');
          var $cartLoading = $('<div class="loadingOverlay"></div>');
          $body.toggleClass('openCartSidebar');
          $cartDropdown.addClass(loadingClass).html($cartLoading);
          $cartLoading.show();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
            $cartDropdown.removeClass(loadingClass).html(response);
            $cartLoading.hide();
            var quantity = $(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
            $body.trigger('cart-quantity-update', quantity);
            (0,_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_5__["default"])(context);
          });
        } else {
          redirectTo(context.urls.cart);
        }
        return;
      }
      addToCart(form, i, arrP, k);
    });
  }
  function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  function redirectTo(url) {
    if (isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }
  function totalPrice() {
    var total = 0,
      symbol,
      symbolChange,
      decimalPlaces,
      decimalSeparator,
      thousandsSeparator,
      symbolLocation,
      curr,
      token1,
      token2,
      length;
    decimalPlaces = currency.decimal_places;
    decimalSeparator = currency.decimal_token;
    thousandsSeparator = currency.thousands_token;
    symbolLocation = currency.currency_location;
    symbol = currency.currency_token;
    $bundleList.find('.halo-product-item.isChecked').each(function (index, val) {
      var price = parseFloat($(val).find('[data-price-value]').attr('data-price-value'));
      total = total + price;
    });
    if ($('.productView-product .productView-price > .price-section > .price.price--withTax', $scope).length) {
      curr = $('.productView-product .productView-price > .price-section > .price.price--withTax', $scope).data('value-price');
    } else {
      curr = $('.productView-product .productView-price > .price-section > .price.price--withoutTax', $scope).data('value-price');
    }
    symbolChange = curr.replace(/[0-9]/g, "").replace(".", "").replace(",", "");
    if (symbol != symbolChange) {
      symbol = symbolChange;
      token1 = curr.indexOf('.');
      token2 = curr.indexOf(',');
      length = curr.length - 1;
      if (curr.indexOf(symbol) != -1) {
        symbolLocation = curr.indexOf(symbol);
      }
      if (token1 < token2) {
        thousandsSeparator = '.';
        decimalSeparator = ',';
        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token2;
        } else {
          decimalPlaces = length - token2 - 1;
        }
      } else {
        thousandsSeparator = ',';
        decimalSeparator = '.';
        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token1;
        } else {
          decimalPlaces = length - token1 - 1;
        }
      }
    }
    if (total == 0) {
      $bundle.find('#halo-addAll').attr('disabled', true);
    } else {
      $bundle.find('#halo-addAll').attr('disabled', false);
    }
    total = formatMoney(total, decimalPlaces, decimalSeparator, thousandsSeparator);
    if (symbolLocation == "left" || symbolLocation == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }
    $bundle.find('.halo-product-total .price').html(total);
  }
  function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }
  ;
  function productOptions() {
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }
    var $form = $('form', $bundle),
      $productOptionsElement = $('[data-fbt-option-change]', $form);
    $(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }
  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              $(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      if (!$bundle.hasClass('halo-bundle-login')) {
        totalPrice();
      }
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      if (data.stock <= parseInt(context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
        viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
        viewModel.$stockLeft.text(data.stock);
      } else {
        viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
      }
    }
    showMessageBox(data.stock_message || data.purchasing_message, $scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = $('[name="product_id"]', $scope).val(),
      product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
      productCheckbox = product.find('.halo-detail-checkbox');
    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = $('[name="product_id"]', $scope).val(),
      product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
      productCheckbox = product.find('.halo-detail-checkbox');
    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }
  function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      priceData: {
        $div: $('[data-price-value]', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      $stockLeft: $('[data-stock-left]', $scope),
      $stockLeftWrapper: $('.productView-optionsStock', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      $sku: $('[data-product-sku]'),
      $upc: $('[data-product-upc]'),
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }
  function showMessageBox(message, $scope) {
    var $messageBox = $('.productAttributes-message', $scope);
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.with_tax.value);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.without_tax.value);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e);
    }
    return formData;
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloNextProducts.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloNextProducts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if ($('.productView-nextProducts').length > 0) {
    var getProduct = function getProduct(arr) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                query MyQuery {\n                    site {\n                        products (entityIds: [" + arr + "]) {\n                          edges {\n                            product: node {\n                              ...ProductFields\n                              }\n                            }\n                        }\n                        currency (currencyCode: " + curCode + ") {\n                            display {\n                                symbol\n                                symbolPlacement\n                                decimalToken\n                                thousandsToken\n                                decimalPlaces\n                            }\n                        }\n                    }\n                }\n                fragment ProductFields on Product {\n                    id\n                    entityId\n                    name\n                    path\n                    defaultImage {\n                        img70px: url(width: 70)\n                        altText\n                    }\n                    prices {\n                        priceRange {\n                            min {\n                                ...MoneyFields\n                            }\n                            max {\n                                ...MoneyFields\n                            }\n                        }\n                        retailPrice {\n                            ...MoneyFields\n                        }\n                        basePrice {\n                            ...MoneyFields\n                        }\n                        price {\n                            ...MoneyFields\n                        }\n                    }\n                }\n                fragment MoneyFields on Money {\n                    value\n                    currencyCode\n                }\n            "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };
    var formatMoney = function formatMoney(n, c, d, t) {
      var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
    var renderProduct = function renderProduct(product, curDisplay) {
      if (product != undefined) {
        $.each(product, function (index, element) {
          var item = element.product,
            symbol = curDisplay.symbol,
            symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
            decimalToken = curDisplay.decimalToken,
            decimalPlaces = curDisplay.decimalPlaces,
            thousandsToken = curDisplay.thousandsToken;
          var title, price;
          if (context.themeSettings.halo_card_title == 'ellipsis') {
            title = '<a href="' + item.path + '" class="card-ellipsis" style="-webkit-box-orient: vertical;">' + item.name + '</a>';
          } else {
            title = '<a href="' + item.path + '">' + item.name + '</a>';
          }
          if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
            if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
              var priceMin = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              var priceMax = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                    </div>\
                                    <div class="price-section price-section--withoutTax">\
                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceMin + ' - ' + priceMax + '</span>\
                                    </div>';
            } else {
              var priceDef = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              if (item.prices.retailPrice == null) {
                if (item.prices.basePrice.value > item.prices.price.value) {
                  var priceBas = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceBas + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              } else {
                if (item.prices.retailPrice.value > item.prices.price.value) {
                  var priceRet = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceRet + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              }
            }
          } else {
            price = '<p translate>Log in for pricing</p>';
          }
          var html_card = '<div class="card" data-product-id="' + item.entityId + '">\
                                        <div class="card-image">\
                                            <a class="card-link" href="' + item.path + '">\
                                                <img src="' + item.defaultImage.img70px + '" alt="' + item.name + '" title="' + item.name + '" />\
                                            </a>\
                                        </div>\
                                        <div class="card-content">\
                                            <h4 class="card-title">' + title + '</h4>\
                                            <div class="card-price" data-test-info-type="price">' + price + '</div>\
                                        </div>\
                                    </div>';
          if (item.entityId == prevId) {
            if (item.path !== undefined) {
              $prodIcons.find('.prev-icon').attr('href', item.path);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(html_card);
            } else {
              $prodIcons.find('.prev-icon').remove();
              $prodWrap.find('#prev-product-modal').remove();
            }
          }
          if (item.entityId == nextId) {
            if (item.path !== undefined) {
              $prodIcons.find('.next-icon').attr('href', item.path);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(html_card);
            } else {
              $prodIcons.find('.next-icon').remove();
              $prodWrap.find('#next-product-modal').remove();
            }
          }
        });
      }
    };
    var token = context.token;
    var curCode = $('.body').data('currency-code');
    var productId = $('.productView-nextProducts').data('product-id'),
      nextId = productId + 1,
      prevId = productId - 1,
      nextLink,
      prevLink,
      list;
    var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
      $prodIcons = $('.productView-nextProducts .next-prev-icons');
    if (prevId != undefined && nextId != undefined) {
      list = [prevId, nextId];
      getProduct(list).then(function (data) {
        renderProduct(data.site.products.edges, data.site.currency.display);
      });
    }
    $prodIcons.on('mouseover', function (event) {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function (event) {
      $prodWrap.removeClass('is-active');
    });
    $('.next-icon', $prodIcons).on('mouseover', function () {
      if (!$(this).hasClass('disable')) {
        $('#prev-product-modal').removeClass('is-show');
        $('#next-product-modal').addClass('is-show');
      } else {
        $('#prev-product-modal').removeClass('is-show');
      }
    });
    $('.prev-icon', $prodIcons).on('mouseover', function () {
      if (!$(this).hasClass('disable')) {
        $('#next-product-modal').removeClass('is-show');
        $('#prev-product-modal').addClass('is-show');
      } else {
        $('#next-product-modal').removeClass('is-show');
      }
    });
    $prodWrap.on('mouseover', function (event) {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function (event) {
      $prodWrap.removeClass('is-active');
    });
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  if ($('#form-action-addToCart').length) {
    var scroll = $('#form-action-addToCart').offset(),
      h_statc = $('#halo_sticky_addToCart').outerHeight(),
      scrollTop = scroll.top;
    if ($('.productView-details .productView-options [data-product-attribute="swatch"]').length) {
      var color = $('.productView-details .productView-options [data-product-attribute="swatch"] .form-option > span').attr('title');
      $('#halo_sticky_addToCart .option-value').append('<span class="color-name"> -' + ' ' + color + '</div>');
    }
    $(window).scroll(function () {
      var $sticky = $('#halo_sticky_addToCart');
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 20);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
            } else {
              $('#recently_bought_list').css("bottom", 80);
            }
          }
        }
      } else {
        $('#halo_sticky_addToCart').removeClass('show_sticky');
        $('.pop-up-option').removeClass('is-open');
        $('body').removeClass('openPopupOption');
        $('.choose_options_add').removeClass('is-active');
        if ($(window).width() > 550) {
          $('#recently_bought_list').css("bottom", 20);
        } else {
          if ($('#halo_sticky_addToCart').length) {
            $('#recently_bought_list').css("bottom", 20);
          } else {
            $('#recently_bought_list').css("bottom", 80);
          }
        }
      }
    });
    $(document).on('click', '.choose_options_add', function (event) {
      $(this).toggleClass('is-active');
      $('.pop-up-option').toggleClass('is-open');
      $('body').addClass('openPopupOption');
    });
    $(document).on('click', '.pop-up-option .modal-close', function (event) {
      $(".pop-up-option").removeClass('is-open');
      $('body').removeClass('openPopupOption');
      $('.choose_options_add').removeClass('is-active');
    });
    window.onload = function () {
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
            } else {
              $('#recently_bought_list').css("bottom", 80);
            }
          }
        }
      }
    };
  }
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloYoutubeVideo */ "./assets/js/theme/halothemes/haloYoutubeVideo.js");
/* harmony import */ var _halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNextProducts */ "./assets/js/theme/halothemes/haloNextProducts.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */














var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    (0,_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_11__["default"])($('.halo-productView'), this.context);
    (0,_halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_9__["default"])($('.halo-productView .productView-image-wrapper'));
    (0,_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_13__["default"])($('.halo-productView'), this.context);
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_6__["default"])();
    this.bulkPricingHandler();
    this.viewingProduct($('.productView-ViewingProduct'));
    this.soldProduct($('.productView-soldProduct'));
    this.countDownProduct($('.productView-countDown'));
    this.productViewShareLink();
    this.compareColors();
    this.toggleTabs();
    this.productCustomTab();
    this.productShippingTab();
    this.showmoreDescription();
    this.checkProduct();
    (0,_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_12__["default"])($('.halo-productView'), this.context);
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_3__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.soldProduct = function soldProduct($wrapper) {
    if ($wrapper.length > 0) {
      var numbersProduct_text = this.context.themeSettings.product_soldProduct_products,
        numbersHours_text = this.context.themeSettings.product_soldProduct_hours,
        soldProductText = this.context.themeSettings.product_soldProduct_text,
        soldProductText2 = this.context.themeSettings.product_soldProduct_hours_text;
      var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
        numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
        numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
        numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
      $wrapper.html('<svg class="icon"><use xlink:href="#icon-fire"/></svg><span class="text">' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + '</span>');
      $wrapper.show();
    }
  };
  _proto.countDownProduct = function countDownProduct($wrapper) {
    if ($wrapper.length > 0) {
      var countDown = $wrapper.data('countdown'),
        countDownDate = new Date(countDown).getTime(),
        seft = $wrapper;
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
          distance = countDownDate - now;
        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.remove();
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(distance % (1000 * 60) / 1000),
            strCountDown = '<svg class="icon"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited-time offers:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + 's</span>';
          seft.html(strCountDown);
        }
      }, 1000);
    }
  };
  _proto.productViewShareLink = function productViewShareLink() {
    var $shareLinkBtn = $('.shareLinkSocial__button');
    var $shareLinkPopup = $('.shareLinkSocial__popup');
    var $shareLinkClose = $('.shareLinkSocial__close');
    var $shareLinkCopy = $('#shareLinkSocial__copy');
    $shareLinkBtn.on('click', function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass('is-open')) {
        $shareLinkPopup.slideUp(400);
        $shareLinkPopup.removeClass('is-open');
      } else {
        $shareLinkPopup.slideDown(400);
        $shareLinkPopup.addClass('is-open');
      }
    });
    $shareLinkClose.on('click', function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass('is-open')) {
        $shareLinkPopup.slideUp(400);
        $shareLinkPopup.removeClass('is-open');
      }
    });
    $shareLinkCopy.on('click', function (e) {
      e.preventDefault();
      var $target = $(e.target);
      $target.select();
      document.execCommand("copy");
    });
  };
  _proto.viewingProduct = function viewingProduct($wrapper) {
    if ($wrapper.length > 0) {
      var viewerText = this.context.themeSettings.product_viewingProduct_text,
        numbersViewer_text = this.context.themeSettings.product_viewingProduct_viewer,
        numbersViewerList = JSON.parse("[" + numbersViewer_text + "]"),
        timeViewer = parseInt(this.context.themeSettings.product_viewingProduct_change) * 1000;
      setInterval(function () {
        var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
        $wrapper.html('<svg class="icon"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
      }, timeViewer);
    }
  };
  _proto.compareColors = function compareColors() {
    var $swatchWrapper = $('.halo-compareColors-swatch'),
      $imageWrapper = $('.halo-compareColors-image'),
      $textWrapper = $('.halo-compareColors-text');
    $('.form-option', $swatchWrapper).on('click', function (event) {
      var $this = $(event.currentTarget);
      $this.toggleClass('show-color');
      var title = $this.find('.form-option-variant').attr('title'),
        id = $this.data('product-swatch-value'),
        $color,
        $color2,
        $color3,
        $img,
        $pattern;
      if ($this.hasClass('show-color')) {
        if ($this.find('.form-option-variant--color').length) {
          $color = $this.find('.form-option-variant--color').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color" style="' + $color + ';"></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color2').length) {
          $color = $this.find('.form-option-variant--color2 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color2 span:nth-child(2)').attr('style');
          $('.halo-compareColors-image').append('<div class="item item-color item-' + id + '"><span class="color color2"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--color3').length) {
          $color = $this.find('.form-option-variant--color3 span:nth-child(1)').attr('style');
          $color2 = $this.find('.form-option-variant--color3 span:nth-child(2)').attr('style');
          $color3 = $this.find('.form-option-variant--color3 span:nth-child(3)').attr('style');
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color color3"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span><span style="' + $color3 + ';"></span></span><span class="title">' + title + '</span></div>');
        } else if ($this.find('.form-option-variant--pattern').length) {
          $img = $this.find('.form-option-variant--pattern').attr('style');
          $pattern = $this.find('.form-option-variant--pattern').attr('data-pattern');
          $imageWrapper.append('<div class="item item-partern item-' + id + '"><span class="image"><img src=' + $pattern + ' alt=' + title + ' title=' + title + '></span><span class="title">' + title + '</span></div>');
        }
      } else {
        $('.item-' + id + '', $imageWrapper).remove();
      }
      if ($imageWrapper.children().length > 0) {
        $textWrapper.hide();
      } else {
        $textWrapper.show();
      }
      if ($(window).width() >= 1025) {
        var el = document.getElementById('color-swatch-image');
        new sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
          animation: 150
        });
      }
    });
  };
  _proto.toggleTabs = function toggleTabs() {
    $('.productView-tab [data-collapsible]').on('click', function (event) {
      var $target = $(event.currentTarget);
      if ($target.hasClass('is-open')) {
        $target.parent('.toggle-title').siblings('.toggle-content').slideDown("slow");
      } else {
        $target.parent('.toggle-title').siblings('.toggle-content').slideUp("slow");
      }
    });
  };
  _proto.productCustomTab = function productCustomTab() {
    if (this.context.themeSettings.show_product_details_tabs == true) {
      if (this.context.themeSettings.show_custom_tab == true) {
        if (this.context.themeSettings.show_custom_tab_type == "all") {
          var url = this.context.themeSettings.show_custom_tab_link;
          var option = {
            template: 'halothemes/page/halo-page-template'
          };
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, option, function (err, response) {
            $(response).appendTo('#tab-custom-mobile');
            if ($('.productView-tab #tab-custom-mobile').text().trim() == '') {
              $('.productView-tab #tab-custom').hide();
            }
          });
          $('#tab-description').find('[data-custom-tab]').remove();
        } else if (this.context.themeSettings.show_custom_tab_type == "custom") {
          $('#tab-description').find('[data-custom-tab]').appendTo('#tab-custom-mobile');
        }
      }
    } else {
      $('.productView-description').find('[data-custom-tab]').remove();
    }
  };
  _proto.productShippingTab = function productShippingTab() {
    if (this.context.themeSettings.show_product_details_tabs == true) {
      if (this.context.themeSettings.show_shipping_tab == true) {
        if (this.context.themeSettings.show_shipping_tab_type == "all") {
          var url = this.context.themeSettings.show_shipping_tab_link;
          var option = {
            template: 'halothemes/page/halo-page-template'
          };
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, option, function (err, response) {
            $(response).appendTo('#tab-shipping-mobile');
            if ($('.productView-tab #tab-shipping-mobile').text().trim() == '') {
              $('.productView-tab #tab-shipping').hide();
            }
          });
          $('#tab-description').find('[data-shipping-tab]').remove();
        } else if (this.context.themeSettings.show_shipping_tab_type == "custom") {
          $('#tab-description').find('[data-shipping-tab]').appendTo('#tab-shipping-mobile');
        }
      }
    } else {
      $('.productView-description').find('[data-shipping-tab]').remove();
    }
  };
  _proto.showmoreDescription = function showmoreDescription() {
    var showMorebtn = $('#tab-descriptionShowmore'),
      descMobile = $('#tab-description-mobile'),
      textShowMore = showMorebtn.find('.button').data('show-more-text'),
      textShowLess = showMorebtn.find('.button').data('show-less-text');
    showMorebtn.find('.button').on('click', function (event) {
      event.preventDefault();
      if (showMorebtn.hasClass("less")) {
        showMorebtn.removeClass("less").addClass('show');
        showMorebtn.find('.button').text(textShowMore);
        descMobile.css('max-height', '300px');
      } else {
        showMorebtn.removeClass('show').addClass("less");
        descMobile.css('max-height', 'unset');
        showMorebtn.find('.button').text(textShowLess);
      }
    });
  };
  _proto.checkProduct = function checkProduct() {
    var relatedProducts = $('#halo-related-products'),
      similarProducts = $('#halo-similar-products');
    if (!relatedProducts.find('.slick-track').html().length) {
      relatedProducts.hide();
    }
    if (!similarProducts.find('.slick-track').html().length) {
      similarProducts.hide();
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.announceInputErrorMessage
    });
    this.$reviewsContent = $('#product-reviews');
    this.$reviewsContent2 = $('#tab-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $(document).on('click', '.review-link a', function (event) {
      event.preventDefault();
      $('.is-open[data-collapsible]', $('.tab-content')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      $('[href="#tab-reviews-mobile"]', $('.productView-tab:not(.productView-tab-2)')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      if ($(window).width() < 1025) {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent2.offset().top - $('.header').height()
        }, 700);
      } else {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
        }, 700);
      }
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLEdBQUcsRUFBSztFQUMvQixJQUFNQyxDQUFDLEdBQUcsSUFBSUMsU0FBUyxDQUFDLENBQUM7RUFDekIsT0FBT0QsQ0FBQyxDQUFDRSxlQUFlLENBQUNILEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXO0FBQy9ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1I4QztBQUU2QjtBQUNSO0FBRXBFLDZCQUFlLG9DQUFTTSxNQUFNLEVBQUVDLE9BQU8sRUFBRTtFQUNyQyxJQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDRyxTQUFTLENBQUM7SUFDNUNDLFVBQVUsR0FBR0MsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ3hDQyxPQUFPLEdBQUdELENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztJQUNwQ0UsV0FBVyxHQUFHRCxPQUFPLENBQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztFQUVwRCxJQUFNQyxLQUFLLEdBQUdkLHlEQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXZDLElBQUllLFFBQVEsR0FBR1YsT0FBTyxDQUFDVyxLQUFLO0VBRTVCQyxVQUFVLENBQUMsQ0FBQztFQUVaUCxDQUFDLENBQUNRLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUNyREEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUV0QixJQUFJQyxPQUFPLEdBQUdaLENBQUMsQ0FBQ1UsS0FBSyxDQUFDRyxhQUFhLENBQUM7SUFFcENiLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDYyxHQUFH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LENBQUM7SUFDckMsSUFBSSxDQUFDd2UsWUFBWSxDQUFDRyxjQUFjLENBQUN4ZSxRQUFRLENBQUMsV0FBVyxDQUFDO0VBQzFELENBQUM7RUFBQXlWLE1BQUEsQ0FFRDZJLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNGLE9BQU8sQ0FBQzdlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDZ2YsY0FBYyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUFBLE9BQUFWLFlBQUE7QUFBQTtBQUdVLFNBQVN4SixZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTW1LLFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBRy9mLENBQUMsWUFBVThmLFNBQVMsTUFBRyxDQUFDO0VBRTlDQyxhQUFhLENBQUNoZSxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFcUMsT0FBTyxFQUFLO0lBQ25DLElBQU0yYixHQUFHLEdBQUdoZ0IsQ0FBQyxDQUFDcUUsT0FBTyxDQUFDO0lBQ3RCLElBQU00YixhQUFhLEdBQUdELEdBQUcsQ0FBQ25jLElBQUksQ0FBQ2ljLFNBQVMsQ0FBQyxZQUFZWCxZQUFZO0lBRWpFLElBQUljLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDbmMsSUFBSSxDQUFDaWMsU0FBUyxFQUFFLElBQUlYLFlBQVksQ0FBQ2EsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9zYWZlLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvTmV4dFByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcGFyc2VzIEhUTUwgZW50aXRpZXMgaW4gc3RyaW5nc1xuICogQHBhcmFtIHN0cjogU3RyaW5nXG4gKiBAcmV0dXJucyBTdHJpbmdcbiovXG5leHBvcnQgY29uc3Qgc2FmZVN0cmluZyA9IChzdHIpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHJldHVybiBkLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKS5ib2R5LnRleHRDb250ZW50O1xufTtcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcgZnJvbSAnLi9oYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGhpc1Byb3VjdElkID0gcGFyc2VJbnQoY29udGV4dC5wcm9kdWN0SWQpLFxuICAgICAgICAkcmVsYXRlVGFiID0gJCgnI2hhbG8tcmVsYXRlZC1wcm9kdWN0cycpLFxuICAgICAgICAkYnVuZGxlID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJyksXG4gICAgICAgICRidW5kbGVMaXN0ID0gJGJ1bmRsZS5maW5kKCcuaGFsby1wcm9kdWN0LWxpc3QnKTtcblxuICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXTtcblxuICAgIHZhciBjdXJyZW5jeSA9IGNvbnRleHQubW9uZXk7XG5cbiAgICBzaG93QnVuZGxlKCk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLm5vdCgkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgaWYgKCEkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgICAgICR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbG8tb3B0aW9uLWNsb3NlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuaGFsby1kZXRhaWwtY2hlY2tib3gnLCBldmVudCA9PiB7XG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGlkID0gJHRhcmdldC5hdHRyKCdpZCcpLnJlcGxhY2UoJ2ZidF9wcm9kdWN0JywnJyksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKTtcblxuICAgICAgICBpZigkdGFyZ2V0LmlzKCc6Y2hlY2tlZCcpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxQcmljZSgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNoYWxvLWFkZEFsbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkYnVuZGxlKTtcbiAgICAgICAgdmFyIGFyclBybyA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgICAgICAgIGlmICgkKHZhbCkuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICBhcnJQcm8ucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2hlY2sgPSBjaGVja1Byb2R1Y3QoJGZvcm0sIGFyclBybyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2spIHtcbiAgICAgICAgICAgIGlmIChhcnJQcm8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gYXJyUHJvLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICRidW5kbGUuZmluZCgnLmxvYWRpbmdPdmVybGF5Jykuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0KCRmb3JtLCAwLCBhcnJQcm8sIGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gJ1BsZWFzZSBtYWtlIHN1cmUgYWxsIG9wdGlvbnMgaGF2ZSBiZWVuIGZpbGxlZCBpbi4nO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgdG1wLmlubmVySFRNTCA9IGVycm9yTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2hvd0J1bmRsZSgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiAnaGFsb3RoZW1lcy9wcm9kdWN0L2hhbG8tYnVuZGxlLXByb2R1Y3RzLXRtcCcsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1idW5kbGUtcHJvZHVjdHMtb3B0aW9ucycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdmFyIHByb2RCdW5kbGVJZCA9IFtdLFxuICAgICAgICAgICAgdG90YWxCbG9jayA9ICcnO1xuXG4gICAgICAgIGZpcnN0SXRlbSgpO1xuXG4gICAgICAgIGlmKCRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxCbG9jayA9ICc8ZGl2IGNsYXNzPVwiaGFsby1wcm9kdWN0LXRvdGFsXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNlY29uZGFyeSBoYWxvLXByb2R1Y3QtdG90YWwtYnV0dG9uXCIgZGlzYWJsZWQgaHJlZj1cIiNcIj5Mb2cgaW4gZm9yIHByaWNpbmc8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsQmxvY2sgPSAnPGRpdiBjbGFzcz1cImhhbG8tcHJvZHVjdC10b3RhbFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+PHNwYW4+VG90YWwgcHJpY2U6PC9zcGFuPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXNlY29uZGFyeSBoYWxvLXByb2R1Y3QtdG90YWwtYnV0dG9uXCIgaWQ9XCJoYWxvLWFkZEFsbFwiIGhyZWY9XCIjXCI+QWRkIEFsbCBUbyBDYXJ0PC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5maW5kKCcuYnVuZGxlLXByb2R1Y3QtcmlnaHQnKS5hcHBlbmQodG90YWxCbG9jayk7XG5cbiAgICAgICAgJC5lYWNoKGNvbnRleHQucHJvZHVjdEN1c3RvbUZpZWxkcywgZnVuY3Rpb24oaW5kZXgsIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09ICdfX2J1bmRsZWlkJykge1xuICAgICAgICAgICAgICAgIHByb2RCdW5kbGVJZCA9IEpTT04ucGFyc2UoJ1snK29iai52YWx1ZSsnXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9kQnVuZGxlSWQgPSAkLmdyZXAocHJvZEJ1bmRsZUlkLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPSB0aGlzUHJvdWN0SWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkYnVuZGxlLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtID0gMCxcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG5cbiAgICAgICAgICAgICRyZWxhdGVUYWIuZmluZCgnLmNhcmQnKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBcIlwiXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcElkID0gJCh2YWwpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5pbmRleCA9PSBpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09ICRyZWxhdGVUYWIuZmluZCgnLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgkYnVuZGxlLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBudW0gPSAwLFxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgICAgICAgICBsaXN0RmlsdGVyID0gJC51bmlxdWUocHJvZEJ1bmRsZUlkKTtcblxuICAgICAgICAgICAgJC5lYWNoKHByb2RCdW5kbGVJZCwgZnVuY3Rpb24oaSwgdmFsKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe2k6aSwgZGF0YTogXCJcIn0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9IHByb2RCdW5kbGVJZFtpXTtcblxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09IHByb2RCdW5kbGVJZC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0SXRlbSgpe1xuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1GaXJzdCcpLFxuICAgICAgICAgICAgcElkID0gZmlyc3RJdGVtLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIGZvcm0gPSBmaXJzdEl0ZW0uZmluZCgnZm9ybScpLFxuICAgICAgICAgICAgaGFzT3B0aW9ucyA9IGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoLFxuICAgICAgICAgICAgaGFzRGVmYXVsdE9wdGlvbnMgPSBmb3JtLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldyhmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dMaXN0KGxpc3Qpe1xuICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVsZW1lbnQuZGF0YTtcblxuICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UgIT0gJycpe1xuICAgICAgICAgICAgICAgICRidW5kbGVMaXN0LmFwcGVuZChyZXNwb25zZS5pdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcHRpb25zLnRyaW0oKSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwSWQgPSAkKHJlc3BvbnNlLml0ZW0pLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0gPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHBJZCArICdcIl0gZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmFwcGVuZChyZXNwb25zZS5vcHRpb25zKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkKHJlc3BvbnNlLm9wdGlvbnMpLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgJGZvcm0uc2VyaWFsaXplKCksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZSAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcygkZm9ybSwgYXR0cmlidXRlc0RhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2R1Y3RPcHRpb25zKCk7XG4gICAgICAgIHNob3dTbGlja1NsaWRlcigkYnVuZGxlTGlzdCk7XG5cbiAgICAgICAgaWYoISRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5yZW1vdmVDbGFzcygnaGFsby1ibG9jay1kaXNhYmxlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1NsaWNrU2xpZGVyKHdyYXApe1xuICAgICAgICBpZih3cmFwLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgd3JhcC5zbGljayh7XG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQcm9kdWN0KGZvcm0sIGFyclBybykge1xuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyUHJvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXSxcbiAgICAgICAgICAgICAgICAkZm9ybSA9ICQoZm9ybVtrXSk7XG5cbiAgICAgICAgICAgIGlmICgkZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRmb3JtKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tCZWZvcmVBZGQoJGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZSxcbiAgICAgICAgICAgIGF0dCA9IFwiXCI7XG5cbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ3NlbGVjdCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDpyYWRpbywgaW5wdXQ6Y2hlY2tib3gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKGVsZW1lbnQpLmF0dHIoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgYXR0ID0gJChlbGVtZW50KS5hdHRyKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCwgaykge1xuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9kID0gYXJyUFtpXTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtwcm9kXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICBrID0gayAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkYnVuZGxlLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZFRvQ2FydEFjdGlvbiA9PT0gJ3NpZGViYXInKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY29tbW9uL2NhcnQtcHJldmlldydcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2FydERyb3Bkb3duID0gJCgnI2hhbG8tY2FydC1zaWRlYmFyIC5oYWxvLXNpZGViYXItd3JhcHBlcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2FydExvYWRpbmcgPSAkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnb3BlbkNhcnRTaWRlYmFyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGNhcnREcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKCRjYXJ0TG9hZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY2FydERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY2FydExvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQocmVzcG9uc2UpLmZpbmQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJykuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG8oY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclAsIGspO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1J1bm5pbmdJbklmcmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAoaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdGFsUHJpY2UoKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IDAsXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICBzeW1ib2xDaGFuZ2UsXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzLFxuICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvcixcbiAgICAgICAgICAgIHN5bWJvbExvY2F0aW9uLFxuICAgICAgICAgICAgY3VycixcbiAgICAgICAgICAgIHRva2VuMSxcbiAgICAgICAgICAgIHRva2VuMixcbiAgICAgICAgICAgIGxlbmd0aDtcblxuICAgICAgICBkZWNpbWFsUGxhY2VzID0gY3VycmVuY3kuZGVjaW1hbF9wbGFjZXM7XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBjdXJyZW5jeS5kZWNpbWFsX3Rva2VuO1xuICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSBjdXJyZW5jeS50aG91c2FuZHNfdG9rZW47XG4gICAgICAgIHN5bWJvbExvY2F0aW9uID0gY3VycmVuY3kuY3VycmVuY3lfbG9jYXRpb247XG4gICAgICAgIHN5bWJvbCA9IGN1cnJlbmN5LmN1cnJlbmN5X3Rva2VuO1xuXG4gICAgICAgICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbS5pc0NoZWNrZWQnKS5lYWNoKChpbmRleCwgdmFsKSA9PiB7XG4gICAgICAgICAgICB2YXIgcHJpY2UgPSBwYXJzZUZsb2F0KCQodmFsKS5maW5kKCdbZGF0YS1wcmljZS12YWx1ZV0nKS5hdHRyKCdkYXRhLXByaWNlLXZhbHVlJykpO1xuXG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgcHJpY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aFRheCcsICRzY29wZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyID0gJCgnLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXByaWNlID4gLnByaWNlLXNlY3Rpb24gPiAucHJpY2UucHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLmRhdGEoJ3ZhbHVlLXByaWNlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdXJyID0gJCgnLnByb2R1Y3RWaWV3LXByb2R1Y3QgLnByb2R1Y3RWaWV3LXByaWNlID4gLnByaWNlLXNlY3Rpb24gPiAucHJpY2UucHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLmRhdGEoJ3ZhbHVlLXByaWNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzeW1ib2xDaGFuZ2UgPSBjdXJyLnJlcGxhY2UoL1swLTldL2csIFwiXCIpLnJlcGxhY2UoXCIuXCIsIFwiXCIpLnJlcGxhY2UoXCIsXCIsIFwiXCIpO1xuXG4gICAgICAgIGlmKHN5bWJvbCAhPSBzeW1ib2xDaGFuZ2Upe1xuICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9sQ2hhbmdlO1xuICAgICAgICAgICAgdG9rZW4xID0gKGN1cnIuaW5kZXhPZignLicpKTtcbiAgICAgICAgICAgIHRva2VuMiA9IChjdXJyLmluZGV4T2YoJywnKSk7XG4gICAgICAgICAgICBsZW5ndGggPSBjdXJyLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgIGlmIChjdXJyLmluZGV4T2Yoc3ltYm9sKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbExvY2F0aW9uID0gY3Vyci5pbmRleE9mKHN5bWJvbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0b2tlbjEgPCB0b2tlbjIpIHtcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSAnLic7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9ICcsJztcblxuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSAwIHx8IHN5bWJvbExvY2F0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMiAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSAnLCc7XG4gICAgICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvciA9ICcuJztcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sTG9jYXRpb24gPT0gMCB8fCBzeW1ib2xMb2NhdGlvbiA9PSBcImxlZnRcIikge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gbGVuZ3RoIC0gdG9rZW4xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjEgLSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRvdGFsID09IDApe1xuICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcjaGFsby1hZGRBbGwnKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkYnVuZGxlLmZpbmQoJyNoYWxvLWFkZEFsbCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG90YWwgPSBmb3JtYXRNb25leSh0b3RhbCwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFNlcGFyYXRvciwgdGhvdXNhbmRzU2VwYXJhdG9yKTtcblxuICAgICAgICBpZiAoc3ltYm9sTG9jYXRpb24gPT0gXCJsZWZ0XCIgfHwgc3ltYm9sTG9jYXRpb24gPT0gMCl7XG4gICAgICAgICAgICB0b3RhbCA9IHN5bWJvbCArIHRvdGFsO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgc3ltYm9sO1xuICAgICAgICB9XG5cbiAgICAgICAgJGJ1bmRsZS5maW5kKCcuaGFsby1wcm9kdWN0LXRvdGFsIC5wcmljZScpLmh0bWwodG90YWwpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbmV5KG4sIGMsIGQsIHQpIHtcbiAgICAgICAgdmFyIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgICAgICB0ID0gdCA9PSB1bmRlZmluZWQgPyBcIixcIiA6IHQsXG4gICAgICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICAgICAgaiA9IChqID0gaS5sZW5ndGgpID4gMyA/IGogJSAzIDogMDtcblxuICAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm9kdWN0T3B0aW9ucygpIHtcbiAgICAgICAgaWYoISRidW5kbGUuaGFzQ2xhc3MoJ2hhbG8tYnVuZGxlLWxvZ2luJykpe1xuICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCdmb3JtJywgJGJ1bmRsZSksXG4gICAgICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50ID0gJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LCBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgc2V0UHJvZHVjdFZhcmlhbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXSBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKSwgKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSB2YWx1ZS5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25UaXRsZSA9IG9wdGlvbkxhYmVsLnNwbGl0KCc6JylbMF0udHJpbSgpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSBvcHRpb25MYWJlbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICBpZiAoKHR5cGUgPT09ICdpbnB1dC1maWxlJyB8fCB0eXBlID09PSAnaW5wdXQtdGV4dCcgfHwgdHlwZSA9PT0gJ2lucHV0LW51bWJlcicpICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScgJiYgdmFsdWUucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYXRpc2ZpZWQgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5ldmVyeSgoc2VsZWN0KSA9PiBzZWxlY3Quc2VsZWN0ZWRJbmRleCAhPT0gMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNTYXRpc2ZpZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLm1hcCgoeCkgPT4geC52YWx1ZSkuam9pbignLScpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7ZGF0ZVN0cmluZ31gKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gdmFsdWUucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdC5zZWxlY3RlZEluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke3NlbGVjdC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLmlubmVyVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQoc2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzd2F0Y2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodmFsdWUuY2hpbGRyZW5bMF0pLmZpbmQoJ1tkYXRhLW9wdGlvbi12YWx1ZV0nKS50ZXh0KGxhYmVsLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICBpZiAoJGNoYW5nZWRPcHRpb24uYXR0cigndHlwZScpID09PSAnZmlsZScgfHwgd2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCdpZCcpID09PSAnZmJ0X3Byb2R1Y3QnICsgcHJvZHVjdElkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG4gICAgICAgICAgICBzaG93UHJvZHVjdEltYWdlKHByb2R1Y3RJZCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlVmlldygkZm9ybSwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhLCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQpO1xuXG4gICAgICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICAgICAgdG90YWxQcmljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKCRzY29wZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCAkc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSkge1xuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUudG9nZ2xlT3B0aW9uKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBkYXRhKSB7XG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QoZGF0YS5pbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBkYXRhLmltYWdlLmRhdGEsIHsgJzF4JzogY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3RnYWxsZXJ5X3NpemUgfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgICQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLmZpbmQoJ2ltZycpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdzcmNzZXQnOiBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgJ2RhdGEtc3Jjc2V0JzogJCh0aGlzKS5hdHRyKCdzcmNzZXQnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmlldygkc2NvcGUsIGRhdGEsIGNvbnRlbnQgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IGdldFZpZXdNb2RlbCgkc2NvcGUpO1xuXG4gICAgICAgIGlmIChfLmlzTnVtYmVyKGRhdGEuc3RvY2spKSB7XG4gICAgICAgICAgICBpZigoZGF0YS5zdG9jayA8PSBwYXJzZUludChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb19zdG9ja19sZXZlbF9saW1pdCkpICYmIChkYXRhLnN0b2NrID4gMCkpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdFdyYXBwZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHN0b2NrTGVmdC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlLCAkc2NvcGUpO1xuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XG4gICAgICAgICAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpLFxuICAgICAgICAgICAgcHJvZHVjdCA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLFxuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94ID0gcHJvZHVjdC5maW5kKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKTtcblxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgcHJvZHVjdC5yZW1vdmVDbGFzcygnaXNDaGVja2VkIGhhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIHZhciBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRzY29wZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKCRzY29wZSwgZGF0YSkge1xuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJHNjb3BlKS52YWwoKSxcbiAgICAgICAgICAgIHByb2R1Y3QgPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKSxcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveCA9IHByb2R1Y3QuZmluZCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94Jyk7XG5cbiAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgIHByb2R1Y3QucmVtb3ZlQ2xhc3MoJ2lzQ2hlY2tlZCBoYXNPcHRpb25zLS1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2lzQ2hlY2tlZCcpO1xuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgaWYgKCRzY29wZS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJHByaWNlV2l0aFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZURhdGE6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCdbZGF0YS1wcmljZS12YWx1ZV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICR3ZWlnaHQ6ICQoJy5wcm9kdWN0Vmlldy1pbmZvIFtkYXRhLXByb2R1Y3Qtd2VpZ2h0XScsICRzY29wZSksXG4gICAgICAgICAgICAkaW5jcmVtZW50czogJCgnLmZvcm0tZmllbGQtLWluY3JlbWVudHMgOmlucHV0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICRhZGRUb0NhcnQ6ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHdpc2hsaXN0VmFyaWF0aW9uOiAkKCdbZGF0YS13aXNobGlzdC1hZGRdIFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRzdG9ja0xlZnQ6ICQoJ1tkYXRhLXN0b2NrLWxlZnRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRzdG9ja0xlZnRXcmFwcGVyOiAkKCcucHJvZHVjdFZpZXctb3B0aW9uc1N0b2NrJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcbiAgICAgICAgICAgICR1cGM6ICQoJ1tkYXRhLXByb2R1Y3QtdXBjXScpLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93TWVzc2FnZUJveChtZXNzYWdlLCAkc2NvcGUpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScsICRzY29wZSk7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQobWVzc2FnZSk7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlRGF0YS4kZGl2LmF0dHIoJ2RhdGEtcHJpY2UtdmFsdWUnLCBwcmljZS53aXRoX3RheC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZURhdGEuJGRpdi5hdHRyKCdkYXRhLXByaWNlLXZhbHVlJywgcHJpY2Uud2l0aG91dF90YXgudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY29udGV4dCkge1xuICAgIGlmICgkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzJykubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGNvbnRleHQudG9rZW47XG4gICAgICAgIGNvbnN0IGN1ckNvZGUgPSAkKCcuYm9keScpLmRhdGEoJ2N1cnJlbmN5LWNvZGUnKTtcbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBuZXh0SWQgPSBwcm9kdWN0SWQgKyAxLFxuICAgICAgICAgICAgcHJldklkID0gcHJvZHVjdElkIC0gMSxcbiAgICAgICAgICAgIG5leHRMaW5rLCBwcmV2TGluaywgbGlzdDtcblxuICAgICAgICBjb25zdCAkcHJvZFdyYXAgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtbW9kYWwnKSxcbiAgICAgICAgICAgICRwcm9kSWNvbnMgPSAkKCcucHJvZHVjdFZpZXctbmV4dFByb2R1Y3RzIC5uZXh0LXByZXYtaWNvbnMnKTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRQcm9kdWN0KGFycikge1xuICAgICAgICAgIHJldHVybiBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgICBxdWVyeSBNeVF1ZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyAoZW50aXR5SWRzOiBbYCthcnIrYF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Q6IG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uUHJvZHVjdEZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5IChjdXJyZW5jeUNvZGU6IGArY3VyQ29kZStgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xQbGFjZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQgUHJvZHVjdEZpZWxkcyBvbiBQcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc3MHB4OiB1cmwod2lkdGg6IDcwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQgTW9uZXlGaWVsZHMgb24gTW9uZXkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfSksXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcmV2SWQgIT0gdW5kZWZpbmVkICYmIG5leHRJZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxpc3QgPSBbcHJldklkLCBuZXh0SWRdO1xuXG4gICAgICAgICAgICBnZXRQcm9kdWN0KGxpc3QpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvZHVjdChkYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMsIGRhdGEuc2l0ZS5jdXJyZW5jeS5kaXNwbGF5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0TW9uZXkobiwgYywgZCwgdCkge1xuICAgICAgICAgICAgdmFyIGMgPSBpc05hTihjID0gTWF0aC5hYnMoYykpID8gMiA6IGMsXG4gICAgICAgICAgICAgICAgZCA9IGQgPT0gdW5kZWZpbmVkID8gXCIuXCIgOiBkLFxuICAgICAgICAgICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgICAgICAgICBzID0gbiA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgaSA9IFN0cmluZyhwYXJzZUludChuID0gTWF0aC5hYnMoTnVtYmVyKG4pIHx8IDApLnRvRml4ZWQoYykpKSxcbiAgICAgICAgICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gcyArIChqID8gaS5zdWJzdHIoMCwgaikgKyB0IDogXCJcIikgKyBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgXCIkMVwiICsgdCkgKyAoYyA/IGQgKyBNYXRoLmFicyhuIC0gaSkudG9GaXhlZChjKS5zbGljZSgyKSA6IFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdChwcm9kdWN0LCBjdXJEaXNwbGF5KSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAkLmVhY2gocHJvZHVjdCwgKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wgPSBjdXJEaXNwbGF5LnN5bWJvbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudCA9IGN1ckRpc3BsYXkuc3ltYm9sUGxhY2VtZW50LnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW4gPSBjdXJEaXNwbGF5LmRlY2ltYWxUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBjdXJEaXNwbGF5LmRlY2ltYWxQbGFjZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aG91c2FuZHNUb2tlbiA9IGN1ckRpc3BsYXkudGhvdXNhbmRzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSwgcHJpY2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX2NhcmRfdGl0bGUgPT0gJ2VsbGlwc2lzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnPGEgaHJlZj1cIicraXRlbS5wYXRoKydcIiBjbGFzcz1cImNhcmQtZWxsaXBzaXNcIiBzdHlsZT1cIi13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XCI+JytpdGVtLm5hbWUrJzwvYT4nOyAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gJzxhIGhyZWY9XCInK2l0ZW0ucGF0aCsnXCI+JytpdGVtLm5hbWUrJzwvYT4nO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJy5ib2R5JykuaGFzQ2xhc3MoJ2lzLWxvZ2luJykgfHwgY29udGV4dC50aGVtZVNldHRpbmdzLnJlc3RyaWN0X3RvX2xvZ2luICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUgPCBpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1heC52YWx1ZSAmJiBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJpY2VfcmFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VNaW4gPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZU1heCA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1heC52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBwcmljZS1ub25lXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZU1pbisnIC0gJytwcmljZU1heCsnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VEZWYgPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMucHJpY2UudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5yZXRhaWxQcmljZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5iYXNlUHJpY2UudmFsdWUgPiBpdGVtLnByaWNlcy5wcmljZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VCYXMgPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMuYmFzZVByaWNlLnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj4nK3ByaWNlQmFzKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmljZXMucmV0YWlsUHJpY2UudmFsdWUgPiBpdGVtLnByaWNlcy5wcmljZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VSZXQgPSAoc3ltYm9sUGxhY2VtZW50ID09IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIikgKyAoZm9ybWF0TW9uZXkoaXRlbS5wcmljZXMucmV0YWlsUHJpY2UudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+JytwcmljZVJldCsnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBwcmljZS1ub25lXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxwIHRyYW5zbGF0ZT5Mb2cgaW4gZm9yIHByaWNpbmc8L3A+JztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxfY2FyZCA9ICc8ZGl2IGNsYXNzPVwiY2FyZFwiIGRhdGEtcHJvZHVjdC1pZD1cIicraXRlbS5lbnRpdHlJZCsnXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZC1saW5rXCIgaHJlZj1cIicraXRlbS5wYXRoKydcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCInK2l0ZW0uZGVmYXVsdEltYWdlLmltZzcwcHgrJ1wiIGFsdD1cIicraXRlbS5uYW1lKydcIiB0aXRsZT1cIicraXRlbS5uYW1lKydcIiAvPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj4nK3RpdGxlKyc8L2g0PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXByaWNlXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByaWNlXCI+JytwcmljZSsnPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5lbnRpdHlJZCA9PSBwcmV2SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLmF0dHIoJ2hyZWYnLCBpdGVtLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLnByZXYtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQoaHRtbF9jYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5lbnRpdHlJZCA9PSBuZXh0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0ucGF0aCAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5hdHRyKCdocmVmJywgaXRlbS5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmVDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kV3JhcC5maW5kKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYXBwZW5kKGh0bWxfY2FyZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcubmV4dC1pY29uJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJHByb2RJY29ucy5vbignbW91c2VvdmVyJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgJHByb2RXcmFwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZWxlYXZlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgJHByb2RXcmFwLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLm5leHQtaWNvbicsICRwcm9kSWNvbnMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdkaXNhYmxlJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjcHJldi1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykuYWRkQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcucHJldi1pY29uJywgJHByb2RJY29ucykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5hZGRDbGFzcygnaXMtc2hvdycpOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjbmV4dC1wcm9kdWN0LW1vZGFsJykucmVtb3ZlQ2xhc3MoJ2lzLXNob3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHByb2RXcmFwLm9uKCdtb3VzZW92ZXInLCBldmVudCA9PiB7XG4gICAgICAgICAgICAkcHJvZFdyYXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCBjb250ZXh0KXtcbiAgICBpZiAoJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLmxlbmd0aCkge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcpLm9mZnNldCgpLFxuICAgICAgICAgICAgaF9zdGF0YyA9ICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDtcblxuICAgICAgICBpZiAoJCgnLnByb2R1Y3RWaWV3LWRldGFpbHMgLnByb2R1Y3RWaWV3LW9wdGlvbnMgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0nKS5sZW5ndGgpIHsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBjb2xvciA9ICQoJy5wcm9kdWN0Vmlldy1kZXRhaWxzIC5wcm9kdWN0Vmlldy1vcHRpb25zIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic3dhdGNoXCJdIC5mb3JtLW9wdGlvbiA+IHNwYW4nKS5hdHRyKCd0aXRsZScpO1xuICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCAub3B0aW9uLXZhbHVlJykuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImNvbG9yLW5hbWVcIj4gLScgKyAnICcgKyBjb2xvciArICc8L2Rpdj4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0ICRzdGlja3kgPSAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0Jyk7XG5cbiAgICAgICAgICAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IHNjcm9sbFRvcCArIDQwMCl7XG5cbiAgICAgICAgICAgICAgICBpZighJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgMjApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgODApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNle1xuXG4gICAgICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLnJlbW92ZUNsYXNzKCdzaG93X3N0aWNreScpO1xuICAgICAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5Qb3B1cE9wdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgMjApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCA4MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5jaG9vc2Vfb3B0aW9uc19hZGQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5wb3AtdXAtb3B0aW9uJykudG9nZ2xlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3BlblBvcHVwT3B0aW9uJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsJy5wb3AtdXAtb3B0aW9uIC5tb2RhbC1jbG9zZScsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICQoXCIucG9wLXVwLW9wdGlvblwiKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuUG9wdXBPcHRpb24nKTtcbiAgICAgICAgICAgICQoJy5jaG9vc2Vfb3B0aW9uc19hZGQnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVG9wICsgNDAwKXtcbiAgICAgICAgICAgICAgICBpZighJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmhhc0NsYXNzKCdzaG93X3N0aWNreScpKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmFkZENsYXNzKCdzaG93X3N0aWNreScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDU1MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgNDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKS5vdXRlckhlaWdodCgpICsgMzApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgODApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBTb3J0YWJsZSBmcm9tICdzb3J0YWJsZWpzJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgaGFsb1lvdXR1YmVDYXJvdXNlbCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1lvdXR1YmVWaWRlbyc7XG5pbXBvcnQgaGFsb05leHRQcm9kdWN0cyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb05leHRQcm9kdWN0cyc7XG5pbXBvcnQgaGFsb05vdGlmeU1lIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvTm90aWZ5TWUnO1xuaW1wb3J0IGhhbG9TdGlja3lBZGRUb0NhcnQgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnQnO1xuaW1wb3J0IGhhbG9CdW5kbGVQcm9kdWN0cyBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcbiAgICAgICAgaGFsb05leHRQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgICAgICBoYWxvTm90aWZ5TWUoJCgnLmhhbG8tcHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKCcuaGFsby1wcm9kdWN0VmlldyAucHJvZHVjdFZpZXctaW1hZ2Utd3JhcHBlcicpKTtcbiAgICAgICAgaGFsb0J1bmRsZVByb2R1Y3RzKCQoJy5oYWxvLXByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscyA9IG5ldyBQcm9kdWN0RGV0YWlscygkKCcucHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0LCB3aW5kb3cuQkNEYXRhLnByb2R1Y3RfYXR0cmlidXRlcyk7XG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICB2aWRlb0dhbGxlcnkoKTtcblxuICAgICAgICB0aGlzLmJ1bGtQcmljaW5nSGFuZGxlcigpO1xuICAgICAgICB0aGlzLnZpZXdpbmdQcm9kdWN0KCQoJy5wcm9kdWN0Vmlldy1WaWV3aW5nUHJvZHVjdCcpKTtcbiAgICAgICAgdGhpcy5zb2xkUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctc29sZFByb2R1Y3QnKSk7XG4gICAgICAgIHRoaXMuY291bnREb3duUHJvZHVjdCgkKCcucHJvZHVjdFZpZXctY291bnREb3duJykpO1xuICAgICAgICB0aGlzLnByb2R1Y3RWaWV3U2hhcmVMaW5rKCk7XG4gICAgICAgIHRoaXMuY29tcGFyZUNvbG9ycygpO1xuICAgICAgICB0aGlzLnRvZ2dsZVRhYnMoKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Q3VzdG9tVGFiKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdFNoaXBwaW5nVGFiKCk7XG4gICAgICAgIHRoaXMuc2hvd21vcmVEZXNjcmlwdGlvbigpO1xuICAgICAgICB0aGlzLmNoZWNrUHJvZHVjdCgpO1xuXG4gICAgICAgIGhhbG9TdGlja3lBZGRUb0NhcnQoJCgnLmhhbG8tcHJvZHVjdFZpZXcnKSwgdGhpcy5jb250ZXh0KTtcblxuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuYXJpYURlc2NyaWJlUmV2aWV3SW5wdXRzKCRyZXZpZXdGb3JtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHJldmlld0Zvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgIH1cblxuICAgIGFyaWFEZXNjcmliZVJldmlld0lucHV0cygkZm9ybSkge1xuICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS1pbnB1dF0nKS5lYWNoKChfLCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBtc2dTcGFuSWQgPSBgJHskaW5wdXQuYXR0cignbmFtZScpfS1tc2dgO1xuXG4gICAgICAgICAgICAkaW5wdXQuc2libGluZ3MoJ3NwYW4nKS5hdHRyKCdpZCcsIG1zZ1NwYW5JZCk7XG4gICAgICAgICAgICAkaW5wdXQuYXR0cignYXJpYS1kZXNjcmliZWRieScsIG1zZ1NwYW5JZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI2J1bGtfcHJpY2luZycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb2xkUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZigkd3JhcHBlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RfdGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfcHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzX3RleHQgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzLFxuICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfdGV4dCxcbiAgICAgICAgICAgICAgICBzb2xkUHJvZHVjdFRleHQyID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9ob3Vyc190ZXh0O1xuXG4gICAgICAgICAgICB2YXIgbnVtYmVyc1Byb2R1Y3RMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzUHJvZHVjdF90ZXh0ICsgXCJdXCIpLCBcbiAgICAgICAgICAgICAgICBudW1iZXJzUHJvZHVjdEl0ZW0gPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKm51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGgpKSxcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzSG91cnNfdGV4dCArIFwiXVwiKSxcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzSG91cnNMaXN0Lmxlbmd0aCkpO1xuICAgICAgICAgXG4gICAgICAgICAgICAkd3JhcHBlci5odG1sKCc8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWZpcmVcIi8+PC9zdmc+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JyArIG51bWJlcnNQcm9kdWN0TGlzdFtudW1iZXJzUHJvZHVjdEl0ZW1dICsgXCIgXCIgKyBzb2xkUHJvZHVjdFRleHQgKyBcIiBcIiArIG51bWJlcnNIb3Vyc0xpc3RbbnVtYmVyc0hvdXJzSXRlbV0gKyBcIiBcIiArIHNvbGRQcm9kdWN0VGV4dDIgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgJHdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291bnREb3duUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZigkd3JhcHBlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgY291bnREb3duID0gJHdyYXBwZXIuZGF0YSgnY291bnRkb3duJyksXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGNvdW50RG93bikuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgIHNlZnQgPSAkd3JhcHBlcjtcblxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duZnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZWZ0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VycyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ckNvdW50RG93biA9ICc8c3ZnIGNsYXNzPVwiaWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWJlbGxcIi8+PC9zdmc+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+PHNwYW4+TGltaXRlZC10aW1lIG9mZmVyczo8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicrZGF5cysnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicraG91cnMrJ2ggOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK21pbnV0ZXMrJ20gOjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nK3NlY29uZHMrJ3M8L3NwYW4+JztcblxuICAgICAgICAgICAgICAgICAgICBzZWZ0Lmh0bWwoc3RyQ291bnREb3duKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2R1Y3RWaWV3U2hhcmVMaW5rKCkge1xuICAgICAgICBjb25zdCAkc2hhcmVMaW5rQnRuID0gJCgnLnNoYXJlTGlua1NvY2lhbF9fYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtQb3B1cCA9ICQoJy5zaGFyZUxpbmtTb2NpYWxfX3BvcHVwJyk7XG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtDbG9zZSA9ICQoJy5zaGFyZUxpbmtTb2NpYWxfX2Nsb3NlJyk7XG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtDb3B5ID0gJCgnI3NoYXJlTGlua1NvY2lhbF9fY29weScpO1xuXG4gICAgICAgICRzaGFyZUxpbmtCdG4ub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCRzaGFyZUxpbmtQb3B1cC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnNsaWRlVXAoNDAwKTtcbiAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5zbGlkZURvd24oNDAwKTtcbiAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuYWRkQ2xhc3MoJ2lzLW9wZW4nKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNoYXJlTGlua0Nsb3NlLm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICgkc2hhcmVMaW5rUG9wdXAuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5zbGlkZVVwKDQwMCk7XG4gICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzaGFyZUxpbmtDb3B5Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG5cbiAgICAgICAgICAgICR0YXJnZXQuc2VsZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZpZXdpbmdQcm9kdWN0KCR3cmFwcGVyKSB7XG4gICAgICAgIGlmKCR3cmFwcGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciB2aWV3ZXJUZXh0ID0gdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJfdGV4dCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyLFxuICAgICAgICAgICAgICAgIG51bWJlcnNWaWV3ZXJMaXN0ID0gIEpTT04ucGFyc2UoXCJbXCIgKyBudW1iZXJzVmlld2VyX3RleHQgKyBcIl1cIiksXG4gICAgICAgICAgICAgICAgdGltZVZpZXdlciA9ICBwYXJzZUludCh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X2NoYW5nZSkqMTAwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlcnNWaWV3ZXJJdGVtID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpudW1iZXJzVmlld2VyTGlzdC5sZW5ndGgpKTtcblxuICAgICAgICAgICAgICAgICR3cmFwcGVyLmh0bWwoJzxzdmcgY2xhc3M9XCJpY29uXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZXllXCIvPjwvc3ZnPicgKyBudW1iZXJzVmlld2VyTGlzdFtudW1iZXJzVmlld2VySXRlbV0gKyBcIiBcIiArIHZpZXdlclRleHQpO1xuICAgICAgICAgICAgfSwgdGltZVZpZXdlcik7ICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVDb2xvcnMoKXtcbiAgICAgICAgY29uc3QgJHN3YXRjaFdyYXBwZXIgPSAkKCcuaGFsby1jb21wYXJlQ29sb3JzLXN3YXRjaCcpLFxuICAgICAgICAgICAgJGltYWdlV3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2UnKSxcbiAgICAgICAgICAgICR0ZXh0V3JhcHBlciA9ICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtdGV4dCcpO1xuXG4gICAgICAgICQoJy5mb3JtLW9wdGlvbicsICRzd2F0Y2hXcmFwcGVyKS5vbignY2xpY2snLCAgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoJ3Nob3ctY29sb3InKTtcblxuICAgICAgICAgICAgdmFyIHRpdGxlID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQnKS5hdHRyKCd0aXRsZScpLFxuICAgICAgICAgICAgICAgIGlkID0gJHRoaXMuZGF0YSgncHJvZHVjdC1zd2F0Y2gtdmFsdWUnKSxcbiAgICAgICAgICAgICAgICAkY29sb3IsICRjb2xvcjIsICRjb2xvcjMsICRpbWcsICRwYXR0ZXJuO1xuXG4gICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3Nob3ctY29sb3InKSl7XG4gICAgICAgICAgICAgICAgaWYoJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJykuYXR0cignc3R5bGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2VXcmFwcGVyLmFwcGVuZCgnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScraWQrJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3JcIiBzdHlsZT1cIicrJGNvbG9yKyc7XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjInKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IyIHNwYW46bnRoLWNoaWxkKDEpJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjIgc3BhbjpudGgtY2hpbGQoMiknKS5hdHRyKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJy5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2UnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImNvbG9yIGNvbG9yMlwiPjxzcGFuIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjIrJztcIj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgxKScpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjIgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgyKScpLmF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICRjb2xvcjMgPSAgJHRoaXMuZmluZCgnLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgzKScpLmF0dHIoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImNvbG9yIGNvbG9yM1wiPjxzcGFuIHN0eWxlPVwiJyskY29sb3IrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjIrJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInKyRjb2xvcjMrJztcIj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nK3RpdGxlKyc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgJGltZyA9ICR0aGlzLmZpbmQoJy5mb3JtLW9wdGlvbi12YXJpYW50LS1wYXR0ZXJuJykuYXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgJHBhdHRlcm4gPSAkdGhpcy5maW5kKCcuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVybicpLmF0dHIoJ2RhdGEtcGF0dGVybicpO1xuXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZVdyYXBwZXIuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiaXRlbSBpdGVtLXBhcnRlcm4gaXRlbS0nK2lkKydcIj48c3BhbiBjbGFzcz1cImltYWdlXCI+PGltZyBzcmM9JyskcGF0dGVybisnIGFsdD0nK3RpdGxlKycgdGl0bGU9Jyt0aXRsZSsnPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+Jyt0aXRsZSsnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkKCcuaXRlbS0nK2lkKycnLCAkaW1hZ2VXcmFwcGVyKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoJGltYWdlV3JhcHBlci5jaGlsZHJlbigpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICR0ZXh0V3JhcHBlci5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgJHRleHRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDEwMjUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3Itc3dhdGNoLWltYWdlJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3IFNvcnRhYmxlKGVsLCB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMTUwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZVRhYnMoKXtcbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRhYiBbZGF0YS1jb2xsYXBzaWJsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGlmKCR0YXJnZXQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSl7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5wYXJlbnQoJy50b2dnbGUtdGl0bGUnKS5zaWJsaW5ncygnLnRvZ2dsZS1jb250ZW50Jykuc2xpZGVEb3duKFwic2xvd1wiKTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnBhcmVudCgnLnRvZ2dsZS10aXRsZScpLnNpYmxpbmdzKCcudG9nZ2xlLWNvbnRlbnQnKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdEN1c3RvbVRhYigpe1xuICAgICAgICBpZih0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3Byb2R1Y3RfZGV0YWlsc190YWJzID09IHRydWUpe1xuICAgICAgICAgICAgaWYodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3Muc2hvd19jdXN0b21fdGFiID09IHRydWUpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNob3dfY3VzdG9tX3RhYl90eXBlID09IFwiYWxsXCIpe1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X2N1c3RvbV90YWJfbGluaztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvcGFnZS9oYWxvLXBhZ2UtdGVtcGxhdGUnXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodXJsLCBvcHRpb24sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHJlc3BvbnNlKS5hcHBlbmRUbygnI3RhYi1jdXN0b20tbW9iaWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctdGFiICN0YWItY3VzdG9tLW1vYmlsZScpLnRleHQoKS50cmltKCkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctdGFiICN0YWItY3VzdG9tJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAkKCcjdGFiLWRlc2NyaXB0aW9uJykuZmluZCgnW2RhdGEtY3VzdG9tLXRhYl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X2N1c3RvbV90YWJfdHlwZSA9PSBcImN1c3RvbVwiKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbicpLmZpbmQoJ1tkYXRhLWN1c3RvbS10YWJdJykuYXBwZW5kVG8oJyN0YWItY3VzdG9tLW1vYmlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpLmZpbmQoJ1tkYXRhLWN1c3RvbS10YWJdJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9kdWN0U2hpcHBpbmdUYWIoKXtcbiAgICAgICAgaWYodGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3Muc2hvd19wcm9kdWN0X2RldGFpbHNfdGFicyA9PSB0cnVlKXtcbiAgICAgICAgICAgIGlmKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNob3dfc2hpcHBpbmdfdGFiID09IHRydWUpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNob3dfc2hpcHBpbmdfdGFiX3R5cGUgPT0gXCJhbGxcIil7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNob3dfc2hpcHBpbmdfdGFiX2xpbms7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdoYWxvdGhlbWVzL3BhZ2UvaGFsby1wYWdlLXRlbXBsYXRlJ1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChyZXNwb25zZSkuYXBwZW5kVG8oJyN0YWItc2hpcHBpbmctbW9iaWxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctdGFiICN0YWItc2hpcHBpbmctbW9iaWxlJykudGV4dCgpLnRyaW0oKSA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10YWIgI3RhYi1zaGlwcGluZycpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnI3RhYi1kZXNjcmlwdGlvbicpLmZpbmQoJ1tkYXRhLXNoaXBwaW5nLXRhYl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3NoaXBwaW5nX3RhYl90eXBlID09IFwiY3VzdG9tXCIpe1xuICAgICAgICAgICAgICAgICAgICAkKCcjdGFiLWRlc2NyaXB0aW9uJykuZmluZCgnW2RhdGEtc2hpcHBpbmctdGFiXScpLmFwcGVuZFRvKCcjdGFiLXNoaXBwaW5nLW1vYmlsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbicpLmZpbmQoJ1tkYXRhLXNoaXBwaW5nLXRhYl0nKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dtb3JlRGVzY3JpcHRpb24oKXtcbiAgICAgICAgY29uc3Qgc2hvd01vcmVidG4gPSAkKCcjdGFiLWRlc2NyaXB0aW9uU2hvd21vcmUnKSxcbiAgICAgICAgICAgIGRlc2NNb2JpbGUgPSAkKCcjdGFiLWRlc2NyaXB0aW9uLW1vYmlsZScpLFxuICAgICAgICAgICAgdGV4dFNob3dNb3JlID0gc2hvd01vcmVidG4uZmluZCgnLmJ1dHRvbicpLmRhdGEoJ3Nob3ctbW9yZS10ZXh0JyksXG4gICAgICAgICAgICB0ZXh0U2hvd0xlc3MgPSBzaG93TW9yZWJ0bi5maW5kKCcuYnV0dG9uJykuZGF0YSgnc2hvdy1sZXNzLXRleHQnKTtcblxuICAgICAgICBzaG93TW9yZWJ0bi5maW5kKCcuYnV0dG9uJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYoc2hvd01vcmVidG4uaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgc2hvd01vcmVidG4ucmVtb3ZlQ2xhc3MoXCJsZXNzXCIpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgc2hvd01vcmVidG4uZmluZCgnLmJ1dHRvbicpLnRleHQodGV4dFNob3dNb3JlKTtcbiAgICAgICAgICAgICAgICBkZXNjTW9iaWxlLmNzcygnbWF4LWhlaWdodCcsJzMwMHB4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dNb3JlYnRuLnJlbW92ZUNsYXNzKCdzaG93JykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAgICAgICAgIGRlc2NNb2JpbGUuY3NzKCdtYXgtaGVpZ2h0JywndW5zZXQnKTtcbiAgICAgICAgICAgICAgICBzaG93TW9yZWJ0bi5maW5kKCcuYnV0dG9uJykudGV4dCh0ZXh0U2hvd0xlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja1Byb2R1Y3QoKXtcbiAgICAgICAgY29uc3QgcmVsYXRlZFByb2R1Y3RzID0gJCgnI2hhbG8tcmVsYXRlZC1wcm9kdWN0cycpLFxuICAgICAgICAgICAgc2ltaWxhclByb2R1Y3RzID0gJCgnI2hhbG8tc2ltaWxhci1wcm9kdWN0cycpO1xuXG4gICAgICAgIGlmKCFyZWxhdGVkUHJvZHVjdHMuZmluZCgnLnNsaWNrLXRyYWNrJykuaHRtbCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVsYXRlZFByb2R1Y3RzLmhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXNpbWlsYXJQcm9kdWN0cy5maW5kKCcuc2xpY2stdHJhY2snKS5odG1sKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzaW1pbGFyUHJvZHVjdHMuaGlkZSgpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHsgc2FmZVN0cmluZyB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudDIgPSAkKCcjdGFiLXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnJldmlldy1saW5rIGEnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKCcuaXMtb3BlbltkYXRhLWNvbGxhcHNpYmxlXScsICQoJy50YWItY29udGVudCcpKS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcblxuICAgICAgICAgICAgJCgnW2hyZWY9XCIjdGFiLXJldmlld3MtbW9iaWxlXCJdJywgJCgnLnByb2R1Y3RWaWV3LXRhYjpub3QoLnByb2R1Y3RWaWV3LXRhYi0yKScpKS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTAyNSkge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLiRyZXZpZXdzQ29udGVudDIub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLiRyZXZpZXdzQ29udGVudC5vZmZzZXQoKS50b3AgLSAkKCcuaGVhZGVyJykuaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1JhdGluZyksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50KSxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud3JpdGVSZXZpZXctZm9ybSBbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbInNhZmVTdHJpbmciLCJzdHIiLCJkIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiYm9keSIsInRleHRDb250ZW50IiwidXRpbHMiLCJtb2RhbEZhY3RvcnkiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiaGFsb0NhbGN1bGF0ZUZyZWVTaGlwcGluZyIsIiRzY29wZSIsImNvbnRleHQiLCJ0aGlzUHJvdWN0SWQiLCJwYXJzZUludCIsInByb2R1Y3RJZCIsIiRyZWxhdGVUYWIiLCIkIiwiJGJ1bmRsZSIsIiRidW5kbGVMaXN0IiwiZmluZCIsIm1vZGFsIiwiY3VycmVuY3kiLCJtb25leSIsInNob3dCdW5kbGUiLCJkb2N1bWVudCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwibm90IiwicmVtb3ZlQ2xhc3MiLCJuZXh0IiwiaGFzQ2xhc3MiLCJhZGRDbGFzcyIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJpZCIsImF0dHIiLCJyZXBsYWNlIiwicHJvZHVjdCIsImlzIiwidG90YWxQcmljZSIsIiRmb3JtIiwiYXJyUHJvIiwiQXJyYXkiLCJlYWNoIiwiaW5kZXgiLCJ2YWwiLCJwdXNoIiwiY2hlY2siLCJjaGVja1Byb2R1Y3QiLCJrIiwic2hvdyIsImFkZFRvQ2FydCIsImVycm9yTWVzc2FnZSIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJpbm5lclRleHQiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJpdGVtIiwicHJvZEJ1bmRsZUlkIiwidG90YWxCbG9jayIsImZpcnN0SXRlbSIsImFwcGVuZCIsInByb2R1Y3RDdXN0b21GaWVsZHMiLCJvYmoiLCJuYW1lIiwiSlNPTiIsInBhcnNlIiwidmFsdWUiLCJncmVwIiwibnVtIiwibGlzdCIsImRhdGEiLCJwSWQiLCJ1bmRlZmluZWQiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJmb3JFYWNoIiwiZWxlbWVudCIsInNob3dMaXN0IiwibGlzdEZpbHRlciIsInVuaXF1ZSIsImkiLCJmb3JtIiwiaGFzT3B0aW9ucyIsImhhc0RlZmF1bHRPcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwidHJpbSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJodG1sIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJwcm9kdWN0T3B0aW9ucyIsInNob3dTbGlja1NsaWRlciIsIndyYXAiLCJzbGljayIsImRvdHMiLCJhcnJvd3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsIm1vYmlsZUZpcnN0IiwiaW5maW5pdGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2hlY2tCZWZvcmVBZGQiLCIkYXR0cmlidXRlcyIsImF0dCIsInByb3AiLCJmb2N1cyIsImFyclAiLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInByb2QiLCJjYXJ0IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImVycm9yIiwiYWxlcnQiLCJoaWRlIiwidGhlbWVTZXR0aW5ncyIsImhhbG9BZGRUb0NhcnRBY3Rpb24iLCJsb2FkaW5nQ2xhc3MiLCIkYm9keSIsIiRjYXJ0RHJvcGRvd24iLCIkY2FydExvYWRpbmciLCJ0b2dnbGVDbGFzcyIsImdldENvbnRlbnQiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJyZWRpcmVjdFRvIiwidXJscyIsImlzUnVubmluZ0luSWZyYW1lIiwic2VsZiIsInRvcCIsImUiLCJ1cmwiLCJpZnJhbWVTZGsiLCJsb2NhdGlvbiIsInRvdGFsIiwic3ltYm9sIiwic3ltYm9sQ2hhbmdlIiwiZGVjaW1hbFBsYWNlcyIsImRlY2ltYWxTZXBhcmF0b3IiLCJ0aG91c2FuZHNTZXBhcmF0b3IiLCJzeW1ib2xMb2NhdGlvbiIsImN1cnIiLCJ0b2tlbjEiLCJ0b2tlbjIiLCJkZWNpbWFsX3BsYWNlcyIsImRlY2ltYWxfdG9rZW4iLCJ0aG91c2FuZHNfdG9rZW4iLCJjdXJyZW5jeV9sb2NhdGlvbiIsImN1cnJlbmN5X3Rva2VuIiwicHJpY2UiLCJwYXJzZUZsb2F0IiwiaW5kZXhPZiIsImZvcm1hdE1vbmV5IiwibiIsImMiLCJ0IiwiaXNOYU4iLCJNYXRoIiwiYWJzIiwicyIsIlN0cmluZyIsIk51bWJlciIsInRvRml4ZWQiLCJqIiwic3Vic3RyIiwic2xpY2UiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwibWFwIiwieCIsImpvaW4iLCJ0ZXh0IiwiY2hlY2tlZCIsImxhYmVsIiwibGFiZWxzIiwidGl0bGUiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJfaXNQbGFpbk9iamVjdCIsImltYWdlIiwibWFpbkltYWdlVXJsIiwidG9vbHMiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInByb2R1Y3RnYWxsZXJ5X3NpemUiLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCJfaXNOdW1iZXIiLCJzdG9jayIsImhhbG9fc3RvY2tfbGV2ZWxfbGltaXQiLCIkc3RvY2tMZWZ0V3JhcHBlciIsIiRzdG9ja0xlZnQiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJfaXNPYmplY3QiLCJ1cGRhdGVQcmljZVZpZXciLCJwcm9kdWN0Q2hlY2tib3giLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsInByaWNlRGF0YSIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCIkY29udGFpbmVyIiwiJGlucHV0IiwiJHNrdSIsIiR1cGMiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsImZvcm1EYXRhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwia2V5IiwiRmlsZSIsInNpemUiLCJjb25zb2xlIiwiZ2V0UHJvZHVjdCIsImFyciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRva2VuIiwic3RyaW5naWZ5IiwicXVlcnkiLCJjdXJDb2RlIiwidGhlbiIsInJlcyIsImpzb24iLCJyZW5kZXJQcm9kdWN0IiwiY3VyRGlzcGxheSIsInN5bWJvbFBsYWNlbWVudCIsImRlY2ltYWxUb2tlbiIsInRob3VzYW5kc1Rva2VuIiwiaGFsb19jYXJkX3RpdGxlIiwicGF0aCIsInJlc3RyaWN0X3RvX2xvZ2luIiwicHJpY2VzIiwicHJpY2VSYW5nZSIsIm1pbiIsIm1heCIsInByaWNlX3JhbmdlcyIsInByaWNlTWluIiwicHJpY2VNYXgiLCJwcmljZURlZiIsInJldGFpbFByaWNlIiwiYmFzZVByaWNlIiwicHJpY2VCYXMiLCJwcmljZVJldCIsImh0bWxfY2FyZCIsImVudGl0eUlkIiwiZGVmYXVsdEltYWdlIiwiaW1nNzBweCIsInByZXZJZCIsIiRwcm9kSWNvbnMiLCIkcHJvZFdyYXAiLCJyZW1vdmUiLCJuZXh0SWQiLCJuZXh0TGluayIsInByZXZMaW5rIiwic2l0ZSIsInByb2R1Y3RzIiwiZWRnZXMiLCJkaXNwbGF5Iiwic3dhbCIsInNjcm9sbCIsIm9mZnNldCIsImhfc3RhdGMiLCJvdXRlckhlaWdodCIsInNjcm9sbFRvcCIsImNvbG9yIiwiJHN0aWNreSIsIndpZHRoIiwiY3NzIiwib25sb2FkIiwiU29ydGFibGUiLCJQYWdlTWFuYWdlciIsIlJldmlldyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsIlByb2R1Y3REZXRhaWxzIiwidmlkZW9HYWxsZXJ5IiwiY2xhc3NpZnlGb3JtIiwiaGFsb1lvdXR1YmVDYXJvdXNlbCIsImhhbG9OZXh0UHJvZHVjdHMiLCJoYWxvTm90aWZ5TWUiLCJoYWxvU3RpY2t5QWRkVG9DYXJ0IiwiaGFsb0J1bmRsZVByb2R1Y3RzIiwiUHJvZHVjdCIsIl9QYWdlTWFuYWdlciIsIl90aGlzIiwiY2FsbCIsImhyZWYiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJyZXZpZXdNb2RhbCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJwYXRobmFtZSIsInZhbGlkYXRvciIsInByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwidmlld2luZ1Byb2R1Y3QiLCJzb2xkUHJvZHVjdCIsImNvdW50RG93blByb2R1Y3QiLCJwcm9kdWN0Vmlld1NoYXJlTGluayIsImNvbXBhcmVDb2xvcnMiLCJ0b2dnbGVUYWJzIiwicHJvZHVjdEN1c3RvbVRhYiIsInByb2R1Y3RTaGlwcGluZ1RhYiIsInNob3dtb3JlRGVzY3JpcHRpb24iLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiXyIsImlucHV0IiwibXNnU3BhbklkIiwic2libGluZ3MiLCIkd3JhcHBlciIsIm51bWJlcnNQcm9kdWN0X3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X3Byb2R1Y3RzIiwibnVtYmVyc0hvdXJzX3RleHQiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzIiwic29sZFByb2R1Y3RUZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0Iiwic29sZFByb2R1Y3RUZXh0MiIsInByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnNfdGV4dCIsIm51bWJlcnNQcm9kdWN0TGlzdCIsIm51bWJlcnNQcm9kdWN0SXRlbSIsImZsb29yIiwicmFuZG9tIiwibnVtYmVyc0hvdXJzTGlzdCIsIm51bWJlcnNIb3Vyc0l0ZW0iLCJjb3VudERvd24iLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJzZWZ0IiwiY291bnRkb3duZnVuY3Rpb24iLCJzZXRJbnRlcnZhbCIsIm5vdyIsImRpc3RhbmNlIiwiY2xlYXJJbnRlcnZhbCIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RyQ291bnREb3duIiwiJHNoYXJlTGlua0J0biIsIiRzaGFyZUxpbmtQb3B1cCIsIiRzaGFyZUxpbmtDbG9zZSIsIiRzaGFyZUxpbmtDb3B5Iiwic2xpZGVVcCIsInNsaWRlRG93biIsImV4ZWNDb21tYW5kIiwidmlld2VyVGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJ0aW1lVmlld2VyIiwicHJvZHVjdF92aWV3aW5nUHJvZHVjdF9jaGFuZ2UiLCJudW1iZXJzVmlld2VySXRlbSIsIiRzd2F0Y2hXcmFwcGVyIiwiJGltYWdlV3JhcHBlciIsIiR0ZXh0V3JhcHBlciIsIiR0aGlzIiwiJGNvbG9yIiwiJGNvbG9yMiIsIiRjb2xvcjMiLCIkaW1nIiwiJHBhdHRlcm4iLCJlbCIsImdldEVsZW1lbnRCeUlkIiwiYW5pbWF0aW9uIiwic2hvd19wcm9kdWN0X2RldGFpbHNfdGFicyIsInNob3dfY3VzdG9tX3RhYiIsInNob3dfY3VzdG9tX3RhYl90eXBlIiwic2hvd19jdXN0b21fdGFiX2xpbmsiLCJvcHRpb24iLCJnZXRQYWdlIiwiYXBwZW5kVG8iLCJzaG93X3NoaXBwaW5nX3RhYiIsInNob3dfc2hpcHBpbmdfdGFiX3R5cGUiLCJzaG93X3NoaXBwaW5nX3RhYl9saW5rIiwic2hvd01vcmVidG4iLCJkZXNjTW9iaWxlIiwidGV4dFNob3dNb3JlIiwidGV4dFNob3dMZXNzIiwicmVsYXRlZFByb2R1Y3RzIiwic2ltaWxhclByb2R1Y3RzIiwiZGVmYXVsdCIsIm5vZCIsIkNvbGxhcHNpYmxlRXZlbnRzIiwiZm9ybXMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiX2RlZmF1bHQiLCJzdWJtaXQiLCJ0YXAiLCIkcmV2aWV3c0NvbnRlbnQiLCIkcmV2aWV3c0NvbnRlbnQyIiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCIkY29udGVudCIsImNsaWNrIiwiYW5pbWF0ZSIsImhlaWdodCIsImhhc2giLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInJlc3VsdCIsImVtYWlsIiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJzb3VyY2VSb290IjoiIn0=