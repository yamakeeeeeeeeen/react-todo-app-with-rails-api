import {useEffect, useState, VFC} from "react";

type Todo = {
    id: number;
    title: string;
}
type Todos = Todo[]


const Home = () => {
    const [todos, setTodos] = useState<Todos | null>(null);
    useEffect(() => {
        async () => {
            // URLはlocalhostではなくapiとなる
            const response = await fetch("http://api:3000/todos", {method: "GET"});
            const json = await response.json();
            setTodos(json)
        }
    }, []);


    return (
        <div>
            <h2>
                POSTの一覧
            </h2>
            <table>
                {todos && todos.map((todos) =>
                    <tr>
                        <td>{todos.id}.</td>
                        <td>{todos.title}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default Home;
