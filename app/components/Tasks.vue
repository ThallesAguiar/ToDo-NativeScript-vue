<template>
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%" selectedTabTextColor="#53ba82" tabTextFontSize="20">
        <TabViewItem title="To Do" textTransform="uppercase">
          <!-- Posiciona uma caixa de texto, um botão e uma lista de tarefas na grade. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configura o input de texto e garante que pressionar o Return no teclado produz o mesmo resultado que tocar no botão. -->
              <Button id="add-task-button" row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%" separatorColor="transparent"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label id="active-task" :text="todo.name" textWrap="true" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed" textTransform="uppercase">
          <ListView  id="completed-list" for="done in dones" @itemTap="onDoneTap" height="100%" separatorColor="transparent"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label id="completed-task" :text="done" textWrap="true" />
              </v-template>
            </ListView>
        </TabViewItem>
      </TabView>

    </Page>
</template>

<script>
    export default {
        data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Registra as opções escolhidas para debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Coloca a tarefa ativa tocada no topo de tarefas completadas.
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Cancel' || undefined: // Descarta o diálogo.
              break;
          }
      }) 
    },
    onDoneTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
      .then(result => {
        console.log(result); // Registra a opção selecionada para debugging.
        switch (result) {
          case 'Mark to do':
            this.todos.unshift(args.item); // Coloca a tarefa completa tocada no topo das tarefas para fazer
            this.dones.splice(args.index, 1); // Remove a tarefa tocada da lista das completas
            break;
          case 'Delete forever':
            this.dones.splice(args.index, 1);
            break;
          case 'Cancel'||undefined:
            break;
        }
      })
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Registra log da nova tarefa no console para debug.
      this.todos.unshift({ name: this.textFieldValue }); // Adiciona a nova tarefa no array `todos[]`. Novas tarefas são imediatamente exibidas na tela.
      this.textFieldValue = ""; // Limpa o input de texto, desta forma o usuário está apto a adicionar novas tarefas imediatamente.
    },
  },
    };
</script>

<style scoped>
.home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

.description-label {
        margin-bottom: 15;
    }

TextField {
    font-size: 20;
    color: #53ba82;
    margin-top: 10;
    margin-bottom: 10;
    margin-right: 5;
    margin-left: 20;
}

#add-task-button {
  font-size: 20;
  font-weight: bold;
  color: white;
  background-color: #53ba82;
  margin-top: 20;
  margin-bottom: 10;
  margin-right: 20;
  margin-left: 5;
  border-radius: 20px;
}

#active-task {
  font-size: 20;
  font-weight: bold;
  color: #53ba82;
  margin-left: 20;
  padding-top: 5;
  padding-bottom: 10;
}

#completed-task {
  font-size: 20;
  color: #d3d3d3;
  margin-left: 20;
  padding-top: 5;
  padding-bottom: 10;
  text-decoration: line-through;
}

#completed-list {
  margin-top: 20;    
}
</style>