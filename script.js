// 簡単なスクロールだけ
const screenInner = document.getElementById("screen-inner");
const upBtn = document.querySelector('[data-action="up"]');
const downBtn = document.querySelector('[data-action="down"]');
const okBtn = document.querySelector('[data-action="ok"]');

const SCROLL_STEP = 20; // px

if (upBtn && downBtn && okBtn && screenInner) {
  upBtn.addEventListener("click", () => {
    screenInner.scrollTop -= SCROLL_STEP;
  });

  downBtn.addEventListener("click", () => {
    screenInner.scrollTop += SCROLL_STEP;
  });

  okBtn.addEventListener("click", () => {
    alert("決定キーが押されました（ここに本来の処理を入れます）");
  });
}
