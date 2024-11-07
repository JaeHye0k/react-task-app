import { FC } from "react";
import { ITask } from "../../types";
import { container, description, title } from "./Task.css";

type Props = {
    task: ITask;
};

const Task: FC<Props> = ({ task }) => {
    return (
        <div className={container}>
            <div className={title}>{task.taskName}</div>
            <div className={description}>{task.taskDescription}</div>
        </div>
    );
};

export default Task;
