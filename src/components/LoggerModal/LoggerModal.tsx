import { Dispatch, FC, SetStateAction } from "react";
import { useTypedSelector } from "../../hooks/redux";
import { FiX } from "react-icons/fi";
import LogItem from "./LogItem/LogItem";
import { body, closeButton, header, modalWindow, title, wrapper } from "./LoggerModal.css";

type Props = {
    setIsLoggerOpen: Dispatch<SetStateAction<boolean>>;
};

const LoggerModal: FC<Props> = ({ setIsLoggerOpen }) => {
    const { logArray } = useTypedSelector((state) => state.logger);

    return (
        <div className={wrapper}>
            <div className={modalWindow}>
                <div className={header}>
                    <div className={title}>활동 기록</div>
                    <FiX className={closeButton} onClick={() => setIsLoggerOpen(false)} />
                </div>
                <div className={body}>
                    {logArray.map((log) => (
                        <LogItem key={log.logId} log={log} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoggerModal;
