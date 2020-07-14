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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      todos: [],
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
        { attrs: { height: "100%" } },
        [
          _c(
            "TabViewItem",
            { attrs: { title: "To Do" } },
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
                        attrs: { row: "0", col: "1", text: "Add task" },
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
                              return _c("Label", { attrs: { text: todo.name } })
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
            { attrs: { title: "Completed" } },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzAwYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUZBO0FBSUEsR0FOQTs7QUFPQTtBQUNBO0FBQ0EsdUdBQ0EsSUFEQSxDQUNBO0FBQ0EsNEJBREEsQ0FDQTs7QUFDQTtBQUNBO0FBQ0EsMENBREEsQ0FDQTs7QUFDQSw2Q0FGQSxDQUVBOztBQUNBOztBQUNBO0FBQ0EsNkNBREEsQ0FDQTs7QUFDQTs7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQVdBLE9BZEE7QUFlQSxLQWpCQTs7QUFrQkE7QUFDQSxtR0FDQSxJQURBLENBQ0E7QUFDQSw0QkFEQSxDQUNBOztBQUNBO0FBQ0E7QUFDQSwwQ0FEQSxDQUNBOztBQUNBLDZDQUZBLENBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFUQTtBQVdBLE9BZEE7QUFlQSxLQWxDQTs7QUFtQ0E7QUFDQSxrRUFEQSxDQUNBOztBQUNBO0FBQUE7QUFBQSxTQUZBLENBRUE7O0FBQ0EsK0JBSEEsQ0FHQTtBQUNBOztBQXZDQTtBQVBBLEc7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsU0FBUyxpQkFBaUIsRUFBRTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsaUJBQWlCLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTLCtDQUErQyxFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGdDQUFnQyx1Q0FBdUM7QUFDdkUsNkJBQTZCO0FBQzdCLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVMsa0JBQWtCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMscUJBQXFCLEVBQUU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQXFEO0FBQy9FLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUyxrQkFBa0IsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS40ZDVhZDY1ZGU5MDAzZDQzMGUxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwicGFnZVwiPlxuICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IFRhc2tzXCIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgLz5cbiAgICAgIFxuICAgICAgPFRhYlZpZXcgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICA8VGFiVmlld0l0ZW0gdGl0bGU9XCJUbyBEb1wiPlxuICAgICAgICAgIDwhLS0gUG9zaWNpb25hIHVtYSBjYWl4YSBkZSB0ZXh0bywgdW0gYm90w6NvIGUgdW1hIGxpc3RhIGRlIHRhcmVmYXMgbmEgZ3JhZGUuIC0tPlxuICAgICAgICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cIjIqLCpcIiByb3dzPVwiYXV0b1wiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIHJvdz1cIjBcIiBjb2w9XCIwXCIgdi1tb2RlbD1cInRleHRGaWVsZFZhbHVlXCIgaGludD1cIlR5cGUgbmV3IHRhc2suLi5cIiBlZGl0YWJsZT1cInRydWVcIiBAcmV0dXJuUHJlc3M9XCJvbkJ1dHRvblRhcFwiIC8+IDwhLS0gQ29uZmlndXJhIG8gaW5wdXQgZGUgdGV4dG8gZSBnYXJhbnRlIHF1ZSBwcmVzc2lvbmFyIG8gUmV0dXJuIG5vIHRlY2xhZG8gcHJvZHV6IG8gbWVzbW8gcmVzdWx0YWRvIHF1ZSB0b2NhciBubyBib3TDo28uIC0tPlxuICAgICAgICAgICAgICA8QnV0dG9uIHJvdz1cIjBcIiBjb2w9XCIxXCIgdGV4dD1cIkFkZCB0YXNrXCIgQHRhcD1cIm9uQnV0dG9uVGFwXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJ0b2RvIGluIHRvZG9zXCIgQGl0ZW1UYXA9XCJvbkl0ZW1UYXBcIiBoZWlnaHQ9XCIxMDAlXCI+IDwhLS0gQ2VydGlmaXF1ZS1zZSBkZSBkZWZpbmlyIHVtYSBhbHR1cmEgb3Ugc3VhIGxpc3RhIG7Do28gc2Vyw6EgZXhpYmlkYSBubyBpT1MuIC0tPlxuICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgOnRleHQ9XCJ0b2RvLm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+IFxuICAgICAgICA8L1RhYlZpZXdJdGVtPlxuXG4gICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkNvbXBsZXRlZFwiPlxuICAgICAgICAgIDxMaXN0VmlldyBmb3I9XCJkb25lIGluIGRvbmVzXCIgQHRhcD1cIm9uRG9uZVRhcFwiIGhlaWdodD1cIjEwMCVcIj4gPCEtLSBDZXJ0aWZpcXVlLXNlIGRlIGRlZmluaXIgdW1hIGFsdHVyYSBvdSBzdWEgbGlzdGEgbsOjbyBzZXLDoSBleGliaWRhIG5vIGlPUy4gLS0+XG4gICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cImRvbmUubmFtZVwiIC8+XG4gICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICA8L1RhYlZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9kb3M6IFtdLFxuICAgICAgdGV4dEZpZWxkVmFsdWU6IFwiXCIsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIGFjdGlvbignV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIHRoaXMgdGFzaz8nLCAnQ2FuY2VsJywgWydNYXJrIGNvbXBsZXRlZCcsICdEZWxldGUgZm9yZXZlciddKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFJlZ2lzdHJhIGFzIG9ww6fDtWVzIGVzY29saGlkYXMgcGFyYSBkZWJ1Z2dpbmcuXG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ01hcmsgY29tcGxldGVkJzpcbiAgICAgICAgICAgICAgdGhpcy5kb25lcy51bnNoaWZ0KGFyZ3MuaXRlbSk7IC8vIENvbG9jYSBhIHRhcmVmYSBhdGl2YSB0b2NhZGEgbm8gdG9wbyBkZSB0YXJlZmFzIGNvbXBsZXRhZGFzLlxuICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShhcmdzLmluZGV4LCAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIGF0aXZhIHRvY2FkYS5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEZWxldGUgZm9yZXZlcic6XG4gICAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGFyZ3MuaW5kZXgsIDEpOyAvLyBSZW1vdmUgYSB0YXJlZmEgYXRpdmEgdG9jYWRhLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NhbmNlbCcgfHwgdW5kZWZpbmVkOiAvLyBEZXNjYXJ0YSBvIGRpw6Fsb2dvLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KSBcbiAgICB9LFxuICAgIG9uRG9uZVRhcChhcmdzKSB7XG4gICAgICBhY3Rpb24oJ1doYXQgZG8geW91IHdhbnQgdG8gZG8gd2l0aCB0aGlzIHRhc2s/JywgJ0NhbmNlbCcsIFsnTWFyayB0byBkbycsICdEZWxldGUgZm9yZXZlciddKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gUmVnaXN0cmEgYSBvcMOnw6NvIHNlbGVjaW9uYWRhIHBhcmEgZGVidWdnaW5nLlxuICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgIGNhc2UgJ01hcmsgdG8gZG8nOlxuICAgICAgICAgICAgdGhpcy50b2Rvcy51bnNoaWZ0KGFyZ3MuaXRlbSk7IC8vIENvbG9jYSBhIHRhcmVmYSBjb21wbGV0YSB0b2NhZGEgbm8gdG9wbyBkYXMgdGFyZWZhcyBwYXJhIGZhemVyXG4gICAgICAgICAgICB0aGlzLmRvbmVzLnNwbGljZShhcmdzLmluZGV4LCAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIHRvY2FkYSBkYSBsaXN0YSBkYXMgY29tcGxldGFzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdEZWxldGUgZm9yZXZlcic6XG4gICAgICAgICAgICB0aGlzLmRvbmVzLnNwbGljZShhcmdzLmluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0NhbmNlbCd8fHVuZGVmaW5lZDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25CdXR0b25UYXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyB0YXNrIGFkZGVkOiBcIiArIHRoaXMudGV4dEZpZWxkVmFsdWUgKyBcIi5cIik7IC8vIFJlZ2lzdHJhIGxvZyBkYSBub3ZhIHRhcmVmYSBubyBjb25zb2xlIHBhcmEgZGVidWcuXG4gICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoeyBuYW1lOiB0aGlzLnRleHRGaWVsZFZhbHVlIH0pOyAvLyBBZGljaW9uYSBhIG5vdmEgdGFyZWZhIG5vIGFycmF5IGB0b2Rvc1tdYC4gTm92YXMgdGFyZWZhcyBzw6NvIGltZWRpYXRhbWVudGUgZXhpYmlkYXMgbmEgdGVsYS5cbiAgICAgIHRoaXMudGV4dEZpZWxkVmFsdWUgPSBcIlwiOyAvLyBMaW1wYSBvIGlucHV0IGRlIHRleHRvLCBkZXN0YSBmb3JtYSBvIHVzdcOhcmlvIGVzdMOhIGFwdG8gYSBhZGljaW9uYXIgbm92YXMgdGFyZWZhcyBpbWVkaWF0YW1lbnRlLlxuICAgIH0sXG4gIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcbiAgICB9XG48L3N0eWxlPiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJwYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcIkFjdGlvbkJhclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGlvbi1iYXJcIixcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiTXkgVGFza3NcIiB9XG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlRhYlZpZXdcIixcbiAgICAgICAgeyBhdHRyczogeyBoZWlnaHQ6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJUYWJWaWV3SXRlbVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJUbyBEb1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiR3JpZExheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHVtbnM6IFwiMiosKlwiLCByb3dzOiBcImF1dG9cIiwgd2lkdGg6IFwiMTAwJVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdzogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogXCIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiVHlwZSBuZXcgdGFzay4uLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyByZXR1cm5QcmVzczogX3ZtLm9uQnV0dG9uVGFwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRleHRGaWVsZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRleHRGaWVsZFZhbHVlID0gJGV2ZW50Lm9iamVjdFtcInRleHRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZXh0RmllbGRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93OiBcIjBcIiwgY29sOiBcIjFcIiwgdGV4dDogXCJBZGQgdGFza1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkJ1dHRvblRhcCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkxpc3RWaWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udG9kb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIithbGlhc1wiOiBcInRvZG9cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgaXRlbVRhcDogX3ZtLm9uSXRlbVRhcCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGVtcGxhdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b2RvID0gcmVmLnRvZG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkaW5kZXggPSByZWYuJGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkb2RkID0gcmVmLiRvZGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogdG9kby5uYW1lIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcIlRhYlZpZXdJdGVtXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIkNvbXBsZXRlZFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJMaXN0Vmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIsIGl0ZW1zOiBfdm0uZG9uZXMsIFwiK2FsaWFzXCI6IFwiZG9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5vbkRvbmVUYXAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2LXRlbXBsYXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRvbmUgPSByZWYuZG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGluZGV4ID0gcmVmLiRpbmRleFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRvZGQgPSByZWYuJG9kZFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IGRvbmUubmFtZSB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=