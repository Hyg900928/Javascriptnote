const moment = require('moment-timezone');




// 目标时间的日期字符串和时区
const targetDateTimeString = '2023-08-03 23:59:59';
const targetTimeZone = 'America/Chicago';

// 将目标时间字符串转换为 Moment 对象，并将其转换为 UTC 时间
const targetDateTime = moment.tz(targetDateTimeString, targetTimeZone).utc();

// 获取当前时间的 Moment 对象，并将其转换为 UTC 时间
const currentDateTime = moment().utc();

// 计算目标时间与当前时间的时间差
const duration = moment.duration(targetDateTime.diff(currentDateTime));

// 获取倒计时的天、小时、分钟和秒数
const days = Math.floor(duration.asDays());
const hours = duration.hours();
const minutes = duration.minutes();
const seconds = duration.seconds();

// 格式化倒计时
const countdownFormat = `${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;

// 输出倒计时
console.log(`倒计时: ${countdownFormat}`);
