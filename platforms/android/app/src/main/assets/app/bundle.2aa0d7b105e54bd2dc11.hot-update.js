webpackHotUpdate("bundle",{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
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
//
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
  methods: {
    onItemTap: function onItemTap(args) {
      console.log("Task with index: " + args.index + " tapped"); // Registra log das tarefas tocadas no console para debug.
    },

    onButtonTap() {
      console.log("New Task added: " + this.textFieldValue + "."); // Registra log da nova tarefa no console para debug.

      this.todos.unshift({
        name: this.textFieldValue
      }); // Adiciona a nova tarefa no array `payments[]`. Novas tarefas são imediatamente exibidas na tela.

      this.textFieldValue = ""; // Limpa o input de texto, desta forma o usuário está apto a adicionar novas tarefas imediatamente.
    },

    onItemTap(args) {
      action("What do you want to do with this task?", "Cancel", ["Mark completed", "Delete forever"]).then(result => {
        console.log(result); // Registra as opções escolhidas para debugging.

        switch (result) {
          case "Mark completed":
            this.dones.unshift(args.item); // Coloca a tarefa ativa tocada no topo de tarefas completadas.

            this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.

            break;

          case "Delete forever":
            this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.

            break;

          case "Cancel" || false:
            // Descarta o diálogo.
            break;
        }
      });
    },

    onDoneTap(args) {
      action("What do you want to do with this task?", "Cancel", ["Mark to do", "Delete forever"]).then(result => {
        console.log(result); // Registra a opção selecionada para debugging.

        switch (result) {
          case "Mark to do":
            this.todos.unshift(args.item); // Coloca a tarefa completa tocada no topo das tarefas para fazer

            this.dones.splice(args.index, 1); // Remove a tarefa tocada da lista das completas

            break;

          case "Delete forever":
            this.dones.splice(args.index, 1);
            break;

          case "Cancel" || false:
            break;
        }
      });
    }

  },

  data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: ""
    };
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.home-panel[data-v-763db97b] {\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n.description-label[data-v-763db97b] {\n    margin-bottom: 15;\n}\n", ""]);

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
            global.hmrRefresh({ type: 'style', path: './components/HelloWorld.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
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
                  attrs: { height: "100%", items: _vm.dones, "+alias": "done" },
                  on: { tap: _vm.onDoneTap }
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
                          return _c("Label", { attrs: { text: done.name } })
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzJkOWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8wMGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBREEsQ0FFQTtBQUNBLEtBSkE7O0FBTUE7QUFDQSxrRUFEQSxDQUVBOztBQUNBO0FBQ0E7QUFEQSxTQUhBLENBTUE7O0FBQ0EsK0JBUEEsQ0FRQTtBQUNBLEtBZkE7O0FBZ0JBO0FBQ0Esa0VBQ0EsZ0JBREEsRUFFQSxnQkFGQSxHQUdBLElBSEEsQ0FHQTtBQUNBLDRCQURBLENBRUE7O0FBQ0E7QUFDQTtBQUNBLG9DQUNBLElBREEsRUFEQSxDQUVBOztBQUNBLDBDQUNBLENBREEsRUFIQSxDQUlBOztBQUNBOztBQUNBO0FBQ0EsMENBQ0EsQ0FEQSxFQURBLENBRUE7O0FBQ0E7O0FBQ0EsMkJBQ0EsS0FEQTtBQUNBO0FBQ0E7QUFiQTtBQWVBLE9BckJBO0FBc0JBLEtBdkNBOztBQXdDQTtBQUNBLGtFQUNBLFlBREEsRUFFQSxnQkFGQSxHQUdBLElBSEEsQ0FHQTtBQUNBLG9CQUNBLE1BREEsRUFEQSxDQUVBOztBQUNBO0FBQ0E7QUFDQSwwQ0FEQSxDQUVBOztBQUNBLDBDQUNBLENBREEsRUFIQSxDQUlBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBWEE7QUFhQSxPQW5CQTtBQW9CQTs7QUE3REEsR0FEQTs7QUFpRUE7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0E7QUFIQTtBQUtBOztBQXZFQSxHOzs7Ozs7O0FDM0NBLHlFQUEyQixtQkFBTyxDQUFDLDRDQUErQztBQUNsRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsbUNBQW1DLDZCQUE2QixvQkFBb0IsaUJBQWlCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHOztBQUVqTTs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyw4QkFBOEI7QUFDOUQsSUFBSSxtQkFBTyxDQUFDLHlDQUF5Qzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixxREFBcUQ7QUFDcEYsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsNkNBQTZDLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLCtDQUErQyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsaURBQWlELEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQXFEO0FBQy9FLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUyxrQkFBa0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS4yYWEwZDdiMTA1ZTU0YmQyZGMxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTXkgVGFza3NcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuXG4gICAgICAgIDxUYWJWaWV3IGhlaWdodD1cIjEwMCVcIiBzZWxlY3RlZFRhYlRleHRDb2xvcj1cIiM1M2JhODJcIlxuICAgICAgICAgICAgdGFiVGV4dEZvbnRTaXplPVwiMjBcIj5cbiAgICAgICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIlRvIERvXCIgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gUG9zaWNpb25hIHVtYSBjYWl4YSBkZSB0ZXh0bywgdW0gYm90w6NvIGUgdW1hIGxpc3RhIGRlIHRhcmVmYXMgbmEgZ3JhZGUuIC0tPlxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMiosKlwiIHJvd3M9XCJhdXRvXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cIjBcIiBjb2w9XCIwXCIgdi1tb2RlbD1cInRleHRGaWVsZFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50PVwiVHlwZSBuZXcgdGFzay4uLlwiIGVkaXRhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwib25CdXR0b25UYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb25maWd1cmEgbyBpbnB1dCBkZSB0ZXh0byBlIGdhcmFudGUgcXVlIHByZXNzaW9uYXIgbyBSZXR1cm4gbm8gdGVjbGFkbyBwcm9kdXogbyBtZXNtbyByZXN1bHRhZG8gcXVlIHRvY2FyIG5vIGJvdMOjby4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCIgcm93PVwiMFwiIGNvbD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJBZGQgdGFza1wiIEB0YXA9XCJvbkJ1dHRvblRhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3IGZvcj1cInRvZG8gaW4gdG9kb3NcIiBAaXRlbVRhcD1cIm9uSXRlbVRhcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBDZXJ0aWZpcXVlLXNlIGRlIGRlZmluaXIgdW1hIGFsdHVyYSBvdSBzdWEgbGlzdGEgbsOjbyBzZXLDoSBleGliaWRhIG5vIGlPUy4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgaWQ9XCJhY3RpdmUtdGFza1wiIDp0ZXh0PVwidG9kby5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgPC9UYWJWaWV3SXRlbT5cblxuICAgICAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiQ29tcGxldGVkXCIgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJkb25lIGluIGRvbmVzXCIgQHRhcD1cIm9uRG9uZVRhcFwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDZXJ0aWZpcXVlLXNlIGRlIGRlZmluaXIgdW1hIGFsdHVyYSBvdSBzdWEgbGlzdGEgbsOjbyBzZXLDoSBleGliaWRhIG5vIGlPUy4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZG9uZS5uYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgICAgICA8L1RhYlZpZXdJdGVtPlxuICAgICAgICA8L1RhYlZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgb25JdGVtVGFwOiBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXNrIHdpdGggaW5kZXg6IFwiICsgYXJncy5pbmRleCArIFwiIHRhcHBlZFwiKTtcbiAgICAgICAgICAgICAgICAvLyBSZWdpc3RyYSBsb2cgZGFzIHRhcmVmYXMgdG9jYWRhcyBubyBjb25zb2xlIHBhcmEgZGVidWcuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvbkJ1dHRvblRhcCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBUYXNrIGFkZGVkOiBcIiArIHRoaXMudGV4dEZpZWxkVmFsdWUgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgLy8gUmVnaXN0cmEgbG9nIGRhIG5vdmEgdGFyZWZhIG5vIGNvbnNvbGUgcGFyYSBkZWJ1Zy5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRleHRGaWVsZFZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gQWRpY2lvbmEgYSBub3ZhIHRhcmVmYSBubyBhcnJheSBgcGF5bWVudHNbXWAuIE5vdmFzIHRhcmVmYXMgc8OjbyBpbWVkaWF0YW1lbnRlIGV4aWJpZGFzIG5hIHRlbGEuXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGRWYWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgLy8gTGltcGEgbyBpbnB1dCBkZSB0ZXh0bywgZGVzdGEgZm9ybWEgbyB1c3XDoXJpbyBlc3TDoSBhcHRvIGEgYWRpY2lvbmFyIG5vdmFzIHRhcmVmYXMgaW1lZGlhdGFtZW50ZS5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICAgICAgICAgIGFjdGlvbihcIldoYXQgZG8geW91IHdhbnQgdG8gZG8gd2l0aCB0aGlzIHRhc2s/XCIsIFwiQ2FuY2VsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgXCJNYXJrIGNvbXBsZXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkRlbGV0ZSBmb3JldmVyXCJcbiAgICAgICAgICAgICAgICBdKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlZ2lzdHJhIGFzIG9ww6fDtWVzIGVzY29saGlkYXMgcGFyYSBkZWJ1Z2dpbmcuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTWFyayBjb21wbGV0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbmVzLnVuc2hpZnQoYXJnc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtKTsgLy8gQ29sb2NhIGEgdGFyZWZhIGF0aXZhIHRvY2FkYSBubyB0b3BvIGRlIHRhcmVmYXMgY29tcGxldGFkYXMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoYXJncy5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIGF0aXZhIHRvY2FkYS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEZWxldGUgZm9yZXZlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGFyZ3MuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSk7IC8vIFJlbW92ZSBhIHRhcmVmYSBhdGl2YSB0b2NhZGEuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ2FuY2VsXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZDogLy8gRGVzY2FydGEgbyBkacOhbG9nby5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uRG9uZVRhcChhcmdzKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKFwiV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIHRoaXMgdGFzaz9cIiwgXCJDYW5jZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICBcIk1hcmsgdG8gZG9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJEZWxldGUgZm9yZXZlclwiXG4gICAgICAgICAgICAgICAgXSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0KTsgLy8gUmVnaXN0cmEgYSBvcMOnw6NvIHNlbGVjaW9uYWRhIHBhcmEgZGVidWdnaW5nLlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk1hcmsgdG8gZG9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoYXJncy5pdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb2xvY2EgYSB0YXJlZmEgY29tcGxldGEgdG9jYWRhIG5vIHRvcG8gZGFzIHRhcmVmYXMgcGFyYSBmYXplclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9uZXMuc3BsaWNlKGFyZ3MuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSk7IC8vIFJlbW92ZSBhIHRhcmVmYSB0b2NhZGEgZGEgbGlzdGEgZGFzIGNvbXBsZXRhc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRlbGV0ZSBmb3JldmVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb25lcy5zcGxpY2UoYXJncy5pbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ2FuY2VsXCIgfHwgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9kb3M6IFtdLFxuICAgICAgICAgICAgICAgIGRvbmVzOiBbXSxcbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRWYWx1ZTogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAuaG9tZS1wYW5lbCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgICAgIG1hcmdpbjogMTU7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTU7XG4gICAgfVxuPC9zdHlsZT4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5ob21lLXBhbmVsW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG4uZGVzY3JpcHRpb24tbGFiZWxbZGF0YS12LTc2M2RiOTdiXSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMuZm9yRWFjaCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGV4cG9ydHMuZm9yRWFjaChjc3NFeHBvcnQgPT4ge1xuICAgICAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5aW5nIHRoZSBzZWNvbmQgaXRlbSBvZiB0aGUgZXhwb3J0IGFzIGl0IGNvbnRhaW5zIHRoZSBjc3MgY29udGVudHNcbiAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbi5hZGRDc3MoY3NzRXhwb3J0WzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWUnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiTXkgVGFza3NcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlRhYlZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgc2VsZWN0ZWRUYWJUZXh0Q29sb3I6IFwiIzUzYmE4MlwiLFxuICAgICAgICAgICAgdGFiVGV4dEZvbnRTaXplOiBcIjIwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiVGFiVmlld0l0ZW1cIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwiVG8gRG9cIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBjb2x1bW5zOiBcIjIqLCpcIiwgcm93czogXCJhdXRvXCIsIHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlRleHRGaWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIlR5cGUgbmV3IHRhc2suLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgcmV0dXJuUHJlc3M6IF92bS5vbkJ1dHRvblRhcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50ZXh0RmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50ZXh0RmllbGRWYWx1ZSA9ICRldmVudC5vYmplY3RbXCJ0ZXh0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGV4dEZpZWxkVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImFkZC10YXNrLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFkZCB0YXNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIrYWxpYXNcIjogXCJ0b2RvXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGl0ZW1UYXA6IF92bS5vbkl0ZW1UYXAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdG9kbyA9IHJlZi50b2RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYWN0aXZlLXRhc2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0b2RvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA6IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJDb21wbGV0ZWRcIiwgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiTGlzdFZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBoZWlnaHQ6IFwiMTAwJVwiLCBpdGVtczogX3ZtLmRvbmVzLCBcIithbGlhc1wiOiBcImRvbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25Eb25lVGFwIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb25lID0gcmVmLmRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRldmVuID0gcmVmLiRldmVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBkb25lLm5hbWUgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9