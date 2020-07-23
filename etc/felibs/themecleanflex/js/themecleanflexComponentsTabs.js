var cmpThemecleanflexComponentsTabs = (function () {
  'use strict';

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

  var script = {
    props: ['model'],
    data: function(){
      return { 
        active: 0
      }
    },
    computed: {
      isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false }
            //return !(this.model.tabs.length > 0)
            return this.$helper.areAllEmpty(this.model.showtitle === 'true' && this.model.title, this.model.showsubtitle === 'true' && this.model.subtitle , this.model.tabs , this.model.showmedia === 'true')
      }
    },
    methods: {
      toggleActive: function(i) {
        this.active = i;
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "themecleanflex-components-block",
      { attrs: { model: _vm.model } },
      [
        _vm.isEditAndEmpty
          ? _c("div", { staticClass: "p-5" }, [
              _vm._v("no content defined for component")
            ])
          : _c("div", { staticClass: "w-full" }, [
              _c("div", [
                _vm.model.showtitle == "true" && _vm.model.title
                  ? _c(
                      "h1",
                      {
                        staticClass: "text-center pb-4",
                        attrs: { "data-per-inline": "model.title" }
                      },
                      [_vm._v(_vm._s(_vm.model.title))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.model.showsubtitle == "true" && _vm.model.subtitle
                  ? _c(
                      "h2",
                      {
                        staticClass: "text-center pb-4",
                        attrs: { "data-per-inline": "model.subtitle" }
                      },
                      [_vm._v(_vm._s(_vm.model.subtitle))]
                    )
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "flex flex-col -mx-3",
                  class: {
                    "lg:flex-row": _vm.model.mediaposition === "before",
                    "lg:flex-row-reverse": _vm.model.mediaposition === "after"
                  }
                },
                [
                  _vm.model.showmedia == "true"
                    ? _c(
                        "div",
                        {
                          staticClass: "img-wrapper mx-3",
                          style: { flex: "0 0 " + _vm.model.mediawidth + "%" }
                        },
                        [
                          _c("themecleanflex-components-media", {
                            attrs: { model: _vm.model }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "py-3 flex flex-col mx-3 lg:flex-grow" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "flex flex-wrap justify-center  pb-3",
                          attrs: { role: "tablist" }
                        },
                        _vm._l(_vm.model.tabs, function(item, i) {
                          return _c(
                            "a",
                            {
                              key: item.path || i,
                              staticClass: "mx-2 no-underline p-3 cursor-pointer",
                              class: {
                                "text-white": _vm.active === i,
                                "bg-blue-700":
                                  _vm.active === i &&
                                  _vm.model.tabcolor === "blue",
                                "bg-green-700":
                                  _vm.active === i &&
                                  _vm.model.tabcolor === "green",
                                "bg-red-700":
                                  _vm.active === i &&
                                  _vm.model.tabcolor === "red",
                                "bg-orange-700":
                                  _vm.active === i &&
                                  _vm.model.tabcolor === "orange",
                                "bg-light-700":
                                  _vm.active === i &&
                                  _vm.model.tabcolor === "light",
                                "bg-dark":
                                  _vm.active === i &&
                                  _vm.model.tabcolor === "dark",
                                "text-blue-700":
                                  _vm.active !== i &&
                                  _vm.model.tabcolor === "blue",
                                "text-green-700":
                                  _vm.active !== i &&
                                  _vm.model.tabcolor === "green",
                                "text-red-700":
                                  _vm.active !== i &&
                                  _vm.model.tabcolor === "red",
                                "text-orange-700":
                                  _vm.active !== i &&
                                  _vm.model.tabcolor === "orange",
                                "text-light":
                                  (_vm.active !== i &&
                                    _vm.model.tabcolor === "light") ||
                                  (_vm.active === i &&
                                    _vm.model.tabcolor === "dark"),
                                "text-dark":
                                  (_vm.active !== i &&
                                    _vm.model.tabcolor === "dark") ||
                                  (_vm.active === i &&
                                    _vm.model.tabcolor === "light")
                              },
                              attrs: {
                                role: "tab",
                                id: "tab-control-" + _vm._uid + (parseInt(i) + 1),
                                "aria-controls":
                                  "tab" + _vm._uid + (parseInt(i) + 1),
                                "aria-selected": _vm.active === i,
                                "data-per-inline": "item.title"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleActive(i)
                                }
                              }
                            },
                            [_vm._v(_vm._s(item.title))]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "relative" },
                        _vm._l(_vm.model.tabs, function(item, i) {
                          return _c("div", {
                            key: item.path || i,
                            staticClass:
                              "w-full py-3 opacity-0 transition-opacity",
                            class:
                              _vm.active === i ? "block opacity-100" : "hidden",
                            attrs: {
                              role: "tabpanel",
                              id: "tab" + _vm._uid + (parseInt(i) + 1),
                              "aria-labelledby":
                                "tab-control-" + _vm._uid + (parseInt(i) + 1),
                              "data-per-inline": "item.text"
                            },
                            domProps: { innerHTML: _vm._s(item.text) }
                          })
                        }),
                        0
                      )
                    ]
                  )
                ]
              )
            ])
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var template = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return template;

}());
