const { DataStore } = require('notarealdb');
const store = new DataStore('./data');
const assignments = store.collection('assignments');
const lessons = store.collection('lessons');
const notes = store.collection('notes');
const students = store.collection('students');
const submissions = store.collection('submissions');

module.exports = { store, assignments, lessons, students, submissions, notes };