function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child};
        } else {
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY}).element;
}

function removeDragging(element) {
    element.classList.remove('dragging');
}

function addDragging(element) {
    element.classList.add('dragging');
}

function addDraggingWhenChecked(draggables) {
    draggables.forEach(draggable => {
        if (draggable.classList.contains('checked')) {
            addDragging(draggable);
        }
    });
}

function removeDraggingWhenChecked(draggables) {
    draggables.forEach(draggable2 => {
        if (draggable2.classList.contains('checked')) {
            removeDragging(draggable2);
        }
    });
}
