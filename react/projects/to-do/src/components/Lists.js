import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Lists({ todoData, setTodoData }) {
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
    console.log(todoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleEnd = (result) => {
    console.log("result", result);

    if (!result.destination) return;

    const newTodoData = todoData;
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className={`${
                        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
                      } flex items-center justify-between w-full px-4 py-1 my-2 text-gary-600 bg-gray-100 border rounded`}
                    >
                      <div className="items-center">
                        <input
                          type="checkbox"
                          className="mr-2"
                          onChange={() => handleCompleChange(data.id)}
                          defaultChecked={false}
                        />
                        <sapn
                          className={
                            data.completed ? "line-through" : undefined
                          }
                        >
                          {data.title}
                        </sapn>
                      </div>
                      <div className="items-center">
                        <button
                          className="px-4 py-2 float-right  "
                          onClick={() => handleClick(data.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
