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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGVBRkE7QUFHQTtBQUhBO0FBS0EsR0FQQTs7QUFRQTtBQUNBO0FBQ0EsdUdBQ0EsSUFEQSxDQUNBO0FBQ0EsNEJBREEsQ0FDQTs7QUFDQTtBQUNBO0FBQ0EsMENBREEsQ0FDQTs7QUFDQSw2Q0FGQSxDQUVBOztBQUNBOztBQUNBO0FBQ0EsNkNBREEsQ0FDQTs7QUFDQTs7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQVdBLE9BZEE7QUFlQSxLQWpCQTs7QUFrQkE7QUFDQSxtR0FDQSxJQURBLENBQ0E7QUFDQSw0QkFEQSxDQUNBOztBQUNBO0FBQ0E7QUFDQSwwQ0FEQSxDQUNBOztBQUNBLDZDQUZBLENBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFUQTtBQVdBLE9BZEE7QUFlQSxLQWxDQTs7QUFtQ0E7QUFDQSxrRUFEQSxDQUNBOztBQUNBO0FBQUE7QUFBQSxTQUZBLENBRUE7O0FBQ0EsK0JBSEEsQ0FHQTtBQUNBOztBQXZDQTtBQVJBLEciLCJmaWxlIjoiYnVuZGxlLjQxYmU2NDFiZWU0MWNjODE5M2RhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2UgY2xhc3M9XCJwYWdlXCI+XG4gICAgICA8QWN0aW9uQmFyIHRpdGxlPVwiTXkgVGFza3NcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuICAgICAgXG4gICAgICA8VGFiVmlldyBoZWlnaHQ9XCIxMDAlXCIgc2VsZWN0ZWRUYWJUZXh0Q29sb3I9XCIjNTNiYTgyXCIgdGFiVGV4dEZvbnRTaXplPVwiMjBcIj5cbiAgICAgICAgPFRhYlZpZXdJdGVtIHRpdGxlPVwiVG8gRG9cIiB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+XG4gICAgICAgICAgPCEtLSBQb3NpY2lvbmEgdW1hIGNhaXhhIGRlIHRleHRvLCB1bSBib3TDo28gZSB1bWEgbGlzdGEgZGUgdGFyZWZhcyBuYSBncmFkZS4gLS0+XG4gICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVwiMiosKlwiIHJvd3M9XCJhdXRvXCIgd2lkdGg9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgcm93PVwiMFwiIGNvbD1cIjBcIiB2LW1vZGVsPVwidGV4dEZpZWxkVmFsdWVcIiBoaW50PVwiVHlwZSBuZXcgdGFzay4uLlwiIGVkaXRhYmxlPVwidHJ1ZVwiIEByZXR1cm5QcmVzcz1cIm9uQnV0dG9uVGFwXCIgLz4gPCEtLSBDb25maWd1cmEgbyBpbnB1dCBkZSB0ZXh0byBlIGdhcmFudGUgcXVlIHByZXNzaW9uYXIgbyBSZXR1cm4gbm8gdGVjbGFkbyBwcm9kdXogbyBtZXNtbyByZXN1bHRhZG8gcXVlIHRvY2FyIG5vIGJvdMOjby4gLS0+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJhZGQtdGFzay1idXR0b25cIiByb3c9XCIwXCIgY29sPVwiMVwiIHRleHQ9XCJBZGQgdGFza1wiIEB0YXA9XCJvbkJ1dHRvblRhcFwiIC8+XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgICAgICA8TGlzdFZpZXcgZm9yPVwidG9kbyBpbiB0b2Rvc1wiIEBpdGVtVGFwPVwib25JdGVtVGFwXCIgaGVpZ2h0PVwiMTAwJVwiIHNlcGFyYXRvckNvbG9yPVwidHJhbnNwYXJlbnRcIj4gPCEtLSBDZXJ0aWZpcXVlLXNlIGRlIGRlZmluaXIgdW1hIGFsdHVyYSBvdSBzdWEgbGlzdGEgbsOjbyBzZXLDoSBleGliaWRhIG5vIGlPUy4gLS0+XG4gICAgICAgICAgICAgIDx2LXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDxMYWJlbCBpZD1cImFjdGl2ZS10YXNrXCIgOnRleHQ9XCJ0b2RvLm5hbWVcIiB0ZXh0V3JhcD1cInRydWVcIiAvPlxuICAgICAgICAgICAgICA8L3YtdGVtcGxhdGU+XG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxuICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+IFxuICAgICAgICA8L1RhYlZpZXdJdGVtPlxuXG4gICAgICAgIDxUYWJWaWV3SXRlbSB0aXRsZT1cIkNvbXBsZXRlZFwiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5cbiAgICAgICAgICA8TGlzdFZpZXcgIGlkPVwiY29tcGxldGVkLWxpc3RcIiBmb3I9XCJkb25lIGluIGRvbmVzXCIgQGl0ZW1UYXA9XCJvbkRvbmVUYXBcIiBoZWlnaHQ9XCIxMDAlXCIgc2VwYXJhdG9yQ29sb3I9XCJ0cmFuc3BhcmVudFwiPiA8IS0tIENlcnRpZmlxdWUtc2UgZGUgZGVmaW5pciB1bWEgYWx0dXJhIG91IHN1YSBsaXN0YSBuw6NvIHNlcsOhIGV4aWJpZGEgbm8gaU9TLiAtLT5cbiAgICAgICAgICAgICAgPHYtdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPExhYmVsIGlkPVwiY29tcGxldGVkLXRhc2tcIiA6dGV4dD1cImRvbmUubmFtZVwiIHRleHRXcmFwPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XG4gICAgICAgIDwvVGFiVmlld0l0ZW0+XG4gICAgICA8L1RhYlZpZXc+XG5cbiAgICA8L1BhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9kb3M6IFtdLFxuICAgICAgZG9uZXM6IFtdLFxuICAgICAgdGV4dEZpZWxkVmFsdWU6IFwiXCIsXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgIGFjdGlvbignV2hhdCBkbyB5b3Ugd2FudCB0byBkbyB3aXRoIHRoaXMgdGFzaz8nLCAnQ2FuY2VsJywgWydNYXJrIGNvbXBsZXRlZCcsICdEZWxldGUgZm9yZXZlciddKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFJlZ2lzdHJhIGFzIG9ww6fDtWVzIGVzY29saGlkYXMgcGFyYSBkZWJ1Z2dpbmcuXG4gICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNhc2UgJ01hcmsgY29tcGxldGVkJzpcbiAgICAgICAgICAgICAgdGhpcy5kb25lcy51bnNoaWZ0KGFyZ3MuaXRlbSk7IC8vIENvbG9jYSBhIHRhcmVmYSBhdGl2YSB0b2NhZGEgbm8gdG9wbyBkZSB0YXJlZmFzIGNvbXBsZXRhZGFzLlxuICAgICAgICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShhcmdzLmluZGV4LCAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIGF0aXZhIHRvY2FkYS5cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdEZWxldGUgZm9yZXZlcic6XG4gICAgICAgICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGFyZ3MuaW5kZXgsIDEpOyAvLyBSZW1vdmUgYSB0YXJlZmEgYXRpdmEgdG9jYWRhLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0NhbmNlbCcgfHwgdW5kZWZpbmVkOiAvLyBEZXNjYXJ0YSBvIGRpw6Fsb2dvLlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KSBcbiAgICB9LFxuICAgIG9uRG9uZVRhcChhcmdzKSB7XG4gICAgICBhY3Rpb24oJ1doYXQgZG8geW91IHdhbnQgdG8gZG8gd2l0aCB0aGlzIHRhc2s/JywgJ0NhbmNlbCcsIFsnTWFyayB0byBkbycsICdEZWxldGUgZm9yZXZlciddKVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTsgLy8gUmVnaXN0cmEgYSBvcMOnw6NvIHNlbGVjaW9uYWRhIHBhcmEgZGVidWdnaW5nLlxuICAgICAgICBzd2l0Y2ggKHJlc3VsdCkge1xuICAgICAgICAgIGNhc2UgJ01hcmsgdG8gZG8nOlxuICAgICAgICAgICAgdGhpcy50b2Rvcy51bnNoaWZ0KGFyZ3MuaXRlbSk7IC8vIENvbG9jYSBhIHRhcmVmYSBjb21wbGV0YSB0b2NhZGEgbm8gdG9wbyBkYXMgdGFyZWZhcyBwYXJhIGZhemVyXG4gICAgICAgICAgICB0aGlzLmRvbmVzLnNwbGljZShhcmdzLmluZGV4LCAxKTsgLy8gUmVtb3ZlIGEgdGFyZWZhIHRvY2FkYSBkYSBsaXN0YSBkYXMgY29tcGxldGFzXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdEZWxldGUgZm9yZXZlcic6XG4gICAgICAgICAgICB0aGlzLmRvbmVzLnNwbGljZShhcmdzLmluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0NhbmNlbCd8fHVuZGVmaW5lZDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgb25CdXR0b25UYXAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyB0YXNrIGFkZGVkOiBcIiArIHRoaXMudGV4dEZpZWxkVmFsdWUgKyBcIi5cIik7IC8vIFJlZ2lzdHJhIGxvZyBkYSBub3ZhIHRhcmVmYSBubyBjb25zb2xlIHBhcmEgZGVidWcuXG4gICAgICB0aGlzLnRvZG9zLnVuc2hpZnQoeyBuYW1lOiB0aGlzLnRleHRGaWVsZFZhbHVlIH0pOyAvLyBBZGljaW9uYSBhIG5vdmEgdGFyZWZhIG5vIGFycmF5IGB0b2Rvc1tdYC4gTm92YXMgdGFyZWZhcyBzw6NvIGltZWRpYXRhbWVudGUgZXhpYmlkYXMgbmEgdGVsYS5cbiAgICAgIHRoaXMudGV4dEZpZWxkVmFsdWUgPSBcIlwiOyAvLyBMaW1wYSBvIGlucHV0IGRlIHRleHRvLCBkZXN0YSBmb3JtYSBvIHVzdcOhcmlvIGVzdMOhIGFwdG8gYSBhZGljaW9uYXIgbm92YXMgdGFyZWZhcyBpbWVkaWF0YW1lbnRlLlxuICAgIH0sXG4gIH0sXG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIC5ob21lLXBhbmVsIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgbWFyZ2luOiAxNTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNTtcbiAgICB9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=