var cmpThemecleanflexComponentsCards = (function () {
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
                return this.$helper.areAllEmpty(this.model.cards)
            }
        },
        methods: {
            showbutton: function showbutton(card) {
              return this.model.showbutton === 'true' && card.buttontext.length
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
                { staticClass: "flex flex-wrap md:-mx-3" },
                _vm._l(_vm.model.cards, function(item, i) {
                  return _c(
                    "div",
                    {
                      key: item.path || i,
                      staticClass: "card my-3 px-0 md:px-3",
                      class: {
                        "lg:w-full": _vm.model.cardsperrow == 1,
                        "lg:w-1/2": _vm.model.cardsperrow == 2,
                        "lg:w-1/3": _vm.model.cardsperrow == 3,
                        "lg:w-1/4": _vm.model.cardsperrow == 4,
                        "lg:w-1/5": _vm.model.cardsperrow == 5,
                        "lg:w-1/6": _vm.model.cardsperrow == 6,
                        "md:w-full": _vm.model.cardsperrowtab == 1,
                        "md:w-1/2": _vm.model.cardsperrowtab == 2,
                        "md:w-1/3": _vm.model.cardsperrowtab == 3,
                        "md:w-1/4": _vm.model.cardsperrowtab == 4,
                        "md:w-1/5": _vm.model.cardsperrowtab == 5,
                        "md:w-1/6": _vm.model.cardsperrowtab == 6,
                        "w-full": _vm.model.cardsperrowmobile == 1,
                        "w-1/2": _vm.model.cardsperrowmobile == 2,
                        "w-1/3": _vm.model.cardsperrowmobile == 3,
                        "w-1/4": _vm.model.cardsperrowmobile == 4,
                        "w-1/5": _vm.model.cardsperrowmobile == 5,
                        "w-1/6": _vm.model.cardsperrowmobile == 6
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "flex flex-col h-full overflow-hidden",
                          class: {
                            "card--bg":
                              _vm.model.showcard === "true" ||
                              _vm.model.customcardcolor === "true",
                            "bg-secondary":
                              _vm.model.showcard === "true" &&
                              _vm.model.customcardcolor !== "true",
                            "border border-solid":
                              _vm.model.customcardcolor !== "true" &&
                              _vm.model.cardborder === "true",
                            "rounded-none": _vm.model.roundedcorners == "none",
                            "rounded-sm": _vm.model.roundedcorners == "small",
                            rounded: _vm.model.roundedcorners == "medium",
                            "rounded-lg": _vm.model.roundedcorners == "large"
                          },
                          style:
                            "background-color:" +
                            (_vm.model.customcardcolor === "true" &&
                            _vm.model.showcard === "true"
                              ? _vm.model.cardcolor
                              : "") +
                            ";"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "self-center",
                              style: { width: item.imagewidth + "%" }
                            },
                            [
                              item.image
                                ? _c("v-lazy-image", {
                                    class:
                                      _vm.model.showcard === "true" ||
                                      _vm.model.cardborder === "true"
                                        ? "card-img w-full"
                                        : "card-img mb-3 w-full",
                                    attrs: {
                                      src: _vm.$helper.pathToUrl(item.image),
                                      alt: item.imagealttext
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "flex flex-grow flex-col justify-between p-0",
                              class: {
                                "p-6":
                                  _vm.model.showcard === "true" ||
                                  _vm.model.cardborder === "true"
                              }
                            },
                            [
                              _c("div", [
                                _vm.model.showtitle == "true"
                                  ? _c(
                                      "h2",
                                      {
                                        staticClass: "text-xl mb-3",
                                        style: "color:" + item.color + ";",
                                        attrs: {
                                          "data-per-inline":
                                            "model.cards." + i + ".title"
                                        }
                                      },
                                      [_vm._v(_vm._s(item.title))]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.model.showtext == "true"
                                  ? _c("div", {
                                      attrs: {
                                        "data-per-inline":
                                          "model.cards." + i + ".text"
                                      },
                                      domProps: { innerHTML: _vm._s(item.text) }
                                    })
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm.showbutton(item)
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "btn mt-3",
                                      class: {
                                        "btn-lg": item.buttonsize === "large",
                                        "btn-sm": item.buttonsize === "small",
                                        "btn-primary":
                                          item.buttoncolor === "primary",
                                        "btn-secondary":
                                          item.buttoncolor === "secondary",
                                        "btn-success":
                                          item.buttoncolor === "success",
                                        "btn-danger": item.buttoncolor === "danger",
                                        "btn-warning":
                                          item.buttoncolor === "warning",
                                        "self-start": item.buttonalign === "left",
                                        "self-center":
                                          item.buttonalign === "center",
                                        "self-end": item.buttonalign === "right",
                                        "my-3":
                                          _vm.model.cardborder !== "true" &&
                                          _vm.model.showcard !== "true"
                                      },
                                      attrs: {
                                        href: _vm.$helper.pathToUrl(
                                          item.buttonlink
                                        ),
                                        "data-per-inline":
                                          "model.cards." + i + ".buttontext"
                                      }
                                    },
                                    [_vm._v(_vm._s(item.buttontext))]
                                  )
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    ]
                  )
                }),
                0
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
