(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/novelContent/novelContent"],{

/***/ 29:
/*!*******************************************************************************************************************!*\
  !*** /Users/birdyyoung/Documents/HBuilderProjects/Reading/main.js?{"page":"pages%2FnovelContent%2FnovelContent"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _novelContent = _interopRequireDefault(__webpack_require__(/*! ./pages/novelContent/novelContent.vue */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_novelContent.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 30:
/*!************************************************************************************************!*\
  !*** /Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./novelContent.vue?vue&type=template&id=033f0f26& */ 31);
/* harmony import */ var _novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./novelContent.vue?vue&type=script&lang=js& */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./novelContent.vue?vue&type=style&index=0&lang=css& */ 35);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/novelContent/novelContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/*!*******************************************************************************************************************************!*\
  !*** /Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue?vue&type=template&id=033f0f26& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./novelContent.vue?vue&type=template&id=033f0f26& */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_template_id_033f0f26___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 32:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue?vue&type=template&id=033f0f26& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 137))
    },
    uniIcons: function() {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 144))
    },
    uniDrawer: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-drawer/components/uni-drawer/uni-drawer */ "uni_modules/uni-drawer/components/uni-drawer/uni-drawer").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue */ 152))
    },
    uniSearchBar: function() {
      return Promise.all(/*! import() | uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue */ 53))
    },
    uniLoadMore: function() {
      return Promise.all(/*! import() | uni_modules/uni-load-more/components/uni-load-more/uni-load-more */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue */ 126))
    },
    uniTransition: function() {
      return Promise.all(/*! import() | uni_modules/uni-transition/components/uni-transition/uni-transition */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-transition/components/uni-transition/uni-transition")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-transition/components/uni-transition/uni-transition.vue */ 106))
    },
    uniFab: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-fab/components/uni-fab/uni-fab */ "uni_modules/uni-fab/components/uni-fab/uni-fab").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-fab/components/uni-fab/uni-fab.vue */ 112))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 33:
/*!*************************************************************************************************************************!*\
  !*** /Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./novelContent.vue?vue&type=script&lang=js& */ 34);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 34:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















































































