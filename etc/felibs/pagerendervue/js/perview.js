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
