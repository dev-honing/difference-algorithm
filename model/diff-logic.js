// \model\diff-logic.js

/**
 * JSON 파일을 비교하여 차이를 분석하고, 결과를 반환하는 함수
 * @param {JSON, Path} inputJSONdata - 비교 대상 JSON 파일의 경로
 * @param {JSON, Path} outputJSONdata  - 결과를 저장할 JSON 파일의 경로
 * @returns Object - 비교 결과 객체
 * @throws {Error} - 입력 및 출력 경로가 유효한 JSON 파일이 아닌 경우 에러 발생

 */

// 내보내는 함수에 대한 정의
export default function(inputJSONPath, outputJSONPath) {
  // 조건문 로직 작성
  if (!inputJSONPath.endsWith('.json') || !outputJSONPath.endsWith('.json')) { // 둘 중 하나라도 .json으로 끝나지 않으면,
    throw new Error(`매개변수 ${inputJSONPath}, ${outputJSONPath}는 json 파일이 아닙니다.`); // 
    // throw: 에러를 발생시키는 키워드
  }
  let result = {}; // 빈 객체를 생성
  /**
   * ? Q. JSON 파일을 아래의 5, 6번에 해당하는 로직 작성 후 JSON으로 저장
   * ? Q. 저장이 완료되면 초기화된 result에 객체를 리턴
   * 
   * * 1. inputJSONdata, outputJSONdata를 읽어서 JSON 객체로 변환
   * * 2. inputJSONdata, outputJSONdata의 value를 비교
   * * 3. outputJSONpath 매개변수의 key에 해당하는 정보를 저장
   * * 4. dirrences.json 파일에 필요한 상태값
   * * 5. 같은 단어가 무엇인지 저장
   * * 6. 다른 단어가 무엇인지 저장
   * * 7. 리턴을 통해 결과값을 전달
   */

  return result;
}