// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   app.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: hyechoi <hyechoi@student.42seoul.kr>       +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2020/11/10 15:30:36 by hyechoi           #+#    #+#             //
//   Updated: 2020/11/10 16:01:31 by hyechoi          ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*
**	fs module
**	http://nodejs.org/api/fs.html
**	file system.
*/
const fs = require('fs');
var dbFile = 'db.json';
var dbDataBuffer = fs.readFileSync(dbFile);
var dbJSON = dbDataBuffer.toString();

function dbSync() {
	fs.writeFileSync(dbFile, dbJSON);
}

const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
	console.log('GET\t/');
	res.send('HELLo World!');
});

/*
**	GET /todos/
*/

app.get('/todos/', (req, res) => {
	console.log('GET\t/todos/');
	res.json(dbJSON);
});

/*
** POST /todos/
*/

app.post('/todos/', (req, res) => {
	console.log('POST\t/todos/');
	res.send('Implement this!');
	// Implement this!
});

/*
**	PATCH /todos/:todo_id
*/

app.patch('/todos/:todo_id', (req, res) => {
	console.log('PATCH\t/todos/');
	res.send(req.params.todo_id + ' Implement this!');
	// Implement this!
});

/*
**	DELETE /todos/:todo_id
*/

app.delete('/todos/:todo_id', (req, res) => {
	console.log('DELETE\t/todos/');
	res.send(req.params.todo_id + ' Implement this!');
	// Implement this!
});

app.listen(PORT, () => {
	console.log('Something behind... you have to implement this...!');
	console.log(`Server is running and listening on port ${PORT}!`);
});
