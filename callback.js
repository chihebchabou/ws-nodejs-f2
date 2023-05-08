console.log('Before');
getUser(1, data => {
  console.log(data);
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading data from data base');
    callback({ id, userName: 'John' });
  }, 2000);
}
