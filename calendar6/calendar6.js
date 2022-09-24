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



// 表示用参照オブジェクト
let referenceDate = new Date(today.getFullYear(), today.getMonth(), 1);

// [セット前
// console.log('referenceDate:' + referenceDate);
// 今月

// referenceDate.setMonth(referenceDate.getMonth() - 1);
// // この記述のみでセット出来ていることを確認
// // この記述がネックだったことを確認
// console.log('セット後:' + referenceDate);]
// 先月

// よってsetMonth,getMonthは注意して記述しなければならない



// console.log('a:' + varDate.getFullYear());
// let trueYear = varDate.getFullYear();
// console.log('trueYear:' + trueYear);
// 前の月表示
function prev() {
  referenceDate.setMonth(referenceDate.getMonth() - 1);
  // referenceDate.getMonth() + 1;
  console.log('referenceDate:' + (referenceDate.getMonth() + 1));
  console.log('referenceDate1:' + referenceDate);
  // logの中でgetMonthしても変動しないことを確認
  document.getElementById('year').innerHTML = referenceDate.getFullYear() + '月';
  document.getElementById('month').innerHTML = (referenceDate.getMonth() + 1) + '月';

  // prevクリック時に先月に変わり、更に先月の最終日
  let prevLastDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0);
  console.log('prevLastDate:' + prevLastDate);

  // その数字
  let prevLastDateNum = prevLastDate.getDate();
  console.log('prevLastDate:' + prevLastDateNum);

}

// 次の月表示
function next() {
  referenceDate.setMonth(referenceDate.getMonth() + 1);
  // referenceDate.getMonth() + 1;
  console.log('referenceDate:' + (referenceDate.getMonth() + 1));
  console.log('referenceDate1:' + referenceDate);
  // logの中でgetMonthしても変動しないことを確認
  document.getElementById('year').innerHTML = referenceDate.getFullYear() + '月';
  document.getElementById('month').innerHTML = (referenceDate.getMonth() + 1) + '月';

  // nextクリック時に来月に変わり、更に今月の最終日
  let nextLastDate = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), 0);
  console.log('nextLastDate:' + nextLastDate);

  // その数字
  let nextLastDateNum = nextLastDate.getDate();
  console.log('nextLastDate:' + nextLastDateNum);
}

// addEventListener = function () {
//   process(year, thisMonth);
// };

// window.onload = function () {
//   showProcess();
// };
