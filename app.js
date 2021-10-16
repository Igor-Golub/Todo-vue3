const App = {
  data() {
    return {
      title: 'Todo list',
      placeholderMessage: 'Write your todo',
      inputValue: '',
      todos: [],
      emptyListMessage: 'The todos list is empty, please enter todo',
    }
  },
  methods: {
    addTodo() {
      if (this.inputValue !== '') {
        this.todos.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1)
    },
    removeAll() {
      this.todos = []
    },
  },
  computed: {

  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

const app = Vue.createApp(App).mount('#root')