import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const Button = styled.button`
    border: none;
    background: transparent;
    color: ${(props) => props.theme.textColor};
`;

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: name as any };
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };
    const onDelete = () => {
        setToDos((oldToDos) => oldToDos.filter((toDo) => toDo.id !== id));
    };
    return (
        <li>
            <span>{text}</span>
            {category !== Categories.DOING && (
                <Button name={Categories.DOING} onClick={onClick}>
                    Doing
                </Button>
            )}
            {category !== Categories.TO_DO && (
                <Button name={Categories.TO_DO} onClick={onClick}>
                    To Do
                </Button>
            )}
            {category !== Categories.DONE && (
                <Button name={Categories.DONE} onClick={onClick}>
                    Done
                </Button>
            )}
            <Button onClick={onDelete}>❌</Button>
        </li>
    );
}

export default ToDo;