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
