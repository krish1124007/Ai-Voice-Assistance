
function DisplayWeather(Data) {
    
    const AnswerContainerWeather = document.getElementById('Answer');
    AnswerContainerWeather.innerHTML = ''; // Clear old content

    const TodoContainer = document.createElement('div');

    TodoContainer.style.display = 'flex';
    TodoContainer.style.flexDirection = 'row';
    TodoContainer.style.width = '100%';
    TodoContainer.style.flexWrap = 'wrap';
    TodoContainer.style.justifyContent = 'space-around';

    const DataElement = Object.entries(Data);
    console.log(DataElement)
    
    // Loop through data and create new elements
    for (let i = 0; i < 6; i++) {
        const NewTodo = document.createElement('p');
        const HeadSpan = document.createElement('span');
        HeadSpan.style.fontSize ='15px'
        const AnswerSpan = document.createElement('span');
        AnswerSpan.style.fontSize='15px'

        NewTodo.style.display = 'flex';
        NewTodo.style.flexDirection = 'column';
        HeadSpan.innerHTML = DataElement[i][0];
        AnswerSpan.innerHTML = DataElement[i][1];

        NewTodo.style.padding = '20px';
        NewTodo.className = 'Todos';
        NewTodo.style.background = 'rgb(41, 149, 200)';
        NewTodo.style.color = 'black';
        NewTodo.style.width = '33%';

        NewTodo.appendChild(HeadSpan);
        NewTodo.appendChild(AnswerSpan);

        TodoContainer.appendChild(NewTodo);
    }

    AnswerContainerWeather.appendChild(TodoContainer);
}
