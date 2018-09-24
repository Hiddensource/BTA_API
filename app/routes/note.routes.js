module.exports = (app) => {
	
	
	
    const notes = require('../controllers/note.controller.js');

    // Create a new registration
    // app.post('/user', notes.create)
	// console.log('post called');

    // Login
    app.get('/login', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/user/:noteId', notes.findOne);

    // Update Profile
    app.put('/user/:noteId', notes.update);

    // Delete Account
    app.delete('/user/:noteId', notes.delete); 

    app.post('/getBus' , notes.getBus);
}