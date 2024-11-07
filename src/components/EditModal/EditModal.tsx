import { useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { ITask } from "../../types";
import { deleteTask, setModalActive, updateTask } from "../../store/slices/boardsSlice";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import {
    buttons,
    closeButton,
    deleteButton,
    header,
    input,
    modalWindow,
    title,
    updateButton,
    wrapper,
} from "./EditModal.css";

const EditModal = () => {
    const modalData = useTypedSelector((state) => state.modal);
    const [taskData, setTaskData] = useState<ITask>(modalData.task);
    const dispatch = useTypedDispatch();

    const handleCloseModal = () => {
        dispatch(setModalActive(false));
    };

    const handleUpdate = () => {
        dispatch(updateTask({ ...modalData, task: taskData }));
        dispatch(
            addLog({
                log: {
                    logId: uuidv4(),
                    logMessage: `일 수정하기: ${taskData.taskName}`,
                    logAuthor: "User",
                    logTimeStamp: Date.now().toString(),
                },
            }),
        );
        dispatch(setModalActive(false));
    };

    const handleDelete = () => {
        dispatch(deleteTask(modalData));
        dispatch(
            addLog({
                log: {
                    logId: uuidv4(),
                    logMessage: `일 삭제하기: ${modalData.task.taskName}`,
                    logAuthor: "User",
                    logTimeStamp: Date.now().toString(),
                },
            }),
        );
        dispatch(setModalActive(false));
    };

    return (
        <div className={wrapper}>
            <div className={modalWindow}>
                <div className={header}>
                    <div className={title}>{taskData.taskName}</div>
                    <FiX className={closeButton} onClick={handleCloseModal} />
                </div>
                <div className={title}>제목</div>
                <input
                    className={input}
                    type="text"
                    value={taskData.taskName}
                    aria-label="Task Name"
                    onChange={(e) => setTaskData({ ...taskData, taskName: e.target.value })}
                />
                <div className={title}>설명</div>
                <input
                    className={input}
                    type="text"
                    value={taskData.taskDescription}
                    aria-label="Task Description"
                    onChange={(e) => setTaskData({ ...taskData, taskDescription: e.target.value })}
                />
                <div className={title}>생성한 사람</div>
                <input
                    className={input}
                    type="text"
                    value={taskData.taskOwner}
                    aria-label="Task Owner"
                    onChange={(e) => setTaskData({ ...taskData, taskOwner: e.target.value })}
                />
                <div className={buttons}>
                    <button className={updateButton} onClick={handleUpdate}>
                        일 수정하기
                    </button>
                    <button className={deleteButton} onClick={handleDelete}>
                        일 삭제하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
