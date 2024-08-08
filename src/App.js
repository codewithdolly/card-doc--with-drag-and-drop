import React, { useState } from "react";
import documentsData from "./data/documents.json";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "./components/cards/cards";
import Overlay from "./components/overlay/overlay";
import "./App.css";

function App() {
  const [documents, setDocuments] = useState(documentsData);
  const [overlayImage, setOverlayImage] = useState(null);

  const handleCardClick = (doc) => {
    setOverlayImage(doc.thumbnail);
  };

  const handleCloseOverlay = () => {
    setOverlayImage(null);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(documents);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setDocuments(items);
  };

  return (
    <div className="App">
      {overlayImage && (
        <Overlay data-toggle="modal" data-target="#exampleModalLong" image={overlayImage} onClose={handleCloseOverlay}  />
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cards">
          {(provided) => (
            <div
              className="grid"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {documents.map((doc, index) => (
                <Draggable
                  key={doc.id}
                  draggableId={doc.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        title={doc.title}
                        thumbnail={doc.thumbnail}
                        onClick={() => handleCardClick(doc)}
                      />
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

export default App;
