# async와 await

<br>

JavaScript에서 async와 await는 비동기 코드를 작성하는 더 쉬운 방법을 제공하는 기능이다.

async와 await를 사용하면 비동기 작업을 수행할 때 일반적으로 복잡하고 어려운 코드를 작성할 필요가 없어진다.

<br>

## **1) async**

async는 function 앞에 위치한다.

async 함수는 항상 Promise를 반환한다. async 함수가 반환하는 Promise는 해당 함수의 실행 결과를 resolve하는 값으로 채워진다.

<br>

### **Promise 코드**

```javascript
function f() {
  return new Promise((resolve, reject) => {
    resolve("hello");
    // reject(new Error("error"));
  });
}

f().then(console.log);
```

### **async 코드**

```javascript
async function f() {
  // async을 지정해주면 Promise를 리턴하는 함수로 만들어줍니다.
  return "hello";
}

f().then(console.log);
```

이처럼 async를 사용하면 promise 코드를 훨씬 직관적으로 나타낼 수 있다.

함수에 async만 붙이면 자동으로 promise 객체로 인식되고, return값은 resolve()값과 동일하다.

<br>

## **2) await**

await는 promise.then보다 좀 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법이다. promise.then보다 가독성 좋고 쓰기도 쉽다.

await 키워드는 async 함수 내부에서만 사용할 수 있으며, Promise 객체가 반환하는 값을 받을 때까지 해당 함수의 실행을 일시 중단한다.

이를 통해 비동기적인 작업을 동기적인 코드처럼 작성할 수 있다.

```javascript
unction delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 1000);
    })
}

async function getApple() {
    await delay();
    return "apple";
}

async function getBanana() {
    await delay();
    return "banana";
}

async function getFruites() {
    let a = await getApple(); // 리턴값이 promise의 resolve()이므로 대입 가능
    let b = await getBanana(); // getApple()이 처리되고 getBanana()가 처리됨
    console.log(`${a} and ${b}`);
}

getFruites(); // 결과 : apple and banana
```

<br>

### **3) 에러 핸들링**

### **1. try-catch 블록 사용**

```javascript
async function f() {
  try {
    let response = await fetch("http://유효하지-않은-주소");
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
}

f();
```

```javascript
async function f() {
  try {
    let response = await fetch("http://유효하지-않은-주소");
    let user = await response.json();
  } catch (err) {
    // fetch와 response.json에서 발행한 에러 모두를 여기서 잡는다.
    alert(err);
  }
}

f();
```

<br>

### **Promise의 catch() 메소드 사용**

try..catch가 없으면 아래 예시의 async 함수 f()를 호출해 만든 프라미스가 거부 상태가 된다. f()에 .catch를 추가하면 거부된 프라미스를 처리할 수 있다.

```javascript
async function f() {
  let response = await fetch("http://유효하지-않은-주소");
}

// f()는 거부 상태의 프라미스가 된다.
f().catch(alert); // TypeError: failed to fetch // (*)
```

<br>

### **async/await와 promise.then/catch**

async/await 구문을 사용하면 await 키워드 뒤에 있는 비동기 작업이 완료될 때까지 대기한다.

이렇게 하면 Promise의 then() 메소드 대신 결과를 변수에 바로 할당할 수 있으며, catch() 메소드 대신 try-catch 블록을 사용하여 오류를 처리할 수 있다.

그러나 async/await는 최상위 레벨 코드에서는 사용할 수 없기 때문에, 이러한 경우에는 Promise.then()과 catch() 메소드를 사용하여 결과 처리 및 오류 처리를 수행한다.

일반적으로 async/await를 사용하는 것이 더 간결하고 가독성이 좋지만, Promise.then()과 catch() 메소드를 사용해야 하는 경우도 있다.
