const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');
const multipleCheckbox = document.querySelectorAll('.checkbox');
multipleCheckbox.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked === true) {
            checkbox.parentElement.classList.add('checked');
        }
    });
});
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        addDraggingWhenChecked(draggables);
        if (!draggable.classList.contains('checked')) {
            addDragging(draggable);
        }
    });
    draggable.addEventListener('dragend', () => {
        removeDraggingWhenChecked(draggables);
        if (!draggable.classList.contains('checked')) {
            removeDragging(draggable);
        }
    });
});
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
});
