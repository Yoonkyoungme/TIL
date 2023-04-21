# promise

<br>

## **1) 프로미스(promise)**

콜백에서 발생하는 문제점을 보완하기 위해 등장한 것이 프로미스(promise)이다.

프로미스는 비동기 처리를 위한 객체로서, 언제 결과를 받을지 모르는 작업에 대한 처리 결과를 나타낸다.

promise 객체는 아래와 같은 문법으로 만들 수 있다.

```javascript
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  // 작업이 성공적으로 완료되면 resolve(value)를 호출하여 결과를 전달
  // 작업이 실패하면 reject(error)를 호출하여 오류를 전달
});
```

Promise 객체를 생성할 때 executor 함수를 이용하여 비동기 작업을 수행할 수 있다. <br>
**※ executor 함수는 Promise 객체가 생성될 때 자동으로 실행되며, resolve와 reject 함수를 매개변수로 받는다.**

이 함수를 사용하여 비동기 작업이 완료되면 resolve 함수를 호출하여 결과 값을 반환하거나, 작업이 실패하면 reject 함수를 호출하여 오류를 반환한다.

<br>

## **2) 프로미스의 3가지 상태(states)**

상태란 프로미스의 처리 과정을 의미한다. <br>
new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖는다.

- `Pending(대기)`: 비동기 처리 로직이 아직 완료되지 않은 상태
- `Fulfilled(이행)`: 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- `Rejected(실패)`: 비동기 처리가 실패하거나 오류가 발생한 상태

<br>

### **Pending(대기)**

먼저 아래와 같이 new Promise() 메서드를 호출하면 대기(Pending) 상태가 된다.

```javascript
new Promise();
```

new Promise() 메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 `resolve`, `reject`이다.

```javascript
new Promise(function (resolve, reject) {
  // ...
});
```

<br>

### **Fulfilled(이행)**

new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다. 콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 된다. <br>
※ 프로미스의 '이행' 상태를 좀 다르게 표현해보면 '완료'이다.

```javascript
new Promise(function (resolve, reject) {
  resolve();
});
```

이행 상태가 되면 아래와 같이 then()을 이용하여 처리 결과 값을 받을 수 있다.

```javascript
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```

<br>

### **Rejected(실패)**

new Promise()로 프로미스 객체를 생성하면 콜백 함수 인자로 resolve와 reject를 사용할 수 있다. 여기서 reject를 아래와 같이 호출하면 실패(Rejected) 상태가 된다.

```javascript
new Promise(function (resolve, reject) {
  reject();
});
```

그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 catch()로 받을 수 있다.

```javascript
function getData() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData()
  .then()
  .catch(function (err) {
    console.log(err); // Error: Request is failed
  });
```

<br>

## **3) producer와 consumer**

- `producer`: Promise 객체를 생성하고, 비동기 작업을 실행하여 결과를 resolve나 reject로 전달한다.
- `consumer`: Promise 객체를 이용하여 비동기 작업 결과를 받아온다.

예를 들어, fetch API를 사용하여 데이터를 가져오는 경우, fetch 함수가 producer이며, then 메서드나 async/await 구문을 이용하여 데이터를 받아오는 부분이 consumer이다.

producer와 consumer는 역할이 분리되어 있어, producer에서 비동기 작업이 완료되면 그 결과를 consumer에서 받아와 처리할 수 있다. 이를 통해 비동기적인 작업을 보다 효율적으로 처리할 수 있다.

```javascript
// producer
const producer = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = "Hello, World!";
    resolve(result);
  }, 2000); // 2초 후에 작업 완료
});

// consumer
producer
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
```

이렇게 producer와 consumer가 분리되어 역할을 수행함으로써, 코드의 가독성과 유지보수성을 향상시킬 수 있다.

<br>

## 프로미스 체이닝(Promise Chaning)

비동기 함수의 처리 결과를 가지고 다른 비동기 함수를 호출하는 경우 함수의 호출이 중첩되어 복잡도가 높아진다. 이에 따라 프로미스는 후속 처리 메서드를 체이닝 하여 여러 개의 프로미스를 연결하여 사용할 수 있다.

첫 번째 작업이 끝나면 그 결과를 다음 작업에서 사용할 수 있도록 Promise 객체를 반환하고, 그 Promise 객체의 then 메소드를 사용하여 다음 작업을 실행하는 방식이다.

<br>

### **예시 1**

```javascript
fetch("/data")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data
  })
  .catch((error) => {
    // handle the error
  })
  .finally(() => {
    console.log("Fetch completed.");
  });
```

위 코드에서는 fetch 함수를 사용하여 비동기적으로 데이터를 가져온다.

첫 번째 then 메소드에서는 서버로부터 받은 응답을 JSON 형식으로 변환한다. 그 다음 then 메소드에서는 JSON 데이터를 이용하여 작업을 수행한다. 만약 작업 중에 에러가 발생하면 catch 메소드를 사용하여 예외를 처리한다.

finally 메소드는 Promise 객체가 처리되면 항상 실행되는 메소드이다. 즉, then 메소드와 catch 메소드 이후에 실행되며, finally 메소드는 Promise 객체가 성공 또는 실패 여부와 관계없이 실행된다. finally 메소드는 일반적으로 비동기 작업을 종료할 때 필요한 클린업 작업을 수행하는 데 사용된다.

<br>

### **예시 2**

```javascript
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
```

실행 결과: 🐓 => 🥚 => 🍳

각각의 메서드에 전달되는 함수의 인자가 하나 뿐이라면, 첫 번째 메서드에서 반환된 프로미스 객체에 대해 두 번째 메서드를 호출할 때 함수 인자를 생략할 수 있다. 그러나 인자가 두 개 이상인 경우는 생략할 수 없다.

```javascript
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);
```

실행 결과: Error: error! 🐓 => 🥚
