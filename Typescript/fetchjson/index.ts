import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

type Todo = {
	id: number;
	title: string;
	completed: boolean;
};

axios.get(url).then(response => {
	const { title, id, completed } = response.data as Todo;

	console.log(`
        The Todo with Id: ${id}
        Has a title of ${title}
        Is it finished? ${completed}
    `);
});
