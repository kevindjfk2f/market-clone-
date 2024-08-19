<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    rel="stylesheet"
    as="style"
    crossorigin
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
  />
  <link rel="stylesheet" href="css/style.css" />
  <style>
    /* Grid 스타일 추가 */
    main {
      display: grid;
      place-items: center; /* 수평 및 수직 가운데 정렬 */
      height: 100vh; /* 화면 전체 높이 */
    }

    .bookshelf {
      display: flex;
      gap: 20px;
    }

    .bookshelf img {
      cursor: pointer;
      width: 100px; /* 이미지 크기 */
      height: 150px;
    }

  </style>
</head>
<body>
  <header></header>

  <main>
    <div class="bookshelf">
      <img src="book1.png" alt="책 1" data-title="책 1" />
      <img src="book2.png" alt="책 2" data-title="책 2" />
      <img src="book3.png" alt="책 3" data-title="책 3" />
    </div>
  </main>

  <footer>
    <div class="footer-block">
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/home.svg" alt="" />
        </div>
        <div class="footer-icons__desc">만들기</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/doc.svg" alt="" />
        </div>
        <div class="footer-icons__desc">확인하기</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/location.svg" alt="" />
        </div>
        <div class="footer-icons__desc">공유하기</div>
      </div>
    </div>
  </footer>

  <div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

  <script>
    // 책 클릭 이벤트 추가
    document.querySelectorAll('.bookshelf img').forEach(function(book) {
      book.addEventListener('click', function() {
        var title = this.getAttribute('data-title');
        alert(title + '을(를) 클릭했습니다!');
      });
    });
  </script>
</body>
</html>
