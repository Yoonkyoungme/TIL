# callback

<br>

## **1) 비동기 처리**

JavaScript는 기본적으로 단일 쓰레드로 동작하기 때문에, 하나의 작업이 끝날 때까지 다른 작업을 수행할 수 없다는 제약사항이 있다.
이러한 제약을 극복하기 위해, JavaScript에서는 비동기 처리 방식을 사용한다. <br>
비동기 처리란, 결과가 나오기 전까지 다른 작업을 수행하며, 결과가 나오면 해당 결과를 처리하는 방식이다.
예를 들어, 서버에서 데이터를 가져오는 작업은 시간이 오래 걸릴 수 있다. 이런 경우, JavaScript에서는 비동기적으로 데이터를 요청하고, 해당 데이터가 도착하면 그 결과를 처리하는 방식으로 처리할 수 있다.

<br>

## **2) 콜백(callback)**

콜백(callback)은 함수의 인자로 다른 함수를 받는 것을 의미한다. 즉, 콜백 함수는 다른 함수의 결과를 받아서 처리하는 함수이다.
일반적으로 JavaScript에서는 콜백 함수를 비동기 처리에서 결과를 받는 데 사용한다. <br>
콜백 함수는 호출하는 함수에서 인자로 전달하며, 호출된 함수는 해당 함수가 끝난 후, 전달된 콜백 함수를 호출한다.

<br>

### **동기적 콜백과 비동기적 콜백**

#### **동기적 콜백(synchronous callback)** <br>

동기적 콜백은 즉시 실행되며, 결과가 반환될 때까지 다음 코드가 실행되지 않는다. <br>
동기적 콜백은 Array의 forEach 메소드나, String의 replace 메소드와 같이 콜백 함수가 실행되어야 결과를 얻을 수 있는 경우에 사용된다.

```javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
console.log("done");

// 출력 결과
// apple
// banana
// orange
// done
```

위 코드에서 forEach 메소드의 콜백 함수는 배열의 각 요소를 출력한다. forEach 메소드는 동기적으로 콜백 함수를 실행하므로, forEach 메소드 실행이 끝난 후, "done"을 출력한다.

<br>

#### **비동기적 콜백(asynchronous callback)**

비동기적 콜백은 즉시 실행되지 않으며, 다음 코드가 실행된다.
비동기적 콜백은 대부분의 비동기 처리 함수에서 사용된다.

```javascript
setTimeout(function () {
  console.log("Hello World!");
}, 1000);

console.log("done");

// 출력 결과
// done
// Hello World! (1초 후)
```

위 코드에서 setTimeout 함수의 콜백 함수는 1초 후에 "Hello World!"를 출력한다. setTimeout 함수는 비동기적으로 콜백 함수를 실행하므로, setTimeout 함수가 실행되고 나서 "done"을 출력한다. 그리고 1초 후에 콜백 함수가 실행되어 "Hello World!"를 출력한다.

<br>

## **3) 콜백 지옥(callback hell)의 문제점**

콜백 지옥(callback hell)은 콜백 함수를 중첩하여 사용하는 코드 작성 시 발생하는 문제점을 의미한다. <br>
콜백 지옥이 발생하면, 코드의 가독성이 떨어지고, 유지보수가 어려워진다. <br>
예를 들어, 아래와 같은 코드를 살펴보면,

```javascript
getUser(function (user) {
  getOrders(user.id, function (orders) {
    getProducts(orders, function (products) {
      render(products);
    });
  });
});
```

getUser 함수가 먼저 호출되고, 그 결과로 user 객체를 받아오면, 다음으로 getOrders 함수가 호출되고, 그 결과로 orders 배열을 받아오게 된다. 그리고 이 orders 배열을 이용해 getProducts 함수를 호출하고, 마지막으로 render 함수를 호출한다. <br>
이렇게 콜백 함수가 중첩되면서 코드의 들여쓰기 수준이 깊어지고, 코드의 가독성이 나빠지는 것이 콜백 지옥의 문제점이다.

<br>

이러한 코드를 사용할 때는, Promise, async/await 등의 비동기 처리 방식을 사용하여 콜백 지옥을 해결할 수 있다.
