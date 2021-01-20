const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let counter = 0

function newTodo() {
	// alert('New TODO button clicked!')

	// ask for TODO
	// const task = prompt("Enter task")
	// if (task) {
	// add a list item
	const listItem = document.createElement('li')
	listItem.className = classNames.TODO_ITEM
	listItem.id = counter
	counter++
	itemCountSpan.innerHTML++
	uncheckedCountSpan.innerHTML++
	// checkbox
	const checkBox = document.createElement('input')
	checkBox.className = classNames.TODO_CHECKBOX
	checkBox.type = 'checkbox'
	checkBox.id = 'checkbox' + listItem.id
	checkBox.onclick = function () {
		if (checkBox.checked)
			uncheckedCountSpan.innerHTML--
		else
			uncheckedCountSpan.innerHTML++
	}
	listItem.appendChild(checkBox)
	// label
	// const label = document.createElement('input')
	// label.type = 'text'
	const label = document.createElement('label')
	label.htmlFor = listItem.id
	label.className = classNames.TODO_TEXT
	label.id = 'label' + listItem.id
	label.contentEditable = 'true'
	// label.textContent = task
	label.value = 'TODO'
	label.innerText = 'TODO'
	listItem.appendChild(label)
	// delete button
	const deleteButton = document.createElement('button')
	deleteButton.className = classNames.TODO_DELETE
	deleteButton.id = 'delete' + listItem.id
	deleteButton.textContent = 'DELETE'
	deleteButton.style.float = 'right'
	deleteButton.value = listItem.id
	deleteButton.onclick = function () {
		deleteTodo(listItem.id)
	}
	listItem.appendChild(deleteButton)

	list.appendChild(listItem)
	// }

}

function deleteTodo(id) {
	const listItem = document.getElementById(id)
	itemCountSpan.innerHTML--
	if (!listItem.children['checkbox' + id].checked)
		uncheckedCountSpan.innerHTML--
	listItem.remove()
}
