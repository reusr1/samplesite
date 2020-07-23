
<!-- /etc/felibs/pagerendervue/js/pagerendervueComponentsBase.js -->
var cmpPagerendervueComponentsBase = (function () {
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

    var script = {
        props: [ 'model'],
        computed: {
            text: function() {
                var text = this.$exp(this.model, 'text');
                if(text !== '') {
                    return text
                }
                if(window.parent && window.parent.$perAdminApp) {
                    return 'empty'
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
      return _c("div", { attrs: { "data-per-path": _vm.model.path } }, [
        _c("p", {
          attrs: { "data-per-inline": "model.text" },
          domProps: { innerHTML: _vm._s(_vm.text) }
        })
      ])
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

<!-- /etc/felibs/pagerendervue/js/pagerendervueComponentsPlaceholder.js -->
var cmpPagerendervueComponentsPlaceholder = (function () {
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

    var script = {
        props: ['model'],
        data: function() {
          return {
              show: false
          }
        },
        computed: {
            componentName: function() {
                var post = '';
                if(this.model.location === 'before') { post = ' start'; }
                if(this.model.location === 'after') { post = ' end'; }
                return this.model.component.split('-').pop() + post
            },
            mode: function() {
                return this.$root.view
            }
        },
        created: function created() {
            var vm = this;

            if (window.parent && window.parent.$perAdminApp  && window.parent.$perAdminApp.eventBus) {
                window.parent.$perAdminApp.eventBus.$on('edit-preview', function (data) {
                    vm.show = data !== 'preview';
                });
            }

            if(window.frameElement && window.frameElement.attributes['data-per-mode']) {
                if(window.frameElement.attributes['data-per-mode'].value) {
                    vm.show = false;
                    return;
                }
            }
        },
        mounted: function mounted() {
          this.show = this.isEditMode();
        },
        methods: {
            isEditMode: function() {
                if(window.$peregrineApp) {
                    return window.$peregrineApp.isAuthorMode()
                }
                if(window.parent) {
                    if(window.parent.$perAdminApp && window.parent !== window) {
                        return this.$root.view !== 'preview'
                    }
                }
                return false
            },
            allowDrop: function(e) {
                e.preventDefault();
            },
            drop: function(e) {
            },
            edit: function(e) {
                alert('edit');
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
          if (css.media) { style.element.setAttribute('media', css.media); }
          HEAD.appendChild(style.element);
        }

        if ('styleSheet' in style.element) {
          style.styles.push(code);
          style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
        } else {
          var index = style.ids.size - 1;
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
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
      return _vm.show
        ? _c(
            "div",
            {
              staticClass: "per-drop-target",
              attrs: {
                "data-per-path": _vm.model.path,
                "data-per-droptarget": "true",
                "data-per-location": _vm.model.location
              },
              on: { allowDrop: _vm.allowDrop, drop: _vm.drop }
            },
            [_vm._v("\n    " + _vm._s(_vm.componentName) + "\n")]
          )
        : _vm._e()
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      var __vue_inject_styles__ = function (inject) {
        if (!inject) { return }
        inject("data-v-226cc483_0", { source: "\n.per-drop-target {\n    border: 1px dashed #c0c0c0;\n    clear: both;\n    padding: 4px;\n    margin: 4px;\n    text-align: center;\n    width: calc(100% - 8px);\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: black !important; \n    overflow: hidden;\n    font-size: 0.75em;\n    background: #f8f8f8e0;\n}\n.per-drop-target-empty {\n    font-size: 1.5em;\n    height: 3em;\n    padding-top: 0.75em;\n}\n", map: {"version":3,"sources":["/home/rr/ws/kestrel1/peregrine-cms/pagerenderer/vue/ui.apps/src/main/content/jcr_root/apps/pagerendervue/components/placeholder/template.vue"],"names":[],"mappings":";AAmGA;IACA,0BAAA;IACA,WAAA;IACA,YAAA;IACA,WAAA;IACA,kBAAA;IACA,uBAAA;IACA,mBAAA;IACA,uBAAA;IACA,uBAAA;IACA,gBAAA;IACA,iBAAA;IACA,qBAAA;AACA;AAEA;IACA,gBAAA;IACA,WAAA;IACA,mBAAA;AACA","file":"template.vue","sourcesContent":["<!--\n  #%L\n  peregrine vuejs page renderer - UI Apps\n  %%\n  Copyright (C) 2017 headwire inc.\n  %%\n  Licensed to the Apache Software Foundation (ASF) under one\n  or more contributor license agreements.  See the NOTICE file\n  distributed with this work for additional information\n  regarding copyright ownership.  The ASF licenses this file\n  to you under the Apache License, Version 2.0 (the\n  \"License\"); you may not use this file except in compliance\n  with the License.  You may obtain a copy of the License at\n  \n  http://www.apache.org/licenses/LICENSE-2.0\n  \n  Unless required by applicable law or agreed to in writing,\n  software distributed under the License is distributed on an\n  \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n  KIND, either express or implied.  See the License for the\n  specific language governing permissions and limitations\n  under the License.\n  #L%\n  -->\n<template>\n    <div v-if=\"show\"\n         class=\"per-drop-target\"\n         v-on:allowDrop=\"allowDrop\"\n         v-on:drop=\"drop\"\n         v-bind:data-per-path=\"model.path\"\n         data-per-droptarget=\"true\"\n         v-bind:data-per-location=\"model.location\">\n        {{componentName}}\n    </div>\n</template>\n\n<script>\nexport default {\n    props: ['model'],\n    data: function() {\n      return {\n          show: false\n      }\n    },\n    computed: {\n        componentName: function() {\n            let post = ''\n            if(this.model.location === 'before') post = ' start'\n            if(this.model.location === 'after') post = ' end'\n            return this.model.component.split('-').pop() + post\n        },\n        mode: function() {\n            return this.$root.view\n        }\n    },\n    created() {\n        const vm = this;\n\n        if (window.parent && window.parent.$perAdminApp  && window.parent.$perAdminApp.eventBus) {\n            window.parent.$perAdminApp.eventBus.$on('edit-preview', (data) => {\n                vm.show = data !== 'preview'\n            })\n        }\n\n        if(window.frameElement && window.frameElement.attributes['data-per-mode']) {\n            if(window.frameElement.attributes['data-per-mode'].value) {\n                vm.show = false\n                return;\n            }\n        }\n    },\n    mounted() {\n      this.show = this.isEditMode()\n    },\n    methods: {\n        isEditMode: function() {\n            if(window.$peregrineApp) {\n                return window.$peregrineApp.isAuthorMode()\n            }\n            if(window.parent) {\n                if(window.parent.$perAdminApp && window.parent !== window) {\n                    return this.$root.view !== 'preview'\n                }\n            }\n            return false\n        },\n        allowDrop: function(e) {\n            e.preventDefault()\n        },\n        drop: function(e) {\n        },\n        edit: function(e) {\n            alert('edit')\n        }\n    }\n}\n</script>\n\n<style>\n    .per-drop-target {\n        border: 1px dashed #c0c0c0;\n        clear: both;\n        padding: 4px;\n        margin: 4px;\n        text-align: center;\n        width: calc(100% - 8px);\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        color: black !important; \n        overflow: hidden;\n        font-size: 0.75em;\n        background: #f8f8f8e0;\n    }\n\n    .per-drop-target-empty {\n        font-size: 1.5em;\n        height: 3em;\n        padding-top: 0.75em;\n    }\n</style>\n"]}, media: undefined });

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

<!-- /etc/felibs/pagerendervue/js/pagerendervueComponentsSimpletext.js -->
var cmpPagerendervueComponentsSimpletext = (function () {
  'use strict';

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

  /* template */

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var template = normalizeComponent_1(
      {},
      __vue_inject_styles__,
      {},
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  return template;

}());

<!-- /etc/felibs/pagerendervue/js/pagerendervueComponentsStyledtext.js -->
var cmpPagerendervueComponentsStyledtext = (function () {
    'use strict';

    //
    //
    //
    //

    var script = {
        props: ['element', 'content']
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
      return _c(_vm.element, {
        tag: "component",
        domProps: { innerHTML: _vm._s(_vm.content) }
      })
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

<!-- /etc/felibs/pagerendervue/js/pagerendervueStructureContainer.js -->
var cmpPagerendervueStructureContainer = (function () {
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

    var script = {
        props: [ 'model' ]
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
        { staticClass: "container", attrs: { "data-per-path": _vm.model.path } },
        [
          _c("pagerendervue-components-placeholder", {
            attrs: {
              model: {
                path: _vm.model.path,
                component: _vm.model.component,
                location: "before"
              }
            }
          }),
          _vm._v(" "),
          _vm._l(_vm.model.children, function(child) {
            return _c(
              "div",
              { key: child.path },
              [_c(child.component, { tag: "component", attrs: { model: child } })],
              1
            )
          }),
          _vm._v(" "),
          _c("pagerendervue-components-placeholder", {
            attrs: {
              model: {
                path: _vm.model.path,
                component: _vm.model.component,
                location: "after"
              }
            }
          })
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

<!-- /etc/felibs/pagerendervue/js/pagerendervueStructurePage.js -->
var cmpPagerendervueStructurePage = (function () {
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

    var script = {
        props: [ 'model' ],
        computed: {
            renderAfter: function renderAfter() {
                return(
                    this.model.children.length > 0
                    && this.model.children.children
                    && this.model.children.children.length === 0
                    ) 
            },
            renderBefore: function renderBefore() {
                return(
                    this.model.children.length > 0
                    && this.model.children.children
                    && this.model.children.children.length === 0
                    ) 
            },
            renderSingle: function renderSingle() {
                return (!this.model.children || this.model.children.length === 0)
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
        { staticClass: "container", attrs: { "data-per-path": _vm.model.path } },
        [
          _vm.renderBefore
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
          _vm.renderSingle
            ? _c("pagerendervue-components-placeholder", {
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
            return _c(
              "div",
              { key: child.path },
              [_c(child.component, { tag: "component", attrs: { model: child } })],
              1
            )
          }),
          _vm._v(" "),
          _vm.renderAfter
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

<!-- /etc/felibs/pagerendervue/js/perview.js -->
var $peregrineApp = (function () {
  'use strict';

  /*-
   * #%L
   * peregrine vuejs page renderer - UI Apps
   * %%
   * Copyright (C) 2017 headwire inc.
   * %%
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   * #L%
   */

  /**
   * @enum {number}
   */
  var LogLevel = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    DEBUG: 4,
    FINE: 5,
  };

  var loggerFactoryInstance = null;

  var Logger = function Logger(name) {
        this.level = LogLevel.INFO;
        this.name = name;

        var displayName = "[" + name + "]";
        if(displayName.length > loggerFactoryInstance.getMaxNameLength()) {
            loggerFactoryInstance.setMaxNameLength(displayName.length);
        } else {
            displayName = displayName + repeatStr(' ',loggerFactoryInstance.getMaxNameLength() - displayName.length);
        }
        this.displayName = displayName;
    };

    Logger.prototype.setLevel = function setLevel (level) {
        this.level = level;
        return this
    };

    Logger.prototype.getDisplayName = function getDisplayName () {
        return this.displayName
    };

    Logger.prototype.setDisplayName = function setDisplayName (displayName) {
        this.displayName = displayName;
    };

    Logger.prototype.setOffLevel = function setOffLevel () {
        return this.setLevel(LogLevel.OFF)
    };

    Logger.prototype.setErrorLevel = function setErrorLevel () {
        return this.setLevel(LogLevel.ERROR)
    };

    Logger.prototype.setWarnLevel = function setWarnLevel () {
        return this.setLevel(LogLevel.WARN)
    };

    Logger.prototype.setInfoLevel = function setInfoLevel () {
        return this.setLevel(LogLevel.INFO)
    };

    Logger.prototype.setDebugLevel = function setDebugLevel () {
        return this.setLevel(LogLevel.DEBUG)
    };

    Logger.prototype.setFineLevel = function setFineLevel () {
        return this.setLevel(LogLevel.FINE)
    };

    Logger.prototype.applyTo = function applyTo (method, level, args) {
        if(typeof args[0] === 'string') {
            args[0] = level + ' ' + this.displayName + ' ' + args[0];
            method.apply(this, args);
        } else {
            args.unshift(this.displayName);
            args.unshift(level);
            method.apply(this, args);
        }
    };

    Logger.prototype.fine = function fine () {
        if(this.level < LogLevel.FINE) { return }
        var args = Array.prototype.slice.call(arguments);
        this.applyTo(console.log, '[fine ]', args);
    };

    Logger.prototype.debug = function debug () {
        if(this.level < LogLevel.DEBUG) { return }
        var args = Array.prototype.slice.call(arguments);
        this.applyTo(console.log, '[debug]', args);
    };

    Logger.prototype.info = function info () {
        if(this.level < LogLevel.INFO) { return }
        var args = Array.prototype.slice.call(arguments);
        this.applyTo(console.log, '[info ]', args);
    };

    Logger.prototype.warn = function warn () {
        if(this.level < LogLevel.WARN) { return }
        var args = Array.prototype.slice.call(arguments);
        this.applyTo(console.warn, '[warn ]', args);
    };

    Logger.prototype.error = function error () {
        if(this.level < LogLevel.ERROR) { return }
        var args = Array.prototype.slice.call(arguments);
        this.applyTo(console.error, '[error]', args);
    };

  function repeatStr(str, times) {
      var ret = "";
      for(var i = 0; i < times; i++) {
          ret += str;
      }
      return ret
  }

  var LoggerFactory = function LoggerFactory() {
        if(!loggerFactoryInstance) {
            loggerFactoryInstance = this;
            this.loggers = [];
        }
        return loggerFactoryInstance
    };

    LoggerFactory.prototype.getMaxNameLength = function getMaxNameLength () {
        return this.maxNameLength ? this.maxNameLength : 0
    };

    LoggerFactory.prototype.setMaxNameLength = function setMaxNameLength (length) {
        this.maxNameLength = length;
        for(var key in this.loggers) {
            var logger = this.loggers[key];
            var displayName = logger.getDisplayName();
            if(displayName.length < length) {
                logger.setDisplayName(displayName + repeatStr(' ',length - displayName.length));
            }
        }
    };

    LoggerFactory.logger = function logger (name) {
        return new LoggerFactory().getLogger(name)
    };

    LoggerFactory.prototype.getLogger = function getLogger (name) {
        var logger = this.loggers[name];
        if(!logger) {
            logger = new Logger(name);
            this.loggers[name] = logger;
        }
        return logger
    };

  function experience(model, name, defaultValue) {
      if(model.experiences) {
          var experience = 'lang:en';
          for (var i = 0; i < model.experiences.length; i++) {
              var exp = model.experiences[i];
              if(exp.experiences.indexOf(experience) >= 0) {
                  var ret = exp[name];
                  return ret ? ret : defaultValue
              }
          }
      }
      return model[name] ? model[name] : defaultValue

  }

  var experiences = {
      install: function install(vue) {
          vue.prototype.$exp = experience;
      }
  };

  var helpers = {
      isEmpty: function(field) {
          if(field === undefined || field === null || field === '' || field === '<p><br></p>' || field.length === 0 || field === false) {
              return true
          }
          return false
      },
      areAllEmpty: function areAllEmpty() {
          var arguments$1 = arguments;

          for(var i = 0; i < arguments.length; i++) {
              var ret = helpers.isEmpty(arguments$1[i]);
              if(ret === false) { return false }
          }
          return true
      },
      pathToUrl: function pathToUrl(path) {
          if(!path || path.length < 1) { return path }
          if( path[0] === '#') { return path }
          var absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i');   //Matches absolute URLs
          var file = new RegExp(/\.\w+$/, 'i');                    //Matches URL ending with a file extension
          if( absoluteUrl.test(path) === false ) {
              return file.test(path) ? path : (path + ".html")
          }
          else { return path }
      }
  };

  var helper = {
      install: function install(vue) {
          vue.prototype.$helper = helpers;
      }
  };

  /*-
   * #%L
   * peregrine vuejs page renderer - UI Apps
   * %%
   * Copyright (C) 2017 headwire inc.
   * %%
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   * #L%
   */

  var log = LoggerFactory.logger('state').setDebugLevel();

  function getClickable(node) {
      while(node.nodeName.toString() !== 'A') {
          node = node.parentNode;
          if(!node) { return null }
      }
      return node
  }

  function getContentviewEditorActive() {
      if (window.parent && window.parent.$perAdminApp) {
          var view = window.parent.$perAdminApp.getView();
          if (view && view.state && view.state.contentview
              && view.state.contentview.editor) {
              return view.state.contentview.editor.active
          } else {
              return false
          }
      }
  }

  window.onclick = function(ev) {

      var currentServer = window.location.protocol+'//'+window.location.host+'/';
      log.fine("LOCATION: " , window.location.host);
      log.fine("NODENAME: " , ev.target.nodeName.toString());
      var node = getClickable(ev.target);

      if(node) {
          var toUrl = node.href;
          log.fine("onClick() - "+ toUrl);
          log.fine(toUrl, currentServer);

          if(!(
              toUrl.startsWith('http') ||
              toUrl.startsWith('/') ||
              toUrl.startsWith('#')
          )) {
              return true
          }

          if(toUrl.startsWith("#")) ; else if (getContentviewEditorActive()) ; else {
              //Dont' load new content for an href on the same page
              var currentUrl = window.location.href.replace(/\#\w+$/, '');
              if(toUrl.startsWith( currentUrl ) && toUrl.match(/\#\w+$/)) { return true; }
              if(toUrl.startsWith(currentServer)) {
                  ev.preventDefault();
                  var gotoPath = '/'+toUrl.slice(currentServer.length);
                  log.fine("gotoPath : " + gotoPath);
                  $peregrineApp.loadContent(gotoPath, false);
                  return false
              }
          }
      }
  };

  window.onpopstate = function(e){
      if(e.state) {
          log.fine("ONPOPSTATE : " + e.state.path);
          $peregrineApp.loadContent(e.state.path, false, true);
      } else {
          log.warn(e);
          $peregrineApp.loadContent((document.location? document.location.href : null), false, true);
      }
  };

  /*-
   * #%L
   * peregrine vuejs page renderer - UI Apps
   * %%
   * Copyright (C) 2017 headwire inc.
   * %%
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   * #L%
   */
  var log$1 = LoggerFactory.logger('merge').setDebugLevel();

  /*-
   * #%L
   * peregrine vuejs page renderer - UI Apps
   * %%
   * Copyright (C) 2017 headwire inc.
   * %%
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   * #L%
   */

  var DATA_EXTENSION = '.data.json';
  var COMPONENT_PREFIX = 'cmp';

  /*-
   * #%L
   * peregrine vuejs page renderer - UI Apps
   * %%
   * Copyright (C) 2017 headwire inc.
   * %%
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   * #L%
   */
  var log$2 = LoggerFactory.logger('util').setDebugLevel();

  /**
   *
   * this method will try to add .data.json to the end of the path (if it was .html, otherwise
   * we just try to add .data.json
   *
   * @param path
   * @returns {*}
   */
  function pagePathToDataPath(path) {

      log$2.fine('converting',path,'to dataPath');
      var firstHtmlExt = path.indexOf('.html');
      var res = null;
      if(firstHtmlExt >= 0) {
          var pathNoExt = path.substring(0,firstHtmlExt);
          res = pathNoExt + DATA_EXTENSION;
      }
      else {
          res = path + DATA_EXTENSION;
      }
      log$2.fine('result',res);
      return res

  }

  /**
   *
   * converts a dash name (admin-component-base) to a camel case style name with a prefix 'cmp' (cmpAdminComponentBase)
   *
   * @param name
   */
  function componentNameToVarName(name) {

      var segments = name.split('-');
      for(var i = 0; i < segments.length; i++) {
          segments[i] = segments[i].charAt(0).toUpperCase() + segments[i].slice(1);
      }
      return COMPONENT_PREFIX + segments.join('')

  }

  /*-
   * #%L
   * peregrine vuejs page renderer - UI Apps
   * %%
   * Copyright (C) 2017 headwire inc.
   * %%
   * Licensed to the Apache Software Foundation (ASF) under one
   * or more contributor license agreements.  See the NOTICE file
   * distributed with this work for additional information
   * regarding copyright ownership.  The ASF licenses this file
   * to you under the Apache License, Version 2.0 (the
   * "License"); you may not use this file except in compliance
   * with the License.  You may obtain a copy of the License at
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
   * KIND, either express or implied.  See the License for the
   * specific language governing permissions and limitations
   * under the License.
   * #L%
   */

  var log$3 = LoggerFactory.logger('peregrineApp').setDebugLevel();


  var view;
  var loadedComponents = [];

  var perVueApp = null;

  function makePathInfo(path) {

      var hash = '';
      if(path.indexOf('#') >= 0) {
          hash = path.substring(path.indexOf('#'));
          path = path.substring(0, path.indexOf('#'));
      }
      log$3.fine('makePathInfo for path', path);
      var htmlPos = path.indexOf('.html');
      var pathPart = path;
      var suffixPath = '';
      if(htmlPos >= 0) {
          suffixPath = path.slice(htmlPos);
          pathPart = path.slice(0, htmlPos+5);
      }

      var suffixParams = {};
      if(suffixPath.length > 0) {
          suffixPath = suffixPath.slice(6);
          var suffixParamList = suffixPath.split('//');
          for(var i = 0; i < suffixParamList.length; i+= 2) {
              suffixParams[suffixParamList[i]] = suffixParamList[i+1];
          }
      }

      var ret = { path: pathPart, suffix: suffixPath , suffixParams: suffixParams, hash: hash };
      log$3.fine('makePathInfo res:',ret);
      return ret
  }

  function get(node, path, value) {

      var vue = perVueApp;
      path = path.slice(1).split('/').reverse();
      while(path.length > 1) {
          var segment = path.pop();
          if(!node[segment]) {
              if(vue) {
                  Vue.set(node, segment, {});
              } else {
                  node[segment] = {};
              }
          }
          node = node[segment];
      }
      if(value && !node[path[0]]) {
          if(vue) {
              Vue.set(node, path[0], value);
          } else {
              node[path[0]] = value;
          }
      }
      return node[path[0]]
  }

  function set(node, path, value) {

      var vue = perVueApp;
      path = path.slice(1).split('/').reverse();
      while(path.length > 1) {
          var segment = path.pop();
          if(!node[segment]) {
              if(vue) {
                  Vue.set(node, segment, {});
              } else {
                  node[segment] = {};
              }
          }
          node = node[segment];
      }
      if(vue) {
          Vue.set(node, path[0], value);
      }
      else {
          node[path[0]] = value;
      }
  }

  function initPeregrineApp() {

      Vue.config.productionTip = false;
      Vue.use(experiences);
      Vue.use(helper);

      perVueApp = new Vue({
          el: '#peregrine-app',
          data: getPerView()
      });
  }

  function registerViewImpl(v) {
      view = v;
  }

  function getView() {
      if(window && window.parent && window.parent.$perAdminView && window.parent.$perAdminView.pageView) {
          var mode = window.frameElement.attributes['data-per-mode'] ? window.frameElement.attributes['data-per-mode'].value : null;
          if(mode === 'tutorial') { 
              return view;
          } else {
              log$3.fine("getVIEW() - window.parent.perAdminView.pageView");
              return window.parent.$perAdminView.pageView
          }
      }
      return view
  }

  function getPerView() {
      return getView()
  }

  function loadComponentImpl(name) {
      if(!loadedComponents[name]) {
          log$3.fine('loading component', name);

          var varName = componentNameToVarName(name);
          if(window[varName]) {
              Vue.component(name, window[varName]);
          }
          // if we are in edit mode push the component to the perAdminApp as well
          if(window.parent.$perAdminApp && !window.parent[varName]) {
              window.parent[varName] = window[varName];
          }
          loadedComponents[name] = true;

      } else {
          log$3.fine('component %s already loaded', name);
      }


  }


  function walkTreeAndLoad(node) {

      if(node.component) { loadComponentImpl(node.component); }
      if(node.children) {
          node.children.forEach(function (child) {
              walkTreeAndLoad(child);
          });
      }
  }

  function getNodeFromImpl(node, path) {
      return get(node, path)
  }

  function processLoaders(loaders) {

      return new Promise( function (resolve, reject) {
          var promises = [];
          if(loaders) {
              for(var i = 0; i < loaders.length; i++) {
                  var loader = loaders[i].split(':');
                  if(loader.length < 2) {
                      log$3.fine('unknown loader', loaders[i]);
                  } else {
                      log$3.fine('loading data with', loader[0], loader[1]);
                      var pathFrom = loader[1];
                      var dataToLoad = getNodeFromImpl(view, pathFrom);
                      log$3.fine(dataToLoad);
                      if(api[loader[0]]) {
                          promises.push(api[loader[0]](dataToLoad));
                      } else {
                          log$3.error('missing', loader[0]);
                          reject('missing ' + loader[0]+' '+dataToLoad);
                      }
                  }
              }
          }
          Promise.all(promises).then( function () { return resolve(); } );
      })
  }

  function processLoadedContent(data, path, firstTime, fromPopState) {
      data = window.$perProcessData !== undefined ? window.$perProcessData(data) : data;
      walkTreeAndLoad(data);

      if(data.description) { document.getElementsByTagName('meta').description.content=data.description; }
      if(data.tags) { document.getElementsByTagName('meta').keywords.content=data.tags.map( function (tag) { return tag.name; } ); }

      if(data.suffixToParameter) {
          var pathInfo = makePathInfo(path);
          for(var i = 0; i < data.suffixToParameter.length; i+=2) {
              var name = data.suffixToParameter[i];
              var location =  data.suffixToParameter[i+1];
              set(getPerView(), location, pathInfo.suffixParams[name]);
          }
      }
      processLoaders(data.loaders).then( function () {

          log$3.fine('first time', firstTime);

          getPerView().page = data;
          getPerView().path = path.slice(0, path.indexOf('.html'));
          getPerView().status = 'loaded';
          if(firstTime) {
              initPeregrineApp();
          }

          if(document.location !== path && !fromPopState) {
              log$3.fine("PUSHSTATE : " + path);
              document.title = getPerView().page.title + ' | ' + getPerView().page.brand;  

              var canonical = document.querySelector('link[rel="canonical"]');
              if(canonical) { canonical.href = getPerView().page.canonicalUrl; }

              updateMetaName("robots", getPerView().page.metaRobots);
              updateOpenGraph();

              var url = document.location.href;
              var domains = (getPerView().page.domains);
              var newLocation = path;
              if (domains) {
                  for (var i = 0; i < domains.length; i++) {
                      var domain = domains[i];
                      if (url.startsWith(domain)) {
                          newLocation = '/' + path.split('/').slice(4).join('/');
                      }
                  }
              }
              if(firstTime) {
                  history.replaceState({peregrinevue: true, path: path}, path, newLocation);
              } else {
                  history.pushState({peregrinevue: true, path: path}, path, newLocation);
              }
              scroll(0, 0);

              // Create the event.
              var event = document.createEvent('Event');

              // Define that the event name is 'build'.
              event.initEvent('pageRendered', true, true);

              // target can be any Element or other EventTarget.
              window.dispatchEvent(event);
          }

      });
  }

  function loadContentImpl(path, firstTime, fromPopState, onPage) {
      if ( onPage === void 0 ) onPage = false;


      log$3.fine('loading content for', path, firstTime, fromPopState);

      var dataUrl = pagePathToDataPath(path);
      log$3.fine(dataUrl);
      getPerView().status = undefined;
      if(onPage) {
          processLoadedContent(JSON.parse(document.getElementById('perPage').innerHTML), path, firstTime, fromPopState);
      } else {
          axios.get(dataUrl).then(function (response) {
              log$3.fine('got data for', path);
      
              // if(response.data.template) {
              //
              //     var pageData = response.data
              //
              //     axios.get(response.data.template+'.data.json').then(function(response) {
              //
              //         var templateData = response.data
              //         var mergedData = merge(templateData, pageData)
              //         //merging nav, footer and content together with pageData
              //         processLoadedContent(mergedData, path, firstTime, fromPopState)
              //     }).catch(function(error) {
              //         log.error("error getting %s %j", dataUrl, error);
              //     })
              // } else {
              processLoadedContent(response.data, path, firstTime, fromPopState);
              // }
      
          }).catch(function(error) {
              log$3.error("error getting %s %j", dataUrl, error);
          });    
      }
  }

  function updateOpenGraph() {
      updateMetaProps('og:title', getPerView().page.ogTitle);
      updateMetaProps('og:description', getPerView().page.ogDescription);
      updateMetaProps('og:image', getPerView().page.absOgImage);
      updateMetaProps('og:url', getPerView().page.canonicalUrl);
  }

  function updateMetaName(key, val) {
      updateMeta(key, val, "name");
  }

  function updateMetaProps(key, val) {
      updateMeta(key, val, "property");
  }

  function updateMeta(key, val, type) {
      var meta = document.querySelector("meta[" + CSS.escape(type) + "=" +  CSS.escape(key) + "]");

      if (meta) {
        if (val) {
          meta.content = val;
        } else {
          meta.parentNode.removeChild(meta);
        }
      } else {
        if (val) {
          var el = document.createElement('meta');
          el.setAttribute(type, key);
          el.content = val;
          document.getElementsByTagName('head')[0].appendChild(el);
        }
      }
  }

  function isAuthorModeImpl() {

      if(window && window.parent && window.frameElement && window.frameElement.attributes['data-per-mode']) {
          var mode = window.frameElement.attributes['data-per-mode'].value;
          if(mode === 'preview' || mode === 'tutorial') {
              return false
          }
      }
      if(window && window.parent && window.parent.$perAdminView && window.parent.$perAdminView.pageView) {
          return true
      }
      return false
      
  }

  function getAdminAppNodeImpl(path) {
      log$3.fine('getAdminAppState: ' + path);

      if(window && window.parent && window.parent.$perAdminApp) {
          if(window.frameElement.attributes['data-per-mode']) {
              var mode = window.frameElement.attributes['data-per-mode'].value;
              if(mode === 'tutorial') {
                  return null;
              }
          }
          return window.parent.$perAdminApp.getNodeFromViewOrNull(path)
      }
      return null
  }

  var peregrineApp = {

      registerView: function(view) {
          registerViewImpl(view);
      },

      loadContent: function(path, firstTime, fromPopState) {
          if ( firstTime === void 0 ) firstTime = false;
          if ( fromPopState === void 0 ) fromPopState = false;

          loadContentImpl(path, firstTime, fromPopState);
      },

      loadContentFrom: function(id, path, firstTime, fromPopState) {
          if ( firstTime === void 0 ) firstTime = false;
          if ( fromPopState === void 0 ) fromPopState = false;

          loadContentImpl(path, firstTime, fromPopState, true);
      },

      logger: function(name) {
          return LoggerFactory.logger(name)
      },

      loadComponent: function(name) {
          loadComponentImpl(name);
      },

      getPerVueApp: function() {
          return perVueApp
      }, 
      isAuthorMode: function() {
          return isAuthorModeImpl()        
      },

      getView: function() {
         return getPerView()
      },

      getAdminAppNode: function getAdminAppNode(path) {
         return getAdminAppNodeImpl(path);
      },

      isPublicFacingSite: function isPublicFacingSite() {
          var server = window.location.protocol + '//' + window.location.hostname;
          var domains = getPerView().page.domains || [];
          return (domains.indexOf(server) >= 0)
      }

  };

  return peregrineApp;

}());

