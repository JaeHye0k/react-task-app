import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiX } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";
import { addList, addTask } from "../../../store/slices/boardsSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";
import { button, buttons, close, input, listForm, taskForm } from "./DropDownForm.css";
type Props = {
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
    listId: string;
    boardId: string;
};

const DropDownForm: FC<Props> = ({ setIsFormOpen, listId, boardId }) => {
    const [text, setText] = useState<string>("");
    const formPlaceHolder = listId ? "일의 제목을 입력하세요" : "리스트의 제목을 입력하세요.";
    const buttonTitle = listId ? "일 추가하기" : "리스트 추가하기";
    const dispatch = useTypedDispatch();
    const handleAddTask = () => {
        if (text.trim() !== "") {
            if (listId) {
                dispatch(
                    addTask({
                        task: {
                            taskId: uuidv4(),
                            taskName: text,
                            taskDescription: text,
                            taskOwner: "User",
                        },
                        listId,
                        boardId,
                    }),
                );
                dispatch(
                    addLog({
                        log: {
                            logId: uuidv4(),
                            logMessage: `일 생성하기: ${text}`,
                            logAuthor: "User",
                            logTimeStamp: Date.now().toString(),
                        },
                    }),
                );
            } else {
                dispatch(
                    addList({
                        list: {
                            listId: uuidv4(),
                            listName: text,
                            tasks: [],
                        },
                        boardId,
                    }),
                );
                dispatch(
                    addLog({
                        log: {
                            logId: uuidv4(),
                            logMessage: `리스트 생성하기: ${text}`,
                            logAuthor: "User",
                            logTimeStamp: Date.now().toString(),
                        },
                    }),
                );
            }
        }
    };

    return (
        <div className={listId ? taskForm : listForm}>
            <textarea
                className={input}
                value={text}
                onChange={(e) => setText(e.currentTarget.value)}
                autoFocus
                placeholder={formPlaceHolder}
                onBlur={() => setIsFormOpen(false)}
            />
            <div className={buttons}>
                <button className={button} onMouseDown={handleAddTask}>
                    {buttonTitle}
                </button>
                <FiX className={close} />
            </div>
        </div>
    );
};

export default DropDownForm;
