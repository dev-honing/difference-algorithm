// throw.js

// throw 키워드 탐구하기
console.log('1번 예제 시작');

try {
  throw new Error('에러 발생!');
} catch (error) {
  console.error('1번 예제에서의 예외 처리:', error.message);
}

console.log('1번 예제 종료');

// 함수 내부에서 throw로 예외 발생 및 처리
function throwErrorInFunction() {
  console.log('2번 예제 시작 - 함수');

  try {
    // 예외 발생 로직 작성
    if (true) {
      throw new Error('에러 발생!');
    }

    console.log('실행되지 않을 것으로 예상되는 문장'); // return 아래쪽처럼 비활성화된 것을 확인!

  } catch (error) {
    console.error('2번 예제에서의 예외 처리:', error.message);
  }

  console.log('2번 예제 종료 - 함수');
}

// 함수 호출
throwErrorInFunction();
