import { FC } from "react";
import { IList, ITask } from "../../types";
import { GrFormSubtract } from "react-icons/gr";
import Task from "../Task/Task";
import ActionButton from "../ActionButton/ActionButton";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { deleteList, setModalActive } from "../../store/slices/boardsSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import { setModalData } from "../../store/slices/modalSlice";
import { deleteButton, header, listWrapper, name } from "./List.css";
import { Draggable, Droppable } from "@hello-pangea/dnd";

type Props = {
    list: IList;
};

const List: FC<Props> = ({ list }) => {
    const dispatch = useTypedDispatch();
    const { activeBoardId } = useTypedSelector((state) => state.board);

    const handleDeleteList = () => {
        dispatch(
            deleteList({
                list,
                boardId: activeBoardId,
            }),
        );
        dispatch(
            addLog({
                log: {
                    logId: uuidv4(),
                    logMessage: `리스트 삭제: ${list.listName}`,
                    logAuthor: "User",
                    logTimeStamp: Date.now().toString(),
                },
            }),
        );
    };

    const handleClickTask = (boardId: string, listId: string, task: ITask) => {
        dispatch(
            setModalData({
                boardId,
                listId,
                task,
            }),
        );
        dispatch(setModalActive(true));
    };
    return (
        <Droppable droppableId={list.listId}>
            {(provided) => (
                <div className={listWrapper} {...provided.droppableProps} ref={provided.innerRef}>
                    <div className={header}>
                        <div className={name}>{list.listName}</div>
                        <GrFormSubtract
                            className={deleteButton}
                            onClick={() => handleDeleteList()}
                        />
                    </div>
                    <div>
                        {list.tasks.map((task, index) => (
                            <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
                                {(provided) => (
                                    <div
                                        onClick={() =>
                                            handleClickTask(activeBoardId, list.listId, task)
                                        }
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <Task task={task} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                    {provided.placeholder}
                    <ActionButton listId={list.listId} />
                </div>
            )}
        </Droppable>
    );
};

export default List;
