import React from "react";
import { Text, FlatList, View } from "react-native";
import ClipboardIcon from "../../../assets/Clipboard.svg"
import Task, { TaskProps } from "../Task";
import { styles } from "./style";

type TaskListProps = {
    tasks: TaskProps[];
    onTaskChange: (item: TaskProps) => void;
    onTaskDelete: (item: TaskProps) => void;
}

export default function TaskList(props: TaskListProps) {

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={props.tasks}
            keyExtractor={task => task.name}
            renderItem={({ item }) => (
                <Task
                    {...item}
                    onChange={() => props.onTaskChange(item)}
                    onDelete={() => props.onTaskDelete(item)}
                />
            )}
            ListEmptyComponent={() => (
                <View style={styles.listEmptyComponentContainer}>
                    <ClipboardIcon width={56} height={56} />
                    <Text style={styles.listEmptyBoldText}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.listEmptyText}>Crie Tarefas e organize seus itens a fazer</Text>
                </View>
            )}
        />
    );
}
