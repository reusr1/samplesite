var cmpThemecleanflexComponentsFooter = (function () {
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

    var script = {
        props: ['model'],
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                return this.$helper.areAllEmpty(this.model.showlogo === 'true', this.model.columns,  this.model.copyright, this.model.icons)
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
                _c(
                  "div",
                  { staticClass: "flex flex-col lg:flex-row justify-between" },
                  [
                    _vm.model.showlogo === "true" && _vm.model.logo
                      ? _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.$helper.pathToUrl(_vm.model.logourl)
                            }
                          },
                          [
                            _c("img", {
                              staticClass: "mb-3",
                              style:
                                "height:" + parseInt(_vm.model.logosize) + "px;",
                              attrs: {
                                src: _vm.$helper.pathToUrl(_vm.model.logo),
                                alt: _vm.model.logoalttext
                              }
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.model.columns, function(item, i) {
                      return _c(
                        "div",
                        {
                          key: item.path || i,
                          staticClass: "footer-col flex-1 lg:mx-4"
                        },
                        [
                          item.title !== ""
                            ? _c(
                                "h2",
                                {
                                  staticClass: "text-lg font-bold my-2",
                                  attrs: {
                                    "data-per-inline":
                                      "model.clolumns." + i + ".title"
                                  }
                                },
                                [_vm._v(_vm._s(item.title))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          item.text !== ""
                            ? _c("div", {
                                attrs: {
                                  "data-per-inline": "model.clolumns." + i + ".text"
                                },
                                domProps: { innerHTML: _vm._s(item.text) }
                              })
                            : _vm._e()
                        ]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("hr", { staticClass: "border-b" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex items-center flex-wrap justify-between" },
                  [
                    _c(
                      "p",
                      {
                        staticClass: "my-3",
                        attrs: { "data-per-inline": "model.copyright" }
                      },
                      [_vm._v(_vm._s(_vm.model.copyright))]
                    ),
                    _vm._v(" "),
                    _c("themecleanflex-components-socialicons", {
                      attrs: { model: _vm.model }
                    })
                  ],
                  1
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
