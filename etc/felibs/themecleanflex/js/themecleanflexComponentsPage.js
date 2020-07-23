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
