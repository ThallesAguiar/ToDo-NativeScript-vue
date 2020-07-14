webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
false,

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Tasks.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: ""
    };
  },

  methods: {
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever']).then(result => {
        console.log(result); // Registra as opções escolhidas para debugging.

        switch (result) {
          case 'Mark completed':
            this.dones.unshift(args.item); // Coloca a tarefa ativa tocada no topo de tarefas completadas.

            this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.

            break;

          case 'Delete forever':
            this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.

            break;

          case 'Cancel' || false:
            // Descarta o diálogo.
            break;
        }
      });
    },

    onDoneTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever']).then(result => {
        console.log(result); // Registra a opção selecionada para debugging.

        switch (result) {
          case 'Mark to do':
            this.todos.unshift(args.item); // Coloca a tarefa completa tocada no topo das tarefas para fazer

            this.dones.splice(args.index, 1); // Remove a tarefa tocada da lista das completas

            break;

          case 'Delete forever':
            this.dones.splice(args.index, 1);
            break;

          case 'Cancel' || false:
            break;
        }
      });
    },

    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Registra log da nova tarefa no console para debug.

      this.todos.unshift({
        name: this.textFieldValue
      }); // Adiciona a nova tarefa no array `todos[]`. Novas tarefas são imediatamente exibidas na tela.

      this.textFieldValue = ""; // Limpa o input de texto, desta forma o usuário está apto a adicionar novas tarefas imediatamente.
    }

  }
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
false,

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Tasks.vue?vue&type=style&index=0&id=1113b043&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-1113b043] {\n        vertical-align: center;\n        font-size: 20;\n        margin: 15;\n}\n.description-label[data-v-1113b043] {\n        margin-bottom: 15;\n}\nTextField[data-v-1113b043] {\n    font-size: 20;\n    color: #53ba82;\n    margin-top: 10;\n    margin-bottom: 10;\n    margin-right: 5;\n    margin-left: 20;\n}\n#add-task-button[data-v-1113b043] {\n  font-size: 20;\n  font-weight: bold;\n  color: white;\n  background-color: #53ba82;\n  margin-top: 20;\n  margin-bottom: 10;\n  margin-right: 20;\n  margin-left: 5;\n  border-radius: 20px;\n}\n#active-task[data-v-1113b043] {\n  font-size: 20;\n  font-weight: bold;\n  color: #53ba82;\n  margin-left: 20;\n  padding-top: 5;\n  padding-bottom: 10;\n}\n#completed-task[data-v-1113b043] {\n  font-size: 20;\n  color: #d3d3d3;\n  margin-left: 20;\n  padding-top: 5;\n  padding-bottom: 10;\n  text-decoration: line-through;\n}\n#completed-list[data-v-1113b043] {\n  margin-top: 20;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Tasks.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
false,

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Tasks.vue?vue&type=template&id=1113b043&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "page" },
    [
      _c("ActionBar", {
        staticClass: "action-bar",
        attrs: { title: "My Tasks" }
      }),
      _c(
        "TabView",
        {
          attrs: {
            height: "100%",
            selectedTabTextColor: "#53ba82",
            tabTextFontSize: "20"
          }
        },
        [
          _c(
            "TabViewItem",
            { attrs: { title: "To Do", textTransform: "uppercase" } },
            [
              _c(
                "StackLayout",
                {
                  attrs: {
                    orientation: "vertical",
                    width: "100%",
                    height: "100%"
                  }
                },
                [
                  _c(
                    "GridLayout",
                    { attrs: { columns: "2*,*", rows: "auto", width: "100%" } },
                    [
                      _c("TextField", {
                        attrs: {
                          row: "0",
                          col: "0",
                          hint: "Type new task...",
                          editable: "true"
                        },
                        on: { returnPress: _vm.onButtonTap },
                        model: {
                          value: _vm.textFieldValue,
                          callback: function($event) {
                            _vm.textFieldValue = $event.object["text"]
                          },
                          expression: "textFieldValue"
                        }
                      }),
                      _c("Button", {
                        attrs: {
                          id: "add-task-button",
                          row: "0",
                          col: "1",
                          text: "Add task"
                        },
                        on: { tap: _vm.onButtonTap }
                      })
                    ],
                    1
                  ),
                  _c(
                    "ListView",
                    {
                      attrs: {
                        height: "100%",
                        separatorColor: "transparent",
                        items: _vm.todos,
                        "+alias": "todo"
                      },
                      on: { itemTap: _vm.onItemTap }
                    },
                    [
                      _c("v-template", {
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var todo = ref.todo
                              var $index = ref.$index
                              var $even = ref.$even
                              var $odd = ref.$odd
                              return _c("Label", {
                                attrs: {
                                  id: "active-task",
                                  text: todo.name,
                                  textWrap: "true"
                                }
                              })
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "TabViewItem",
            { attrs: { title: "Completed", textTransform: "uppercase" } },
            [
              _c(
                "ListView",
                {
                  attrs: {
                    id: "completed-list",
                    height: "100%",
                    separatorColor: "transparent",
                    items: _vm.dones,
                    "+alias": "done"
                  },
                  on: { itemTap: _vm.onDoneTap }
                },
                [
                  _c("v-template", {
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var done = ref.done
                          var $index = ref.$index
                          var $even = ref.$even
                          var $odd = ref.$odd
                          return _c("Label", {
                            attrs: {
                              id: "completed-task",
                              text: done,
                              textWrap: "true"
                            }
                          })
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Tasks.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <Tasks />\n        </Frame>",
  components: {
    Tasks: _components_Tasks__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/HelloWorld.vue":
false,

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
false,

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
false,

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
false,

/***/ "./components/Tasks.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Tasks.vue?vue&type=template&id=1113b043&scoped=true&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Tasks.vue?vue&type=style&index=0&id=1113b043&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1113b043",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1113b043')) {
      api.createRecord('1113b043', component.options)
    } else {
      api.reload('1113b043', component.options)
    }
    module.hot.accept("./components/Tasks.vue?vue&type=template&id=1113b043&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Tasks.vue?vue&type=template&id=1113b043&scoped=true&");
(function () {
      api.rerender('1113b043', {
        render: _Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Tasks.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Tasks.vue?vue&type=style&index=0&id=1113b043&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Tasks.vue?vue&type=style&index=0&id=1113b043&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_style_index_0_id_1113b043_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Tasks.vue?vue&type=template&id=1113b043&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Tasks.vue?vue&type=template&id=1113b043&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_1113b043_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9UYXNrcy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrcy52dWU/Y2ZmMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLnZ1ZT9jMTFhIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Rhc2tzLnZ1ZT81MjMwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGFza3MudnVlPzdlMGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYXNrcy52dWU/YjFjYSJdLCJuYW1lcyI6WyJUYXNrcyIsInRlbXBsYXRlIiwiJHN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7QUFHQTtBQUhBO0FBS0EsR0FQQTs7QUFRQTtBQUNBO0FBQ0EsdUdBQ0EsSUFEQSxDQUNBO0FBQ0EsNEJBREEsQ0FDQTs7QUFDQTtBQUNBO0FBQ0EsMENBREEsQ0FDQTs7QUFDQSw2Q0FGQSxDQUVBOztBQUNBOztBQUNBO0FBQ0EsNkNBREEsQ0FDQTs7QUFDQTs7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQVdBLE9BZEE7QUFlQSxLQWpCQTs7QUFrQkE7QUFDQSxtR0FDQSxJQURBLENBQ0E7QUFDQSw0QkFEQSxDQUNBOztBQUNBO0FBQ0E7QUFDQSwwQ0FEQSxDQUNBOztBQUNBLDZDQUZBLENBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFUQTtBQVdBLE9BZEE7QUFlQSxLQWxDQTs7QUFtQ0E7QUFDQSxrRUFEQSxDQUNBOztBQUNBO0FBQUE7QUFBQSxTQUZBLENBRUE7O0FBQ0EsK0JBSEEsQ0FHQTtBQUNBOztBQXZDQTtBQVJBLEc7Ozs7Ozs7Ozs7QUNqQ0EseUVBQTJCLG1CQUFPLENB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Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNxQzs7O0FBR3pGO0FBQzBGO0FBQzFGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsa0RBQXdHO0FBQzVILGNBQWMsbUJBQU8sQ0FBQyxnREFBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLG1FQUF3RCxFQUFFO0FBQUE7QUFDaEY7QUFDQSxnQkFBZ0IsNEZBQU07QUFDdEIseUJBQXlCLHFHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBcUssQ0FBZ0IseU9BQUcsRUFBQyxDOzs7Ozs7OztBQ0F6TDtBQUFBO0FBQUE7QUFBQTtBQUFzWSxDQUFnQixxYkFBRyxFQUFDLEM7Ozs7Ozs7O0FDQTFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJidW5kbGUuOTI5N2IwNzc2YzFmOTMwNjc5NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8UGFnZSBjbGFzcz1cInBhZ2VcIj5cbiAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJNeSBUYXNrc1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiIC8+XG4gICAgICBcbiAgICAgIDxUYWJWaWV3IGhlaWdodD1cIjEwMCVcIiBzZWxlY3RlZFRhYlRleHRDb2xvcj1cIiM1M2JhODJcIiB0YWJUZXh0Rm9udFNpemU9XCIyMFwiPlxuICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJUbyBEb1wiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5cbiAgICAgICAgICA8IS0tIFBvc2ljaW9uYSB1bWEgY2FpeGEgZGUgdGV4dG8sIHVtIGJvdMOjbyBlIHVtYSBsaXN0YSBkZSB0YXJlZmFzIG5hIGdyYWRlLiAtLT5cbiAgICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XCIyKiwqXCIgcm93cz1cImF1dG9cIiB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCByb3c9XCIwXCIgY29sPVwiMFwiIHYtbW9kZWw9XCJ0ZXh0RmllbGRWYWx1ZVwiIGhpbnQ9XCJUeXBlIG5ldyB0YXNrLi4uXCIgZWRpdGFibGU9XCJ0cnVlXCIgQHJldHVyblByZXNzPVwib25CdXR0b25UYXBcIiAvPiA8IS0tIENvbmZpZ3VyYSBvIGlucHV0IGRlIHRleHRvIGUgZ2FyYW50ZSBxdWUgcHJlc3Npb25hciBvIFJldHVybiBubyB0ZWNsYWRvIHByb2R1eiBvIG1lc21vIHJlc3VsdGFkbyBxdWUgdG9jYXIgbm8gYm90w6NvLiAtLT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpZD1cImFkZC10YXNrLWJ1dHRvblwiIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dD1cIkFkZCB0YXNrXCIgQHRhcD1cIm9uQnV0dG9uVGFwXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0b2RvIGluIHRvZG9zXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiPiA8IS0tIENlcnRpZmlxdWUtc2UgZGUgZGVmaW5pciB1bWEgYWx0dXJhIG91IHN1YSBsaXN0YSBuw6NvIHNlcsOhIGV4aWJpZGEgbm8gaU9TLiAtLT5cbiAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPExhYmVsIGlkPVwiYWN0aXZlLXRhc2tcIiA6dGV4dD1cInRvZG8ubmFtZVwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgICAgPC9TdGFja0xheW91dD4gXG4gICAgICAgIDwvVGFiVmlld0l0ZW0+XG5cbiAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiQ29tcGxldGVkXCIgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPlxuICAgICAgICAgIDxMaXN0VmlldyAgaWQ9XCJjb21wbGV0ZWQtbGlzdFwiIGZvcj1cImRvbmUgaW4gZG9uZXNcIiBAaXRlbVRhcD1cIm9uRG9uZVRhcFwiIGhlaWdodD1cIjEwMCVcIiBzZXBhcmF0b3JDb2xvcj1cInRyYW5zcGFyZW50XCI+IDwhLS0gQ2VydGlmaXF1ZS1zZSBkZSBkZWZpbmlyIHVtYSBhbHR1cmEgb3Ugc3VhIGxpc3RhIG7Do28gc2Vyw6EgZXhpYmlkYSBubyBpT1MuIC0tPlxuICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgaWQ9XCJjb21wbGV0ZWQtdGFza1wiIDp0ZXh0PVwiZG9uZVwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICA8L1RhYlZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9kb3M6IFtdLFxuICAgICAgZG9uZXM6IFtdLFxuICAgICAgdGV4dEZpZWxkVmFsdWU6IFwiXCIsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIGFjdGlvbignV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIHRoaXMgdGFzaz8nLCAnQ2FuY2VsJywgWydNYXJrIGNvbXBsZXRlZCcsICdEZWxldGUgZm9yZXZlciddKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFJlZ2lzdHJhIGFzIG9ww6fDtWVzIGVzY29saGlkYXMgcGFyYSBkZWJ1Z2dpbmcuXG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ01hcmsgY29tcGxldGVkJzpcbiAgICAgICAgICAgICAgdGhpcy5kb25lcy51bnNoaWZ0KGFyZ3MuaXRlbSk7IC8vIENvbG9jYSBhIHRhcmVmYSBhdGl2YSB0b2NhZGEgbm8gdG9wbyBkZSB0YXJlZmFzIGNvbXBsZXRhZGFzLlxuICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShhcmdzLmluZGV4LCAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIGF0aXZhIHRvY2FkYS5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEZWxldGUgZm9yZXZlcic6XG4gICAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGFyZ3MuaW5kZXgsIDEpOyAvLyBSZW1vdmUgYSB0YXJlZmEgYXRpdmEgdG9jYWRhLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NhbmNlbCcgfHwgdW5kZWZpbmVkOiAvLyBEZXNjYXJ0YSBvIGRpw6Fsb2dvLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KSBcbiAgICB9LFxuICAgIG9uRG9uZVRhcChhcmdzKSB7XG4gICAgICBhY3Rpb24oJ1doYXQgZG8geW91IHdhbnQgdG8gZG8gd2l0aCB0aGlzIHRhc2s/JywgJ0NhbmNlbCcsIFsnTWFyayB0byBkbycsICdEZWxldGUgZm9yZXZlciddKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gUmVnaXN0cmEgYSBvcMOnw6NvIHNlbGVjaW9uYWRhIHBhcmEgZGVidWdnaW5nLlxuICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgIGNhc2UgJ01hcmsgdG8gZG8nOlxuICAgICAgICAgICAgdGhpcy50b2Rvcy51bnNoaWZ0KGFyZ3MuaXRlbSk7IC8vIENvbG9jYSBhIHRhcmVmYSBjb21wbGV0YSB0b2NhZGEgbm8gdG9wbyBkYXMgdGFyZWZhcyBwYXJhIGZhemVyXG4gICAgICAgICAgICB0aGlzLmRvbmVzLnNwbGljZShhcmdzLmluZGV4LCAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIHRvY2FkYSBkYSBsaXN0YSBkYXMgY29tcGxldGFzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdEZWxldGUgZm9yZXZlcic6XG4gICAgICAgICAgICB0aGlzLmRvbmVzLnNwbGljZShhcmdzLmluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0NhbmNlbCd8fHVuZGVmaW5lZDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25CdXR0b25UYXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyB0YXNrIGFkZGVkOiBcIiArIHRoaXMudGV4dEZpZWxkVmFsdWUgKyBcIi5cIik7IC8vIFJlZ2lzdHJhIGxvZyBkYSBub3ZhIHRhcmVmYSBubyBjb25zb2xlIHBhcmEgZGVidWcuXG4gICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoeyBuYW1lOiB0aGlzLnRleHRGaWVsZFZhbHVlIH0pOyAvLyBBZGljaW9uYSBhIG5vdmEgdGFyZWZhIG5vIGFycmF5IGB0b2Rvc1tdYC4gTm92YXMgdGFyZWZhcyBzw6NvIGltZWRpYXRhbWVudGUgZXhpYmlkYXMgbmEgdGVsYS5cbiAgICAgIHRoaXMudGV4dEZpZWxkVmFsdWUgPSBcIlwiOyAvLyBMaW1wYSBvIGlucHV0IGRlIHRleHRvLCBkZXN0YSBmb3JtYSBvIHVzdcOhcmlvIGVzdMOhIGFwdG8gYSBhZGljaW9uYXIgbm92YXMgdGFyZWZhcyBpbWVkaWF0YW1lbnRlLlxuICAgIH0sXG4gIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmhvbWUtcGFuZWwge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgICAgICBtYXJnaW46IDE1O1xuICAgIH1cblxuLmRlc2NyaXB0aW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XG4gICAgfVxuXG5UZXh0RmllbGQge1xuICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgY29sb3I6ICM1M2JhODI7XG4gICAgbWFyZ2luLXRvcDogMTA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTA7XG4gICAgbWFyZ2luLXJpZ2h0OiA1O1xuICAgIG1hcmdpbi1sZWZ0OiAyMDtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XG4gIG1hcmdpbi10b3A6IDIwO1xuICBtYXJnaW4tYm90dG9tOiAxMDtcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcbiAgbWFyZ2luLWxlZnQ6IDU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbiNhY3RpdmUtdGFzayB7XG4gIGZvbnQtc2l6ZTogMjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzUzYmE4MjtcbiAgbWFyZ2luLWxlZnQ6IDIwO1xuICBwYWRkaW5nLXRvcDogNTtcbiAgcGFkZGluZy1ib3R0b206IDEwO1xufVxuXG4jY29tcGxldGVkLXRhc2sge1xuICBmb250LXNpemU6IDIwO1xuICBjb2xvcjogI2QzZDNkMztcbiAgbWFyZ2luLWxlZnQ6IDIwO1xuICBwYWRkaW5nLXRvcDogNTtcbiAgcGFkZGluZy1ib3R0b206IDEwO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuI2NvbXBsZXRlZC1saXN0IHtcbiAgbWFyZ2luLXRvcDogMjA7ICAgIFxufVxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi0xMTEzYjA0M10ge1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgICAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTExMTNiMDQzXSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcXG59XFxuVGV4dEZpZWxkW2RhdGEtdi0xMTEzYjA0M10ge1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBjb2xvcjogIzUzYmE4MjtcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDtcXG59XFxuI2FkZC10YXNrLWJ1dHRvbltkYXRhLXYtMTExM2IwNDNdIHtcXG4gIGZvbnQtc2l6ZTogMjA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1M2JhODI7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMDtcXG4gIG1hcmdpbi1sZWZ0OiA1O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuI2FjdGl2ZS10YXNrW2RhdGEtdi0xMTEzYjA0M10ge1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM1M2JhODI7XFxuICBtYXJnaW4tbGVmdDogMjA7XFxuICBwYWRkaW5nLXRvcDogNTtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDtcXG59XFxuI2NvbXBsZXRlZC10YXNrW2RhdGEtdi0xMTEzYjA0M10ge1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIGNvbG9yOiAjZDNkM2QzO1xcbiAgbWFyZ2luLWxlZnQ6IDIwO1xcbiAgcGFkZGluZy10b3A6IDU7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuI2NvbXBsZXRlZC1saXN0W2RhdGEtdi0xMTEzYjA0M10ge1xcbiAgbWFyZ2luLXRvcDogMjA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGlmICh0eXBlb2YgZXhwb3J0cy5mb3JFYWNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZXhwb3J0cy5mb3JFYWNoKGNzc0V4cG9ydCA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzRXhwb3J0Lmxlbmd0aCA+IDEgJiYgY3NzRXhwb3J0WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uLmFkZENzcyhjc3NFeHBvcnRbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9UYXNrcy52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiTXkgVGFza3NcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlRhYlZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRUYWJUZXh0Q29sb3I6IFwiIzUzYmE4MlwiLFxuICAgICAgICAgICAgdGFiVGV4dEZvbnRTaXplOiBcIjIwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiVmlld0l0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiVG8gRG9cIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjIqLCpcIiwgcm93czogXCJhdXRvXCIsIHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlR5cGUgbmV3IHRhc2suLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5vbkJ1dHRvblRhcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZXh0RmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZXh0RmllbGRWYWx1ZSA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGV4dEZpZWxkVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFkZC10YXNrLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCB0YXNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJ0b2RvXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9kbyA9IHJlZi50b2RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWN0aXZlLXRhc2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0b2RvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJDb21wbGV0ZWRcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJjb21wbGV0ZWQtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLmRvbmVzLFxuICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcImRvbmVcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkRvbmVUYXAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvbmUgPSByZWYuZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNvbXBsZXRlZC10YXNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuXG5pbXBvcnQgVGFza3MgZnJvbSAnLi9jb21wb25lbnRzL1Rhc2tzJztcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5uZXcgVnVlKHtcblxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxGcmFtZT5cbiAgICAgICAgICAgIDxUYXNrcyAvPlxuICAgICAgICA8L0ZyYW1lPmAsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFRhc2tzXG4gICAgfVxufSkuJHN0YXJ0KCk7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UYXNrcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTExM2IwNDMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFza3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXNrcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vVGFza3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTExM2IwNDMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjExMTNiMDQzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcVGhhbGxlcyBBZ3VpYXJcXFxcRGVza3RvcFxcXFxuYXRpdmVzY3JpcHQtdnVlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExMTNiMDQzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExMTNiMDQzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExMTNiMDQzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYXNrcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTExM2IwNDMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTExM2IwNDMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvVGFza3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Rhc2tzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTExM2IwNDMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTExM2IwNDMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFza3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExMTNiMDQzJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==