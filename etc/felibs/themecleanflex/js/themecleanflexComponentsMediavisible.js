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
