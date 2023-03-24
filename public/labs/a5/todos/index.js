import TodoList from "./TodoList.js";

// eslint-disable-next-line no-undef
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);