var week = ['日', '月', '火', '水', '木', '金', '土',];

var disp = '<table><tr>';
for (let i = 0; i < week.length; i++) {
  disp += '<th>' + week[i] + '</th>';
}
disp += '</tr><table>';


document.getElementById('week').innerHTML = disp;

var today = new Date(2022, 2);
console.log(today);
// 今日
var todayDate = today.getDate();
console.log('todayDate:' + todayDate);
// 今日の日付

var startDate = new Date(today.getFullYear(), today.getMonth(), 1);
console.log('startDate:' + startDate);

// 一日の曜日
var startDayNum = startDate.getDay();
console.log('startDayNum:' + startDayNum);

// 一日の曜日分マスを作る
// 4だと(木曜)

var thisMonth = today.getMonth() + 1;
console.log('thisMonth:' + thisMonth);
document.getElementById('month').innerHTML = thisMonth + '月'
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
document.getElementById('year').innerHTML = year + '年';
// 年の数字



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

// 空のtdを出力させたい
// そこに前月最終日までを表示
// 余り算を使っているので式の途中に組み込む必要がある

var disp2 = '<table><tr>';

// 日曜から一日まで
for (let i = 1; i <= startDayNum; i++) {
  if (year == year
    && thisMonth == thisMonth
    && i == todayDate) {
    calendar += '<td class="today">' + (lastMonthDateNum - startDayNum + i) + '</td>';
  } else {
    disp2 += '<td>' + (lastMonthDateNum - startDayNum + i) + '</td>';
  }

}

// 一日から土曜まで
for (var j = 1; j <= (7 - startDayNum); j++) {
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
  disp2 += '<td>' + l + '</td>';
}

disp2 += '</tr><table>';
document.getElementById('calendar2').innerHTML = disp2;



// var td = document.getElementsByTagName("td");
// console.log('td:' + Number(td));


// if (td == today) {
//   document.getElementsByTagName("td").add('today');
// }
