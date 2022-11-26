let backendHost;

const hostname = window && window.location && window.location.hostname;
// 현재 페이지의 URL을 알아오기 위해 window.location 속성을 사용

// # window.location.host
// URL의 호스트 정보를 가져옵니다.
// 위 예제는 포트번호가 없지만, 만약 URL에 포트번호가 있으면 ':'과 포트번호를 포함합니다.

// # window.location.hostname
// URL의 호스트명을 가져옵니다.
// 이 값은 ':'과 포트번호를 포함하지 않습니다.

if (hostname === 'localhost') {
  backendHost = 'http://localhost:8000';
}

export const API_BASE_URL = `${backendHost}`;
