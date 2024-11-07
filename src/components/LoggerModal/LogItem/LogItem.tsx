import { FC } from "react";
import { ILogItem } from "../../../types";
import { FaUserAlt } from "react-icons/fa";
import { author, date, logItemWrap, message } from "./LogItem.css";

type Props = {
    log: ILogItem;
};

const LogItem: FC<Props> = ({ log }) => {
    const timeOffset = new Date(Date.now() - Number(log.logTimeStamp));
    const [minutes, seconds] = [timeOffset.getMinutes(), timeOffset.getSeconds()];
    const showOffsetTime = `
        ${minutes > 0 ? `${minutes}m` : ""}
        ${seconds > 0 ? `${seconds}s ago` : ""}
        ${seconds === 0 ? "just now" : ""}
    `;
    return (
        <div className={logItemWrap}>
            <div className={author}>
                <FaUserAlt />
                {log.logAuthor}
            </div>
            <div className={message}>{log.logMessage}</div>
            <div className={date}>{showOffsetTime}</div>
        </div>
    );
};

export default LogItem;
