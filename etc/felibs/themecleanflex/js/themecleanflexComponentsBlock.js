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
