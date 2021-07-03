let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: true }
];

//your code here
let isDoneTask = function(task){
	return (task.done)
}

let isTaskNotDone = function(task){
	return (!task.done)
}

let isLabelMake = function(task){
	return (task.label.indexOf("Make") >= 0)
}

let removeDone = tasks.filter(isLabelMake).filter(isDoneTask);


console.log(removeDone)