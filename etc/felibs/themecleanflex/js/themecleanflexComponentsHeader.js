var cmpThemecleanflexComponentsHeader = (function () {
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

    var script = {
        props: ['model'],
        data: function() {
          return {
            menuActive: false,
            menuHeight: 0
          }
        },
        created: function created() {
          addEventListener("resize", this.resizeHandler);
        },
        destroyed: function destroyed() {
          removeEventListener("resize", this.resizeHandler);
        },
        mounted: function() {
          var this$1 = this;

          this.menuHeight = this.$refs.autoHeight.clientHeight;
          window.addEventListener('pageRendered', function (e) {
              if (this$1.menuActive) {
                this$1.toggleMenu();
              }
          }, false);
        },
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                return this.$helper.areAllEmpty(this.model.logo, this.model.links,  this.model.buttons)
            }
        },
        methods: {
          resizeHandler: function(e) {
            var height = this.$refs.autoHeight.clientHeight;
            if (this.menuActive) { this.menuActive = false; }
            this.menuHeight = height;
          },
          toggleMenu: function(){
            this.menuActive = !this.menuActive;
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
            : _c("nav", { staticClass: "w-full" }, [
                _c(
                  "div",
                  { staticClass: "flex w-full justify-between items-center" },
                  [
                    _vm.model.logo
                      ? _c(
                          "a",
                          {
                            attrs: {
                              href: _vm.$helper.pathToUrl(_vm.model.logourl)
                            }
                          },
                          [
                            _c("img", {
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
                    _c(
                      "div",
                      {
                        staticClass: "hidden md:flex justify-end",
                        class: { "md:hidden": _vm.model.collapsed === "true" }
                      },
                      [
                        _c("themecleanflex-components-textlinks", {
                          attrs: { model: _vm.model }
                        }),
                        _vm._v(" "),
                        _c("themecleanflex-components-menubuttons", {
                          attrs: { model: _vm.model }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    (_vm.model.buttons && _vm.model.buttons.length > 0) ||
                    (_vm.model.links && _vm.model.links.length > 0)
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "font-bold text-xl cursor-pointer block md:hidden transform-rotate-90",
                            style: {
                              display:
                                _vm.model.collapsed === "true" ? "flex" : false
                            },
                            on: { click: _vm.toggleMenu }
                          },
                          [_vm._v("|||")]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: { invisible: !_vm.menuActive },
                    style:
                      "height:" +
                      (_vm.menuActive ? _vm.menuHeight + "px" : "0px") +
                      ";"
                  },
                  [
                    _c(
                      "div",
                      {
                        ref: "autoHeight",
                        staticClass: "p-4 flex flex-col md:flex-row justify-end"
                      },
                      [
                        _c("themecleanflex-components-textlinks", {
                          attrs: { model: _vm.model }
                        }),
                        _vm._v(" "),
                        _c("themecleanflex-components-menubuttons", {
                          attrs: { model: _vm.model }
                        })
                      ],
                      1
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
