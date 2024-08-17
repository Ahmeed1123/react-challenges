import { v4 as uuidv4 } from "uuid";

export default function reducer(currentTodos,action) {
    switch (action.type) {
        case "added": {
            const newTodos = {
                id: uuidv4(),
                title: action.payload.title,
                description: "",
                isCompleted: false,
              }
              if(action.payload.title === "") {
                alert("العنوان لا يمكن أن يكون فارغا");
                return;
              }
              const updatedTodos = [...currentTodos, newTodos];
              localStorage.setItem("todos", JSON.stringify(updatedTodos));
              return updatedTodos;
        } 
        case "deleted" : {
            const updatedTodos = currentTodos.filter((t) => {
                return t.id != action.payload.id;
              });
              localStorage.setItem("todos", JSON.stringify(updatedTodos));
              return updatedTodos;
        }
        case "updated" : {
            const updatedTodos = currentTodos.map((t) => {
                if(t.id == action.payload.id) {
                  return {...t, title : action.payload.title , description : action.payload.description};
                } else {
                  return t;
                }
              });

              localStorage.setItem("todos", JSON.stringify(updatedTodos));
              return updatedTodos;
        }
        case "get": {
            const storgeTodos = JSON.parse(localStorage.getItem("todos")) ?? [];
            return storgeTodos;
        }
        case "toggleCompleted": {
            const updatedTodos = currentTodos.map((t) => {
                if(t.id == action.payload.id) {
                    const updatedTodo =  {
                        ...t , isCompleted : !t.isCompleted,
                    }
                    return updatedTodo;
                } 
                return t;
              })
              localStorage.setItem("todos", JSON.stringify(updatedTodos));
              return updatedTodos;

        }
        default: {
            throw new Error("Unknown action " + action.type)
        }
    }
    
    return [];
}