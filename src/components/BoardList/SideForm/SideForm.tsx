import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoards } from "../../../store/slices/boardsSlice";
import { checkIcon, input, sideForm } from "./SideForm.css";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type Props = {
    setIsFormOpen: Dispatch<SetStateAction<boolean>>;
};

const SideForm: FC<Props> = ({ setIsFormOpen }) => {
    const [inputText, setInputText] = useState<string>("");
    const dispatch = useTypedDispatch();
    const handleAddBoard = () => {
        if (inputText.trim() !== "") {
            setIsFormOpen((prev) => !prev);
            dispatch(
                addBoards({
                    board: {
                        boardId: uuidv4(),
                        boardName: inputText,
                        lists: [],
                    },
                }),
            );
            dispatch(
                addLog({
                    log: {
                        logId: uuidv4(),
                        logMessage: `게시판 등록: ${inputText}`,
                        logAuthor: "User",
                        logTimeStamp: Date.now().toString(),
                    },
                }),
            );
            setInputText("");
        }
    };

    return (
        <div className={sideForm}>
            <input
                className={input}
                autoFocus
                type="text"
                placeholder="새 게시판 등록하기"
                value={inputText}
                onChange={(e) => setInputText(e.currentTarget.value)}
                onBlur={() => setIsFormOpen(false)}
            />
            <FiCheck className={checkIcon} onMouseDown={handleAddBoard} />
        </div>
    );
};

export default SideForm;