var _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { id: 0, chapterid: 0, toView: "", current: 0, content: '', count: 0, pageNo: 1, limit: 100, novelDetail: {}, showLeft: false, chapterList: [], showButton: false, fontSize: 34, light: 50, backgroundColor: '#C7EDCC', display1: 'none', display2: 'none', display3: 'none', cardheight: 200, status: 'more', contentText: { contentdown: '查看更多', contentrefresh: '加载中', contentnomore: '没有更多' }, pattern: { color: '#7A7E83', backgroundColor: '#fff', selectedColor: '#f13360', buttonColor: '#292d33', iconColor: '#fff' }, butArray: [{ iconPath: '/static/prev.png', selectedIconPath: '/static/prevactive.png', text: '上一章', active: false }, { iconPath: '/static/next.png', selectedIconPath: '/static/nextactive.png', text: '下一章', active: false }, { iconPath: '/static/setting.png', selectedIconPath: '/static/settingactive.png', text: '设置', active: false }], show: true, showArrRight: false, showArrLeft: false, touchData: {} };}, methods: { touchmove: function touchmove(e) {var touchMoveX = e.changedTouches[0].clientX;var touchMoveY = e.changedTouches[0].clientY;if (touchMoveX > this.touchData.clientX) {this.showArrLeft = true;this.showArrRight = false;} else {this.showArrRight = true;this.showArrLeft = false;}}, touchstart: function touchstart(e) {this.touchData.clientX = e.changedTouches[0].clientX;this.touchData.clientY = e.changedTouches[0].clientY;}, handletouchend: function handletouchend(e) {var myApp = this;var subX = e.changedTouches[0].clientX - myApp.touchData.clientX;
      var subY = e.changedTouches[0].clientY - myApp.touchData.clientY;
      if (subY > 50) {
        console.log('下滑');
        if (!myApp.show) myApp.show = !myApp.show;
      } else if (subY < -50) {
        console.log('上滑');
        if (myApp.show) myApp.show = !myApp.show;
      } else if (subX > 100) {
        if (parseInt(myApp.current) - 1 == 0) {
          return uni.showToast({
            title: "这已经是第一章了",
            duration: 2000 });

        }
        myApp.current = parseInt(myApp.current) - 1;
        myApp.loadNovelContent(myApp.current);
        console.log('左滑');
      } else if (subX < -100) {
        console.log('右滑');
        if (parseInt(myApp.current) + 1 == myApp.count) {
          return uni.showToast({
            title: "这已经是最后一章了",
            duration: 2000 });

        }
        myApp.current = parseInt(myApp.current) + 1;
        myApp.loadNovelContent(myApp.current);
      } else {
        myApp.showArrLeft = false;
        myApp.showArrRight = false;
      }
    },

    clickLoadMore: function clickLoadMore(e) {
      var myApp = this;
      if (e.detail.status == "more") {
        var pageNo = parseInt(myApp.pageNo) + 1;
        myApp.status = "loading";
        myApp.pageNo = pageNo;
        myApp.loadNovel(pageNo, myApp.limit);
      } else if (e.detail.status == "loading") {
        uni.showToast({
          icon: 'none',
          title: "正在加载，请等待" });

      } else if (e.detail.status == "noMore") {
        uni.showToast({
          icon: 'none',
          title: "暂无更新" });

      }
    },
    search: function search(res) {
      uni.pageScrollTo({
        selector: '.group-list', //你要跳转的样式位置
        duration: 300 //跳转时间段
      });
      uni.showToast({
        title: '搜索章节：' + res.value,
        icon: 'none' });

    },


    onLoad: function onLoad(option) {
      var myApp = this;
      myApp.id = option.id;
      if (option.id == undefined) return;
      myApp.current = option.current;
      myApp.chapterid = option.chapterid;
      myApp.pageNo = 1;

      if (myApp.current > myApp.limit) {
        myApp.pageNo = parseInt(parseInt(myApp.current) / 100) + 1;
        var limit = myApp.pageNo * 100;
        myApp.loadNovel(1, limit);
      } else {
        myApp.loadNovel(myApp.pageNo, myApp.limit);
      }
      myApp.loadNovelContent(myApp.current);
      myApp.getScreenBrightness();

      var key = 'lastPage' + option.id;
      var value = { "current": myApp.current, "id": option.id, "chapterid": option.chapterid };
      uni.setStorage({
        key: key,
        data: value,
        success: function success() {
        } });

      uni.getStorage({
        key: 'pageColor',
        success: function success(res) {
          myApp.backgroundColor = res.data;
        } });

      uni.getStorage({
        key: 'pageFontSize',
        success: function success(res) {
          myApp.fontSize = res.data;
        } });

      uni.getStorage({
        key: 'pageLight',
        success: function success(res) {
          myApp.light = parseInt(res.data);
          uni.setScreenBrightness({
            value: parseFloat(myApp.light) / 100 });

        } });





    },
    jumptoChapter: function jumptoChapter(id) {
      var myApp = this;
      var curPageNo = parseInt(myApp.pageNo);
      console.info(id);
      // myApp.current = (curPageNo-1) * (parseInt(myApp.limit))+parseInt(id)+1
      myApp.current = parseInt(id) + 1;
      myApp.loadNovelContent(myApp.current);
    },
    changeColor: function changeColor(type) {
      this.backgroundColor = type;
      uni.setStorage({
        key: 'pageColor',
        data: type,
        success: function success() {
        } });

    },
    getScreenBrightness: function getScreenBrightness() {
      //注意uni.getScreenBrightness为异步接口，所以需要使用Promise封装为异步执行
      return new Promise(function (resolve, reject) {
        uni.getScreenBrightness({
          success: function success(res) {
            resolve(res.value);
          },
          fail: function fail(err) {
            // reject(0.5);//如果获取失败设置亮度为中间值
            reject(0.5); //如果获取失败设置亮度为中间值
          } });

      });
    },

    sliderFontChange: function sliderFontChange(e) {
      this.fontSize = e.detail.value;
      uni.setStorage({
        key: 'pageFontSize',
        data: e.detail.value,
        success: function success() {
        } });

    },
    changeFrontSize: function changeFrontSize() {
      this.changeDisplay("none", "block", "none");
    },
    changeLight: function changeLight() {
      this.changeDisplay("block", "none", "none");
    },
    changeBackGroungColor: function changeBackGroungColor() {
      this.changeDisplay("none", "none", "block");
    },
    changeDisplay: function changeDisplay(d1, d2, d3) {
      this.display2 = d1;
      this.display1 = d2;
      this.display3 = d3;
    },

    sliderLightChange: function sliderLightChange(e) {
      var value = parseFloat(e.detail.value / 100.0);
      uni.setScreenBrightness({
        value: value,
        success: function success() {
          console.log('成功修改屏幕亮度为', value);
        } });

      uni.setStorage({
        key: 'pageLight',
        data: e.detail.value,
        success: function success() {
        } });

    },

    showSetting: function showSetting(e) {
      var myApp = this;
      myApp.changeDisplay("none", "none", "none");
      myApp.butArray[e.index].active = !e.item.active;
      // preview
      if (e.index == 0) {
        if (parseInt(myApp.current) - 1 == 0) {
          return uni.showToast({
            title: "这已经是第一章了",
            duration: 2000 });

        }
        myApp.current = parseInt(myApp.current) - 1;
        myApp.loadNovelContent(myApp.current);
      } else if (e.index == 1) {
        //next
        if (parseInt(myApp.current) + 1 == myApp.count) {
          return uni.showToast({
            title: "这已经是最后一章了",
            duration: 2000 });

        }
        myApp.current = parseInt(myApp.current) + 1;
        myApp.loadNovelContent(myApp.current);
      } else if (e.index == 2) {
        myApp.$refs.popup.open('buttom');
      }
      setTimeout(function () {
        myApp.butArray[e.index].active = !e.item.active;
      }, 300);
    },


    // 打开窗口
    showDrawer: function showDrawer(e) {
      var myApp = this;
      myApp.$refs.showLeft.open();
      var toview = parseInt(myApp.current) - 3 <= 0 ? 0 : parseInt(myApp.current) - 3;
      setTimeout(function () {
        myApp.toView = "cate" + toview;
      }, 300);
    },

    loadNovelContent: function loadNovelContent(pageNo) {
      var myApp = this;
      (0, _request.default)('novel/chapter/detail', {
        'currNo': pageNo,
        'id': myApp.id },
      {
        hideLoading: false, // 默认 false
        hideMsg: true, // 默认 false
        method: 'POST' // 默认 POST
      }).then(function (res) {
        uni.pageScrollTo({
          scrollTop: 0, // 滚动到页面的目标位置  这个是滚动到顶部, 0 
          duration: 300 // 滚动动画的时长
        });
        myApp.novelDetail = res.data;
        myApp.content = myApp.novelDetail.content;
        myApp.showArrRight = false;
        myApp.showArrLeft = false;
        myApp.$refs['showLeft'].close();
        myApp.$refs.popup.close('buttom');
        myApp.$refs.fab.close();

        var key = 'lastPage' + myApp.id;
        var value = { "current": myApp.current, "id": myApp.id, "chapterid": res.chapterid };
        uni.setStorage({
          key: key,
          data: value,
          success: function success() {
          } });

        uni.setNavigationBarTitle({
          title: myApp.novelDetail.chaptername });

      }).catch(function (err) {
        console.error(err);
      });
    },
    loadNovel: function loadNovel(pageNo, limit) {
      var myApp = this;
      (0, _request.default)('novel/chapter', {
        'currNo': pageNo,
        'id': myApp.id,
        'limit': limit },
      {
        hideLoading: false, // 默认 false
        hideMsg: true // 默认 false
      }).then(function (res) {
        if (myApp.chapterList.length == 0) {
          myApp.chapterList = res.data.result;
        } else {
          var len = res.data.result.length;
          if (len == 0) {
            myApp.status = "noMore";
          } else {
            myApp.status = "more";
          }
          for (var i = 0; i < len; i++) {
            myApp.chapterList.push(res.data.result[i]);
          }

        }
        myApp.count = res.data.count;
      }).catch(function (err) {
        console.error(err);
      });


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 35:
/*!*********************************************************************************************************************************!*\
  !*** /Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./novelContent.vue?vue&type=style&index=0&lang=css& */ 36);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_novelContent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 36:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/birdyyoung/Documents/HBuilderProjects/Reading/pages/novelContent/novelContent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[29,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/novelContent/novelContent.js.map