class Todo {
  text: string;
  id: string;
  constructor(todotext: string) {
    this.text = todotext;
    this.id = Date.now().toString();
  }
}
export default Todo;
