var week = ['日', '月', '火', '水', '木', '金', '土',];

var disp = '<table><tr>';
for (let i = 0; i < week.length; i++) {
  disp += '<th>' + week[i] + '</th>';
}
disp += '</tr><table>';


document.getElementById('calendar').innerHTML = disp;

var today = new Date();
console.log(today);
// 年、月、一日

var startDate = new Date(today.getFullYear(), today.getMonth(), 1);
console.log('startDate:' + startDate);

// 一日の曜日
var startDayNum = startDate.getDay();
console.log('startDayNum:' + startDayNum);

// 一日の曜日分マスを作る
// 4だと(木曜)

var thisMonth = today.getMonth() + 1;
console.log('thisMonth:' + thisMonth);
// 今月の数字
var lastMonth = today.getMonth();
console.log('lastMonth:' + lastMonth);
// 先月の数字

var lastDate = new Date(today.getFullYear(), today.getMonth(), 0);
console.log('lastDate:' + lastDate);
var lastMonthDateNum = lastDate.getDate();
console.log('lastMonthDateNum:' + lastMonthDateNum);
// 先月の日数





// var nextMonth = today.getMonth() + 2;
// console.log('nextMonth:' + nextMonth);
// 来月の数字
var nextDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
// 第三引数で最終日を指定
console.log('nextDate:' + nextDate);
var lastDateNum = nextDate.getDate();
console.log('lastDateNum:' + lastDateNum);




var year = today.getFullYear();
console.log('year:' + year);
// 年の数字

// var thisMonthInfo = new Date(year, lastMonth);
// console.log('thisMonthInfo:' + thisMonthInfo);
// // 今月の情報
// var lastMonthInfo = new Date(year, lastMonth - 1);
// console.log('lastMonthInfo:' + lastMonthInfo);
// // 先月の情報
// var nextMonthInfo = new Date(year, thisMonth);
// console.log('nextMonthInfo:' + nextMonthInfo);
// // 来月の情報

var thisMonthInfo = new Date(year, thisMonth, 0);
// var thisMonthInfo = new Date(year, lastMonth, 0);
// テスト
// var thisMonthInfo = new Date(year, thisMonth);
// だと取れなかった
console.log(thisMonthInfo);
// 今月の最終日
console.log(thisMonthInfo.getDate());
// 月の日数
var thisMonthCount = thisMonthInfo.getDate();
console.log('thisMonthCount:' + thisMonthCount);

// console.log(lastMonthInfo.getDate(0));
var lastDay = thisMonthInfo.getDay();
console.log('lastDay' + lastDay);



var disp1 = '<table><tr>';
for (let i = 1; i <= thisMonthCount; i++) {
  disp1 += '<td>' + i + '</td>';
  if ((i % 7) == 0) {
    disp1 += '</tr><tr>'
    console.log(disp1);
  }
}
disp1 += '</tr><table>';
document.getElementById('calendar1').innerHTML = disp1;

// 空のtdを出力させたい
// そこに前月最終日までを表示
// 余り算を使っているので式の途中に組み込む必要がある

var disp2 = '<table><tr>';

// 日曜から一日まで
for (let i = 1; i <= startDayNum; i++) {
  disp2 += '<td>' + (lastMonthDateNum - startDayNum + i) + '</td>';
}

// 一日から土曜まで
for (var j = 1; j <= (7 - startDayNum); j++) {
  disp2 += '<td>' + j + '</td>';
}
disp2 += '</tr><tr>'

// 二週目から最終日まで
for (let k = 1; k <= (thisMonthCount - (7 - startDayNum)); k++) {
  disp2 += '<td>' + (k + (7 - startDayNum)) + '</td>';
  if ((k % 7) == 0) {
    disp2 += '</tr><tr>'
  }
}

for (let l = 1; l < (7 - lastDay); l++) {
  disp2 += '<td>' + l + '</td>';
}



disp2 += '</tr><table>';
document.getElementById('calendar2').innerHTML = disp2;

// startDayNumの数字分前月表示
// 7 - lastDayNum分来月表示
// (i + j % 7) == 0
// for (let j = 0; j < startDayNum; j++) {
//   disp2 += '<td>' + (31 + 1 - i) + '</td>';
// }

// var disp2 = '<table><tr>';
// for (let i = 1; i < startDayNum; i++) {
//   disp2 += '<td>' + (31 - startDayNum + i) + '</td>';
//   if (i == startDayNum) {
//     for (let j = 1; j < thisMonthCount; j++) {
//       disp2 += '<td>' + j + '</td>';
//     }
//   }

//   if ((i % 7) == 0) {
//     disp2 += '</tr><tr>'
//   }

// }
// disp2 += '</tr><table>';
// document.getElementById('calendar2').innerHTML = disp2;

// 次はfunctionやwindow.onloadを使って書く
