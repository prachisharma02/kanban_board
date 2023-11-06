// // components/KanbanContainer.tsx
// import React from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
// } from "react-beautiful-dnd";
// import KanbanBoard from "./kanbanBoard";

// interface KanbanContainerProps {
//   boards: Array<{ id: string }>;
//   tasks: { [key: string]: Array<{ id: string; content: string }> };
// }

// const KanbanContainer: React.FC<KanbanContainerProps> = ({ boards, tasks }) => {
//   const onDragEnd = (result: DropResult) => {
//     // Implement logic to update task order when tasks are dragged and dropped.
//     // You need to handle the state update here based on the `result`.
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="kanban-container">
//         {boards.map((board) => (
//           <Droppable droppableId={board.id} key={board.id}>
//             {(provided) => (
//               <div
//                 {...provided.droppableProps}
//                 ref={provided.innerRef}
//                 className="board-container"
//               >
//                 <KanbanBoard board={board} tasks={tasks[board.id]} />
//               </div>
//             )}
//           </Droppable>
//         ))}
//       </div>
//     </DragDropContext>
//   );
// };

// export default KanbanContainer;
