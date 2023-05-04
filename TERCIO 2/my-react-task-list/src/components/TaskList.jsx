import { Task } from "./Task"; 

export const TaskList = (props) => {

    const {tasks} = props;


    return (
        <ul>
            {tasks.map((task) => (
                <Task name={task.name} completed={task.completed} />
                
            ))}
        </ul>
    )
}