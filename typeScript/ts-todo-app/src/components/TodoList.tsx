import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import TodoListItem from "./TodoListItem";
import "./style.css"
//? 3.Kullanım yolu(Props type tanımlası)
//! React.FC, bir functional component'i ifade eder. Bileşenin işlevsel bir yapıda olduğunu ve React tarafından kullanılabileceğini belirtir.

//? React.FC, bileşenlere props tanımlamak ve JSX döndürmek için kullanılan bir genel tip (generic type) olarak kullanılır. Bu tip, bileşenin alacağı props'ların tipini belirtmek için kullanılır. Props'ların tipini belirtmek, bileşenin daha güvenli ve hatasız olmasını sağlar.

//* Ancak, React.FC kullanmak zorunlu değildir. Fonksiyonel bir bileşen, sadece fonksiyon olarak da tanımlanabilir ve React.FC kullanmadan da props alabilir ve JSX döndürebilir.

//+ FC, "FunctionComponent" kelimelerinin kısaltmasıdır.
// interface ITodoList {
//   todos: ITodoType[];
//   deleteTodo:DeleteFn;
//   toggleTodo:ToggleFn;
// }

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}
const TodoList: FC<ITodoList> = ({ todos,deleteTodo,toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone); //* tammlanmayan taskler
  const completedTodos = todos.filter((todo) => todo.isDone); //* tammlanan taskler
  return (
    <Grid container sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        mt:3,
        gap:"0.5rem"
    }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography className="title" color="secondary" align="center" variant="h4">
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Progress Todos!
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
        }}
      >
        <Typography className="title" sx={{color:"green"}} align="center" variant="h4">
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo} />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TodoList;
