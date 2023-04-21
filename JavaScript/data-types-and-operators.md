# 2. 자료형과 연산자

<br>

## **1) 자료형 - 데이터의 종류**

### **1. 불리언 boolean**

- 참 또는 거짓 (`true` or `false`) - **상반된 둘 중 하나**의 값을 담을 수 있음
- 직접 할당되기보다는 반환값으로 프로그램 곳곳에서 활용됨

```javascript
const a = 1 > 2;
const b = 1 < 2;

console.log(a, typeof a);
console.log(b, typeof b);
```

<br>

### **2. 숫자 number**

- 자바스크립트에는 정수와 실수의 구분이 없음 → **정수도 실수로 처리**
- 정수는 `2^53 - 1`까지 안정적으로 표현 가능 → **더 큰 정수는 BigInt로 처리**

<br>

### **3. 문자열 string**

- 큰따옴표(””), 작은따옴표(’’), 또는 백틱(``)으로 둘러싸인 텍스트 데이터

```javascript
console.log(
  typeof typeof true, // string 반환
  typeof typeof 123.45, // string 반환
  typeof typeof "Hello" // string 반환
);
```

<br>

### **4. undifined**

- **값이 부여되지 않은** 상태라는 의미
- 그러나 undefined도 값임 → 다른 언어들과 차이점
- 아무 것도 반환하지 않는 구문 → undefined 반환

```javascript
let x = 1; // undifined 반환
```

<br>

### **5. null**

- **의도적인 빈 값**을 의미
- 그러나 null 역시 값임. → "비어있다"란 의미의 값
- object(객체) 등이 들어있거나 반환되어야 하지만 없을 때 주로 사용
  - 객체 생성이 실패한 경우 등에 대신 반환
- typeof null은 object를 반환함 → 초기 오류

```javascript
let x = null;
console.log(typeof null, typeof x); // object object 반환
```

```javascript
// null 여부는 아래와 같이 확인할 것
console.log(x === null);
```

<br><br>

## **2) 자료형과 정적, 동적 타입**

### **✨자바스크립트는 동적 타입을 가진 언어이다.**

- 특정 값이 할당된 변수에, **그와 다른 자료형의 값을** 넣는 것이 가능
- 자유롭지만 그만큼 **자료형 관련 오류들에 취약함**

<br>

### **⚠️ 자료형의 다름으로 일어날 수 있는 오류**

- **특정 자료형에 대해서만 사용될 수 있는 기능 - _런타임 오류_**

  ```javascript
  // 주어진 문자열을 대문자로 바꾸는 함수
  // 다른 자료형에 대한 예외처리 없음

  function getUpperCase(str) {
    return str.toUpperCase();
  }

  console.log(getUpperCase("hello")); // HELLO 반환
  console.log(getUpperCase(1)); // 오류발생
  ```

  <br>

- **의도와 다른 연산 - _논리 오류_**
  ```javascript
  console.log(1 + 1); // 2 반환
  console.log("1" + 1); // 11 반환
  ```
