# 1. 자바스크립트의 기본적인 사용

<br>

## **1) console.log()**

### **자바스크립트의 기능 ❌ - 환경의 기능**

- 브라우저: [🔗 Web API의 기능 중 하나](https://developer.mozilla.org/en-US/docs/Web/API/console)
- Node.js: [🔗 디버깅을 위한 모듈](https://nodejs.org/api/console.html) - 브라우저의 콘솔과 유사하게 동작

<br>

### **흔히 활용되는 console 기능들**

```javascript
console.log("로그 - 기본적인 출력");
console.info("로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능");
console.warn("경고 - 문제가 될 수 있는 부분");
console.error("오류 - 에러 발생 상황");
```

<br><br>

## **2) 자바스크립트 런타임 환경 - runtime environment**

`자바스크립트 코드를 실행할 수 있는 소프트웨어`

- 컴퓨터가 회사라면, **자바스크립트란 언어를 구사하는 직원**
- 대표적으로 브라우저와 Node.js 등이 있음
- 콘솔 등은 자바스크립트 런타임 환경의 기능

<br><br>

## **3) 변수와 상수**

### **Ⅰ. 변수 - variable**

- 담긴 값이 **바뀔 수 있는** 주머니
- `let` 사용

```javascript
let x = 1;
console.log("첫 선언", x);

let x = 2;
console.log("다시 선언", x);

// SyntaxError: Cannot declare a let variable twice: 'x'
```

<br>

### **Ⅱ. 상수 - constant**

- **값의 변경 불가**: 값이 바뀔 일이 없는 데이터는 상수로 선언
- `const` 사용
- 흔히 대문자로 명명 - *여러 곳에서 사용될 공통 값인 경우*

<br>

### **Ⅲ. 여러 변수와 상수 동시에 선언**

```javascript
let a = 1,
  b = 2,
  c = 3;
const X = 4,
  Y = 5,
  Z = 6;

console.log(a, b, c); // 1 2 3
console.log(X, Y, Z); // 4 5 6
```
