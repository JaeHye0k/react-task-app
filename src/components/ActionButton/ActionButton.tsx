import { FC, useState } from "react";
import { useTypedSelector } from "../../hooks/redux";
import DropDownForm from "./DropDownForm/DropDownForm";
import { IoIosAdd } from "react-icons/io";
import { listButton, taskButton } from "./ActionButton.css";

type Props = {
    listId: string;
};

const ActionButton: FC<Props> = ({ listId }) => {
    const boardId = useTypedSelector((state) => state.board.activeBoardId);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const buttonText = listId ? "새로운 일 등록" : "새로운 리스트 등록";
    return isFormOpen ? (
        <DropDownForm setIsFormOpen={setIsFormOpen} listId={listId} boardId={boardId} />
    ) : (
        <div className={listId ? taskButton : listButton} onClick={() => setIsFormOpen(true)}>
            <IoIosAdd />
            <p>{buttonText}</p>
        </div>
    );
};

export default ActionButton;
