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
