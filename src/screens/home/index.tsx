import React, { useEffect } from "react";
import { TextInput, TouchableOpacity, View, Text, FlatList, Alert } from "react-native";
import { styles } from "./style";
import Logo from "../../../assets/Logo.svg"
import Plus from "../../../assets/Plus.svg"
import { useState } from "react";
import TaskList from "../../components/TaskList";
import { TaskProps } from "../../components/Task";

export default function Home() {
    const [createdCount, setCreatedCount] = useState(0)
    const [finishedCount, setFinishedCount] = useState(0)
    const [taskList, setTaskList] = useState<TaskProps[]>([])
    const [name, setName] = useState("")

    useEffect(() => {
        setFinishedCount(taskList.filter((task) => task.done === true).length)
        setCreatedCount(taskList.length)
        setTaskList(taskList.sort((a) => a.done ? 1 : -1))
    }, [taskList])



    function handleAddTask(name: string) {
        if (name.length === 0) {
            Alert.alert("Task com o nome muito curto");
            return
        }

        if (taskList.find((task) => task.name === name)) {
            Alert.alert("Uma task com esse nome já existe.");
            return
        }

        setTaskList([...taskList, { name: name, done: false }])
        setName("")
    }

    function handleTaskChange(task: TaskProps) {
        const index = taskList.findIndex((item) => item.name === task.name);
        taskList[index].done = !task.done;
        setTaskList([...taskList])
    }


    function handleTaskDelete(task: TaskProps) {
        setTaskList((prevStt) => prevStt.filter((item) => task.name !== item.name))
        setCreatedCount(createdCount - 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.backHeader}>
                <Logo width={150} height={50} />
            </View>
            <View style={styles.taskForm}>
                <TextInput
                    style={styles.taskInput}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={text => setName(text)}
                    value={name}
                    maxLength={75}
                />
                <TouchableOpacity style={styles.addTaskButton} onPress={() => handleAddTask(name)}>
                    <Plus width={16} height={16} />
                </TouchableOpacity>
            </View>

            <View style={styles.taskCountersContainer}>
                <View style={styles.taskCounterGroup}>
                    <Text style={styles.taskCounterSection}>Criadas</Text>
                    <Text style={styles.taskCounter}>{createdCount}</Text>
                </View>

                <View style={styles.taskCounterGroup}>
                    <Text style={styles.taskCounterSection}>Concluídas</Text>
                    <Text style={styles.taskCounter}>{finishedCount}</Text>
                </View>
            </View>

            <TaskList tasks={taskList} onTaskChange={handleTaskChange} onTaskDelete={handleTaskDelete} />
        </View>
    );
}
