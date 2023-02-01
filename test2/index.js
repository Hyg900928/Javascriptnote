const fs = require('fs-extra');
const https = require('https');
const fetch = require('node-fetch');
const urlPrefix = 'http://www.zno.com/';

function Api(url) {
    return `${urlPrefix}${url}`;
}

const nodeFetch = (url, opt = {}) => {
    const options = opt;
    if (url.indexOf('https') !== -1) {
        options.agent = new https.Agent({
            rejectUnauthorized: false
        });
    }

    return fetch(url, options);
};

const pages = [
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "slice": false, "isPrint": true },
        "isFirstPage": true,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "Y0qqPV4q17VyAyuJg00KhA%3D%3D",
                "width": 1168.5163953221738,
                "height": 777.0634028892456,
                "pw": 0.32458788758949275,
                "px": 0.17228938953858694,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 620.241802338913,
                "ph": 0.43170189049402535,
                "y": 110,
                "type": "PhotoElement",
                "id": "93cbbe1b-4984-989f-6b1c-5f2a4671bec5",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "Y0qqPV4q17WPzRvU4vY1wg%3D%3D",
                "width": 1168.5163953221738,
                "height": 778.9365971107544,
                "pw": 0.32458788758949275,
                "px": 0.17228938953858694,
                "py": 0.5061463349384697,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 620.241802338913,
                "ph": 0.4327425539504191,
                "y": 911.0634028892456,
                "type": "PhotoElement",
                "id": "88ea5a45-f613-17e5-01f8-74bc75e38672",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "Y0qqPV4q17UfFCoX6Qk%2BJA%3D%3D",
                "width": 1167,
                "height": 778,
                "pw": 0.32416666666666666,
                "px": 0.5035439437947463,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1812.7581976610868,
                "ph": 0.43222222222222223,
                "y": 110,
                "type": "PhotoElement",
                "id": "b3ba84e0-f633-ceda-f915-c191759c4bdf",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMrN8IyECkO%2Ffw%3D%3D",
                "width": 1167,
                "height": 778,
                "pw": 0.32416666666666666,
                "px": 0.5035439437947463,
                "py": 0.5066666666666667,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1812.7581976610868,
                "ph": 0.43222222222222223,
                "y": 912,
                "type": "PhotoElement",
                "id": "54fc2485-a996-7db1-d127-8fe376091042",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "dc88dc64-b7d9-60a0-f745-efdf99074fa1",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "8e546b2a-81ad-b6c3-14a3-67d161497455",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "isPrint": true, "slice": false },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMoc9xiorEzQyg%3D%3D",
                "width": 1166.6851932270813,
                "height": 777.7178569235348,
                "pw": 0.3240792203408559,
                "px": 0.17260250297050234,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 621.3690106938084,
                "ph": 0.43206547606863044,
                "y": 110,
                "type": "PhotoElement",
                "id": "2931394a-a784-59b7-3ed2-83f5a50eb46f",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMr15q3jWecC7g%3D%3D",
                "width": 1166.5767853853022,
                "height": 777.7178569235348,
                "pw": 0.32404910705147283,
                "px": 0.5033483899780249,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1812.0542039208897,
                "ph": 0.43206547606863044,
                "y": 110,
                "type": "PhotoElement",
                "id": "968eba26-4ed9-5540-c2e1-8c52844cb788",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMp5Zq0i5Z2e8Q%3D%3D",
                "width": 1165.8387639976854,
                "height": 778.2821430764652,
                "pw": 0.3238441011104682,
                "px": 0.17260250297050234,
                "py": 0.5065099205130749,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 621.3690106938084,
                "ph": 0.432378968375814,
                "y": 911.7178569235348,
                "type": "PhotoElement",
                "id": "9f15e011-bdf9-ea98-d232-79a59c815a4f",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMow5QALr6Rqfw%3D%3D",
                "width": 1167.4232146146978,
                "height": 778.2821430764652,
                "pw": 0.3242842262818605,
                "px": 0.5031132707476371,
                "py": 0.5065099205130749,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1811.2077746914938,
                "ph": 0.432378968375814,
                "y": 911.7178569235348,
                "type": "PhotoElement",
                "id": "a5cab76b-613d-0255-47b9-cbb5e7c8537d",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "e7f51daf-3e52-331a-2acb-640b07435618",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "7fb1af04-3c73-dc54-1c66-6c84a5e19de6",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "isPrint": true, "slice": false },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMqRKq9NsvQ2QA%3D%3D",
                "width": 1151.5374608528068,
                "height": 767.6916405685379,
                "pw": 0.3198715169035575,
                "px": 0.21840240727384316,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 786.2486661858354,
                "ph": 0.4264953558714099,
                "y": 110,
                "type": "PhotoElement",
                "id": "3f118904-29ae-6ca1-4a24-d2024c4668eb",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMqyLA32hiDOmA%3D%3D",
                "width": 1151.5374608528068,
                "height": 788.3083594314625,
                "pw": 0.3198715169035575,
                "px": 0.21840240727384316,
                "py": 0.5009398003158544,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 786.2486661858354,
                "ph": 0.4379490885730347,
                "y": 901.6916405685379,
                "type": "PhotoElement",
                "id": "02feac6e-514d-3c48-c928-1fead7e6b23f",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMpyAyuJg00KhA%3D%3D",
                "width": 851.9652067755226,
                "height": 567.976804517015,
                "pw": 0.2366570018820896,
                "px": 0.5449405908440673,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1961.7861270386422,
                "ph": 0.31554266917611945,
                "y": 110,
                "type": "PhotoElement",
                "id": "0de5ce47-d784-f4c9-297b-8eb0dc7d7fb3",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMqPzRvU4vY1wg%3D%3D",
                "width": 851.9652067755226,
                "height": 988.0231954829849,
                "pw": 0.2366570018820896,
                "px": 0.5449405908440673,
                "py": 0.3899871136205639,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1961.7861270386422,
                "ph": 0.548901775268325,
                "y": 701.976804517015,
                "type": "PhotoElement",
                "id": "02b79235-571f-3628-87f1-c57a172b5664",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "aa43ea29-be01-2944-ee71-a39c0bd11771",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "98fb3ea9-947b-2561-c0a8-21124294f5b4",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "isPrint": true, "slice": false },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "hX8lyhFoAMofFCoX6Qk%2BJA%3D%3D",
                "width": 543.5412229784494,
                "height": 815.3118344676741,
                "pw": 0.15098367304956928,
                "px": 0.19604696528967785,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 705.7690750428403,
                "ph": 0.45295101914870783,
                "y": 110,
                "type": "PhotoElement",
                "id": "c4c72a12-4d81-9a2d-84ec-02de8abd239e",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtbN8IyECkO%2Ffw%3D%3D",
                "width": 543.5872936025364,
                "height": 815.3118344676741,
                "pw": 0.150996470445149,
                "px": 0.35369730500591384,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1273.3102980212898,
                "ph": 0.45295101914870783,
                "y": 110,
                "type": "PhotoElement",
                "id": "3597b520-2859-c3f9-4d6f-5498c7f20c78",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtYc9xiorEzQyg%3D%3D",
                "width": 1111.1285165809857,
                "height": 740.6881655323258,
                "pw": 0.3086468101613849,
                "px": 0.19604696528967785,
                "py": 0.5273954635931523,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 705.7690750428403,
                "ph": 0.41149342529573657,
                "y": 949.3118344676741,
                "type": "PhotoElement",
                "id": "754af8fc-0deb-9305-9784-683052ebb76f",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtb15q3jWecC7g%3D%3D",
                "width": 1053.3333333333333,
                "height": 1580,
                "pw": 0.29259259259259257,
                "px": 0.5113604421177295,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1840.897591623826,
                "ph": 0.8777777777777778,
                "y": 110,
                "type": "PhotoElement",
                "id": "fc18f470-92b9-d80c-9980-62a0a0381b74",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "4e9017ce-d63e-e0eb-d89f-32668db1cdf4",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "isPrint": false, "slice": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "1c4cc29c-93f3-1d5d-38e9-b53939a1349c",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "isPrint": true, "slice": false },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtZ5Zq0i5Z2e8Q%3D%3D",
                "width": 636.816976577565,
                "height": 769.9017744170171,
                "pw": 0.17689360460487918,
                "px": 0.030555555555555555,
                "py": 0.1614211333453832,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.42772320800945396,
                "y": 290.55804002168975,
                "type": "PhotoElement",
                "id": "36baabc8-66d1-d00c-fda3-00b94613c598",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtYw5QALr6Rqfw%3D%3D",
                "width": 636.816976577565,
                "height": 424.9821455396033,
                "pw": 0.17689360460487918,
                "px": 0.030555555555555555,
                "py": 0.6024776746881705,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.2361011919664463,
                "y": 1084.4598144387069,
                "type": "PhotoElement",
                "id": "2bd3c93a-2712-7a0f-b628-bbc3e9e71156",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtaRKq9NsvQ2QA%3D%3D",
                "width": 1070.0907622568222,
                "height": 1218.8839199566207,
                "pw": 0.2972474339602284,
                "px": 0.2141158268271014,
                "py": 0.1614211333453832,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 770.816976577565,
                "ph": 0.6771577333092338,
                "y": 290.55804002168975,
                "type": "PhotoElement",
                "id": "0c36a938-1893-ff47-160f-c924c4f2aa8e",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtZyAyuJg00KhA%3D%3D",
                "width": 1625.092261165613,
                "height": 1218.8839199566205,
                "pw": 0.4514145169904481,
                "px": 0.5180299274539965,
                "py": 0.1614211333453832,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1864.9077388343871,
                "ph": 0.6771577333092336,
                "y": 290.55804002168975,
                "type": "PhotoElement",
                "id": "32c6e147-e8de-cad8-dc4c-0bad3a41d248",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "b76690a8-a248-e6f0-6602-7e2d3805c08c",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "6653b8ba-f050-84b4-d580-d97341c8ae18",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "isPrint": true, "slice": false },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtaPzRvU4vY1wg%3D%3D",
                "width": 1629.9920164838618,
                "height": 1303.9936131870895,
                "pw": 0.45277556013440606,
                "px": 0.030555555555555555,
                "py": 0.13777955189247512,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.7244408962150497,
                "y": 248.00319340645524,
                "type": "PhotoElement",
                "id": "938b4610-4941-0f5b-36ce-34eff1ec1ffd",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "NdnaUnDHPtYfFCoX6Qk%2BJA%3D%3D",
                "width": 996.8345904120299,
                "height": 1303.9936131870895,
                "pw": 0.276898497336675,
                "px": 0.4899977823566283,
                "py": 0.13777955189247512,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1763.9920164838618,
                "ph": 0.7244408962150497,
                "y": 248.00319340645524,
                "type": "PhotoElement",
                "id": "274b1fac-4caa-6e2f-b433-e3289ac57b84",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127DN8IyECkO%2Ffw%3D%3D",
                "width": 705.1733931041085,
                "height": 776.2983323984407,
                "pw": 0.19588149808447458,
                "px": 0.77356294635997,
                "py": 0.13777955189247512,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2784.826606895892,
                "ph": 0.43127685133246707,
                "y": 248.00319340645524,
                "type": "PhotoElement",
                "id": "95e56d94-b2ee-4fcb-680d-db91bb202564",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127Ac9xiorEzQyg%3D%3D",
                "width": 705.1733931041085,
                "height": 503.695280788649,
                "pw": 0.19588149808447458,
                "px": 0.77356294635997,
                "py": 0.5823897365582754,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2784.826606895892,
                "ph": 0.27983071154924943,
                "y": 1048.3015258048958,
                "type": "PhotoElement",
                "id": "60f8bc6e-8abb-6649-5bb1-644c69f25147",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "919aa621-4d24-9b5e-2895-8ea0683dd5f1",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "8dc0249f-2a52-68f5-0a6b-266f76da3a64",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": false,
        "backend": { "slice": false, "isPrint": true },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127D15q3jWecC7g%3D%3D",
                "width": 1141.4694729677417,
                "height": 761.3457053755429,
                "pw": 0.3170748536021505,
                "px": 0.030555555555555555,
                "py": 0.07046517943869332,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.42296983631974605,
                "y": 126.83732298964799,
                "type": "PhotoElement",
                "id": "84355667-07f9-9077-b4ef-122d28c473f2",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127B5Zq0i5Z2e8Q%3D%3D",
                "width": 1141.4694729677417,
                "height": 760.9796486451611,
                "pw": 0.3170748536021505,
                "px": 0.030555555555555555,
                "py": 0.5067683490917727,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.42276647146953394,
                "y": 912.1830283651909,
                "type": "PhotoElement",
                "id": "0a6af981-5e02-0a1e-94f7-081ee4a5a2bc",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127Aw5QALr6Rqfw%3D%3D",
                "width": 1159.6469576851225,
                "height": 1546.325354020704,
                "pw": 0.32212415491253404,
                "px": 0.3542970758243727,
                "py": 0.07046517943869332,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1275.4694729677417,
                "ph": 0.8590696411226133,
                "y": 126.83732298964799,
                "type": "PhotoElement",
                "id": "70853545-0486-6452-f3f3-ace5467997ec",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127CRKq9NsvQ2QA%3D%3D",
                "width": 1030.883569347136,
                "height": 1546.325354020704,
                "pw": 0.2863565470408711,
                "px": 0.6830878974035735,
                "py": 0.07046517943869332,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2459.1164306528644,
                "ph": 0.8590696411226133,
                "y": 126.83732298964799,
                "type": "PhotoElement",
                "id": "f2841d36-f5d5-5af5-8360-fa7fc50417ca",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "0c223286-956f-fcda-fdac-b554f4077398",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "6e63939f-be7c-d218-d7e6-6af1e7bd4f0f",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "isLastPage": true,
        "backend": { "slice": false, "isPrint": true },
        "isFirstPage": false,
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127CyLA32hiDOmA%3D%3D",
                "width": 1166.9236006546644,
                "height": 777.9490671031097,
                "pw": 0.32414544462629563,
                "px": 0.17252122204037096,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 621.0763993453354,
                "ph": 0.43219392616839425,
                "y": 110,
                "type": "PhotoElement",
                "id": "f55e81e1-1bf4-3de0-959a-e2eeb78fde49",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127ByAyuJg00KhA%3D%3D",
                "width": 1166.9236006546644,
                "height": 777.9490671031097,
                "pw": 0.32414544462629563,
                "px": 0.5033333333333333,
                "py": 0.06111111111111111,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1811.9999999999998,
                "ph": 0.43219392616839425,
                "y": 110,
                "type": "PhotoElement",
                "id": "e910a33f-a962-0b9e-f0ae-81eacea9fbbf",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127CPzRvU4vY1wg%3D%3D",
                "width": 1167.0763993453356,
                "height": 778.0509328968903,
                "pw": 0.3241878887070377,
                "px": 0.17252122204037096,
                "py": 0.5066383706128387,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 621.0763993453354,
                "ph": 0.4322505182760502,
                "y": 911.9490671031097,
                "type": "PhotoElement",
                "id": "adbca7d9-2cb1-08d3-f596-b0ab2a71a302",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "WtPlCc%2B127AfFCoX6Qk%2BJA%3D%3D",
                "width": 1166.7708019639936,
                "height": 778.0509328968903,
                "pw": 0.32410300054555374,
                "px": 0.5033757774140752,
                "py": 0.5066383706128387,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1812.152798690671,
                "ph": 0.4322505182760502,
                "y": 911.9490671031097,
                "type": "PhotoElement",
                "id": "73e92dd1-0d19-8952-f4eb-bcf34e161d06",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "7362b2d1-25f8-4355-1105-a9949ad669aa",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "isPrint": false, "slice": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "0eecfb28-dfa9-8d9e-3691-0b40decab8f4",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "isPrint": true, "slice": false },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7fN8IyECkO%2Ffw%3D%3D",
                "width": 1158.3358778625957,
                "height": 772.2239185750637,
                "pw": 0.32175996607294327,
                "px": 0.030555555555555555,
                "py": 0.06432004523607569,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.42901328809725764,
                "y": 115.77608142493625,
                "type": "PhotoElement",
                "id": "35ab5e44-cdbf-3ab4-3094-0df963b86d45",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7cc9xiorEzQyg%3D%3D",
                "width": 1158.3358778625957,
                "height": 772.2239185750637,
                "pw": 0.32175996607294327,
                "px": 0.030555555555555555,
                "py": 0.5066666666666667,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.42901328809725764,
                "y": 912,
                "type": "PhotoElement",
                "id": "65001ef1-256f-8565-bc89-b89144fb6db1",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7f15q3jWecC7g%3D%3D",
                "width": 1128.0322307039867,
                "height": 1568.4478371501275,
                "pw": 0.31334228630666294,
                "px": 0.3589821882951655,
                "py": 0.06432004523607569,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1292.3358778625957,
                "ph": 0.8713599095278486,
                "y": 115.77608142493625,
                "type": "PhotoElement",
                "id": "d9b6dc08-53ff-1cd0-353d-455acd4ebb99",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7d5Zq0i5Z2e8Q%3D%3D",
                "width": 1045.6318914334183,
                "height": 1568.4478371501275,
                "pw": 0.29045330317594953,
                "px": 0.678991141268495,
                "py": 0.06432004523607569,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2444.368108566582,
                "ph": 0.8713599095278486,
                "y": 115.77608142493625,
                "type": "PhotoElement",
                "id": "b2cc533a-a315-fabd-85f4-5a3dcc64813c",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "01e892ed-e2d4-e39f-121a-f3c7ecd094aa",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "isPrint": false, "slice": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "8c4ed427-7522-f268-8354-1d7f8c292d46",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "isPrint": true, "slice": false },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7cw5QALr6Rqfw%3D%3D",
                "width": 671.7367585510175,
                "height": 447.8245057006783,
                "pw": 0.1865935440419493,
                "px": 0.030555555555555555,
                "py": 0.12014624524943474,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.24879139205593237,
                "y": 216.2632414489825,
                "type": "PhotoElement",
                "id": "baaaee75-f86e-f7c3-5929-d139fa1c72d5",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7eRKq9NsvQ2QA%3D%3D",
                "width": 671.7367585510175,
                "height": 895.6490114013566,
                "pw": 0.1865935440419493,
                "px": 0.030555555555555555,
                "py": 0.38227097063870047,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 110,
                "ph": 0.49758278411186474,
                "y": 688.0877471496608,
                "type": "PhotoElement",
                "id": "eabdacf1-378a-77c2-2e32-7254d97ec139",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7eyLA32hiDOmA%3D%3D",
                "width": 911.6490114013566,
                "height": 1367.4735171020347,
                "pw": 0.25323583650037684,
                "px": 0.22381576626417152,
                "py": 0.12014624524943474,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 805.7367585510175,
                "ph": 0.7597075095011304,
                "y": 216.2632414489825,
                "type": "PhotoElement",
                "id": "2f54a91c-1ccc-7f92-ff60-b5984b88b454",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHa7qwMtQ7dyAyuJg00KhA%3D%3D",
                "width": 1748.614230047626,
                "height": 1367.4735171020352,
                "pw": 0.48572617501322946,
                "px": 0.48371826943121504,
                "py": 0.12014624524943474,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "blur": 50,
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1741.3857699523742,
                "ph": 0.7597075095011306,
                "y": 216.2632414489825,
                "type": "PhotoElement",
                "id": "605f717c-3ada-77b4-5168-04dc21be3b28",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "44ac30f3-d39d-5996-523a-36a84555a958",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 3600,
        "height": 1800,
        "backend": { "isPrint": false, "slice": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 40, "left": 40, "bottom": 40, "right": 40 },
        "id": "86fe5d5f-4549-9a9d-f5e5-b204b5f7e163",
        "bgColor": "#FFFFFF"
    }
];
const images = []
let arr = [];
pages.forEach(page => {
    const elements = page.elements;
    const encImgIds = elements.filter(ele => !!ele.encImgId).map(ele => ele.encImgId);

    const filterEncimgIds = Array.from(new Set([...encImgIds]));
    arr = arr.concat(filterEncimgIds);
});
const newArr = arr.filter(encImgId => {
    const imgItem = images.find(e => e.encImgId === encImgId);

    return !imgItem;
});

function post(url) {
    return new Promise((resolve, reject) => {
        return nodeFetch(Api(url), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                image_ids: newArr
            })
        })
            .then(response => response.json())
            .then(res => {
                const { ret_code, data } = res;
                if (ret_code === 200000) {
                    resolve(data);
                } else {
                    reject(ret_code);
                }
            })
            .catch(err => {
                reject(err);
            });
    });
}
const content = JSON.stringify(newArr);
// fs.writeJsonSync('./tes3.json', newArr);

post('cloudapi/image/select_image_infos ').then(res => {
    console.log('res===>', res);
});
// console.log('arr===>', JSON.stringify(newArr))
