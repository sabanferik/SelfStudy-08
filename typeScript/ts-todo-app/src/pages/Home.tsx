import { Container, Typography } from "@mui/material";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { useState } from "react";

interface ITodoType {
    task: string ;
    isDone: boolean;
    id: string | number;
}

const Home = () =>{
    // const [todos,setTodos] = useState([] as ITodoType[])
    // const [todos,setTodos] = useState<Array<ITodoType>>([])
    const [todos,setTodos] = useState<ITodoType[]>([]) //* yaygın olan kullanım 
    return (
        <Container>
            <Typography align="center" color="error" variant="h2" component="h1">
            Todo App with Typescript
            </Typography>
            <AddTodoComp />
            <TodoList/>
        </Container>
    )
}

export default Home;