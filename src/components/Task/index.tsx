import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import TrashIcon from "../../../assets/TrashIcon.svg"
import UnCheckedCircle from "../../../assets/UnCheckedCircle.svg"
import CheckedCircle from "../../../assets/CheckedCircle.svg"
import { styles } from "./style";

export type TaskProps = {
    name: string;
    done: boolean;
    onChange?: () => void;
    onDelete?: () => void;
}

export default function Task(props: TaskProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onChange}>
                {props.done
                    ? <CheckedCircle width={17} height={17} />
                    : <UnCheckedCircle width={17} height={17} />
                }
            </TouchableOpacity>
            <Text style={props.done ? styles.taskDone : styles.taskUndone}>{props.name}</Text>

            <TouchableOpacity onPress={props.onDelete}>
                <TrashIcon width={12} height={14} />
            </TouchableOpacity>
        </View>
    );
}
