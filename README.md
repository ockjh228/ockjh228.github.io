# GitHub Pages Personal Website

이 폴더는 GitHub Pages에 바로 배포할 수 있는 다중 페이지 정적 홈페이지 템플릿입니다.

## 파일 구성

- `index.html`: 홈 페이지
- `news.html`: 최근 소식 페이지
- `publications.html`: 논문 / 글 / 발표 자료 페이지
- `projects.html`: 프로젝트 페이지
- `styles.css`: 공통 디자인과 반응형 레이아웃
- `script.js`: 현재 페이지 메뉴 강조, 푸터 연도 자동 표시

## 가장 먼저 수정할 부분

아래 파일들에서 공통으로 들어가는 본인 정보를 먼저 바꾸세요.

- `Jonghoon Ock`
- `Developer, Designer, Researcher`
- `you@example.com`
- `Seoul, South Korea`
- GitHub / LinkedIn / Blog 링크

그다음 각 페이지에서 아래 내용을 수정하세요.

- `index.html`: 자기소개, 홈 화면 설명, 카드 문구
- `news.html`: 최근 소식 타임라인
- `publications.html`: 논문 / 글 / 발표 자료 목록
- `projects.html`: 프로젝트 목록

프로필 사진은 `assets/profile.jpg`를 사용하도록 연결되어 있습니다.

## 로컬에서 미리보기

터미널에서 이 폴더로 이동한 뒤:

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 됩니다.

## GitHub Pages 배포 방법

현재 연결된 저장소:

- `git@github.com:ockjh228/Alex-s-homepage.git`

예상 GitHub Pages 주소:

- `https://ockjh228.github.io/Alex-s-homepage/`

### push 순서

1. 변경 파일을 커밋합니다.
2. `main` 브랜치로 push 합니다.
3. GitHub 저장소의 `Settings > Pages` 로 이동합니다.
4. `Deploy from a branch` 선택
5. 브랜치는 `main`, 폴더는 `/ (root)` 선택
6. 저장 후 몇 분 기다린 뒤 배포 주소로 접속합니다.

예시 명령:

```bash
git add .
git commit -m "Initial homepage"
git push -u origin main
```

## 구조 설명

- 홈에서는 본인 소개와 전체 구조를 보여줍니다.
- `News`, `Publications`, `Projects`는 각각 독립 페이지로 이동합니다.
- 첫 번째 레퍼런스의 프로필 중심 레이아웃 감각을 유지하면서, 두 번째 레퍼런스처럼 페이지를 분리한 구조입니다.

## 참고

- 현재 코드는 상대 경로를 사용해서 사용자 페이지와 프로젝트 페이지 둘 다 배포 가능합니다.
- 프로필 사진을 쓰고 싶다면 각 HTML 파일의 `.avatar` 블록을 `<img>` 태그로 바꾸면 됩니다.
