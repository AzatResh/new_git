document.querySelector('#new_task').onclick = function() {
    if (document.querySelector('#main_panel input').value.length == 0) {
        alert("Please Enter a task!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelectorAll('.task').length+1}. ${document.querySelector('#main_panel input').value}
                </span>
                <button class="delete" onclick='deleteElement(event, this);'>
                    <i class="far fa-trash-alt">X</i>
                </button>
                <button class="non_line" onclick='lineThrough(event,this)'">
                    <i class="far fa-trash-alt">---</i>
                </button>
            </div>
        `;
    }
}

const deleteElement = (event, element) => {
    element.parentNode.remove();
}
const lineThrough = (event, element) => {
    parent_element = element.parentNode;
    if (!parent_element.classList.contains('active')) {
        parent_element.classList.add('active');
    } else {
        parent_element.classList.remove('active');
    }

}