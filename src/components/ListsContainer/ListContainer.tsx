import { FC } from "react";
import List from "../List/List";
import { IList } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import { listContainer } from "./ListContainer.css";

type Props = {
    lists: IList[];
};

const ListContainer: FC<Props> = ({ lists }) => {
    return (
        <div className={listContainer}>
            {lists.map((list) => (
                <List key={list.listId} list={list} />
            ))}
            <ActionButton listId={""} />
        </div>
    );
};

export default ListContainer;
