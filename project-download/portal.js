let request = require('request');
const fs = require('fs');
const path = require('path');
const { FileCookieStore } = require('tough-cookie-file-store');
const { env, username, password } = require('./config.json');
const cookieJar = request.jar(new FileCookieStore(path.join(__dirname, './cookies.json')));
request = request.defaults({ jar: cookieJar });

const PORTAL_BASE = `https://portal.zno.com${env}`;
const WWW_BASE = `https://www.zno.com${env}`;
 
function checkIsLogin() {
    return new Promise((resolve, reject) => {
        request({
            url: `${PORTAL_BASE}/portal/portaluser.ep?new`,
            strictSSL: false,
            followRedirect: false,
        }, (err, response, body) => {
            if (err) {
                return resolve(false);
            }
            const { location } = response.headers;
            if (location) {
                return resolve(false);
            }
            resolve(true);
        });
    });
}

function login() {
    return new Promise((resolve, reject) => {
        request({
            method: 'POST',
            url: `${PORTAL_BASE}/portal/j_spring_security_check`,
            strictSSL: false,
            followRedirect: false,
            form: {
                isFactory: 'N',
                j_username: username,
                j_password: password,
            },
        }, (err, response, body) => {
            if (err) {
                return reject();
            }
            resolve();
        });
    });
}

function getAccountUrl(userId) {
    return new Promise((resolve, reject) => {
        request({
            url: `${PORTAL_BASE}/portal/loginCustomer/getCustomerList.ep?customerId=${userId}#`,
            strictSSL: false,
        }, (err, response, body) => {
            const reg = /onclick.*?adminlogin.*?([^']+)'\)/i;
            if (reg.test(body)) {
                const url = `${WWW_BASE}/adminLogin.html?customerId=${userId}&authToken=${RegExp.$1}`;
                return resolve(url);
            }
            reject();
        });
    });
}

function updateProject(project) {
    project.fix_time = Date.now();
    const filepath = path.join(process.cwd(), '_tmp.txt');
    fs.writeFileSync(filepath, JSON.stringify(project));
    const stream = fs.createReadStream(filepath);
    return new Promise((resolve, reject) => {
        const { guid: projectId, summary = {} } = project.project;
        const { isParentBook = false } = summary;
        request({
            method: 'POST',
            url: `${PORTAL_BASE}/portal/engOperation/updateProjectByField.ep`,
            strictSSL: false,
            followRedirect: false,
            formData: {
                projectId,
                isParentData: `${isParentBook}`,
                file: stream,
            },
        }, (err, response, body) => {
            if (err) {
                return reject();
            }
            resolve();
        });
    });
}

module.exports = {
    checkIsLogin,
    login,
    getAccountUrl,
    updateProject,
};