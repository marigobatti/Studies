'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1['default'].get(url).then(function(response) {
	const { title, id, finished } = response.data;

	console.log(`
        The Todo with Id: ${id}
        Has a title of ${title}
        Is it finished? ${finished}
    `);
});
