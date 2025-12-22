// DOM Elements
const taskInput = document.getElementById('taskInput');
const taskTimeInput = document.getElementById('taskTime');
const taskPriorityInput = document.getElementById('taskPriority');
const taskNotesInput = document.getElementById('taskNotes');
const addTaskBtn = document.getElementById('addTask');
const saveTaskBtn = document.getElementById('saveTask');
const closeModalBtn = document.querySelector('.close-button');
const modal = document.getElementById('taskModal');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to format date
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
};

// Function to format scheduled time
const formatScheduledTime = (dateTimeStr) => {
    if (!dateTimeStr) return '';
    const date = new Date(dateTimeStr);
    return date.toLocaleString();
};

// Function to save tasks to localStorage
const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Function to create a new task element
const createTaskElement = (task) => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;

    const taskTime = document.createElement('span');
    taskTime.className = 'task-time';

    const createdTime = document.createElement('span');
    createdTime.textContent = `Created: ${formatDate(task.timestamp)}`;

    if (task.scheduledTime) {
        const scheduledTime = document.createElement('span');
        scheduledTime.className = 'scheduled-time';
        scheduledTime.textContent = `Scheduled: ${formatScheduledTime(task.scheduledTime)}`;
        taskTime.appendChild(createdTime);
        taskTime.appendChild(scheduledTime);
    } else {
        taskTime.appendChild(createdTime);
    }

    if (task.notes) {
        const taskNotes = document.createElement('span');
        taskNotes.className = 'task-notes';
        taskNotes.textContent = task.notes;
        taskContent.appendChild(taskNotes);
    }

    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = task.completed ? '<i class="fas fa-undo"></i>' : '<i class="fas fa-check"></i>';
    completeBtn.onclick = () => toggleTask(task.id);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.onclick = () => deleteTask(task.id);

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);

    taskContent.appendChild(taskText);
    taskContent.appendChild(taskTime);

    li.appendChild(taskContent);
    li.appendChild(taskActions);

    return li;
};

// Function to render all tasks
const renderTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
};

// Function to show modal
const showModal = () => {
    modal.style.display = 'block';
    taskInput.focus();
};

// Function to hide modal
const hideModal = () => {
    modal.style.display = 'none';
    // Clear form
    taskInput.value = '';
    taskTimeInput.value = '';
    taskPriorityInput.value = 'low';
    taskNotesInput.value = '';
};

// Function to add a new task
const addTask = () => {
    const text = taskInput.value.trim();
    if (text) {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            timestamp: Date.now(),
            scheduledTime: taskTimeInput.value || null,
            priority: taskPriorityInput.value,
            notes: taskNotesInput.value.trim() || null
        };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
        hideModal();
    }
};

// Function to toggle task completion
const toggleTask = (taskId) => {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveTasks();
    renderTasks();
};

// Function to delete a task
const deleteTask = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
};

// Event Listeners
addTaskBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', hideModal);
saveTaskBtn.addEventListener('click', addTask);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        hideModal();
    }
});

// Initial render
renderTasks(); 