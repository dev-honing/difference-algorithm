// throw.js

// throw 키워드 탐구하기
console.log('1번 예제 시작');

try {
  throw new Error('에러 발생!');
} catch (error) {
  console.error('1번 예제에서의 예외 처리:', error.message);
}

console.log('1번 예제 종료');

