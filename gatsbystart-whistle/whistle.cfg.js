const { name } = require('./package.json');
const path = require('path');

function resolve(pathname) {
  return path.resolve(__dirname, pathname);
}

// 这里不要用正则 方便后期动态的处理某个环境的代理
module.exports = {
  name,
  rules: `
# t环境
www.zno.com.t/socket.io/ localhost:8000/socket.io/
http://www.zno.com.t/index.html https://www.zno.com.t/index.html
^www.zno.com.t/$ ${resolve('./public/assets/')}/index.html
^www.zno.com.t/*.html ${resolve('./public/assets/')}/index.html
*/sign-out.html $1/sign-out.html
/www.zno.com.t/([^.]+).(js|css|json)(.map)*$/ ${resolve('./public/assets/')}/$1.$2$3
// https://saas.zno.com.com.t/*** resHeaders://${resolve('./response-cors.txt')}
// **.com.t/cloudapi/license/alicense-subscribe-order/subscribe_order_confirm_for_stand_alone?businessLine=US&platform=pc&languageCode=en&countryCode=US  file://${resolve(
    './test.json'
  )}


# d环境
www.zno.com.d/socket.io/ localhost:8000/socket.io/
http://www.zno.com.d/index.html https://www.zno.com.t/index.html
^www.zno.com.d/$ ${resolve('./public/assets/')}/index.html
^www.zno.com.d/*.html ${resolve('./public/assets/')}/index.html
*/sign-out.html $1/sign-out.html
/www.zno.com.d/([^.]+).(js|css|json)(.map)*$/ ${resolve('./public/assets/')}/$1.$2$3
`
};
