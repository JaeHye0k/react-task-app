import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBoard, IList, ITask } from "../../types";
import { v4 as uuidv4 } from "uuid";

type TBoardState = {
    activeBoardId: string;
    modalActive: boolean;
    boardArray: IBoard[];
};

type TClickBoardAction = {
    activeBoardId: string;
};

type TAddBoardAction = {
    board: IBoard;
};

type TDeleteListAction = {
    boardId: string;
    list: IList;
};

type TAddTaskAction = {
    task: ITask;
    boardId: string;
    listId: string;
};

type TAddListAction = {
    boardId: string;
    list: IList;
};

type TDeleteTaskAction = {
    boardId: string;
    listId: string;
    task: ITask;
};

type TDeleteBoardAction = {
    boardId: string;
};

type TDragAndDropAction = {
    boardIdx: number;
    droppableIdStart: string;
    droppableIdEnd: string;
    draggableIndexStart: number;
    draggableIndexEnd: number;
};

const initialState: TBoardState = {
    activeBoardId: "board 0",
    modalActive: false,
    boardArray: [
        {
            boardId: "board 0",
            boardName: "board 0",
            lists: [
                {
                    listId: "list 0",
                    listName: "list 0",
                    tasks: [
                        {
                            taskId: uuidv4(),
                            taskName: "task 0",
                            taskDescription: "task description",
                            taskOwner: "lee",
                        },
                        {
                            taskId: uuidv4(),
                            taskName: "task 1",
                            taskDescription: "task description",
                            taskOwner: "lee",
                        },
                    ],
                },
                {
                    listId: "list 1",
                    listName: "list 1",
                    tasks: [
                        {
                            taskId: uuidv4(),
                            taskName: "task 0",
                            taskDescription: "task description",
                            taskOwner: "lee",
                        },
                    ],
                },
            ],
        },
    ],
};

const boardsSlice = createSlice({
    name: "boards",
    initialState,
    reducers: {
        clickBoard(state, { payload }: PayloadAction<TClickBoardAction>) {
            state.activeBoardId = payload.activeBoardId;
        },
        addBoards(state, { payload }: PayloadAction<TAddBoardAction>) {
            state.boardArray.push(payload.board);
        },
        deleteList(state, { payload }: PayloadAction<TDeleteListAction>) {
            const board = state.boardArray.find((board) => board.boardId === payload.boardId)!;
            board.lists = board.lists.filter((list) => list.listId !== payload.list.listId);
        },
        setModalActive(state, { payload }: PayloadAction<boolean>) {
            state.modalActive = payload;
        },
        addTask(state, { payload }: PayloadAction<TAddTaskAction>) {
            const board = state.boardArray.find((board) => board.boardId === payload.boardId)!;
            const list = board.lists.find((list) => list.listId === payload.listId)!;
            list.tasks.push(payload.task);
        },
        updateTask(state, { payload }: PayloadAction<TAddTaskAction>) {
            const board = state.boardArray.find((board) => board.boardId === payload.boardId)!;
            const list = board.lists.find((list) => list.listId === payload.listId)!;
            const taskIdx = list.tasks.findIndex((task) => task.taskId === payload.task.taskId)!;
            list.tasks[taskIdx] = payload.task;
        },
        deleteTask(state, { payload }: PayloadAction<TDeleteTaskAction>) {
            const board = state.boardArray.find((board) => board.boardId === payload.boardId)!;
            const list = board.lists.find((list) => list.listId === payload.listId)!;
            const taskIdx = list.tasks.findIndex((task) => task.taskId === payload.task.taskId)!;
            list.tasks.splice(taskIdx, 1);
        },
        addList(state, { payload }: PayloadAction<TAddListAction>) {
            const board = state.boardArray.find((board) => board.boardId === payload.boardId)!;
            board.lists.push(payload.list);
        },
        deleteBoard(state, { payload }: PayloadAction<TDeleteBoardAction>) {
            const boardIdx = state.boardArray.findIndex(
                (board) => board.boardId === payload.boardId,
            )!;
            state.boardArray.splice(boardIdx, 1);
        },
        dragAndDropTask(state, { payload }: PayloadAction<TDragAndDropAction>) {
            const {
                boardIdx,
                droppableIdStart,
                droppableIdEnd,
                draggableIndexStart,
                draggableIndexEnd,
            } = payload;

            const sourceList = state.boardArray[boardIdx].lists.find(
                (list) => list.listId === droppableIdStart,
            )!;
            const destList = state.boardArray[boardIdx].lists.find(
                (list) => list.listId === droppableIdEnd,
            )!;

            const [reorderedTask] = sourceList.tasks.splice(draggableIndexStart, 1);
            destList.tasks.splice(draggableIndexEnd, 0, reorderedTask);
        },
    },
});

export const {
    addBoards,
    deleteList,
    clickBoard,
    setModalActive,
    addTask,
    addList,
    updateTask,
    deleteTask,
    deleteBoard,
    dragAndDropTask,
} = boardsSlice.actions;

export const boardsReducer = boardsSlice.reducer;
