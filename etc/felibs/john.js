
<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsAccordion.js -->
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsBlock.js -->
var cmpThemecleanflexComponentsBlock = (function () {
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

    var script = {
        props: {
          model: {
            type: Object
          }
        },
        data: function() {
          return {
            loadVideo: null
          }
        },
        mounted: function mounted() {
          this.$nextTick(function () {
            this.loadVideo = true;
          });

          // Add top margin to perApp to account for fixed header when sticky is true
          if( this.model.sticky === 'true' && !$peregrineApp.isAuthorMode()) {
            if( this.$refs.section.style.position === 'fixed' ){
              var height = this.$refs.section.clientHeight;
              this.$refs.section.parentElement.style.marginTop = height + 'px';
            }
          }
          //Offset height of anchor by height of the navbar and top padding
          // let navSection = document.querySelector('nav').parentElement.parentElement.parentElement
          // let navPosition = navSection.style.position
          // let navSticky = navPosition === "sticky" || navPosition === "fixed" 
          // let navOffset = navSticky ? navSection.clientHeight : 0

          // this.$refs.anchor.style.top = `0px`
          // this.$refs.anchor.style.marginTop = `-${navOffset}px`
          // this.$refs.anchor.style.paddingTop = `${navOffset}px`

        },
        computed: {          
          videoSource: function videoSource() {
            return this.loadVideo ? this.model.bgvideo + '?autoplay=1&amp;loop=1&amp;controls=0&amp;mute=1' : "";
          },
          classes: function() {
            var classObject = {};
            classObject['min-h-screen'] = this.model.fullheight == 'true';
            classObject[("elevation-" + (this.model.elevation))] = this.model.elevation > 0;
            return classObject      
          },
          colors: function() {
            var classes = {};
            if( this.model.colorscheme === '' ) { return classes; }
            classes['theme-light'] = this.model.colorscheme === 'light';
            classes['theme-dark'] = this.model.colorscheme === 'dark';
            return classes;
          },
          sticky: function() {
            var sticky = this.model.sticky === 'true';
            return sticky && !$peregrineApp.isAuthorMode() ?
            {
              position: 'sticky',
              top: '0',
              width: '100%',
              zIndex: '1000'
            } : {}
          },
          styles: function() {
            var styles = {};

            styles.paddingTop = (this.model.toppadding) + "px";
            styles.paddingBottom = (this.model.bottompadding) + "px";
            styles.position = 'relative';
            styles.overflow = 'hidden';

            if( this.model.custombackground === 'true') {
              styles.background = this.backgroundStyles();
            }

            styles.backgroundPositionX = this.model.bgxposition + '%';
            styles.backgroundPositionY = this.model.bgyposition + '%';
            styles.backgroundSize = this.model.bgsize;
            styles.backgroundRepeat = 'no-repeat';

            return styles;
          }
        },
        methods: {
          backgroundStyles: function backgroundStyles() {
              if( this.model.custombackground === 'false') { return '' }
              switch (this.model.backgroundtype) {

                case 'image':
                  var overlay = this.model.overlay === 'true' ? ((this.overlayStyle()) + ",") : ''; 
                  if(this.model.bgimage) {
                    return overlay + "url(\"" + (this.model.bgimage) + "\")"
                  } 
                  return overlay

                case 'gradient':
                  return ("linear-gradient(to right," + (this.model.bgcolor) + "," + (this.model.color2) + ")")

                case 'color':
                  return ("" + (this.model.bgcolor))
                
                default:
                  return '' 

            }
          },
          colorOpacity: function colorOpacity() {
            var hex = this.model.overlaycolor;
            return ("rgba(" + (parseInt(hex.slice(1,3),16)) + ", \n                     " + (parseInt(hex.slice(3,5),16)) + ", \n                     " + (parseInt(hex.slice(5,7),16)) + ", \n                     " + (this.model.overlayopacity / 100) + " )")
          },
          overlayStyle: function overlayStyle() {
            return ("linear-gradient(to right, " + (this.colorOpacity()) + ", " + (this.colorOpacity()) + ")")
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
        _vm.model.htmlelement || "div",
        {
          ref: "section",
          tag: "component",
          staticClass: "w-full px-5 flex flex-col justify-center",
          class: [
            _vm.classes,
            _vm.colors,
            _vm.model.component,
            _vm.model.extraclasses
          ],
          style: [_vm.styles, _vm.sticky],
          attrs: { "data-per-path": _vm.model.path, id: _vm.model.anchorname }
        },
        [
          _vm.model.custombackground === "true" &&
          _vm.model.backgroundtype == "video" &&
          _vm.model.bgvideo
            ? _c(
                "div",
                {
                  staticClass:
                    "embed-responsive embed-responsive-16by9 w-full h-full top-0 left-0",
                  style:
                    "position:" +
                    "absolute" +
                    ";pointer-events:" +
                    "none" +
                    ";z-index:" +
                    "-1" +
                    ";"
                },
                [
                  _c("iframe", {
                    staticClass: "w-full h-full",
                    attrs: { src: _vm.videoSource }
                  })
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "flex min-h-1",
              class: {
                "container mx-auto": _vm.model.blockwidth === "default",
                "w-full max-w-3xl mx-auto": _vm.model.blockwidth === "article"
              }
            },
            [_vm._t("default")],
            2
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsBreadcrumb.js -->
var cmpThemecleanflexComponentsBreadcrumb = (function () {
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

    var script = {
        props: ['model'],
        computed: {
          isEditAndEmpty: function isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) { return false }
              //return (this.model.cards.length === 0)
              return this.$helper.areAllEmpty(this.model.links)
          }
        },
        methods: {
           beforeSave: function beforeSave(data) {
               delete data.links;
               return data
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
                { staticClass: "flex flex-wrap" },
                _vm._l(_vm.model.links, function(item, i) {
                  return _c(
                    "span",
                    {
                      key: item.path || i,
                      class: { "font-bold": i === _vm.model.links.length - 1 }
                    },
                    [
                      i + 1 < _vm.model.links.length
                        ? _c(
                            "a",
                            {
                              staticClass: "pipe-after no-underline mr-2",
                              class: {
                                "text-blue-700": _vm.model.linkcolor === "primary",
                                "text-green-700": _vm.model.linkcolor === "success",
                                "text-red-700": _vm.model.linkcolor === "danger",
                                "text-orange-700":
                                  _vm.model.linkcolor === "warning",
                                "text-white": _vm.model.linkcolor === "light",
                                "text-black": _vm.model.linkcolor === "dark"
                              },
                              attrs: {
                                href: item.link + ".html",
                                "data-per-inline": "item.text"
                              }
                            },
                            [_vm._v(_vm._s(item.text))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      i + 1 === _vm.model.links.length
                        ? _c(
                            "span",
                            {
                              staticClass: "mr-2",
                              attrs: { "data-per-inline": "item.text" }
                            },
                            [_vm._v(_vm._s(item.text))]
                          )
                        : _vm._e()
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsCards.js -->
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsCarousel.js -->
var cmpThemecleanflexComponentsCarousel = (function () {
	'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var vueCarousel_min = createCommonjsModule(function (module, exports) {
	/*!
	 * vue-carousel v0.18.0-alpha
	 * (c) 2019 todd.beauchamp@ssense.com
	 * https://github.com/ssense/vue-carousel#readme
	 */
	!function(t,e){module.exports=e();}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=53)}([function(t,e,n){var r=n(30)("wks"),i=n(15),o=n(3).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r;},function(t,e){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,e,n){var r=n(3),i=n(11),o=n(6),a=n(10),s=n(29),u=function(t,e,n){var c,l,f,d,h=t&u.F,p=t&u.G,g=t&u.S,v=t&u.P,y=t&u.B,m=p?r:g?r[e]||(r[e]={}):(r[e]||{}).prototype,b=p?i:i[e]||(i[e]={}),x=b.prototype||(b.prototype={});for(c in p&&(n=e),n)f=((l=!h&&m&&void 0!==m[c])?m:n)[c],d=y&&l?s(f,r):v&&"function"==typeof f?s(Function.call,f):f,m&&a(m,c,f,t&u.U),b[c]!=f&&o(b,c,d),v&&x[c]!=f&&(x[c]=f);};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u;},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n);},function(t,e,n){var r=n(7),i=n(40),o=n(20),a=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return "value"in n&&(t[e]=n.value),t};},function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a});},function(t,e,n){var r=n(4),i=n(14);t.exports=n(5)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t};},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t};},function(t,e){t.exports=function(t){return "object"==typeof t?null!==t:"function"==typeof t};},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)};},function(t,e,n){var r=n(3),i=n(6),o=n(9),a=n(15)("src"),s=Function.toString,u=(""+s).split("toString");n(11).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var c="function"==typeof n;c&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(c&&(o(n,a)||i(n,a,t[e]?""+t[e]:u.join(String(e)))),t===r?t[e]=n:s?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)));})(Function.prototype,"toString",function(){return "function"==typeof this&&this[a]||s.call(this)});},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n);},function(t,e,n){var r=n(47),i=n(17);t.exports=function(t){return r(i(t))};},function(t,e,n){var r=n(48),i=n(33);t.exports=Object.keys||function(t){return r(t,i)};},function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},function(t,e){var n=0,r=Math.random();t.exports=function(t){return "Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))};},function(t,e,n){var r=n(17);t.exports=function(t){return Object(r(t))};},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t};},function(t,e){t.exports={};},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)};},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")};},function(t,e){t.exports=!1;},function(t,e){e.f={}.propertyIsEnumerable;},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),o=r.sources.map(function(t){return "/*# sourceURL="+r.sourceRoot+t+" */"});return [n].concat(o).concat([i]).join("\n")}return [n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0);}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a));}},e};},function(t,e,n){function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],s={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]});}return n}n.r(e),n.d(e,"default",function(){return p});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,n,i){c=n,f=i||{};var a=r(t,e);return g(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(u=o[s.id]).refs--,n.push(u);}for(e?g(a=r(t,e)):a=[],i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete o[u.id];}}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(y(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length);}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(y(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a};}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r);}if(h){var i=u++;r=s||(s=v()),e=b.bind(null,r,i,!1),n=b.bind(null,r,i,!0);}else r=v(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;if(r&&t.setAttribute("media",r),f.ssrId&&t.setAttribute(d,e.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n));}}.bind(null,r),n=function(){r.parentNode.removeChild(r);};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r);}else n();}}var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o);}}},function(t,e,n){var r=n(95);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0, n(24).default)("1c9d4ce3",r,!1,{});},function(t,e,n){var r=n(98);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0, n(24).default)("6a175419",r,!1,{});},function(t,e,n){var r=n(100);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0, n(24).default)("07c48036",r,!1,{});},function(t,e,n){var r=n(102);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0, n(24).default)("6eff00d0",r,!1,{});},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}};},function(t,e,n){var r=n(11),i=n(3),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"});},function(t,e,n){var r=n(7),i=n(67),o=n(33),a=n(32)("IE_PROTO"),s=function(){},u=function(){var t,e=n(41)("iframe"),r=o.length;for(e.style.display="none",n(69).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[a]=t):n=u(),void 0===e?n:i(n,e)};},function(t,e,n){var r=n(30)("keys"),i=n(15);t.exports=function(t){return r[t]||(r[t]=i(t))};},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");},function(t,e,n){var r=n(4).f,i=n(9),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e});};},function(t,e){e.f=Object.getOwnPropertySymbols;},function(t,e,n){var r=n(48),i=n(33).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)};},function(t,e,n){var r=n(22),i=n(14),o=n(12),a=n(20),s=n(9),u=n(40),c=Object.getOwnPropertyDescriptor;e.f=n(5)?c:function(t,e){if(t=o(t),e=a(e,!0),u)try{return c(t,e)}catch(t){}if(s(t,e))return i(!r.f.call(t,e),t[e])};},function(t,e,n){var r=n(3),i=n(9),o=n(19),a=n(85),s=n(20),u=n(1),c=n(36).f,l=n(37).f,f=n(4).f,d=n(87).trim,h=r.Number,p=h,g=h.prototype,v="Number"==o(n(31)(g)),y="trim"in String.prototype,m=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=y?e.trim():d(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return +e}for(var a,u=e.slice(2),c=0,l=u.length;c<l;c++)if((a=u.charCodeAt(c))<48||a>i)return NaN;return parseInt(u,r)}}return +e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(v?u(function(){g.valueOf.call(n);}):"Number"!=o(n))?a(new p(m(e)),n,h):m(e)};for(var b,x=n(5)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;x.length>P;P++)i(p,b=x[P])&&!i(h,b)&&f(h,b,l(p,b));h.prototype=g,g.constructor=h,n(10)(r,"Number",h);}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t};},function(t,e,n){t.exports=!n(5)&&!n(1)(function(){return 7!=Object.defineProperty(n(41)("div"),"a",{get:function(){return 7}}).a});},function(t,e,n){var r=n(8),i=n(3).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}};},function(t,e,n){var r=n(43),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0};},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)};},function(t,e,n){var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};},function(t,e,n){var r=n(46),i=n(64),o=n(18),a=n(12);t.exports=n(65)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e;},function(){var t=this._t,e=this._k,n=this._i++;return !t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries");},function(t,e,n){var r=n(0)("unscopables"),i=Array.prototype;void 0==i[r]&&n(6)(i,r,{}),t.exports=function(t){i[r][t]=!0;};},function(t,e,n){var r=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return "String"==r(t)?t.split(""):Object(t)};},function(t,e,n){var r=n(9),i=n(12),o=n(49)(!1),a=n(32)("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);for(;e.length>u;)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c};},function(t,e,n){var r=n(12),i=n(42),o=n(68);t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),l=o(a,c);if(t&&n!=n){for(;c>l;)if((s=u[l++])!=s)return !0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return !t&&-1}};},function(t,e,n){var r=n(3),i=n(11),o=n(21),a=n(51),s=n(4).f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:a.f(t)});};},function(t,e,n){e.f=n(0);},function(t,e,n){var r=n(2);r(r.S+r.F,"Object",{assign:n(96)});},function(t,e,n){t.exports=n(103);},function(t,e,n){var r=n(29),i=n(2),o=n(16),a=n(55),s=n(56),u=n(42),c=n(57),l=n(58);i(i.S+i.F*!n(60)(function(t){}),"Array",{from:function(t){var e,n,i,f,d=o(t),h="function"==typeof this?this:Array,p=arguments.length,g=p>1?arguments[1]:void 0,v=void 0!==g,y=0,m=l(d);if(v&&(g=r(g,p>2?arguments[2]:void 0,2)),void 0==m||h==Array&&s(m))for(n=new h(e=u(d.length));e>y;y++)c(n,y,v?g(d[y],y):d[y]);else for(f=m.call(d),n=new h;!(i=f.next()).done;y++)c(n,y,v?a(f,g,[i.value,y],!0):i.value);return n.length=y,n}});},function(t,e,n){var r=n(7);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}};},function(t,e,n){var r=n(18),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)};},function(t,e,n){var r=n(4),i=n(14);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n;};},function(t,e,n){var r=n(59),i=n(0)("iterator"),o=n(18);t.exports=n(11).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]};},function(t,e,n){var r=n(19),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:o?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a};},function(t,e,n){var r=n(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0;},Array.from(o,function(){throw 2});}catch(t){}t.exports=function(t,e){if(!e&&!i)return !1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return {done:n=!0}},o[r]=function(){return a},t(o);}catch(t){}return n};},function(t,e,n){n(62);var r=n(7),i=n(44),o=n(5),a=/./.toString,s=function(t){n(10)(RegExp.prototype,"toString",t,!0);};n(1)(function(){return "/a/b"!=a.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return "/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=a.name&&s(function(){return a.call(this)});},function(t,e,n){n(5)&&"g"!=/./g.flags&&n(4).f(RegExp.prototype,"flags",{configurable:!0,get:n(44)});},function(t,e,n){for(var r=n(45),i=n(13),o=n(10),a=n(3),s=n(6),u=n(18),c=n(0),l=c("iterator"),f=c("toStringTag"),d=u.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),g=0;g<p.length;g++){var v,y=p[g],m=h[y],b=a[y],x=b&&b.prototype;if(x&&(x[l]||s(x,l,d),x[f]||s(x,f,y),u[y]=d,m))for(v in r)x[v]||o(x,v,r[v],!0);}},function(t,e){t.exports=function(t,e){return {value:e,done:!!t}};},function(t,e,n){var r=n(21),i=n(2),o=n(10),a=n(6),s=n(18),u=n(66),c=n(34),l=n(70),f=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};t.exports=function(t,e,n,p,g,v,y){u(n,e,p);var m,b,x,P=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",C="values"==g,w=!1,O=t.prototype,T=O[f]||O["@@iterator"]||g&&O[g],_=T||P(g),E=g?C?P("entries"):_:void 0,j="Array"==e&&O.entries||T;if(j&&(x=l(j.call(new t)))!==Object.prototype&&x.next&&(c(x,S,!0),r||"function"==typeof x[f]||a(x,f,h)),C&&T&&"values"!==T.name&&(w=!0,_=function(){return T.call(this)}),r&&!y||!d&&!w&&O[f]||a(O,f,_),s[e]=_,s[S]=h,g)if(m={values:C?_:P("values"),keys:v?_:P("keys"),entries:E},y)for(b in m)b in O||o(O,b,m[b]);else i(i.P+i.F*(d||w),e,m);return m};},function(t,e,n){var r=n(31),i=n(14),o=n(34),a={};n(6)(a,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator");};},function(t,e,n){var r=n(4),i=n(7),o=n(13);t.exports=n(5)?Object.defineProperties:function(t,e){i(t);for(var n,a=o(e),s=a.length,u=0;s>u;)r.f(t,n=a[u++],e[n]);return t};},function(t,e,n){var r=n(43),i=Math.max,o=Math.min;t.exports=function(t,e){return (t=r(t))<0?i(t+e,0):o(t,e)};},function(t,e,n){var r=n(3).document;t.exports=r&&r.documentElement;},function(t,e,n){var r=n(9),i=n(16),o=n(32)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null};},function(t,e,n){var r=n(16),i=n(13);n(72)("keys",function(){return function(t){return i(r(t))}});},function(t,e,n){var r=n(2),i=n(11),o=n(1);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1);}),"Object",a);};},function(t,e,n){n(50)("asyncIterator");},function(t,e,n){var r=n(3),i=n(9),o=n(5),a=n(2),s=n(10),u=n(75).KEY,c=n(1),l=n(30),f=n(34),d=n(15),h=n(0),p=n(51),g=n(50),v=n(76),y=n(77),m=n(7),b=n(8),x=n(12),P=n(20),S=n(14),C=n(31),w=n(78),O=n(37),T=n(4),_=n(13),E=O.f,j=T.f,A=w.f,M=r.Symbol,N=r.JSON,k=N&&N.stringify,L=h("_hidden"),V=h("toPrimitive"),$={}.propertyIsEnumerable,I=l("symbol-registry"),D=l("symbols"),W=l("op-symbols"),F=Object.prototype,R="function"==typeof M,B=r.QObject,H=!B||!B.prototype||!B.prototype.findChild,z=o&&c(function(){return 7!=C(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=E(F,e);r&&delete F[e],j(t,e,n),r&&t!==F&&j(F,e,r);}:j,U=function(t){var e=D[t]=C(M.prototype);return e._k=t,e},X=R&&"symbol"==typeof M.iterator?function(t){return "symbol"==typeof t}:function(t){return t instanceof M},G=function(t,e,n){return t===F&&G(W,e,n),m(t),e=P(e,!0),m(n),i(D,e)?(n.enumerable?(i(t,L)&&t[L][e]&&(t[L][e]=!1),n=C(n,{enumerable:S(0,!1)})):(i(t,L)||j(t,L,S(1,{})),t[L][e]=!0),z(t,e,n)):j(t,e,n)},Y=function(t,e){m(t);for(var n,r=v(e=x(e)),i=0,o=r.length;o>i;)G(t,n=r[i++],e[n]);return t},q=function(t){var e=$.call(this,t=P(t,!0));return !(this===F&&i(D,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(D,t)||i(this,L)&&this[L][t])||e)},J=function(t,e){if(t=x(t),e=P(e,!0),t!==F||!i(D,e)||i(W,e)){var n=E(t,e);return !n||!i(D,e)||i(t,L)&&t[L][e]||(n.enumerable=!0),n}},K=function(t){for(var e,n=A(x(t)),r=[],o=0;n.length>o;)i(D,e=n[o++])||e==L||e==u||r.push(e);return r},Q=function(t){for(var e,n=t===F,r=A(n?W:x(t)),o=[],a=0;r.length>a;)!i(D,e=r[a++])||n&&!i(F,e)||o.push(D[e]);return o};R||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===F&&e.call(W,n),i(this,L)&&i(this[L],t)&&(this[L][t]=!1),z(this,t,S(1,n));};return o&&H&&z(F,t,{configurable:!0,set:e}),U(t)}).prototype,"toString",function(){return this._k}),O.f=J,T.f=G,n(36).f=w.f=K,n(22).f=q,n(35).f=Q,o&&!n(21)&&s(F,"propertyIsEnumerable",q,!0),p.f=function(t){return U(h(t))}),a(a.G+a.W+a.F*!R,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)h(Z[tt++]);for(var et=_(h.store),nt=0;et.length>nt;)g(et[nt++]);a(a.S+a.F*!R,"Symbol",{for:function(t){return i(I,t+="")?I[t]:I[t]=M(t)},keyFor:function(t){if(!X(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){H=!0;},useSimple:function(){H=!1;}}),a(a.S+a.F*!R,"Object",{create:function(t,e){return void 0===e?C(t):Y(C(t),e)},defineProperty:G,defineProperties:Y,getOwnPropertyDescriptor:J,getOwnPropertyNames:K,getOwnPropertySymbols:Q}),N&&a(a.S+a.F*(!R||c(function(){var t=M();return "[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=e=r[1],(b(e)||void 0!==t)&&!X(t))return y(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!X(e))return e}),r[1]=e,k.apply(N,r)}}),M.prototype[V]||n(6)(M.prototype,V,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0);},function(t,e,n){var r=n(15)("meta"),i=n(8),o=n(9),a=n(4).f,s=0,u=Object.isExtensible||function(){return !0},c=!n(1)(function(){return u(Object.preventExtensions({}))}),l=function(t){a(t,r,{value:{i:"O"+ ++s,w:{}}});},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!i(t))return "symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return "F";if(!e)return "E";l(t);}return t[r].i},getWeak:function(t,e){if(!o(t,r)){if(!u(t))return !0;if(!e)return !1;l(t);}return t[r].w},onFreeze:function(t){return c&&f.NEED&&u(t)&&!o(t,r)&&l(t),t}};},function(t,e,n){var r=n(13),i=n(35),o=n(22);t.exports=function(t){var e=r(t),n=i.f;if(n)for(var a,s=n(t),u=o.f,c=0;s.length>c;)u.call(t,a=s[c++])&&e.push(a);return e};},function(t,e,n){var r=n(19);t.exports=Array.isArray||function(t){return "Array"==r(t)};},function(t,e,n){var r=n(12),i=n(36).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return a.slice()}}(t):i(r(t))};},function(t,e,n){var r=n(2);r(r.S,"Math",{sign:n(80)});},function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1};},function(t,e,n){n(82)("match",1,function(t,e,n){return [function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},n]});},function(t,e,n){var r=n(6),i=n(10),o=n(1),a=n(17),s=n(0);t.exports=function(t,e,n){var u=s(t),c=n(a,u,""[t]),l=c[0],f=c[1];o(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,l),r(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}));};},function(t,e,n){var r=n(2),i=n(39),o=n(16),a=n(1),s=[].sort,u=[1,2,3];r(r.P+r.F*(a(function(){u.sort(void 0);})||!a(function(){u.sort(null);})||!n(84)(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}});},function(t,e,n){var r=n(1);t.exports=function(t,e){return !!t&&r(function(){e?t.call(null,function(){},1):t.call(null);})};},function(t,e,n){var r=n(8),i=n(86).set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t};},function(t,e,n){var r=n(8),i=n(7),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(29)(Function.call,n(37).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array);}catch(t){e=!0;}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o};},function(t,e,n){var r=n(2),i=n(17),o=n(1),a=n(88),s="["+a+"]",u=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(t,e,n){var i={},s=o(function(){return !!a[t]()||"​"!="​"[t]()}),u=i[t]=s?e(f):a[t];n&&(i[n]=u),r(r.P+r.F*s,"String",i);},f=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l;},function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";},function(t,e,n){var r=n(2),i=n(49)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(46)("includes");},function(t,e,n){var r=n(2),i=n(91);r(r.P+r.F*n(93)("includes"),"String",{includes:function(t){return !!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,n){var r=n(92),i=n(17);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))};},function(t,e,n){var r=n(8),i=n(19),o=n(0)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))};},function(t,e,n){var r=n(0)("match");t.exports=function(t){var e=/./;try{"/./"[t](e);}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return !0};},function(t,e,n){var r=n(25);n.n(r).a;},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,'\n.VueCarousel-navigation-button[data-v-453ad8cd] {\n  position: absolute;\n  top: 50%;\n  box-sizing: border-box;\n  color: #000;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n  cursor: pointer;\n  outline: none;\n}\n.VueCarousel-navigation-button[data-v-453ad8cd]:focus {\n  outline: 1px solid lightblue;\n}\n.VueCarousel-navigation-next[data-v-453ad8cd] {\n  right: 0;\n  transform: translateY(-50%) translateX(100%);\n  font-family: "system";\n}\n.VueCarousel-navigation-prev[data-v-453ad8cd] {\n  left: 0;\n  transform: translateY(-50%) translateX(-100%);\n  font-family: "system";\n}\n.VueCarousel-navigation--disabled[data-v-453ad8cd] {\n  opacity: 0.5;\n  cursor: default;\n}\n\n/* Define the "system" font family */\n@font-face {\n  font-family: system;\n  font-style: normal;\n  font-weight: 300;\n  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),\n    local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Symbol"),\n    local("Roboto-Light"), local("DroidSans"), local("Tahoma");\n}\n',""]);},function(t,e,n){var r=n(13),i=n(35),o=n(22),a=n(16),s=n(47),u=Object.assign;t.exports=!u||n(1)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t;}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=a(t),u=arguments.length,c=1,l=i.f,f=o.f;u>c;)for(var d,h=s(arguments[c++]),p=l?r(h).concat(l(h)):r(h),g=p.length,v=0;g>v;)f.call(h,d=p[v++])&&(n[d]=h[d]);return n}:u;},function(t,e,n){var r=n(26);n.n(r).a;},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.VueCarousel-pagination[data-v-438fd353] {\n  width: 100%;\n  text-align: center;\n}\n.VueCarousel-pagination--top-overlay[data-v-438fd353] {\n  position: absolute;\n  top: 0;\n}\n.VueCarousel-pagination--bottom-overlay[data-v-438fd353] {\n  position: absolute;\n  bottom: 0;\n}\n.VueCarousel-dot-container[data-v-438fd353] {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 0;\n}\n.VueCarousel-dot[data-v-438fd353] {\n  display: inline-block;\n  cursor: pointer;\n  appearance: none;\n  border: none;\n  background-clip: content-box;\n  box-sizing: content-box;\n  padding: 0;\n  border-radius: 100%;\n  outline: none;\n}\n.VueCarousel-dot[data-v-438fd353]:focus {\n  outline: 1px solid lightblue;\n}\n",""]);},function(t,e,n){var r=n(27);n.n(r).a;},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.VueCarousel-slide {\n  flex-basis: inherit;\n  flex-grow: 0;\n  flex-shrink: 0;\n  user-select: none;\n  backface-visibility: hidden;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  outline: none;\n}\n.VueCarousel-slide-adjustableHeight {\n  display: table;\n  flex-basis: auto;\n  width: 100%;\n}\n",""]);},function(t,e,n){var r=n(28);n.n(r).a;},function(t,e,n){(t.exports=n(23)(!1)).push([t.i,"\n.VueCarousel {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.VueCarousel--reverse {\n  flex-direction: column-reverse;\n}\n.VueCarousel-wrapper {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.VueCarousel-inner {\n  display: flex;\n  flex-direction: row;\n  backface-visibility: hidden;\n}\n.VueCarousel-inner--center {\n  justify-content: center;\n}\n",""]);},function(t,e,n){n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel",class:{"VueCarousel--reverse":"top"===t.paginationPosition}},[n("div",{ref:"VueCarousel-wrapper",staticClass:"VueCarousel-wrapper"},[n("div",{ref:"VueCarousel-inner",class:["VueCarousel-inner",{"VueCarousel-inner--center":t.isCenterModeEnabled}],style:{transform:"translate("+t.currentOffset+"px, 0)",transition:t.dragging?"none":t.transitionStyle,"ms-flex-preferred-size":t.slideWidth+"px","webkit-flex-basis":t.slideWidth+"px","flex-basis":t.slideWidth+"px",visibility:t.slideWidth?"visible":"hidden",height:""+t.currentHeight,"padding-left":t.padding+"px","padding-right":t.padding+"px"}},[t._t("default")],2)]),t._v(" "),t.navigationEnabled?t._t("navigation",[t.isNavigationRequired?n("navigation",{attrs:{clickTargetSize:t.navigationClickTargetSize,nextLabel:t.navigationNextLabel,prevLabel:t.navigationPrevLabel},on:{navigationclick:t.handleNavigation}}):t._e()]):t._e(),t._v(" "),t.paginationEnabled?t._t("pagination",[n("pagination",{on:{paginationclick:function(e){t.goToPage(e,"pagination");}}})]):t._e()],2)};r._withStripped=!0,n(54),n(61),n(63),n(45),n(71),n(73),n(74),n(79),n(81),n(83),n(38),n(89),n(90);var i={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0},autoplayDirection:{type:String,default:"forward"}},data:function(){return {autoplayInterval:null}},destroyed:function(){this.$isServer||(this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay));},methods:{pauseAutoplay:function(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval));},startAutoplay:function(){this.autoplay&&(this.autoplayInterval=setInterval(this.autoplayAdvancePage,this.autoplayTimeout));},restartAutoplay:function(){this.pauseAutoplay(),this.startAutoplay();},autoplayAdvancePage:function(){this.advancePage(this.autoplayDirection);}},mounted:function(){!this.$isServer&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay)),this.startAutoplay();}},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueCarousel-navigation"},[n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-prev",class:{"VueCarousel-navigation--disabled":!t.canAdvanceBackward},style:"padding: "+t.clickTargetSize+"px; margin-right: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Previous page",tabindex:t.canAdvanceBackward?0:-1},domProps:{innerHTML:t._s(t.prevLabel)},on:{click:function(e){e.preventDefault(),t.triggerPageAdvance("backward");}}}),t._v(" "),n("button",{staticClass:"VueCarousel-navigation-button VueCarousel-navigation-next",class:{"VueCarousel-navigation--disabled":!t.canAdvanceForward},style:"padding: "+t.clickTargetSize+"px; margin-left: -"+t.clickTargetSize+"px;",attrs:{type:"button","aria-label":"Next page",tabindex:t.canAdvanceForward?0:-1},domProps:{innerHTML:t._s(t.nextLabel)},on:{click:function(e){e.preventDefault(),t.triggerPageAdvance("forward");}}})])};o._withStripped=!0;var a={name:"navigation",inject:["carousel"],props:{clickTargetSize:{type:Number,default:8},nextLabel:{type:String,default:"&#9654"},prevLabel:{type:String,default:"&#9664"}},computed:{canAdvanceForward:function(){return this.carousel.canAdvanceForward||!1},canAdvanceBackward:function(){return this.carousel.canAdvanceBackward||!1}},methods:{triggerPageAdvance:function(t){this.$emit("navigationclick",t);}}};function s(t,e,n,r,i,o,a,s){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a);},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot);}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)};}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u];}return {exports:t,options:c}}n(94);var u=s(a,o,[],!1,null,"453ad8cd",null);u.options.__file="src/Navigation.vue";var c=u.exports,l=function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.carousel.pageCount>1,expression:"carousel.pageCount > 1"}],staticClass:"VueCarousel-pagination",class:(t={},t["VueCarousel-pagination--"+e.paginationPositionModifierName]=e.paginationPositionModifierName,t)},[r("div",{staticClass:"VueCarousel-dot-container",style:e.dotContainerStyle,attrs:{role:"tablist"}},e._l(e.paginationCount,function(t,n){return r("button",{key:t+"_"+n,staticClass:"VueCarousel-dot",class:{"VueCarousel-dot--active":e.isCurrentDot(n)},style:e.dotStyle(n),attrs:{"aria-hidden":"false",role:"tab",title:e.getDotTitle(n),value:e.getDotTitle(n),"aria-label":e.getDotTitle(n),"aria-selected":e.isCurrentDot(n)?"true":"false"},on:{click:function(t){e.goToPage(n);}}})}))])};l._withStripped=!0,n(52);var f={name:"pagination",inject:["carousel"],computed:{paginationPositionModifierName:function(){var t=this.carousel.paginationPosition;if(!(t.indexOf("overlay")<0))return t},paginationPropertyBasedOnPosition:function(){return this.carousel.paginationPosition.indexOf("top")>=0?"bottom":"top"},paginationCount:function(){return this.carousel&&this.carousel.scrollPerPage?this.carousel.pageCount:this.carousel.slideCount||0},dotContainerStyle:function(){var t=this.carousel;if(-1===t.maxPaginationDotCount)return {"margin-top":"".concat(2*t.paginationPadding,"px")};var e=2*t.paginationPadding,n=t.maxPaginationDotCount*(t.paginationSize+e);return {"margin-top":"".concat(2*t.paginationPadding,"px"),overflow:"hidden",width:"".concat(n,"px"),margin:"0 auto","white-space":"nowrap"}}},methods:{goToPage:function(t){this.$emit("paginationclick",t);},isCurrentDot:function(t){return t===this.carousel.currentPage},getDotTitle:function(t){return this.carousel.$children[t].title?this.carousel.$children[t].title:"Item ".concat(t)},dotStyle:function(t){var e=this.carousel,n={};if(n["margin-".concat(this.paginationPropertyBasedOnPosition)]="".concat(2*e.paginationPadding,"px"),Object.assign(n,{padding:"".concat(e.paginationPadding,"px"),width:"".concat(e.paginationSize,"px"),height:"".concat(e.paginationSize,"px"),"background-color":"".concat(this.isCurrentDot(t)?e.paginationActiveColor:e.paginationColor)}),-1===e.maxPaginationDotCount)return n;var r=e.paginationSize+2*e.paginationPadding,i=e.pageCount-e.maxPaginationDotCount,o=0-r*(e.currentPage>i?i:e.currentPage<=e.maxPaginationDotCount/2?0:e.currentPage-Math.ceil(e.maxPaginationDotCount/2)+1);return Object.assign(n,{"-webkit-transform":"translate3d(".concat(o,"px,0,0)"),transform:"translate3d(".concat(o,"px,0,0)"),"-webkit-transition":"-webkit-transform ".concat(e.speed/1e3,"s"),transition:"transform ".concat(e.speed/1e3,"s")})}}},d=(n(97),s(f,l,[],!1,null,"438fd353",null));d.options.__file="src/Pagination.vue";var h=d.exports,p=function(){var t=this.$createElement;return (this._self._c||t)("div",{staticClass:"VueCarousel-slide",class:{"VueCarousel-slide-active":this.isActive,"VueCarousel-slide-center":this.isCenter,"VueCarousel-slide-adjustableHeight":this.isAdjustableHeight},attrs:{tabindex:"-1","aria-hidden":!this.isActive,role:"tabpanel"}},[this._t("default")],2)};p._withStripped=!0;var g={name:"slide",props:["title"],data:function(){return {width:null}},inject:["carousel"],mounted:function(){this.$isServer||this.$el.addEventListener("dragstart",function(t){return t.preventDefault()}),this.$el.addEventListener(this.carousel.isTouch?"touchend":"mouseup",this.onTouchEnd);},computed:{activeSlides:function(){for(var t=this.carousel,e=t.currentPage,n=t.breakpointSlidesPerPage,r=[],i=t.$children.filter(function(t){return t.$el&&t.$el.className.indexOf("VueCarousel-slide")>=0}).map(function(t){return t._uid}),o=0;o<n;){var a=i[e*n+o];r.push(a),o++;}return r},isActive:function(){return this.activeSlides.indexOf(this._uid)>=0},isCenter:function(){var t=this.carousel.breakpointSlidesPerPage;return !(t%2==0||!this.isActive)&&this.activeSlides.indexOf(this._uid)===Math.floor(t/2)},isAdjustableHeight:function(){return this.carousel.adjustableHeight}},methods:{onTouchEnd:function(t){var e=this.carousel.isTouch&&t.changedTouches&&t.changedTouches.length>0?t.changedTouches[0].clientX:t.clientX,n=this.carousel.dragStartX-e;(0===this.carousel.minSwipeDistance||Math.abs(n)<this.carousel.minSwipeDistance)&&(this.$emit("slideclick",Object.assign({},t.currentTarget.dataset)),this.$emit("slide-click",Object.assign({},t.currentTarget.dataset)));}}},v=(n(99),s(g,p,[],!1,null,null,null));v.options.__file="src/Slide.vue";var y=v.exports;function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){return (b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var x={onwebkittransitionend:"webkitTransitionEnd",onmoztransitionend:"transitionend",onotransitionend:"oTransitionEnd otransitionend",ontransitionend:"transitionend"},P=function(){for(var t in x)if(t in window)return x[t]},S={name:"carousel",beforeUpdate:function(){this.computeCarouselWidth();},components:{Navigation:c,Pagination:h,Slide:y},data:function(){return {browserWidth:null,carouselWidth:0,currentPage:0,dragging:!1,dragMomentum:0,dragOffset:0,dragStartY:0,dragStartX:0,isTouch:"undefined"!=typeof window&&"ontouchstart"in window,offset:0,refreshRate:16,slideCount:0,transitionstart:"transitionstart",transitionend:"transitionend",currentHeight:"auto"}},mixins:[i],provide:function(){return {carousel:this}},props:{adjustableHeight:{type:Boolean,default:!1},adjustableHeightEasing:{type:String},centerMode:{type:Boolean,default:!1},easing:{type:String,validator:function(t){return -1!==["ease","linear","ease-in","ease-out","ease-in-out"].indexOf(t)||t.includes("cubic-bezier")},default:"ease"},loop:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:8},mouseDrag:{type:Boolean,default:!0},touchDrag:{type:Boolean,default:!0},navigateTo:{type:[Number,Array],default:0},navigationClickTargetSize:{type:Number,default:8},navigationEnabled:{type:Boolean,default:!1},navigationNextLabel:{type:String,default:"&#9654"},navigationPrevLabel:{type:String,default:"&#9664"},paginationActiveColor:{type:String,default:"#000000"},paginationColor:{type:String,default:"#efefef"},paginationEnabled:{type:Boolean,default:!0},paginationPadding:{type:Number,default:10},paginationPosition:{type:String,default:"bottom"},paginationSize:{type:Number,default:10},perPage:{type:Number,default:2},perPageCustom:{type:Array},resistanceCoef:{type:Number,default:20},scrollPerPage:{type:Boolean,default:!0},spacePadding:{type:Number,default:0},spacePaddingMaxOffsetFactor:{type:Number,default:0},speed:{type:Number,default:500},tagName:{type:String,default:"slide"},value:{type:Number},maxPaginationDotCount:{type:Number,default:-1},rtl:{type:Boolean,default:!1}},watch:{value:function(t){t!==this.currentPage&&(this.goToPage(t),this.render());},navigateTo:{immediate:!0,handler:function(t){var e=this;"object"===b(t)?(0==t[1]&&(this.dragging=!0,setTimeout(function(){e.dragging=!1;},this.refreshRate)),this.$nextTick(function(){e.goToPage(t[0]);})):this.$nextTick(function(){e.goToPage(t);});}},currentPage:function(t){this.$emit("pageChange",t),this.$emit("page-change",t),this.$emit("input",t);},autoplay:function(t){!1===t?this.pauseAutoplay():this.restartAutoplay();}},computed:{breakpointSlidesPerPage:function(){if(!this.perPageCustom)return this.perPage;var t=this.perPageCustom,e=this.browserWidth,n=t.sort(function(t,e){return t[0]>e[0]?-1:1}).filter(function(t){return e>=t[0]});return n[0]&&n[0][1]||this.perPage},canAdvanceForward:function(){return this.loop||this.offset<this.maxOffset},canAdvanceBackward:function(){return this.loop||this.currentPage>0},currentPerPage:function(){return !this.perPageCustom||this.$isServer?this.perPage:this.breakpointSlidesPerPage},currentOffset:function(){return this.isCenterModeEnabled?0:this.rtl?1*(this.offset-this.dragOffset):-1*(this.offset+this.dragOffset)},isHidden:function(){return this.carouselWidth<=0},maxOffset:function(){return Math.max(this.slideWidth*(this.slideCount-this.currentPerPage)-this.spacePadding*this.spacePaddingMaxOffsetFactor,0)},pageCount:function(){return this.scrollPerPage?Math.ceil(this.slideCount/this.currentPerPage):this.slideCount-this.currentPerPage+1},slideWidth:function(){return (this.carouselWidth-2*this.spacePadding)/this.currentPerPage},isNavigationRequired:function(){return this.slideCount>this.currentPerPage},isCenterModeEnabled:function(){return this.centerMode&&!this.isNavigationRequired},transitionStyle:function(){var t="".concat(this.speed/1e3,"s"),e="".concat(t," ").concat(this.easing," transform");return this.adjustableHeight?"".concat(e,", height ").concat(t," ").concat(this.adjustableHeightEasing||this.easing):e},padding:function(){var t=this.spacePadding;return t>0&&t}},methods:{getNextPage:function(){return this.currentPage<this.pageCount-1?this.currentPage+1:this.loop?0:this.currentPage},getPreviousPage:function(){return this.currentPage>0?this.currentPage-1:this.loop?this.pageCount-1:this.currentPage},advancePage:function(t){t&&"backward"===t&&this.canAdvanceBackward?this.goToPage(this.getPreviousPage(),"navigation"):(!t||t&&"backward"!==t)&&this.canAdvanceForward&&this.goToPage(this.getNextPage(),"navigation");},goToLastSlide:function(){var t=this;this.dragging=!0,setTimeout(function(){t.dragging=!1;},this.refreshRate),this.$nextTick(function(){t.goToPage(t.pageCount);});},attachMutationObserver:function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){var n={attributes:!0,data:!0};if(this.adjustableHeight&&(n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){m(t,e,n[e]);});}return t}({},n,{childList:!0,subtree:!0,characterData:!0})),this.mutationObserver=new e(function(){t.$nextTick(function(){t.computeCarouselWidth(),t.computeCarouselHeight();});}),this.$parent.$el)for(var r=this.$el.getElementsByClassName("VueCarousel-inner"),i=0;i<r.length;i++)this.mutationObserver.observe(r[i],n);}},handleNavigation:function(t){this.advancePage(t),this.pauseAutoplay(),this.$emit("navigation-click",t);},detachMutationObserver:function(){this.mutationObserver&&this.mutationObserver.disconnect();},getBrowserWidth:function(){return this.browserWidth=window.innerWidth,this.browserWidth},getCarouselWidth:function(){for(var t=this.$el.getElementsByClassName("VueCarousel-inner"),e=0;e<t.length;e++)t[e].clientWidth>0&&(this.carouselWidth=t[e].clientWidth||0);return this.carouselWidth},getCarouselHeight:function(){var t=this;if(!this.adjustableHeight)return "auto";var e=this.currentPerPage*(this.currentPage+1)-1,n=function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(Array(this.currentPerPage)).map(function(n,r){return t.getSlide(e+r)}).reduce(function(t,e){return Math.max(t,e&&e.$el.clientHeight||0)},0);return this.currentHeight=0===n?"auto":"".concat(n,"px"),this.currentHeight},getSlideCount:function(){var t=this;this.slideCount=this.$slots&&this.$slots.default&&this.$slots.default.filter(function(e){return e.tag&&null!==e.tag.match("^vue-component-\\d+-".concat(t.tagName,"$"))}).length||0;},getSlide:function(t){var e=this;return this.$children.filter(function(t){return null!==t.$vnode.tag.match("^vue-component-\\d+-".concat(e.tagName,"$"))})[t]},goToPage:function(t,e){t>=0&&t<=this.pageCount&&(this.offset=this.scrollPerPage?Math.min(this.slideWidth*this.currentPerPage*t,this.maxOffset):this.slideWidth*t,this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.currentPage=t,"pagination"===e&&(this.pauseAutoplay(),this.$emit("pagination-click",t)));},onStart:function(t){2!=t.button&&(document.addEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0),this.startTime=t.timeStamp,this.dragging=!0,this.dragStartX=this.isTouch?t.touches[0].clientX:t.clientX,this.dragStartY=this.isTouch?t.touches[0].clientY:t.clientY);},onEnd:function(t){this.autoplay&&!this.autoplayHoverPause&&this.restartAutoplay(),this.pauseAutoplay();var e=this.isTouch?t.changedTouches[0].clientX:t.clientX,n=this.dragStartX-e;if(this.dragMomentum=n/(t.timeStamp-this.startTime),0!==this.minSwipeDistance&&Math.abs(n)>=this.minSwipeDistance){var r=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth;this.dragOffset=this.dragOffset+Math.sign(n)*(r/2);}this.rtl?this.offset-=this.dragOffset:this.offset+=this.dragOffset,this.dragOffset=0,this.dragging=!1,this.render(),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onEnd,!0),document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag,!0);},onDrag:function(t){var e=this.isTouch?t.touches[0].clientX:t.clientX,n=this.isTouch?t.touches[0].clientY:t.clientY,r=this.dragStartX-e,i=this.dragStartY-n;if(!(this.isTouch&&Math.abs(r)<Math.abs(i))){t.stopImmediatePropagation(),this.dragOffset=r;var o=this.offset+this.dragOffset;this.rtl?0==this.offset&&this.dragOffset>0?this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset):this.offset==this.maxOffset&&this.dragOffset<0&&(this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset)):o<0?this.dragOffset=-Math.sqrt(-this.resistanceCoef*this.dragOffset):o>this.maxOffset&&(this.dragOffset=Math.sqrt(this.resistanceCoef*this.dragOffset));}},onResize:function(){var t=this;this.computeCarouselWidth(),this.computeCarouselHeight(),this.dragging=!0,this.render(),setTimeout(function(){t.dragging=!1;},this.refreshRate);},render:function(){this.rtl?this.offset-=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth:this.offset+=Math.max(1-this.currentPerPage,Math.min(Math.round(this.dragMomentum),this.currentPerPage-1))*this.slideWidth;var t=this.scrollPerPage?this.slideWidth*this.currentPerPage:this.slideWidth,e=t*Math.floor(this.slideCount/(this.currentPerPage-1)),n=e+this.slideWidth*(this.slideCount%this.currentPerPage);this.offset>(e+n)/2?this.offset=n:this.offset=t*Math.round(this.offset/t),this.offset=Math.max(0,Math.min(this.offset,this.maxOffset)),this.currentPage=this.scrollPerPage?Math.round(this.offset/this.slideWidth/this.currentPerPage):Math.round(this.offset/this.slideWidth);},computeCarouselWidth:function(){this.getSlideCount(),this.getBrowserWidth(),this.getCarouselWidth(),this.setCurrentPageInBounds();},computeCarouselHeight:function(){this.getCarouselHeight();},setCurrentPageInBounds:function(){if(!this.canAdvanceForward&&this.scrollPerPage){var t=this.pageCount-1;this.currentPage=t>=0?t:0,this.offset=Math.max(0,Math.min(this.offset,this.maxOffset));}},handleTransitionStart:function(){this.$emit("transitionStart"),this.$emit("transition-start");},handleTransitionEnd:function(){this.$emit("transitionEnd"),this.$emit("transition-end");}},mounted:function(){window.addEventListener("resize",function(t,e,n){var r;return function(){var i=n&&!r;clearTimeout(r),r=setTimeout(function(){r=null,n||t.apply(void 0);},e),i&&t.apply(void 0);}}(this.onResize,this.refreshRate)),(this.isTouch&&this.touchDrag||this.mouseDrag)&&this.$refs["VueCarousel-wrapper"].addEventListener(this.isTouch?"touchstart":"mousedown",this.onStart),this.attachMutationObserver(),this.computeCarouselWidth(),this.computeCarouselHeight(),this.transitionstart=P(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionstart,this.handleTransitionStart),this.transitionend=P(),this.$refs["VueCarousel-inner"].addEventListener(this.transitionend,this.handleTransitionEnd),this.$emit("mounted"),"backward"===this.autoplayDirection&&this.goToLastSlide();},beforeDestroy:function(){this.detachMutationObserver(),window.removeEventListener("resize",this.getBrowserWidth),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionstart,this.handleTransitionStart),this.$refs["VueCarousel-inner"].removeEventListener(this.transitionend,this.handleTransitionEnd),this.$refs["VueCarousel-wrapper"].removeEventListener(this.isTouch?"touchstart":"mousedown",this.onStart);}},C=(n(101),s(S,r,[],!1,null,null,null));C.options.__file="src/Carousel.vue";var w=C.exports;n.d(e,"Carousel",function(){return w}),n.d(e,"Slide",function(){return y}),e.default={install:function(t){t.component("carousel",w),t.component("slide",y);}};}])});
	});

	unwrapExports(vueCarousel_min);
	var vueCarousel_min_1 = vueCarousel_min.Carousel;
	var vueCarousel_min_2 = vueCarousel_min.Slide;
	var vueCarousel_min_3 = vueCarousel_min.VueCarousel;

	//

	var script = {
	  props: ['model'],
	  computed: {
	    name: function name() {
	        return this.model.path.split('/').slice(1).join('-').slice(4)
	    },
	    isEditAndEmpty: function isEditAndEmpty() {
	        if(!$peregrineApp.isAuthorMode()) { return false }
	        //return (this.model.cards.length === 0)
	        return this.$helper.areAllEmpty(this.model.slides)
	    }
	  },
	  components: {
	    Carousel: vueCarousel_min_1,
	    Slide: vueCarousel_min_2
	  },
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
	            "carousel",
	            {
	              staticClass: "w-full",
	              attrs: {
	                autoplay: _vm.model.autoplay === "true",
	                navigationEnabled: _vm.model.controls === "true",
	                paginationEnabled: _vm.model.indicators === "true",
	                autoplayHoverPause: _vm.model.pause === "true",
	                centerMode: true,
	                loop: _vm.model.wrap === "true",
	                autoplayTimeout: _vm.model.interval * 1000,
	                perPage: _vm.model.itemsperpage
	              }
	            },
	            _vm._l(_vm.model.slides, function(item, i) {
	              return _c("slide", { key: item.path || i }, [
	                _c(
	                  "div",
	                  {
	                    staticClass:
	                      "relative overflow-hidden flex flex-col justify-center",
	                    style:
	                      "height:" +
	                      _vm.model.carouselheight +
	                      "vh;maxHeight:" +
	                      _vm.model.carouselheight +
	                      "vh;"
	                  },
	                  [
	                    item.slidelink
	                      ? _c("a", {
	                          staticClass: "absolute inset-0 z-10",
	                          attrs: { href: item.slidelink }
	                        })
	                      : _vm._e(),
	                    _vm._v(" "),
	                    item.imagepath
	                      ? _c("v-lazy-image", {
	                          staticClass:
	                            "absolute top-0 w-full h-full object-center",
	                          class:
	                            item.imagefit === "cover"
	                              ? "object-cover"
	                              : "object-contain",
	                          attrs: { src: item.imagepath, alt: item.alt }
	                        })
	                      : _vm._e(),
	                    _vm._v(" "),
	                    _c(
	                      "figcaption",
	                      {
	                        staticClass:
	                          "relative w-full h-full flex flex-col justify-center items-center text-lg font-medium",
	                        class: {
	                          "pb-12": _vm.model.indicators === "true",
	                          "with-bg":
	                            _vm.model.captionbg === "true" &&
	                            (_vm.model.colorscheme === "light" ||
	                              _vm.model.colorscheme === "dark")
	                        }
	                      },
	                      [
	                        _c("div", { staticClass: "container" }, [
	                          item.text
	                            ? _c("div", {
	                                staticClass:
	                                  "px-4 sm:px-0 sm:w-full md:w-4/5 lg:w-1/2",
	                                attrs: {
	                                  "data-per-inline":
	                                    "model.slides." + i + ".text"
	                                },
	                                domProps: { innerHTML: _vm._s(item.text) }
	                              })
	                            : _vm._e()
	                        ])
	                      ]
	                    )
	                  ],
	                  1
	                )
	              ])
	            }),
	            1
	          )
	    ],
	    1
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsCode.js -->
var cmpThemecleanflexComponentsCode = (function () {
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

    var script = {
        props: ['model'],
        computed: {
          code: function code() {
            var lang = this.model.language;
            if(window.Prism) {
              if(!lang || !Prism.languages[lang]) {
                lang = 'javascript';
              }
              return Prism.highlight(this.model.text ? this.model.text : '', Prism.languages[lang], lang)
            } else {
              return this.model.text;
            }
          },
        	isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false }
            return this.$helper.areAllEmpty(this.model.text);
          }
        },
        mounted: function() {
          if(window.Prism) {
            Prism.highlightAllUnder(this.$el);
          }
        },
        updated: function() {
          if(window.Prism) {
            Prism.highlightAllUnder(this.$el);
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
                "pre",
                {
                  staticClass: "overflow-x-auto",
                  class:
                    "language-" +
                    _vm.model.language +
                    (_vm.model.classes ? " " + _vm.model.classes : "")
                },
                [
                  _c("code", {
                    class: "language-" + _vm.model.language,
                    attrs: { "data-per-inline": "code" },
                    domProps: { innerHTML: _vm._s(_vm.code) }
                  }),
                  _vm._v("\n  ")
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsContainer.js -->
var cmpThemecleanflexComponentsContainer = (function () {
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

    var script = {
        props: ['model']
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
      var _obj;
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        _vm.model.htmlelement || "div",
        {
          tag: "component",
          class: ((_obj = {
            "lg:flex-grow": _vm.model.width === "auto",
            "lg:w-full": _vm.model.width === "custom" && _vm.model.colspan == 12
          }),
          (_obj["lg:w-" + _vm.model.colspan + "/12 lg:flex-grow-0"] =
            _vm.model.width === "custom" && _vm.model.colspan < 12),
          (_obj["md:flex-grow"] = _vm.model.tabletwidth === "auto"),
          (_obj["md:w-full"] =
            _vm.model.tabletwidth === "custom" && _vm.model.tabletcolspan == 12),
          (_obj["md:w-" + _vm.model.tabletcolspan + "/12 md:flex-grow-0"] =
            _vm.model.tabletwidth === "custom" && _vm.model.tabletcolspan < 12),
          (_obj["flex-grow"] = _vm.model.mobilewidth === "auto"),
          (_obj["w-full"] =
            _vm.model.mobilewidth === "custom" && _vm.model.mobilecolspan == 12),
          (_obj["w-" + _vm.model.mobilecolspan + "/12 flex-grow-0"] =
            _vm.model.mobilewidth === "custom" && _vm.model.mobilecolspan < 12),
          (_obj["" + _vm.model.component] = _vm.model.component),
          _obj),
          attrs: { "data-per-path": _vm.model.path }
        },
        [
          (_vm.model.fromTemplate &&
          _vm.model.children.length > 0 &&
          _vm.model.children[0].fromTemplate
          ? false
          : _vm.model.children.length > 0)
            ? _c("pagerendervue-components-placeholder", {
                attrs: {
                  model: {
                    path: _vm.model.path,
                    component: _vm.model.component,
                    location: "before"
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.model.children.length === 0
            ? _c("pagerendervue-components-placeholder", {
                staticClass: "per-drop-target-empty",
                attrs: {
                  model: {
                    path: _vm.model.path,
                    component: _vm.model.component + ": drop component here",
                    location: "into"
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.model.children, function(child, i) {
            return [
              _c(child.component, {
                key: child.path || i,
                tag: "component",
                attrs: { model: child }
              })
            ]
          }),
          _vm._v(" "),
          (_vm.model.fromTemplate &&
          _vm.model.children.length > 0 &&
          _vm.model.children[0].fromTemplate
          ? false
          : _vm.model.children.length > 0)
            ? _c("pagerendervue-components-placeholder", {
                attrs: {
                  model: {
                    path: _vm.model.path,
                    component: _vm.model.component,
                    location: "after"
                  }
                }
              })
            : _vm._e()
        ],
        2
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsContainerblock.js -->
var cmpThemecleanflexComponentsContainerblock = (function () {
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

    var script = {
        props: ['model']
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
          _c(
            "div",
            {
              staticClass: "flex flex-wrap w-full",
              class: _vm.model.alignitems,
              attrs: { "data-per-path": _vm.model.path }
            },
            [
              (_vm.model.fromTemplate &&
              _vm.model.children.length > 0 &&
              _vm.model.children[0].fromTemplate
              ? false
              : _vm.model.children.length > 0)
                ? _c("pagerendervue-components-placeholder", {
                    attrs: {
                      model: {
                        path: _vm.model.path,
                        component: _vm.model.component,
                        location: "before"
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.model.children.length === 0
                ? _c("pagerendervue-components-placeholder", {
                    staticClass: "per-drop-target-empty",
                    attrs: {
                      model: {
                        path: _vm.model.path,
                        component: _vm.model.component + ": drop component here",
                        location: "into"
                      }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.model.children, function(child, i) {
                return [
                  _c(child.component, {
                    key: child.path || i,
                    tag: "component",
                    attrs: { model: child }
                  })
                ]
              }),
              _vm._v(" "),
              (_vm.model.fromTemplate &&
              _vm.model.children.length > 0 &&
              _vm.model.children[0].fromTemplate
              ? false
              : _vm.model.children.length > 0)
                ? _c("pagerendervue-components-placeholder", {
                    attrs: {
                      model: {
                        path: _vm.model.path,
                        component: _vm.model.component,
                        location: "after"
                      }
                    }
                  })
                : _vm._e()
            ],
            2
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsFooter.js -->
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsHeader.js -->
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsMedia.js -->
var cmpThemecleanflexComponentsMedia = (function () {
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

  var script = {
    props: ["model"],
    data: function() {
      return {
        loadVideo: null
      }
    },
    mounted: function() {
      this.$nextTick(function () {
        this.loadVideo = true;
      });
    },
    computed: {
      videoSource: function videoSource() {
        return this.loadVideo ? this.$helper.pathToUrl(this.model.videosrc) : ""
      },
      noMedia: function noMedia() {
        var ref = this.model;
        var mediatype = ref.mediatype;
        var videosrc = ref.videosrc;
        var imagesrc = ref.imagesrc;
        if (mediatype !== 'image' && mediatype !== 'video') { return true; }
        if (mediatype === 'image' && (imagesrc == null || imagesrc == "")) { return true; }
        if (mediatype === 'video' && (videosrc == null || videosrc == "")) { return true; }
        return false
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
      "div",
      { staticClass: "w-full" },
      [
        _vm.noMedia
          ? _c("h3", { staticClass: "w-full text-center" }, [
              _vm._v("No media content")
            ])
          : _vm.model.mediatype === "video"
          ? _c(
              "div",
              {
                staticClass:
                  "relative block w-full p-0 overflow-hidden aspect-ratio-16/9"
              },
              [
                _c("iframe", {
                  staticClass: "absolute inset-0 w-full h-full",
                  attrs: {
                    title: _vm.model.mediatitle,
                    src: _vm.videoSource,
                    frameborder: "0",
                    allowfullscreen: ""
                  }
                })
              ]
            )
          : _vm.model.mediatype === "image"
          ? _c("v-lazy-image", {
              staticClass: "w-full",
              attrs: {
                src: _vm.$helper.pathToUrl(_vm.model.imagesrc),
                alt: _vm.model.mediatitle
              }
            })
          : _vm._e()
      ],
      1
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsMediablock.js -->
var cmpThemecleanflexComponentsMediablock = (function () {
	'use strict';

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
		                //return !(this.model.imagesrc || this.model.videosrc)
		                return this.$helper.areAllEmpty(this.model.imagesrc , this.model.videosrc)
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
	      _c(
	        "div",
	        {
	          staticClass: "mx-auto",
	          style: { flexBasis: _vm.model.mediawidth + "%" }
	        },
	        [
	          _c("themecleanflex-components-media", { attrs: { model: _vm.model } })
	        ],
	        1
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsMediavisible.js -->
var cmpThemecleanflexComponentsMediavisible = (function () {
  'use strict';

  /**
   * v-lazy-image v1.3.2
   * (c) 2019 Alex Jover Morales <alexjovermorales@gmail.com>
   * @license MIT
   */

  var VLazyImageComponent = {
    props: {
      src: {
        type: String,
        required: true
      },
      srcPlaceholder: {
        type: String,
        default: ""
      },
      srcset: {
        type: String
      },
      intersectionOptions: {
        type: Object,
        default: function () { return ({}); }
      },
      usePicture: {
        type: Boolean,
        default: false
      }
    },
    inheritAttrs: false,
    data: function () { return ({ observer: null, intersected: false, loaded: false }); },
    computed: {
      srcImage: function srcImage() {
        return this.intersected ? this.src : this.srcPlaceholder;
      },
      srcsetImage: function srcsetImage() {
        return this.intersected && this.srcset ? this.srcset : false;
      }
    },
    methods: {
      load: function load() {
        if (this.$el.getAttribute("src") !== this.srcPlaceholder) {
          this.loaded = true;
          this.$emit("load");
        }
      }
    },
    render: function render(h) {
      var img = h("img", {
        attrs: {
          src: this.srcImage,
          srcset: this.srcsetImage
        },
        domProps: this.$attrs,
        class: {
          "v-lazy-image": true,
          "v-lazy-image-loaded": this.loaded
        },
        on: { load: this.load }
      });
      if (this.usePicture) {
        return h("picture", { on: { load: this.load } }, this.intersected ? [ this.$slots.default, img ] : [] );
      } else {
        return img;
      }
    },
    mounted: function mounted() {
      var this$1 = this;

      if ("IntersectionObserver" in window) {
        this.observer = new IntersectionObserver(function (entries) {
          var image = entries[0];
          if (image.isIntersecting) {
            this$1.intersected = true;
            this$1.observer.disconnect();
            this$1.$emit("intersect");
          }
        }, this.intersectionOptions);
        this.observer.observe(this.$el);
      } else {
        console.error(
          "v-lazy-image: this browser doesn't support IntersectionObserver. Please use this polyfill to make it work https://github.com/w3c/IntersectionObserver/tree/master/polyfill."
        );
      }
    },
    destroyed: function destroyed() {
      this.observer.disconnect();
    }
  };

  //
  var script = {
    props: ["model"],
    components: {
      VLazyImage: VLazyImageComponent
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
      "div",
      { staticClass: "w-full" },
      [
        _vm.model.mediatype === "video"
          ? _c(
              "div",
              { staticClass: "embed-responsive embed-responsive-16by9" },
              [
                _c("iframe", {
                  attrs: {
                    title: _vm.model.mediatitle,
                    src: _vm.$helper.pathToUrl(_vm.model.videosrc),
                    frameborder: "0",
                    allowfullscreen: ""
                  }
                })
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.model.mediatype === "image"
          ? _c("v-lazy-image", {
              staticClass: "w-full",
              attrs: {
                src: _vm.$helper.pathToUrl(_vm.model.imagesrc),
                alt: _vm.model.mediatitle
              }
            })
          : _vm._e()
      ],
      1
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsMenubuttons.js -->
var cmpThemecleanflexComponentsMenubuttons = (function () {
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

    var script = {
        props: ['model']
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
        "div",
        { staticClass: "flex justify-end items-center md:flex-row flex-col" },
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
                "text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white":
                  item.buttoncolor === "secondary",
                "btn-success": item.buttoncolor === "success",
                "btn-danger": item.buttoncolor === "danger",
                "btn-warning": item.buttoncolor === "warning",
                "btn-light": item.buttoncolor === "light",
                "btn-dark": item.buttoncolor === "dark"
              },
              attrs: {
                href: _vm.$helper.pathToUrl(item.buttonlink),
                "data-per-inline": "model.buttons." + i + ".buttontext"
              }
            },
            [_vm._v(_vm._s(item.buttontext))]
          )
        }),
        0
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsNavigation.js -->
var cmpThemecleanflexComponentsNavigation = (function () {
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
        methods: {
            beforeSave: function beforeSave(data) {
                delete data.childrenPages;
                return data
            }
        },
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false; }
            if (this.$helper.areAllEmpty(this.model.rootpage)) { return 'Please choose a root page'; }
            if (this.model.childrenPages && this.model.childrenPages.length == 0) { return 'Chosen root page has no children (May need reload after root change)'; }
            return false;
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

    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
      return function (id, style) {
        return addStyle(id, style);
      };
    }
    var HEAD = document.head || document.getElementsByTagName('head')[0];
    var styles = {};

    function addStyle(id, css) {
      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = {
        ids: new Set(),
        styles: []
      });

      if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;

        if (css.map) {
          // https://developer.chrome.com/devtools/docs/javascript-debugging
          // this makes source maps inside style tags work properly in Chrome
          code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

          code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
        }

        if (!style.element) {
          style.element = document.createElement('style');
          style.element.type = 'text/css';
          if (css.media) style.element.setAttribute('media', css.media);
          HEAD.appendChild(style.element);
        }

        if ('styleSheet' in style.element) {
          style.styles.push(code);
          style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
        } else {
          var index = style.ids.size - 1;
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    }

    var browser = createInjector;

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
                _vm._v(_vm._s(_vm.isEditAndEmpty))
              ])
            : _c(
                "nav",
                {
                  staticClass: "flex md:flex-row flex-col z-10 w-full",
                  class: {
                    "justify-start": _vm.model.justifyitems === "start",
                    "justify-center": _vm.model.justifyitems === "center",
                    "justify-end": _vm.model.justifyitems === "end"
                  }
                },
                _vm._l(_vm.model.childrenPages, function(child, i) {
                  return _c(
                    "div",
                    {
                      key: child.path || i,
                      staticClass: "flex flex-col dropdown-container"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "p-3 no-underline",
                          class:
                            _vm.model.colorscheme === "dark"
                              ? "text-gray-200 hover:bg-gray-200 hover:text-black"
                              : "text-black hover:bg-black hover:text-gray-200",
                          attrs: {
                            "data-per-inline":
                              "model.childrenPages." + i + ".title",
                            href:
                              child.childrenPages.length > 0 ? false : child.path
                          }
                        },
                        [_vm._v(_vm._s(child.title))]
                      ),
                      _vm._v(" "),
                      child.hasChildren &&
                      child.childrenPages &&
                      child.childrenPages.length > 0
                        ? _c("div", { staticClass: "self-stretch" }, [
                            _c(
                              "div",
                              {
                                staticClass: "flex flex-col dropdown-list",
                                class:
                                  _vm.model.colorscheme === "dark"
                                    ? "theme-dark"
                                    : "theme-light"
                              },
                              _vm._l(child.childrenPages, function(subchild, i) {
                                return _c(
                                  "a",
                                  {
                                    key: subchild.path || i,
                                    staticClass: "p-3 no-underline",
                                    class:
                                      _vm.model.colorscheme === "dark"
                                        ? "text-gray-200 hover:bg-gray-200 hover:text-black"
                                        : "text-black hover:bg-black hover:text-gray-200",
                                    attrs: {
                                      "data-per-inline":
                                        "model.childrenPages." + i + ".title",
                                      href: subchild.path,
                                      "data-per-inline": "subchild.title"
                                    }
                                  },
                                  [_vm._v(_vm._s(subchild.title))]
                                )
                              }),
                              0
                            )
                          ])
                        : _vm._e()
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
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-1357aa3c_0", { source: "\n.dropdown-list {\n  display: none;\n  position: fixed;\n}\n.dropdown-container:hover .dropdown-list, .dropdown-container:focus-within .dropdown-list {\n  display: flex;\n}\n\n", map: {"version":3,"sources":["/home/rr/ws/kestrel1/tcfinline/ui.apps/src/main/content/jcr_root/apps/themecleanflex/components/navigation/template.vue"],"names":[],"mappings":";AA+CA;EACA,aAAA;EACA,eAAA;AACA;AACA;EACA,aAAA;AACA","file":"template.vue","sourcesContent":["<template>\n  <themecleanflex-components-block v-bind:model=\"model\">\n    <div class=\"p-5\" v-if=\"isEditAndEmpty\">{{isEditAndEmpty}}</div>\n    <nav class=\"flex md:flex-row flex-col z-10 w-full\"\n    v-bind:class=\"{\n            'justify-start': model.justifyitems === 'start',\n            'justify-center': model.justifyitems === 'center',\n            'justify-end': model.justifyitems === 'end'\n        }\" v-else>\n      <div class=\"flex flex-col dropdown-container\" v-for=\"(child, i) in model.childrenPages\"\n      :key=\"child.path || i\">\n        <a class=\"p-3 no-underline\" v-bind:data-per-inline=\"`model.childrenPages.${i}.title`\"\n        v-bind:href=\"child.childrenPages.length &gt; 0 ? false : child.path\" v-bind:class=\"model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'\">{{child.title}}</a>\n        <div class=\"self-stretch\" v-if=\"child.hasChildren &amp;&amp; child.childrenPages &amp;&amp; child.childrenPages.length &gt; 0\">\n          <div class=\"flex flex-col dropdown-list\" v-bind:class=\"model.colorscheme === 'dark' ? 'theme-dark': 'theme-light'\">\n            <a class=\"p-3 no-underline\" v-bind:data-per-inline=\"`model.childrenPages.${i}.title`\"\n            v-bind:href=\"subchild.path\" v-bind:class=\"model.colorscheme === 'dark' ? 'text-gray-200 hover:bg-gray-200 hover:text-black' : 'text-black hover:bg-black hover:text-gray-200'\"\n            v-for=\"(subchild, i) in child.childrenPages\" :key=\"subchild.path || i\"\n            data-per-inline=\"subchild.title\">{{subchild.title}}</a>\n          </div>\n        </div>\n      </div>\n    </nav>\n  </themecleanflex-components-block>\n</template>\n\n<script>\n    export default {\n        props: ['model'],\n        methods: {\n            beforeSave(data) {\n                delete data.childrenPages\n                return data\n            }\n        },\n        computed: {\n        \tisEditAndEmpty() {\n            if(!$peregrineApp.isAuthorMode()) return false;\n            if (this.$helper.areAllEmpty(this.model.rootpage)) return 'Please choose a root page';\n            if (this.model.childrenPages && this.model.childrenPages.length == 0) return 'Chosen root page has no children (May need reload after root change)';\n            return false;\n          }\n        }\n    }\n</script>\n\n<style>\n  .dropdown-list {\n    display: none;\n    position: fixed;\n  }\n  .dropdown-container:hover .dropdown-list, .dropdown-container:focus-within .dropdown-list {\n    display: flex;\n  }\n  \n</style>\n\n"]}, media: undefined });

      };
      /* scoped */
      var __vue_scope_id__ = undefined;
      /* module identifier */
      var __vue_module_identifier__ = undefined;
      /* functional template */
      var __vue_is_functional_template__ = false;
      /* style inject SSR */
      

      
      var template = normalizeComponent_1(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        browser,
        undefined
      );

    return template;

}());

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsNote.js -->
var cmpThemecleanflexComponentsNote = (function () {
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

    var script = {
        props: ['model']
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
          _c(
            "div",
            {
              staticClass: "w-full px-5 py-2 border-l-4 shadow-md",
              class: {
                "note-note": _vm.model.notetype === "note",
                "note-tip": _vm.model.notetype === "tip",
                "note-warning": _vm.model.notetype === "warning",
                "note-important": _vm.model.notetype === "important",
                "note-caution": _vm.model.notetype === "caution"
              }
            },
            [
              _c("div", {
                staticClass: "text-black",
                attrs: { "data-per-inline": "model.text" },
                domProps: { innerHTML: _vm._s(_vm.model.text) }
              })
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsPage.js -->
var cmpThemecleanflexComponentsPage = (function () {
  'use strict';

  /**
   * v-lazy-image v1.3.2
   * (c) 2019 Alex Jover Morales <alexjovermorales@gmail.com>
   * @license MIT
   */

  //
  var script = {
      props: [ 'model' ],
      computed: {
          renderPlaceholderEmpty: function renderPlaceholderEmpty() {
              return this.model.children.length === 0
          },
          renderPlaceholder: function renderPlaceholder() {
              if( this.model.fromTemplate 
                  && this.model.children.length > 0
                  && this.model.children[0].fromTemplate) {
                  return false
              }
              return !this.renderPlaceholderEmpty
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
      "div",
      { attrs: { "data-per-path": _vm.model.path } },
      [
        _vm.renderPlaceholder
          ? _c("pagerendervue-components-placeholder", {
              attrs: {
                model: {
                  path: _vm.model.path,
                  component: _vm.model.component,
                  location: "before"
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.renderPlaceholderEmpty
          ? _c("pagerendervue-components-placeholder", {
              staticClass: "per-drop-target-empty",
              attrs: {
                model: {
                  path: _vm.model.path,
                  component: "page: drop components here",
                  location: "into"
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.model.children, function(child) {
          return [
            _c(child.component, {
              key: child.path,
              tag: "component",
              attrs: { model: child }
            })
          ]
        }),
        _vm._v(" "),
        _vm.renderPlaceholder
          ? _c("pagerendervue-components-placeholder", {
              attrs: {
                model: {
                  path: _vm.model.path,
                  component: _vm.model.component,
                  location: "after"
                }
              }
            })
          : _vm._e()
      ],
      2
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsPagelist.js -->
var cmpThemecleanflexComponentsPagelist = (function () {
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
        methods: {
            beforeSave: function beforeSave(data) {
                delete data.childrenPages;
                return data
            }
        },
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false; }
            if (this.$helper.areAllEmpty(this.model.rootpage)) { return 'Please choose a root page'; }
            if (this.model.childrenPages && this.model.childrenPages.length == 0) { return 'Chosen root page has no children (May need reload after root change)'; }
            return false;
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
                _vm._v(_vm._s(_vm.isEditAndEmpty))
              ])
            : _c("div", { staticClass: "w-full" }, [
                _vm.model.includeroot === "true"
                  ? _c("ul", { staticClass: "root" }, [
                      _c(
                        "li",
                        { staticClass: "root" },
                        [
                          _c(
                            "a",
                            {
                              attrs: {
                                href: _vm.$helper.pathToUrl(_vm.model.rootPageLink),
                                "data-per-inline": "model.rootPageTitle"
                              }
                            },
                            [_vm._v(_vm._s(_vm.model.rootPageTitle))]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.child.references, function(ref) {
                            return _c(ref.htmlElement, {
                              key: ref.key,
                              tag: "div",
                              class: ref.cssClass,
                              domProps: { innerHTML: _vm._s(ref.value) }
                            })
                          }),
                          _vm._v(" "),
                          _c(
                            "ul",
                            { staticClass: "ml-2" },
                            _vm._l(_vm.model.childrenPages, function(child, i) {
                              return _c(
                                "li",
                                {
                                  key: child.path || i,
                                  staticClass: "children ml-2"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: _vm.$helper.pathToUrl(child.path),
                                        "data-per-inline": "child.title"
                                      }
                                    },
                                    [_vm._v(_vm._s(child.title))]
                                  ),
                                  _vm._v(" "),
                                  _vm._l(child.references, function(ref) {
                                    return _c(ref.htmlElement, {
                                      key: ref.key,
                                      tag: "div",
                                      class: ref.cssClass,
                                      domProps: { innerHTML: _vm._s(ref.value) }
                                    })
                                  }),
                                  _vm._v(" "),
                                  child.hasChildren &&
                                  child.childrenPages &&
                                  child.childrenPages.length > 0
                                    ? _c(
                                        "themecleanflex-components-pagelistnested",
                                        { attrs: { model: child } }
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            }),
                            0
                          )
                        ],
                        2
                      )
                    ])
                  : _c(
                      "ul",
                      { staticClass: "noroot" },
                      _vm._l(_vm.model.childrenPages, function(child, i) {
                        return _c(
                          "li",
                          {
                            key: child.path || i,
                            staticClass: "childrennoroot ml-2"
                          },
                          [
                            _c(
                              "a",
                              {
                                attrs: {
                                  href: _vm.$helper.pathToUrl(child.path),
                                  "data-per-inline": "child.title"
                                }
                              },
                              [_vm._v(_vm._s(child.title))]
                            ),
                            _vm._v(" "),
                            _vm._l(child.references, function(ref) {
                              return _c(ref.htmlElement, {
                                key: ref.key,
                                tag: "div",
                                class: ref.cssClass,
                                domProps: { innerHTML: _vm._s(ref.value) }
                              })
                            }),
                            _vm._v(" "),
                            child.hasChildren &&
                            child.childrenPages &&
                            child.childrenPages.length > 0
                              ? _c("themecleanflex-components-pagelistnested", {
                                  attrs: { model: child }
                                })
                              : _vm._e()
                          ],
                          2
                        )
                      }),
                      0
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsPagelistnested.js -->
var cmpThemecleanflexComponentsPagelistnested = (function () {
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

    var script = {
        props: ['model', 'references']
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
        "ul",
        _vm._l(_vm.model.childrenPages, function(child, i) {
          return _c(
            "li",
            { key: child.path || i, staticClass: "children" },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: _vm.$helper.pathToUrl(child.path),
                    "data-per-inline": "child.title"
                  }
                },
                [_vm._v(_vm._s(child.title))]
              ),
              _vm._v(" "),
              _vm._l(child.references, function(ref) {
                return _c(ref.htmlElement, {
                  key: ref.key,
                  tag: "div",
                  class: ref.cssClass,
                  domProps: { innerHTML: _vm._s(ref.value) }
                })
              }),
              _vm._v(" "),
              child.hasChildren &&
              child.childrenPages &&
              child.childrenPages.length > 0
                ? _c("themecleanflex-components-pagelistnested", {
                    attrs: { model: child }
                  })
                : _vm._e()
            ],
            2
          )
        }),
        0
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsPager.js -->
var cmpThemecleanflexComponentsPager = (function () {
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

    var script = {
        props: ['model'],
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                return this.$helper.areAllEmpty(this.model.prevlabel, this.model.nextlabel)
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
            : _c("div", { staticClass: "w-full flex justify-between" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn",
                    class: {
                      "btn-lg": _vm.model.buttonsize === "large",
                      "btn-sm": _vm.model.buttonsize === "small",
                      "btn-primary": _vm.model.buttoncolor === "primary",
                      "btn-secondary": _vm.model.buttoncolor === "secondary",
                      "btn-success": _vm.model.buttoncolor === "success",
                      "btn-danger": _vm.model.buttoncolor === "danger",
                      "btn-warning": _vm.model.buttoncolor === "warning",
                      "btn-light": _vm.model.buttoncolor === "light",
                      "btn-dark": _vm.model.buttoncolor === "dark",
                      disabled: _vm.model.previous === "unknown"
                    },
                    attrs: {
                      "data-per-inline": "model.prevlabel",
                      href: _vm.$helper.pathToUrl(_vm.model.previous)
                    }
                  },
                  [_vm._v(_vm._s(_vm.model.prevlabel))]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn",
                    class: {
                      "btn-lg": _vm.model.buttonsize === "large",
                      "btn-sm": _vm.model.buttonsize === "small",
                      "btn-primary": _vm.model.buttoncolor === "primary",
                      "btn-secondary": _vm.model.buttoncolor === "secondary",
                      "btn-success": _vm.model.buttoncolor === "success",
                      "btn-danger": _vm.model.buttoncolor === "danger",
                      "btn-warning": _vm.model.buttoncolor === "warning",
                      "btn-light": _vm.model.buttoncolor === "light",
                      "btn-dark": _vm.model.buttoncolor === "dark",
                      disabled: _vm.model.next === "unknown"
                    },
                    attrs: {
                      "data-per-inline": "model.nextlabel",
                      href: _vm.$helper.pathToUrl(_vm.model.next)
                    }
                  },
                  [_vm._v(_vm._s(_vm.model.nextlabel))]
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsQuote.js -->
var cmpThemecleanflexComponentsQuote = (function () {
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

    var script = {
        props: ['model'],
        computed: {
          isEditAndEmpty: function isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) { return false }
              return this.$helper.areAllEmpty(this.model.text)
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
            : _c("div", {
                staticClass: "w-full p-6",
                class: [
                  { "border-l-8": _vm.model.blockquote === "true" },
                  { "border-t-2 border-b-4": _vm.model.blockquote === "false" },
                  _vm.model.colorscheme === "dark"
                    ? "border-gray-200"
                    : "border-gray-800"
                ],
                attrs: { "data-per-inline": "model.text" },
                domProps: { innerHTML: _vm._s(_vm.model.text) }
              })
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsRichtext.js -->
var cmpThemecleanflexComponentsRichtext = (function () {
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

    var script = {
        props: ['model'],
        computed: {
          isEditAndEmpty: function isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) { return false }
              return this.$helper.areAllEmpty(this.model.text)
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
                  staticClass: "w-full flex flex-col md:-mx-3",
                  class: {
                    "md:flex-row": _vm.model.mediaposition === "before",
                    "md:flex-row-reverse": _vm.model.mediaposition === "after"
                  }
                },
                [
                  _vm.model.showmedia === "true"
                    ? _c(
                        "div",
                        {
                          staticClass: "img-wrapper mb-3 md:mb-0 md:px-3",
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
                  _c("div", {
                    staticClass: "flex-grow md:px-3",
                    attrs: { "data-per-inline": "model.text" },
                    domProps: { innerHTML: _vm._s(_vm.model.text) }
                  })
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsSimpletext.js -->
var cmpThemecleanflexComponentsSimpletext = (function () {
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

    var script = {
        props: ['model'],
        computed: {
          isEditAndEmpty: function isEditAndEmpty() {
              if(!$peregrineApp.isAuthorMode()) { return false }
              return this.$helper.areAllEmpty(this.model.text)
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
                _vm.model.element,
                {
                  tag: "component",
                  class: {
                    "text-4xl font-semibold": _vm.model.element === "h1",
                    "text-3xl font-semibold": _vm.model.element === "h2",
                    "text-2xl": _vm.model.element === "h3",
                    "text-xl font-semibold": _vm.model.element === "h4",
                    "text-lg": _vm.model.element === "h5"
                  },
                  attrs: { "data-per-inline": "model.text" }
                },
                [_vm._v(_vm._s(_vm.model.text))]
              )
        ],
        1
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsSocialicons.js -->
var cmpThemecleanflexComponentsSocialicons = (function () {
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

    var script = {
        props: ['model']
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
        "div",
        { staticClass: "flex justify-center -m-1" },
        _vm._l(_vm.model.icons, function(item, i) {
          return _c(
            "a",
            {
              key: item.path || i,
              staticClass: "m-1",
              style:
                "color:" +
                (_vm.model.iconcustomcolor === "true"
                  ? _vm.model.iconcolor
                  : false) +
                ";",
              attrs: {
                href: _vm.$helper.pathToUrl(item.url),
                title: item.iconalttext
              }
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current",
                  style: "width:" + _vm.model.iconsize + "px;",
                  attrs: { viewBox: "0 0 24 24" }
                },
                [
                  _c(
                    "use",
                    _vm._b(
                      { attrs: { href: "#" + item.icon } },
                      "use",
                      { "xlink:href": "#" + item.icon },
                      false
                    )
                  )
                ]
              )
            ]
          )
        }),
        0
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsSpacer.js -->
var cmpThemecleanflexComponentsSpacer = (function () {
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

    var script = {
        props: ['model'],
        computed: {
        	isEditAndEmpty: function isEditAndEmpty() {
                if(!$peregrineApp.isAuthorMode()) { return false }
                return this.$helper.areAllEmpty(this.model.height > 0)
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
            : _c("div", [
                _c("div", { style: "height:" + _vm.model.height + "vh;" })
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsTabs.js -->
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsTags.js -->
var cmpThemecleanflexComponentsTags = (function () {
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

  var script = {
    props: ['model'],
    computed: {
      tags: function tags() {
        return $peregrineApp.getView().page.tags
      },
      isEditAndEmpty: function isEditAndEmpty() {
            if(!$peregrineApp.isAuthorMode()) { return false }
            return this.tags.length === 0
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
              _vm._v("There are no tags set for this page")
            ])
          : _c(
              "div",
              { staticClass: "w-full flex flex-wrap items-center -mx-2" },
              [
                _vm.model.tagslabel
                  ? _c(
                      "span",
                      {
                        staticClass: "font-bold ml-2 mr-4 mb-1",
                        attrs: { "data-per-inline": "model.tagslabel" }
                      },
                      [_vm._v(_vm._s(_vm.model.tagslabel))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.tags, function(item, i) {
                  return _c(
                    _vm.model.pagelink ? "a" : "div",
                    {
                      key: item.path || i,
                      tag: "component",
                      staticClass:
                        "text-white hover:text-white px-4 py-1 mx-2 rounded-full shadow-md no-underline mb-1",
                      class: {
                        "bg-blue-600": _vm.model.tagcolor === "blue",
                        "bg-green-600": _vm.model.tagcolor === "green",
                        "bg-orange-600": _vm.model.tagcolor === "orange",
                        "bg-red-600": _vm.model.tagcolor === "red",
                        "bg-yellow-600": _vm.model.tagcolor === "yellow"
                      },
                      attrs: {
                        "data-per-inline": "item.value ? item.value : item.name",
                        href: _vm.model.pagelink
                          ? _vm.model.pagelink + ".html" + item.value
                          : false
                      }
                    },
                    [_vm._v(_vm._s(item.value ? item.value : item.name))]
                  )
                })
              ],
              2
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsTeaserhorizontal.js -->
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsTeaservertical.js -->
var cmpThemecleanflexComponentsTeaservertical = (function () {
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
                  staticClass: "w-full flex flex-col items-center md:-mx-3",
                  class: {
                    "md:flex-row": _vm.model.mediaposition === "before",
                    "md:flex-row-reverse": _vm.model.mediaposition === "after",
                    "enlarge-text": _vm.model.isprimary === "true"
                  }
                },
                [
                  _vm.model.showmedia === "true"
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "img-wrapper mb-3 md:mb-0 md:px-3 media-sizeable",
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
                    { staticClass: "flex flex-col flex-grow mb-3 md:px-3" },
                    [
                      _c(
                        "div",
                        {
                          class: {
                            "text-left": _vm.model.aligncontent === "left",
                            "text-center": _vm.model.aligncontent === "center",
                            "text-right": _vm.model.aligncontent === "right",
                            "self-start": _vm.model.aligncontent === "left",
                            "self-center": _vm.model.aligncontent === "center",
                            "self-end": _vm.model.aligncontent === "right"
                          },
                          style: "width:" + _vm.model.textwidth + "%;"
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
                                  staticClass:
                                    "teaser-subtitle text-3xl font-normal",
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
                      _vm.model.showbutton == "true"
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "teaser-actions flex flex-wrap p-0 -mx-2",
                              class: {
                                "justify-start": _vm.model.alignbuttons === "start",
                                "justify-center":
                                  _vm.model.alignbuttons === "center",
                                "justify-end": _vm.model.alignbuttons === "end"
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
                                    "btn-secondary":
                                      item.buttoncolor === "secondary",
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

<!-- /etc/felibs/themecleanflex/js/themecleanflexComponentsTextlinks.js -->
var cmpThemecleanflexComponentsTextlinks = (function () {
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

    var script = {
        props: ['model'],
        computed: {
          activeClass: function activeClass (url) {
            return {'font-bold': this.$data.path === url}
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
        "ul",
        { staticClass: "list-none flex flex-col items-center md:flex-row p-0" },
        _vm._l(_vm.model.links, function(item, i) {
          return _c("li", { key: item.path || i, staticClass: "m-2" }, [
            _c(
              "a",
              {
                staticClass: "no-underline p-3 hover:underline",
                class: {
                  "text-blue-700": _vm.model.linkcolor === "primary",
                  "text-green-700 hover:text-green-600":
                    _vm.model.linkcolor === "success",
                  "text-red-700 hover:text-red-600":
                    _vm.model.linkcolor === "danger",
                  "text-orange-700 hover:text-orange-600":
                    _vm.model.linkcolor === "warning",
                  "text-white hover:text-white": _vm.model.linkcolor === "light",
                  "text-gray-800 hover:text-black": _vm.model.linkcolor === "dark",
                  "font-bold": _vm.$data.path === _vm.$helper.pathToUrl(item.link)
                },
                attrs: {
                  href: _vm.$helper.pathToUrl(item.link),
                  "data-per-inline": "model.links." + i + ".text"
                }
              },
              [_vm._v(_vm._s(item.text))]
            )
          ])
        }),
        0
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

<!-- /etc/felibs/john/mapping.js -->
var cmpJohnComponentsCode = cmpThemecleanflexComponentsCode
var cmpJohnComponentsSimpletext = cmpThemecleanflexComponentsSimpletext
var cmpJohnComponentsSpacer = cmpThemecleanflexComponentsSpacer
var cmpJohnComponentsTags = cmpThemecleanflexComponentsTags
var cmpJohnComponentsPager = cmpThemecleanflexComponentsPager
var cmpJohnComponentsRichtext = cmpThemecleanflexComponentsRichtext
var cmpJohnComponentsTeaservertical = cmpThemecleanflexComponentsTeaservertical
var cmpJohnComponentsContainer = cmpThemecleanflexComponentsContainer
var cmpJohnComponentsTeaserhorizontal = cmpThemecleanflexComponentsTeaserhorizontal
var cmpJohnComponentsNote = cmpThemecleanflexComponentsNote
var cmpJohnComponentsPagelistnested = cmpThemecleanflexComponentsPagelistnested
var cmpJohnComponentsPagelist = cmpThemecleanflexComponentsPagelist
var cmpJohnComponentsAccordion = cmpThemecleanflexComponentsAccordion
var cmpJohnComponentsFooter = cmpThemecleanflexComponentsFooter
var cmpJohnComponentsTabs = cmpThemecleanflexComponentsTabs
var cmpJohnComponentsTextlinks = cmpThemecleanflexComponentsTextlinks
var cmpJohnComponentsBlock = cmpThemecleanflexComponentsBlock
var cmpJohnComponentsMediablock = cmpThemecleanflexComponentsMediablock
var cmpJohnComponentsMedia = cmpThemecleanflexComponentsMedia
var cmpJohnComponentsQuote = cmpThemecleanflexComponentsQuote
var cmpJohnComponentsCarousel = cmpThemecleanflexComponentsCarousel
var cmpJohnComponentsNavigation = cmpThemecleanflexComponentsNavigation
var cmpJohnComponentsCards = cmpThemecleanflexComponentsCards
var cmpJohnComponentsMenubuttons = cmpThemecleanflexComponentsMenubuttons
var cmpJohnComponentsBreadcrumb = cmpThemecleanflexComponentsBreadcrumb
var cmpJohnComponentsHeader = cmpThemecleanflexComponentsHeader
var cmpJohnComponentsPage = cmpThemecleanflexComponentsPage
var cmpJohnComponentsSocialicons = cmpThemecleanflexComponentsSocialicons
var cmpJohnComponentsContainerblock = cmpThemecleanflexComponentsContainerblock
var cmpJohnComponentsMediavisible = cmpThemecleanflexComponentsMediavisible

