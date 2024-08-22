const request = window.indexedDB.open('test', 1);
let db;
request.onerror = function (event) {
  console.log('数据库打开报错');
};


request.onsuccess = function (event) {
  db = request.result;
  console.log(db);
  console.log('数据库打开成功');
};


request.onupgradeneeded = function (event) {
  db = event.target.result;
  db.onerror = (event) => {
    console.log('数据库打开报错');
  };

  let objectStore;
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' });
  }
  objectStore.createIndex('name', 'name', { unique: false });
  objectStore.createIndex('email', 'email', { unique: true });
}

const items = [
  { id: 2, name: '李四',  email: 'zhangsan@example.com' }
];
function add() {
  console.log('db====>', db)
  const transaction = db.transaction(['person'], 'readwrite');

  // Report on the success of the transaction completing, when everything is done
  transaction.oncomplete = () => {
    console.log('Transaction completed: database modification finished.')
  };

  // Handler for any unexpected error
  transaction.onerror = () => {
    console.log(`Transaction not opened due to error: ${transaction.error}`)
  };

  const objectStore = transaction.objectStore('person');
  const objectStoreRequest = objectStore.add({ id: 3, age: 30, name: '王五',  email: 'wu@example.com' });
  objectStoreRequest.onsuccess = function (event) {
    console.log('数据写入成功');
  };

  objectStoreRequest.onerror = function (event) {
    console.log('数据写入失败');
  }


}

setTimeout(() => {
  add();
}, 50)

