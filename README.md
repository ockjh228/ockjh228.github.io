# GitHub Pages Personal Website

이 폴더는 GitHub Pages에 바로 배포할 수 있는 다중 페이지 정적 홈페이지 템플릿입니다.

## 파일별 역할

- `index.html`: 홈 페이지. 첫인상, 자기소개, 탐색 카드, 연락처 섹션을 담당합니다.
- `news.html`: 최근 소식 페이지. 짧은 업데이트를 카드 형태로 쌓아두는 페이지입니다.
- `publications.html`: 논문 / 글 / 발표 자료 페이지. 항목별 태그와 링크를 붙이기 좋게 되어 있습니다.
- `projects.html`: 프로젝트 페이지. 프로젝트 설명, 역할, 기술 태그, 링크를 보여줍니다.
- `styles.css`: 모든 페이지가 공유하는 디자인 파일입니다. 색상, 여백, 카드 모양, 반응형 레이아웃이 여기에 있습니다.
- `script.js`: 현재 메뉴 활성화, 다크/라이트 테마 토글, 푸터 연도 자동 표시를 담당합니다.
- `assets/profile.jpg`: 왼쪽 프로필 사진입니다.

## 가장 자주 수정할 곳

### 1. 공통 프로필 정보

아래 정보는 각 HTML 파일의 왼쪽 사이드바에 반복됩니다.

- 이름: `Jonghoon Ock`
- 직함: `Developer, Researcher, Product Builder`
- 소개 문장: `summary`
- 위치 / 관심사 / 이메일: `meta-list`
- GitHub / LinkedIn / Blog 링크: `social-links`

주의:

- 이 값들은 `index.html`, `news.html`, `publications.html`, `projects.html`에 각각 들어 있습니다.
- 한 페이지만 고치면 다른 페이지에는 반영되지 않습니다. 공통 프로필을 바꾸려면 4개 파일 모두 수정해야 합니다.

### 2. 홈 페이지 내용

`index.html`에서 주로 보는 편집 포인트:

- 히어로 문구: 맨 위 큰 제목과 버튼
- `Explore` 섹션: `News`, `Publications`, `Projects`로 가는 카드 3개
- `About` 섹션: 자기소개 본문
- `Snapshot` 섹션: 짧은 소개 카드 3개
- `Contact` 섹션: 이메일 버튼

추가/삭제 방법:

- 카드 하나를 더 넣고 싶으면 비슷한 `<article>` 또는 `<a class="destination-card">` 블록을 복사해서 붙여 넣으세요.
- 카드 하나를 지우고 싶으면 해당 블록 전체를 삭제하세요.

### 3. News 페이지 내용

`news.html`의 핵심은 `<section class="list-stack">` 안의 `<article class="list-card">`들입니다.

- 날짜: `<span class="list-date">`
- 제목: `<h3>`
- 설명: 그 아래 `<p>`

추가/삭제 방법:

- 새 소식을 추가하려면 기존 `<article class="list-card">...</article>` 하나를 복사하세요.
- 순서를 바꾸고 싶으면 카드 블록 자체를 위아래로 이동하세요.
- 삭제는 해당 `<article>` 전체를 지우면 됩니다.

### 4. Publications 페이지 내용

`publications.html`의 각 항목은 다음 조합으로 이뤄집니다.

- 상태/연도: `list-date`
- 제목: `h3`
- 저자/행사명: `list-subtitle`
- 설명 문장: 일반 `p`
- 태그: `<div class="tag-row">`
- 링크 버튼들: `<div class="inline-links">`

추가/삭제 방법:

- 논문/글/발표 하나를 추가하려면 `<article class="list-card">` 블록 하나를 복사하세요.
- 태그를 추가하려면 `<span>` 한 줄을 더 넣으세요.
- 링크를 추가하려면 `inline-links` 안에 `<a>` 한 줄을 더 넣으세요.

### 5. Projects 페이지 내용

`projects.html`도 `publications.html`과 거의 같은 구조입니다.

- 연도: `list-date`
- 프로젝트 이름: `h3`
- 역할: `list-subtitle`
- 설명: 일반 `p`
- 기술 태그: `tag-row`
- 링크: `inline-links`

추가/삭제 방법:

- 프로젝트 하나를 추가하려면 기존 `<article class="list-card">`를 복사하세요.
- 태그나 링크는 한 줄씩 쉽게 추가/삭제할 수 있습니다.

## 디자인을 바꾸고 싶을 때

대부분의 디자인 수정은 `styles.css`에서 합니다.

### 색상 전체를 바꾸고 싶을 때

파일 맨 위의 `:root`를 수정하세요.

- `--bg`: 전체 배경
- `--surface`: 카드 배경
- `--text`: 기본 글자색
- `--muted`: 설명 문장 색
- `--accent`: 포인트 색

다크 모드 색상은 `html[data-theme="dark"]` 블록에 따로 있습니다.

### 레이아웃을 바꾸고 싶을 때

- `.page-shell`: 전체 2단 레이아웃
- `.profile-card`: 왼쪽 프로필 카드
- `.content`: 오른쪽 내용 영역
- `.destination-grid`: 홈 카드 3개 배치
- `.focus-grid`: 홈의 작은 요약 카드 배치
- `.list-stack`: News / Publications / Projects의 카드 목록

### 모바일 화면을 바꾸고 싶을 때

파일 아래쪽의 `@media` 구간을 보세요.

- `@media (max-width: 1080px)`: 태블릿
- `@media (max-width: 760px)`: 모바일

## 스크립트가 하는 일

`script.js`는 세 가지만 합니다.

1. 현재 페이지 메뉴를 자동으로 강조합니다.
2. 다크/라이트 테마 버튼을 동작시킵니다.
3. 푸터의 연도를 자동으로 현재 연도로 채웁니다.

보통 텍스트 수정만 할 때는 `script.js`를 건드릴 필요가 없습니다.

## 주석 추가 안내

각 HTML/CSS/JS 파일에 편집용 주석을 추가해 두었습니다.

- 어느 블록이 프로필 영역인지
- 어느 블록이 반복 카드인지
- 어디를 복사하면 항목을 추가할 수 있는지
- 어떤 파일이 공통 스타일과 동작을 담당하는지

코드를 열면 바로 보이도록 HTML 주석 `<!-- ... -->` 와 CSS/JS 주석을 넣어 두었습니다.

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
git commit -m "Update homepage content"
git push -u origin main
```

## 참고

- 현재 코드는 상대 경로를 사용해서 사용자 페이지와 프로젝트 페이지 둘 다 배포 가능합니다.
- 프로필 사진을 교체하려면 `assets/profile.jpg` 파일을 바꾸면 됩니다.
