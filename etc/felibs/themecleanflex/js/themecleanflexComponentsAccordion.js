var cmpThemecleanflexComponentsAccordion = (function () {
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

    var script = {
        props: ['model'],
        data: function() {
          var numElements = this.model.accordiontoggle ? this.model.accordiontoggle.length : 0;
          return {
            active: new Array(numElements).fill(false),
            heights: new Array(numElements).fill(0),
          }
        },
        created: function created() {
          addEventListener("resize", this.setHeights);
        },
        destroyed: function destroyed() {
          removeEventListener("resize", this.setHeights);
        },
        mounted: function() {
          this.setHeights();
        },
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false }
            return this.$helper.areAllEmpty( this.model.showtitle === 'true' && this.model.title, this.model.showmedia === 'true', this.model.accordiontoggle );
          }
        },
        methods: {
          setHeights: function() {
            var this$1 = this;

            this.heights.forEach( function (item,i) {
              Vue.set(this$1.heights, i, this$1.$refs[("cardContent" + i)][0].clientHeight );}
            );
          },
          toggleItem: function toggleItem(i) {
            var this$1 = this;

            if (this.model.toggletype === 'accordion') {
              this.active.forEach( function (active,j) {
                Vue.set(this$1.active, j, j === i ? !this$1.active[j] : false);
              });
            }
            else {
              Vue.set(this.active, i, !this.active[i]);
            }
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
                _vm.model.showtitle == "true"
                  ? _c(
                      "h2",
                      {
                        staticClass: "text-xl text-center pb-4",
                        attrs: { "data-per-inline": "model.title" }
                      },
                      [_vm._v(_vm._s(_vm.model.title))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "flex flex-col -mx-3 flex-grow",
                    class: {
                      "lg:flex-row": _vm.model.mediaposition === "before",
                      "lg:flex-row-reverse": _vm.model.mediaposition === "after"
                    }
                  },
                  [
                    _vm.model.showmedia === "true"
                      ? _c(
                          "div",
                          {
                            staticClass: "img-wrapper px-0 md:px-3",
                            class: {
                              "img-wrapper rounded-none":
                                _vm.model.roundedcorners == "none",
                              "img-wrapper rounded-sm":
                                _vm.model.roundedcorners == "small",
                              "img-wrapper rounded":
                                _vm.model.roundedcorners == "medium",
                              "img-wrapper rounded-lg":
                                _vm.model.roundedcorners == "large",
                              "img-wrapper rounded-full":
                                _vm.model.roundedcorners == "full"
                            },
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
                      {
                        staticClass:
                          "accordion-container px-0 sm:mx-3 flex-grow overflow-hidden",
                        class: {
                          "bg-white": _vm.model.colorscheme === "light",
                          "bg-gray-800": _vm.model.colorscheme === "dark",
                          "border border-solid border-gray-300":
                            _vm.model.colorscheme === "light" &&
                            _vm.model.cardborder === "true",
                          "border border-solid border-gray-900":
                            _vm.model.colorscheme === "dark" &&
                            _vm.model.cardborder === "true",
                          "rounded-none": _vm.model.roundedcorners == "none",
                          "rounded-sm": _vm.model.roundedcorners == "small",
                          rounded: _vm.model.roundedcorners == "medium",
                          "rounded-lg": _vm.model.roundedcorners == "large",
                          "rounded-full": _vm.model.roundedcorners == "full"
                        }
                      },
                      _vm._l(_vm.model.accordiontoggle, function(item, i) {
                        return _c(
                          "div",
                          {
                            key: item.path || i,
                            staticClass:
                              "accordion-item border-b transition-colors duration-200 ease-in-out",
                            class: {
                              "border-b border-solid border-gray-300":
                                _vm.model.colorscheme === "light" &&
                                _vm.model.cardborder === "true",
                              "border-b border-solid border-gray-900":
                                _vm.model.colorscheme === "dark" &&
                                _vm.model.cardborder === "true",
                              "bg-secondary": _vm.active[i]
                            },
                            attrs: {
                              id: "accordion" + _vm._uid + (parseInt(i) + 1)
                            }
                          },
                          [
                            _c("h3", { staticClass: "accordion-item-header" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "accordion-toggle-button font-bold m-0 flex justify-between items-center p-3 cursor-pointer w-full",
                                  attrs: {
                                    type: "button",
                                    "aria-expanded": _vm.active[i]
                                      ? "true"
                                      : "false"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.toggleItem(i)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      attrs: {
                                        "data-per-inline":
                                          "model.accordiontoggle." + i + ".title"
                                      }
                                    },
                                    [_vm._v(_vm._s(item.title))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "svg",
                                    {
                                      staticClass:
                                        "transition-transform duration-150 ease-in-out",
                                      style:
                                        "transform:" +
                                        (_vm.active[i]
                                          ? "rotate(180deg)"
                                          : "rotate(0)") +
                                        ";",
                                      attrs: {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        focusable: "false"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "fill-rule": "evenodd",
                                          "clip-rule": "evenodd",
                                          d:
                                            "M13.293 4.29291L14.7072 5.70712L8.00008 12.4142L1.29297 5.70712L2.70718 4.29291L8.00008 9.5858L13.293 4.29291Z"
                                        }
                                      })
                                    ]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "card-content overflow-hidden transition-height",
                                style:
                                  "height:" +
                                  (_vm.active[i] ? _vm.heights[i] + "px" : "0px") +
                                  ";",
                                attrs: { role: "tabpanel" }
                              },
                              [
                                _c("div", {
                                  ref: "cardContent" + i,
                                  refInFor: true,
                                  staticClass: "p-3",
                                  attrs: {
                                    "data-per-inline":
                                      "model.accordiontoggle." + i + ".text"
                                  },
                                  domProps: { innerHTML: _vm._s(item.text) }
                                })
                              ]
                            )
                          ]
                        )
                      }),
                      0
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
