import { FC, useState } from "react";
import {
    addButton,
    addSection,
    boardItem,
    boardItemActive,
    container,
    title,
} from "./BoardList.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import SideForm from "./SideForm/SideForm";
import { FiPlusCircle } from "react-icons/fi";
import clsx from "clsx";
import { clickBoard } from "../../store/slices/boardsSlice";
import { GoSignOut, GoSignIn } from "react-icons/go";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { logout, setUser } from "../../store/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";
import { addLog } from "../../store/slices/loggerSlice";
import { v4 as uuidv4 } from "uuid";

const BoardList: FC = () => {
    const { activeBoardId } = useTypedSelector((state) => state.board);
    const { boardArray } = useTypedSelector((state) => state.board);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const dispatch = useTypedDispatch();
    const { isAuth, email } = useAuth();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((userCredential) => {
                console.log(userCredential);
                dispatch(
                    setUser({
                        email: userCredential.user.email,
                        id: userCredential.user.uid,
                    }),
                );
                dispatch(
                    addLog({
                        log: {
                            logId: uuidv4(),
                            logMessage: `로그인: ${userCredential.user.email}`,
                            logAuthor: "User",
                            logTimeStamp: Date.now().toString(),
                        },
                    }),
                );
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                dispatch(logout());
                dispatch(
                    addLog({
                        log: {
                            logId: uuidv4(),
                            logMessage: `로그아웃: ${email}`,
                            logAuthor: "User",
                            logTimeStamp: Date.now().toString(),
                        },
                    }),
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={container}>
            <div className={title}>게시판:</div>
            {boardArray.map((board) => (
                <div
                    className={clsx(
                        {
                            [boardItemActive]: board.boardId === activeBoardId,
                        },
                        {
                            [boardItem]: board.boardId !== activeBoardId,
                        },
                    )}
                    key={board.boardId}
                    onClick={() => dispatch(clickBoard({ activeBoardId: board.boardId }))}
                >
                    {board.boardName}
                </div>
            ))}
            <div className={addSection}>
                {isFormOpen ? (
                    <SideForm setIsFormOpen={setIsFormOpen} />
                ) : (
                    <FiPlusCircle className={addButton} onClick={() => setIsFormOpen(true)} />
                )}
                {isAuth ? (
                    <GoSignOut className={addButton} onClick={handleLogout} />
                ) : (
                    <GoSignIn className={addButton} onClick={handleLogin} />
                )}
            </div>
        </div>
    );
};

export default BoardList;
