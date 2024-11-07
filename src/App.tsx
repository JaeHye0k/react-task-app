import { appContainer, board, buttons, deleteBoardButton, loggerButton } from "./App.css";
import BoardList from "./components/BoardList/BoardList";
import ListContainer from "./components/ListsContainer/ListContainer";
import { useTypedDispatch, useTypedSelector } from "./hooks/redux";
import EditModal from "./components/EditModal/EditModal";
import { useState } from "react";
import LoggerModal from "./components/LoggerModal/LoggerModal";
import { clickBoard, deleteBoard, dragAndDropTask } from "./store/slices/boardsSlice";
import { addLog } from "./store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

function App() {
    const { activeBoardId, boardArray, modalActive } = useTypedSelector((state) => state.board);
    const [isLoggerOpen, setIsLoggerOpen] = useState<boolean>(false);
    const activeBoardIdx = boardArray.findIndex((board) => board.boardId === activeBoardId)!;
    const activeBoard = boardArray[activeBoardIdx];
    const lists = activeBoard.lists;
    const dispatch = useTypedDispatch();
    const handleDeleteBoard = () => {
        if (boardArray.length > 1) {
            dispatch(deleteBoard({ boardId: activeBoardId }));
            dispatch(
                addLog({
                    log: {
                        logId: uuidv4(),
                        logMessage: `게시판 삭제: ${activeBoard.boardName}`,
                        logAuthor: "User",
                        logTimeStamp: Date.now().toString(),
                    },
                }),
            );

            const newActiveBoard =
                boardArray[activeBoardIdx > 0 ? activeBoardIdx - 1 : activeBoardIdx + 1];
            dispatch(clickBoard({ activeBoardId: newActiveBoard.boardId }));
        } else {
            alert("최소 게시판 개수는 1개 입니다.");
        }
    };
    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination, draggableId } = result;
        const sourceList = lists.find((list) => list.listId === source.droppableId);
        const destList = lists.find((list) => list.listId === destination.droppableId);
        dispatch(
            dragAndDropTask({
                boardIdx: activeBoardIdx,
                droppableIdStart: source.droppableId,
                droppableIdEnd: destination.droppableId,
                draggableIndexStart: source.index,
                draggableIndexEnd: destination.index,
            }),
        );

        dispatch(
            addLog({
                log: {
                    logId: uuidv4(),
                    logMessage: `리스트 ${sourceList?.listName} 에서 리스트 ${destList?.listName}로 
                    ${
                        sourceList?.tasks.find((task) => task.taskId === draggableId)?.taskName
                    }을 이동`,
                    logAuthor: "User",
                    logTimeStamp: Date.now().toString(),
                },
            }),
        );
    };
    return (
        <div className={appContainer}>
            {isLoggerOpen && <LoggerModal setIsLoggerOpen={setIsLoggerOpen} />}
            {modalActive && <EditModal />}
            <BoardList />
            <div className={board}>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <ListContainer lists={lists} />
                </DragDropContext>
            </div>
            <div className={buttons}>
                <button className={deleteBoardButton} onClick={handleDeleteBoard}>
                    이 게시판 삭제하기
                </button>
                <button className={loggerButton} onClick={() => setIsLoggerOpen((prev) => !prev)}>
                    {isLoggerOpen ? "활동 목록 숨기기" : "활동 목록 보이기"}
                </button>
            </div>
        </div>
    );
}

export default App;
