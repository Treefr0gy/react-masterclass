import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";

const Input = styled.input`
    border: none;
    background: transparent;
    color: ${(props) => props.theme.textColor};
    &::placeholder {
        color: ${(props) => props.theme.textColor};
    }
`;

const Button = styled.button`
    border: none;
    background: transparent;
    color: ${(props) => props.theme.textColor};
`;

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const category = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }: IForm) => {
        setToDos((oldToDos) => [
            { text: toDo, id: Date.now(), category },
            ...oldToDos,
        ]);
        setValue("toDo", "");
    };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <Input
                {...register("toDo", {
                    required: "Please write a To Do",
                })}
                placeholder="Write a to do"
            />
            <Button>Add</Button>
        </form>
    );
}

export default CreateToDo;