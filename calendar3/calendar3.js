let week = ['日', '月', '火', '水', '木', '金', '土',];
let disp = '<table><tr>';
for (let i = 0; i < week.length; i++) {
  disp += '<th>' + week[i] + '</th>';
}
disp += '</tr><table>';
document.getElementById('week').innerHTML = disp;


// 今日
let today = new Date();
console.log('today:' + today);

// 今日の日付
let todayDate = today.getDate();
console.log('todayDate:' + todayDate);

// 今月の一日
let startDate = new Date(today.getFullYear(), today.getMonth(), 1);
console.log('startDate:' + startDate);

// 一日の曜日
let startDayNum = startDate.getDay();
console.log('startDayNum:' + startDayNum);
// 一日の曜日分マスを作る
// 4だと(木曜)

// 今月が何月か
let thisMonth = today.getMonth() + 1;
console.log('thisMonth:' + thisMonth);
document.getElementById('month').innerHTML = thisMonth + '月';

// 先月が何月か
let lastMonth = today.getMonth();
console.log('lastMonth:' + lastMonth);

// 先月の日数
let lastDate = new Date(today.getFullYear(), today.getMonth(), 0);
console.log('lastDate:' + lastDate);
let lastMonthDateNum = lastDate.getDate();
console.log('lastMonthDateNum:' + lastMonthDateNum);

// 来月の数字
let nextDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
// 第三引数で最終日を指定
console.log('nextDate:' + nextDate);

// 今月最終日の日付
let lastDateNum = nextDate.getDate();
console.log('lastDateNum:' + lastDateNum);

// 年の数字
let year = today.getFullYear();
console.log('year:' + year);
document.getElementById('year').innerHTML = year + '年';

// 今月の最終日
let thisMonthInfo = new Date(year, thisMonth, 0);
console.log('thisMonthInfo:' + thisMonthInfo);

// 月の日数
let thisMonthCount = thisMonthInfo.getDate();
console.log('thisMonthCount:' + thisMonthCount);

// 最終日が何曜か
// console.log(lastMonthInfo.getDate(0));
let lastDay = thisMonthInfo.getDay();
console.log('lastDay:' + lastDay);





function process() {
  // カレンダー作成
  let disp2 = '<table><tr>';
  // 日曜から一日まで
  for (let i = 1; i <= startDayNum; i++) {
    if (year == year
      && thisMonth == thisMonth
      && i == todayDate) {
      calendar += '<td class="today">' + (lastMonthDateNum - startDayNum + i) + '</td>';
    } else {
      disp2 += '<td class="ccc">' + (lastMonthDateNum - startDayNum + i) + '</td>';
    }
  }
  // 一日から土曜まで
  for (let j = 1; j <= (7 - startDayNum); j++) {
    if (year == year
      && thisMonth == thisMonth
      && j == todayDate) {
      calendar += '<td class="today">' + j + '</td>';
    } else {
      disp2 += '<td>' + j + '</td>';
    }
  }
  disp2 += '</tr><tr>'
  // 二週目から最終日まで
  for (let k = 1; k <= (thisMonthCount - (7 - startDayNum)); k++) {
    if (year == year
      && thisMonth == thisMonth
      && (k + (7 - startDayNum)) == todayDate) {
      disp2 += '<td class="today">' + (k + (7 - startDayNum)) + '</td>';
    } else {
      disp2 += '<td>' + (k + (7 - startDayNum)) + '</td>';
    }
    if ((k % 7) == 0) {
      disp2 += '</tr><tr>'
    }
  }
  for (let l = 1; l < (7 - lastDay); l++) {
    disp2 += '<td class="ccc">' + l + '</td>';
  }
  disp2 += '</tr><table>';
  document.getElementById('calendar2').innerHTML = disp2;
}
process();


// 前の月表示
function prev() {
  document.getElementById('month').innerHTML = (thisMonth - 1) + '月';
}



// 次の月表示
function next() {
  startDate.setMonth(startDate.getMonth() + 1);
  process();
}

// addEventListener = function () {
//   process(year, thisMonth);
// };

// window.onload = function () {
//   showProcess();
// };
