import React, { useState, useEffect } from 'react';
// import documentsData from './data/documents.json';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './components/cards/cards';
import Overlay from './components/overlay/overlay';
import "./App.css";

const documentsData = [
    {
        "type": "bank-draft",
        "title": "Bank Draft",
        "position": 0,
        "thumbnail": "../Images/cat1.png"  // Adjusted the path here
    },
    {
        "type": "bill-of-lading",
        "title": "Bill of Lading",
        "position": 1,
        "thumbnail": "../Images/cat2.png"  // Adjusted the path here
    },
    {
        "type": "invoice",
        "title": "Invoice",
        "position": 2,
        "thumbnail": "../Images/cat3.png"  // Adjusted the path here
    },
    {
        "type": "bank-draft-2",
        "title": "Bank Draft 2",
        "position": 3,
        "thumbnail": "../Images/cat2.png"  // Adjusted the path here
    },
    {
        "type": "bill-of-lading-2",
        "title": "Bill of Lading 2",
        "position": 4,
        "thumbnail": "../Images/cat1.png"  // Adjusted the path here
    }
];


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

    const getImage = (imagePath) => {
        return require(`${imagePath}`);
    };

  return (
    <div className='App'>
    {overlayImage && <Overlay image={getImage(overlayImage)} onClose={handleCloseOverlay} />}
    {/* DragDropContext and Droppable here */}
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cards">
            {(provided) => (
                <div className="grid" {...provided.droppableProps} ref={provided.innerRef}>
                    {documents.map((doc, index) => (
                        <Draggable key={doc.type} draggableId={doc.type} index={index}>
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
  )
}

export default App