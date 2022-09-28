const week = ['日', '月', '火', '水', '木', '金', '土',];
let disp = '<table><tr>';
for (let i = 0; i < week.length; i++) {
  disp += '<th>' + week[i] + '</th>';
}
disp += '</tr><table>';
document.getElementById('week').innerHTML = disp;

// 今日
const today = new Date();
// if文で参照する値

// 今月一日
const referenceDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 今月今日
const referenceToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

window.addEventListener('load', function () {
  process();
})

// カレンダー作成関数
function process() {

  // 年　数字
  const year = referenceDate.getFullYear();
  document.getElementById('year').innerHTML = year + '年';

  // 今月の日付　数字
  const todayDate = referenceToday.getDate();

  // 今月一日の曜日　数字
  const startDayNum = referenceDate.getDay();

  // 今月　数字
  const thisMonth = referenceDate.getMonth() + 1;
  document.getElementById('month').innerHTML = thisMonth + '月';

  // 先月最終日
  const lastMonthDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0);

  // 先月最終日　数字
  const lastMonthDateNum = lastMonthDate.getDate();

  // 今月最終日
  const thisMonthInfo = new Date(referenceDate.getFullYear(), referenceDate.getMonth() + 1, 0);
  // 今月最終日　数字
  const thisMonthCount = thisMonthInfo.getDate();

  // 今月最終日の曜日　数字
  const lastDay = thisMonthInfo.getDay();

  // カレンダー作成
  let disp2 = '<table class="main"><tr>';
  // 日曜から一日まで
  for (let i = 0; i < startDayNum; i++) {
    if (year === today.getFullYear()
      && thisMonth === (today.getMonth() + 1)
      && i === today.getDate()) {
      calendar += '<td class="today">' + (lastMonthDateNum - startDayNum + (1 + i)) + '</td>';
    } else {
      disp2 += '<td class="ccc">' + (lastMonthDateNum - startDayNum + (1 + i)) + '</td>';
    }
  }
  // 一日から土曜まで
  for (let j = 0; j < (7 - startDayNum); j++) {
    if (year === today.getFullYear()
      && thisMonth === (today.getMonth() + 1)
      && (j + 1) === today.getDate()) {
      calendar += '<td class="today">' + (j + 1) + '</td>';
    } else {
      disp2 += '<td>' + (j + 1) + '</td>';
    }
  }
  disp2 += '</tr><tr>'
  // 二週目から最終日まで
  for (let k = 0; k < (thisMonthCount - (7 - startDayNum)); k++) {
    if (year === today.getFullYear()
      && thisMonth === (today.getMonth() + 1)
      && (k + (7 - startDayNum) + 1) === today.getDate()) {
      disp2 += '<td class="today">' + (k + (7 - startDayNum) + 1) + '</td>';
    } else {
      disp2 += '<td>' + (k + (7 - startDayNum) + 1) + '</td>';
    }
    if (((k + 1) % 7) === 0) {
      disp2 += '</tr><tr>'
    }
  }
  for (let l = 0; l < (7 - lastDay - 1); l++) {
    disp2 += '<td class="ccc">' + (l + 1) + '</td>';
  }
  disp2 += '</tr><table class="main">';
  document.getElementById('calendar').innerHTML = disp2;
}

// 前の月表示
function prev() {
  referenceDate.setMonth(referenceDate.getMonth() - 1);
  process(referenceDate);
  // setMonthでreferenceDateの新たな値をセット
  // processの引数に指定して先月のカレンダーを作成
}

// 次の月表示
function next() {
  referenceDate.setMonth(referenceDate.getMonth() + 1);
  process(referenceDate);
}
