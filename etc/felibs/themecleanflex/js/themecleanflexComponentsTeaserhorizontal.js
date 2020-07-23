var cmpThemecleanflexComponentsTeaserhorizontal = (function () {
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

    var script = {
        props: ['model'],
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                return this.$helper.areAllEmpty(this.model.showtitle === 'true', this.model.showsubtitle === 'true', this.model.showtext === 'true', this.model.showbutton === 'true')
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
            : _c(
                "div",
                {
                  staticClass: "w-full flex flex-col justify-between items-center",
                  class: {
                    "md:flex-row-reverse": _vm.model.buttonside === "left",
                    "md:flex-row": _vm.model.buttonside === "right",
                    "enlarge-text": _vm.model.isprimary === "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      class: {
                        "text-left": _vm.model.aligncontent === "left",
                        "text-center": _vm.model.aligncontent === "center",
                        "text-right": _vm.model.aligncontent === "right"
                      },
                      style: "flex-basis:" + _vm.model.textwidth + "%;"
                    },
                    [
                      _vm.model.showtitle === "true"
                        ? _c(
                            "h1",
                            {
                              staticClass: "text-5xl mt-0",
                              class: {
                                "mb-6": _vm.model.isprimary === "true",
                                "mb-3": _vm.model.isprimary !== "true"
                              },
                              attrs: { "data-per-inline": "model.title" }
                            },
                            [_vm._v(_vm._s(_vm.model.title))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.model.showsubtitle === "true"
                        ? _c(
                            "p",
                            {
                              staticClass: "teaser-subtitle text-3xl font-normal",
                              class: {
                                "mb-6":
                                  _vm.model.isprimary === "true" &&
                                  _vm.model.showtitle === "false",
                                "my-6":
                                  _vm.model.isprimary === "true" &&
                                  _vm.model.showtitle === "true",
                                "mb-3":
                                  _vm.model.isprimary !== "true" &&
                                  _vm.model.showtitle === "false",
                                "my-3":
                                  _vm.model.isprimary !== "true" &&
                                  _vm.model.showtitle === "true"
                              },
                              attrs: { "data-per-inline": "model.subtitle" }
                            },
                            [_vm._v(_vm._s(_vm.model.subtitle))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.model.showtext === "true"
                        ? _c("div", {
                            staticClass: "teaser-text",
                            attrs: { "data-per-inline": "model.text" },
                            domProps: { innerHTML: _vm._s(_vm.model.text) }
                          })
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _vm.model.showbutton === "true"
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "teaser-actions flex flex-wrap justify-center",
                          class: {
                            "md:justify-end": _vm.model.buttonside === "right",
                            "md:justify-start": _vm.model.buttonside === "left"
                          }
                        },
                        _vm._l(_vm.model.buttons, function(item, i) {
                          return _c(
                            "a",
                            {
                              key: item.path || i,
                              staticClass: "btn m-2",
                              class: {
                                "btn-lg": _vm.model.buttonsize === "large",
                                "btn-sm": _vm.model.buttonsize === "small",
                                "btn-primary": item.buttoncolor === "primary",
                                "btn-secondary": item.buttoncolor === "secondary",
                                "btn-success": item.buttoncolor === "success",
                                "btn-danger": item.buttoncolor === "danger",
                                "btn-warning": item.buttoncolor === "warning",
                                "btn-light": item.buttoncolor === "light",
                                "btn-dark": item.buttoncolor === "dark"
                              },
                              style:
                                "backgroundColor:" +
                                item.buttoncolor +
                                ";borderColor:" +
                                item.buttoncolor +
                                ";",
                              attrs: {
                                href: _vm.$helper.pathToUrl(item.buttonlink),
                                "data-per-inline":
                                  "model.buttons." + i + ".buttontext"
                              }
                            },
                            [_vm._v(_vm._s(item.buttontext))]
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ]
              )
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
