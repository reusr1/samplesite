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
