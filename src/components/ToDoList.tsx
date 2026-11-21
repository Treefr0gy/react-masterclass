import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import {
    Categories,
    categoryState,
    toDoSelector,
    toDoState,
    TODOS_KEY,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Select = styled.select`
    border: none;
    background: transparent;
    color: ${(props) => props.theme.textColor};
    option {
        background-color: ${(props) => props.theme.bgColor};
    }
`;

const Ul = styled.ul`
    font-size: large;
    font-weight: bold;
`;

function ToDoList() {
    const toDo = useRecoilValue(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    useEffect(() => {
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDo));
    }, [toDo]);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    };
    console.log(toDos);
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <Select value={category} onInput={onInput}>
                <option value={Categories.TO_DO}>To Do</option>
                <option value={Categories.DOING}>Doing</option>
                <option value={Categories.DONE}>Done</option>
            </Select>
            <CreateToDo />
            <Ul>
                {toDos?.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </Ul>
        </div>
    );
}

export default ToDoList;