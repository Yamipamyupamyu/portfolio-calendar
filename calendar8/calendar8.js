const week = ['日', '月', '火', '水', '木', '金', '土',];
let disp = '<table><tr>';
for (let i = 0; i < week.length; i++) {
  disp += '<th>' + week[i] + '</th>';
}
disp += '</tr><table>';
document.getElementById('week').innerHTML = disp;




// 今日
let today = new Date();
console.log('today:' + today);

// 今月一日
let referenceDate = new Date(today.getFullYear(), today.getMonth(), 1);
console.log('referenceDate:' + referenceDate);

// 今月今日
let referenceToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
console.log('referenceToday:' + referenceToday);

function process() {

  // 年　数字
  let year = referenceDate.getFullYear();
  console.log('year:' + year);
  document.getElementById('year').innerHTML = year + '年';

  // 今月の日付　数字
  let todayDate = referenceToday.getDate();
  console.log('todayDate:' + todayDate);

  // 今月一日の曜日　数字
  let startDayNum = referenceDate.getDay();
  console.log('startDayNum:' + startDayNum);

  // 今月　数字
  let thisMonth = referenceDate.getMonth() + 1;
  console.log('thisMonth:' + thisMonth);
  document.getElementById('month').innerHTML = thisMonth + '月';

  // 先月最終日
  let lastMonthDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0);
  console.log('lastMonthDate:' + lastMonthDate);

  // 先月最終日　数字
  let lastMonthDateNum = lastMonthDate.getDate();
  console.log('lastMonthDateNum:' + lastMonthDateNum);

  // 今月最終日
  let thisMonthInfo = new Date(referenceDate.getFullYear(), referenceDate.getMonth() + 1, 0);
  console.log('thisMonthInfo:' + thisMonthInfo);
  // 今月最終日　数字
  let thisMonthCount = thisMonthInfo.getDate();
  console.log('thisMonthCount:' + thisMonthCount);

  // 今月最終日の曜日　数字
  let lastDay = thisMonthInfo.getDay();
  console.log('lastDay:' + lastDay);

  // カレンダー作成
  let disp2 = '<table><tr>';
  // 日曜から一日まで
  for (let i = 0; i < startDayNum; i++) {
    if (year === year
      && thisMonth === thisMonth
      && i === todayDate) {
      calendar += '<td class="today">' + (lastMonthDateNum - startDayNum + (1 + i)) + '</td>';
    } else {
      disp2 += '<td class="ccc">' + (lastMonthDateNum - startDayNum + (1 + i)) + '</td>';
    }
  }
  // 一日から土曜まで
  for (let j = 0; j < (7 - startDayNum); j++) {
    if (year === year
      && thisMonth === thisMonth
      && (j + 1) === todayDate) {
      calendar += '<td class="today">' + (j + 1) + '</td>';
    } else {
      disp2 += '<td>' + (j + 1) + '</td>';
    }
  }
  disp2 += '</tr><tr>'
  // 二週目から最終日まで
  for (let k = 0; k < (thisMonthCount - (7 - startDayNum)); k++) {
    if (year === year
      && thisMonth === thisMonth
      && (k + (7 - startDayNum) + 1) === todayDate) {
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
  disp2 += '</tr><table>';
  document.getElementById('calendar').innerHTML = disp2;
}
process();


// 前の月表示
function prev() {
  referenceDate.setMonth(referenceDate.getMonth() - 1);
  process(referenceDate);
}

// 次の月表示
function next() {
  referenceDate.setMonth(referenceDate.getMonth() + 1);
  process(referenceDate);
}
