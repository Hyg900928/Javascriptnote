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
        "width": 6602,
        "height": 2398,
        "backend": { "isPrint": true, "slice": false },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "uZbXffF%2BFLqyLA32hiDOmA%3D%3D",
                "width": 2233.677,
                "height": 1622.992,
                "pw": 0.3383333838230839,
                "px": 0,
                "py": 0.16059924937447875,
                "border": { "color": "#FFFFFF", "opacity": 100, "size": 0 },
                "cropRLX": 0.958804546436453,
                "dep": 0,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "effectId": 0,
                    "opacity": 100,
                    "brightness": 0,
                    "contrast": 0,
                    "saturation": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 0,
                "ph": 0.6768106755629691,
                "y": 385.1170000000001,
                "type": "PhotoElement",
                "id": "080c5710-21d1-4adc-a6e3-8d047800782e",
                "cropLUX": 0.04119545356354696,
                "lastModified": 1669825431848
            },
            {
                "encImgId": "ES16MFcwrUZyAyuJg00KhA%3D%3D",
                "width": 2151.152,
                "height": 1622.992,
                "pw": 0.3258333838230839,
                "px": 0.6741666161769161,
                "py": 0.16059924937447875,
                "border": { "color": "#000000", "size": 0, "opacity": 100 },
                "dep": 1,
                "imgFlip": false,
                "style": {
                    "shadow": {
                        "color": "#000000",
                        "angle": 45,
                        "opacity": 50,
                        "enable": false,
                        "distance": 25,
                        "blur": 50
                    },
                    "opacity": 100,
                    "brightness": 0,
                    "effectId": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line"
                    },
                    "saturation": 100,
                    "contrast": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 4450.848,
                "ph": 0.6768106755629691,
                "y": 385.1170000000001,
                "type": "PhotoElement",
                "id": "08c7a909-4eee-d250-d27f-84a401e9dae9",
                "lastModified": 1669825431848
            },
            {
                "encImgId": "458eOhQUoEGPzRvU4vY1wg%3D%3D",
                "width": 2162.155,
                "height": 1622.992,
                "pw": 0.3275,
                "px": 0.34249999999999997,
                "py": 0.16059924937447875,
                "border": { "color": "#FFFFFF", "opacity": 100, "size": 0 },
                "dep": 2,
                "imgFlip": false,
                "style": {
                    "brightness": 0,
                    "saturation": 100,
                    "shadow": {
                        "blur": 50,
                        "enable": false,
                        "color": "#000000",
                        "angle": 45,
                        "opacity": 50,
                        "distance": 25
                    },
                    "gradient": {
                        "gradientType": "line",
                        "gradientMidpoint": 0.5,
                        "gradientEnable": false,
                        "gradientAngle": 90
                    },
                    "opacity": 100,
                    "contrast": 0,
                    "effectId": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2261.185,
                "ph": 0.6768106755629691,
                "y": 385.1170000000001,
                "type": "PhotoElement",
                "id": "d4e73ec3-82b3-0d4b-96f2-65c50e0c7f20",
                "lastModified": 1669825431848
            }
        ],
        "template": { "tplGuid": "c5e9e9e5-42df-457e-9cbd-52701c1360b4" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "b17d6896-0d64-f74e-589c-03769b16d6ad",
        "bgColor": "#ffffff"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "68f5d041-578f-0a71-09df-66639e0e73e0",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "isPrint": true, "slice": false },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "uHS2v4thxDAc9xiorEzQyg%3D%3D",
                "width": 2921.385,
                "height": 1980.6,
                "pw": 0.44250000000000006,
                "px": 0.5241666161769161,
                "py": 0.089476647206005,
                "border": { "opacity": 100, "color": "#FFFFFF", "size": 0 },
                "cropRLX": 0.9916149231740686,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "gradient": {
                        "gradientEnable": false,
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line"
                    },
                    "saturation": 100,
                    "shadow": {
                        "enable": false,
                        "distance": 25,
                        "opacity": 50,
                        "blur": 50,
                        "angle": 45,
                        "color": "#000000"
                    },
                    "opacity": 100,
                    "brightness": 0,
                    "effectId": 0,
                    "contrast": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3460.548,
                "ph": 0.8259382819015846,
                "y": 214.56499999999997,
                "type": "PhotoElement",
                "id": "b79c992d-a0b5-9834-4ea9-c54ff43782d0",
                "cropLUX": 0.008385076825931306,
                "lastModified": 1609670550615
            },
            {
                "cropLUY": 0.013784432506572138,
                "encImgId": "nMA6CG6G812yLA32hiDOmA%3D%3D",
                "width": 1501.955,
                "height": 973.795,
                "pw": 0.22749999999999998,
                "px": 0.1425,
                "py": 0.5093286071726438,
                "border": { "color": "#FFFFFF", "opacity": 100, "size": 0 },
                "cropRLX": 1,
                "dep": 0,
                "cropRLY": 0.9862155674934279,
                "imgFlip": false,
                "style": {
                    "effectId": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientType": "line",
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5
                    },
                    "brightness": 0,
                    "contrast": 0,
                    "opacity": 100,
                    "shadow": {
                        "angle": 45,
                        "enable": false,
                        "opacity": 50,
                        "color": "#000000",
                        "distance": 25,
                        "blur": 50
                    },
                    "saturation": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 940.785,
                "ph": 0.40608632193494576,
                "y": 1221.37,
                "type": "PhotoElement",
                "id": "bcd09a11-879e-197e-c07f-3a96acfa6b6e",
                "cropLUX": 0,
                "lastModified": 1609670550616
            },
            {
                "cropLUY": 0.013736263736263687,
                "encImgId": "KVNPdnukQEow5QALr6Rqfw%3D%3D",
                "width": 1501.955,
                "height": 973.795,
                "pw": 0.22749999999999998,
                "px": 0.1425,
                "py": 0.089476647206005,
                "border": { "opacity": 100, "color": "#FFFFFF", "size": 0 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 0.9862637362637363,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "saturation": 100,
                    "shadow": {
                        "color": "#000000",
                        "angle": 45,
                        "distance": 25,
                        "blur": 50,
                        "enable": false,
                        "opacity": 50
                    },
                    "brightness": 0,
                    "effectId": 0,
                    "contrast": 0,
                    "gradient": {
                        "gradientType": "line",
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90,
                        "gradientEnable": false
                    }
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 940.785,
                "ph": 0.40608632193494576,
                "y": 214.56499999999997,
                "type": "PhotoElement",
                "id": "2eb20aae-7fb2-b312-95b4-9d162bd6f8d3",
                "cropLUX": 0,
                "lastModified": 1609672499995
            }
        ],
        "template": { "tplGuid": "202a9cf1-b2dc-4a85-80d9-78ce5c898736" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "722194ff-6c95-e720-50f9-38c122f34ef2",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "71e05f34-491d-a50a-3d3a-c3bb58be2232",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": true },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "j1zTw%2BYobshyAyuJg00KhA%3D%3D",
                "width": 2035.617,
                "height": 1832.055,
                "pw": 0.3083333838230839,
                "px": 0,
                "py": 0.1193023352793995,
                "border": { "opacity": 100, "size": 0, "color": "#000000" },
                "cropRLX": 0.7418069052669357,
                "dep": 8,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "brightness": 0,
                    "effectId": 0,
                    "opacity": 100,
                    "contrast": 0,
                    "saturation": 100
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 0,
                "ph": 0.7639929107589658,
                "y": 286.087,
                "type": "PhotoElement",
                "id": "71fb3e22-7f61-3b10-d530-ce70d5d9f385",
                "cropLUX": 0.001,
                "lastModified": 1609672593745
            },
            {
                "cropLUY": 0,
                "encImgId": "nnMlphehlVyPzRvU4vY1wg%3D%3D",
                "width": 632.692,
                "height": 902.273,
                "pw": 0.09583338382308391,
                "px": 0.6033333838230839,
                "py": 0.5070341951626355,
                "border": { "size": 0, "opacity": 100, "color": "#000000" },
                "cropRLX": 0.6867614477430057,
                "dep": 0,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "contrast": 0,
                    "effectId": 0,
                    "shadow": {
                        "distance": 25,
                        "enable": false,
                        "angle": 45,
                        "blur": 50,
                        "opacity": 50,
                        "color": "#000000"
                    },
                    "gradient": {
                        "gradientType": "line",
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90
                    },
                    "brightness": 0,
                    "saturation": 100,
                    "opacity": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3983.207,
                "ph": 0.3762606338615513,
                "y": 1215.868,
                "type": "PhotoElement",
                "id": "7904db85-eccc-adbb-1de5-248453d623f1",
                "cropLUX": 0.21923855225699432,
                "lastModified": 1609671328663
            },
            {
                "cropLUY": 0,
                "encImgId": "rsFDB%2Bxrzhkw5QALr6Rqfw%3D%3D",
                "width": 632.692,
                "height": 902.273,
                "pw": 0.09583338382308391,
                "px": 0.5025000000000001,
                "py": 0.5070341951626355,
                "border": { "size": 0, "color": "#000000", "opacity": 100 },
                "cropRLX": 0.585717908229308,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "brightness": 0,
                    "contrast": 0,
                    "effectId": 0,
                    "saturation": 100,
                    "opacity": 100
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 3317.5050000000006,
                "ph": 0.3762606338615513,
                "y": 1215.868,
                "type": "PhotoElement",
                "id": "3da109e9-7c2c-95fe-74f5-982456a1ae8f",
                "cropLUX": 0.11828209177069193,
                "lastModified": 1609672575537
            },
            {
                "cropLUY": 0,
                "encImgId": "auex6CGRd8CyLA32hiDOmA%3D%3D",
                "width": 1210.367,
                "height": 1832.055,
                "pw": 0.1833333838230839,
                "px": 0.3133333838230839,
                "py": 0.1193023352793995,
                "border": { "size": 0, "color": "#FFFFFF", "opacity": 100 },
                "cropRLX": 0.8392394437889373,
                "dep": 7,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "shadow": {
                        "opacity": 50,
                        "distance": 25,
                        "angle": 45,
                        "color": "#000000",
                        "enable": false,
                        "blur": 50
                    },
                    "opacity": 100,
                    "effectId": 0,
                    "brightness": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientEnable": false,
                        "gradientType": "line"
                    },
                    "contrast": 0,
                    "saturation": 100
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 2068.627,
                "ph": 0.7639929107589658,
                "y": 286.087,
                "type": "PhotoElement",
                "id": "95eef472-39b9-f36d-6b6d-a1f129b861f9",
                "cropLUX": 0.39876055621106277,
                "lastModified": 1609672548708
            },
            {
                "cropLUY": 0.02457868698355594,
                "encImgId": "eG%2F0Bac5pfH15q3jWecC7g%3D%3D",
                "width": 632.692,
                "height": 902.273,
                "pw": 0.09583338382308391,
                "px": 0.705,
                "py": 0.5070341951626355,
                "border": { "opacity": 100, "size": 0, "color": "#000000" },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 0.9754213130164441,
                "imgFlip": false,
                "style": { "opacity": 100, "effectId": 0 },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 4654.41,
                "ph": 0.3762606338615513,
                "y": 1215.868,
                "type": "PhotoElement",
                "id": "c9239fe4-9048-bc48-cb4a-e1ecb0bf11dc",
                "cropLUX": 0,
                "lastModified": 1609672541573
            },
            {
                "cropLUY": 0,
                "encImgId": "Zvts%2BYtDcGsfFCoX6Qk%2BJA%3D%3D",
                "width": 632.692,
                "height": 902.273,
                "pw": 0.09583338382308391,
                "px": 0.5025000000000001,
                "py": 0.1193023352793995,
                "border": { "opacity": 100, "color": "#FFFFFF", "size": 0 },
                "cropRLX": 0.6157607869182826,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "contrast": 0,
                    "brightness": 0,
                    "effectId": 0,
                    "opacity": 100,
                    "saturation": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3317.5050000000006,
                "ph": 0.3762606338615513,
                "y": 286.087,
                "type": "PhotoElement",
                "id": "f4eeecc8-4f11-46ee-f5ca-5d366e3fcfdf",
                "cropLUX": 0.1482392130817172,
                "lastModified": 1609671319113
            },
            {
                "cropLUY": 0.003,
                "encImgId": "Ms%2BubNA%2B3RD15q3jWecC7g%3D%3D",
                "width": 1281.888,
                "height": 1832.055,
                "pw": 0.19416661617691608,
                "px": 0.8058333838230839,
                "py": 0.1193023352793995,
                "border": { "opacity": 100, "color": "#FFFFFF", "size": 0 },
                "cropRLX": 1,
                "dep": 6,
                "cropRLY": 0.9558924419433681,
                "imgFlip": false,
                "style": {
                    "shadow": {
                        "angle": 45,
                        "color": "#000000",
                        "enable": false,
                        "distance": 25,
                        "opacity": 50,
                        "blur": 50
                    },
                    "opacity": 100,
                    "gradient": {
                        "gradientMidpoint": 0.5,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientEnable": false
                    },
                    "brightness": 0,
                    "effectId": 0,
                    "saturation": 100,
                    "contrast": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 5320.112,
                "ph": 0.7639929107589658,
                "y": 286.087,
                "type": "PhotoElement",
                "id": "48c3290b-ae77-2c53-f30d-34ba1874df8f",
                "cropLUX": 0,
                "lastModified": 1669825500959
            },
            {
                "cropLUY": 0,
                "encImgId": "8YSG3XrPEygfFCoX6Qk%2BJA%3D%3D",
                "width": 632.692,
                "height": 902.273,
                "pw": 0.09583338382308391,
                "px": 0.6033333838230839,
                "py": 0.1193023352793995,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 0.8297400468963753,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "saturation": 100,
                    "shadow": {
                        "opacity": 50,
                        "color": "#000000",
                        "distance": 25,
                        "enable": false,
                        "angle": 45,
                        "blur": 50
                    },
                    "contrast": 0,
                    "brightness": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line",
                        "gradientEnable": false
                    },
                    "opacity": 100,
                    "effectId": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3983.207,
                "ph": 0.3762606338615513,
                "y": 286.087,
                "type": "PhotoElement",
                "id": "bf72c747-5176-c451-1a81-d3c704fce216",
                "cropLUX": 0.3622599531036246,
                "lastModified": 1609671353793
            },
            {
                "cropLUY": 0,
                "encImgId": "X6PENzWBYN4fFCoX6Qk%2BJA%3D%3D",
                "width": 632.692,
                "height": 902.273,
                "pw": 0.09583338382308391,
                "px": 0.705,
                "py": 0.1193023352793995,
                "border": { "size": 0, "color": "#000000", "opacity": 100 },
                "cropRLX": 0.7337698682853645,
                "dep": 5,
                "cropRLY": 1,
                "imgFlip": false,
                "style": { "opacity": 100, "effectId": 0 },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 4654.41,
                "ph": 0.3762606338615513,
                "y": 286.087,
                "type": "PhotoElement",
                "id": "4d4c0100-36e3-9020-124a-e96657f89738",
                "cropLUX": 0.26623013171463555,
                "lastModified": 1609672724400
            }
        ],
        "template": { "tplGuid": "c0c8ee2f-79ff-41d0-9d50-f864c0452b41" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "05d4aa8a-1ea8-c854-f84e-0c272eae71ca",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "285b9e8e-10a5-0a6c-676e-2574175aa321",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": true },
        "elements": [
            {
                "cropLUY": 0.04148385812974089,
                "encImgId": "CgW9ndScs9yPzRvU4vY1wg%3D%3D",
                "width": 561.17,
                "height": 770.233,
                "pw": 0.08499999999999999,
                "px": 0,
                "py": 0.5093286071726438,
                "border": { "color": "#FFFFFF", "size": 0, "opacity": 100 },
                "cropRLX": 1,
                "dep": 0,
                "cropRLY": 0.9565161418702591,
                "imgFlip": false,
                "style": {
                    "contrast": 0,
                    "opacity": 100,
                    "effectId": 0,
                    "shadow": {
                        "blur": 50,
                        "enable": false,
                        "color": "#000000",
                        "opacity": 50,
                        "angle": 45,
                        "distance": 25
                    },
                    "brightness": 0,
                    "saturation": 100,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line"
                    }
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 0,
                "ph": 0.321198081734779,
                "y": 1221.37,
                "type": "PhotoElement",
                "id": "c2fb77b1-4417-7c14-1ae0-0c0877ad5fd9",
                "cropLUX": 0,
                "lastModified": 1609672949009
            },
            {
                "cropLUY": 0,
                "encImgId": "UwsHya1BCWVyAyuJg00KhA%3D%3D",
                "width": 561.17,
                "height": 770.233,
                "pw": 0.08499999999999999,
                "px": 0,
                "py": 0.17436488740617181,
                "border": { "opacity": 100, "color": "#000000", "size": 0 },
                "cropRLX": 0.7018809274871588,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "effectId": 0,
                    "saturation": 100,
                    "brightness": 0,
                    "contrast": 0
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 0,
                "ph": 0.321198081734779,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "4fd39c4f-61b5-09a7-6301-7ca893be2d33",
                "cropLUX": 0.21611907251284113,
                "lastModified": 1609672897807
            },
            {
                "cropLUY": 0,
                "encImgId": "X6PENzWBYN4w5QALr6Rqfw%3D%3D",
                "width": 561.17,
                "height": 770.233,
                "pw": 0.08499999999999999,
                "px": 0.915,
                "py": 0.5093286071726438,
                "border": { "opacity": 100, "size": 0, "color": "#000000" },
                "cropRLX": 0.7428802545183584,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "saturation": 100,
                    "contrast": 0,
                    "opacity": 100,
                    "effectId": 0,
                    "brightness": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 6040.83,
                "ph": 0.321198081734779,
                "y": 1221.37,
                "type": "PhotoElement",
                "id": "f25d05e5-943c-cd66-39cb-1040e1701c06",
                "cropLUX": 0.2571197454816415,
                "lastModified": 1609672851076
            },
            {
                "cropLUY": 0.00342499918717148,
                "encImgId": "WbljCQg%2BEtIfFCoX6Qk%2BJA%3D%3D",
                "width": 1056.32,
                "height": 1573.477,
                "pw": 0.16,
                "px": 0.75,
                "py": 0.17436488740617181,
                "border": { "size": 0, "color": "#FFFFFF", "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 0.9965750008128285,
                "imgFlip": false,
                "style": {
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientMidpoint": 0.5,
                        "gradientType": "line",
                        "gradientAngle": 90,
                        "gradientEnable": false
                    },
                    "shadow": {
                        "enable": false,
                        "color": "#000000",
                        "distance": 25,
                        "angle": 45,
                        "blur": 50,
                        "opacity": 50
                    },
                    "contrast": 0,
                    "opacity": 100,
                    "brightness": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 4951.5,
                "ph": 0.6561622185154296,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "0828afe1-4cf5-60bf-61fe-4dabba80db0b",
                "cropLUX": 0,
                "lastModified": 1609672851077
            },
            {
                "cropLUY": 0,
                "encImgId": "VWdl%2FL6H5gsfFCoX6Qk%2BJA%3D%3D",
                "width": 561.17,
                "height": 770.233,
                "pw": 0.08499999999999999,
                "px": 0.915,
                "py": 0.17436488740617181,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 0.8758314450207796,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "contrast": 0,
                    "brightness": 0,
                    "shadow": {
                        "blur": 50,
                        "enable": false,
                        "angle": 45,
                        "distance": 25,
                        "opacity": 50,
                        "color": "#000000"
                    },
                    "saturation": 100,
                    "effectId": 0,
                    "gradient": {
                        "gradientMidpoint": 0.5,
                        "gradientEnable": false,
                        "gradientAngle": 90,
                        "gradientType": "line"
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 6040.83,
                "ph": 0.321198081734779,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "9ad4a0b5-56e5-8d50-b25c-920f84b768b7",
                "cropLUX": 0.39016855497922037,
                "lastModified": 1609672914677
            },
            {
                "cropLUY": 0,
                "encImgId": "ZNDopbPxWGlyAyuJg00KhA%3D%3D",
                "width": 1056.32,
                "height": 1573.477,
                "pw": 0.16,
                "px": 0.585,
                "py": 0.17436488740617181,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 0.6257547007296088,
                "dep": 5,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "contrast": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientType": "line",
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5
                    },
                    "saturation": 100,
                    "brightness": 0,
                    "shadow": {
                        "opacity": 50,
                        "color": "#000000",
                        "distance": 25,
                        "angle": 45,
                        "blur": 50,
                        "enable": false
                    },
                    "effectId": 0,
                    "opacity": 100
                },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 3862.1699999999996,
                "ph": 0.6561622185154296,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "6d079d94-1e98-e975-0578-6e92d9555488",
                "cropLUX": 0.17824529927039093,
                "lastModified": 1609672909266
            },
            {
                "cropLUY": 0,
                "encImgId": "HKy1yvb2IZnN8IyECkO%2Ffw%3D%3D",
                "width": 1056.32,
                "height": 1573.477,
                "pw": 0.16,
                "px": 0.42000000000000004,
                "py": 0.17436488740617181,
                "border": { "opacity": 100, "size": 0, "color": "#FFFFFF" },
                "cropRLX": 0.7917506428038853,
                "dep": 6,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "shadow": {
                        "blur": 50,
                        "color": "#000000",
                        "distance": 25,
                        "angle": 45,
                        "opacity": 50,
                        "enable": false
                    },
                    "opacity": 100,
                    "saturation": 100,
                    "contrast": 0,
                    "effectId": 0,
                    "brightness": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientEnable": false,
                        "gradientType": "line"
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2772.84,
                "ph": 0.6561622185154296,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "8c09e805-af6e-7b71-e460-fce32af52058",
                "cropLUX": 0.34424935719611466,
                "lastModified": 1609672867056
            },
            {
                "cropLUY": 0.0034217592377808245,
                "encImgId": "DGRaiJP1mIXN8IyECkO%2Ffw%3D%3D",
                "width": 1056.32,
                "height": 1573.477,
                "pw": 0.16,
                "px": 0.255,
                "py": 0.17436488740617181,
                "border": { "opacity": 100, "size": 0, "color": "#FFFFFF" },
                "cropRLX": 1,
                "dep": 7,
                "cropRLY": 0.9965782407622192,
                "imgFlip": false,
                "style": {
                    "saturation": 100,
                    "brightness": 0,
                    "opacity": 100,
                    "effectId": 0,
                    "contrast": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1683.51,
                "ph": 0.6561622185154296,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "6a04cd22-f5e7-a2de-e564-5411f9e2cdff",
                "cropLUX": 0,
                "lastModified": 1609672851077
            },
            {
                "cropLUY": 0,
                "encImgId": "ZYiP8sPL6IYc9xiorEzQyg%3D%3D",
                "width": 1056.32,
                "height": 1573.477,
                "pw": 0.16,
                "px": 0.09,
                "py": 0.17436488740617181,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 0.7237761763703356,
                "dep": 8,
                "cropRLY": 1,
                "imgFlip": false,
                "style": { "effectId": 0, "opacity": 100 },
                "imgRot": 0,
                "imageid": "",
                "rot": 0,
                "x": 594.18,
                "ph": 0.6561622185154296,
                "y": 418.127,
                "type": "PhotoElement",
                "id": "5ba1dc0c-2069-7ec5-7a0a-a6227d0b644c",
                "cropLUX": 0.27622382362966436,
                "lastModified": 1609672938138
            }
        ],
        "template": { "tplGuid": "5f2e7995-3055-409a-bcfb-ed54e5d8e9c1" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "31f13ba8-8815-5f83-c5ec-d7fca2b31db8",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "isPrint": false, "slice": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "1fc22f65-16a7-f032-8528-03f9fee79f84",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": true },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "neuV5N%2FDoMh5Zq0i5Z2e8Q%3D%3D",
                "width": 3137.851017952543,
                "height": 2091.9006786350287,
                "pw": 0.4752879457668196,
                "px": 0.022084216903968498,
                "py": 0.063823878516466,
                "border": { "color": "#FFFFFF", "opacity": 100, "size": 0 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "shadow": {
                        "distance": 25,
                        "opacity": 50,
                        "color": "#000000",
                        "angle": 45,
                        "enable": false,
                        "blur": 50
                    },
                    "effectId": 0,
                    "opacity": 100,
                    "brightness": 0,
                    "saturation": 100,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line",
                        "gradientAngle": 90
                    },
                    "contrast": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 145.8,
                "ph": 0.8723522429670678,
                "y": 153.04966068248547,
                "type": "PhotoElement",
                "id": "0011c60a-ea1d-d252-35e5-eafda621fac3",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "X6PENzWBYN6yLA32hiDOmA%3D%3D",
                "width": 3137.5489820474554,
                "height": 2091.9006786350287,
                "pw": 0.4752421966142768,
                "px": 0.5026735864817544,
                "py": 0.063823878516466,
                "border": { "opacity": 100, "size": 0, "color": "#FFFFFF" },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "contrast": 0,
                    "shadow": {
                        "opacity": 50,
                        "blur": 50,
                        "color": "#000000",
                        "angle": 45,
                        "distance": 25,
                        "enable": false
                    },
                    "gradient": {
                        "gradientType": "line",
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90,
                        "gradientEnable": false
                    },
                    "saturation": 100,
                    "brightness": 0,
                    "opacity": 100,
                    "effectId": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3318.6510179525426,
                "ph": 0.8723522429670678,
                "y": 153.04966068248547,
                "type": "PhotoElement",
                "id": "cf00f061-ab1d-8d2c-186d-160639d765a3",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "5edd3701-2a59-e24a-07a6-201c45e2795a",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "cb2d5416-d76c-9412-a578-2058ae0169a0",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "isPrint": true, "slice": false },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "ZDt9mHew2D0w5QALr6Rqfw%3D%3D",
                "width": 1551.3846322134168,
                "height": 1034.2564214756112,
                "pw": 0.2349870694052434,
                "px": 0.022084216903968498,
                "py": 0.28435020402927197,
                "border": { "opacity": 100, "color": "#FFFFFF", "size": 0 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line"
                    },
                    "contrast": 0,
                    "brightness": 0,
                    "shadow": {
                        "distance": 25,
                        "angle": 45,
                        "opacity": 50,
                        "enable": false,
                        "color": "#000000",
                        "blur": 50
                    },
                    "effectId": 0,
                    "saturation": 100,
                    "opacity": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 145.8,
                "ph": 0.4312995919414559,
                "y": 681.8717892621942,
                "type": "PhotoElement",
                "id": "4d040b15-52c2-4cd8-5ef1-c909c953b1c5",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "VWdl%2FL6H5gsc9xiorEzQyg%3D%3D",
                "width": 1551.3846322134168,
                "height": 1034.2564214756112,
                "pw": 0.2349870694052434,
                "px": 0.26237271012017827,
                "py": 0.28435020402927197,
                "border": { "opacity": 100, "color": "#FFFFFF", "size": 0 },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "contrast": 0,
                    "gradient": {
                        "gradientEnable": false,
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientType": "line"
                    },
                    "effectId": 0,
                    "saturation": 100,
                    "shadow": {
                        "blur": 50,
                        "distance": 25,
                        "opacity": 50,
                        "enable": false,
                        "color": "#000000",
                        "angle": 45
                    },
                    "brightness": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1732.184632213417,
                "ph": 0.4312995919414559,
                "y": 681.8717892621942,
                "type": "PhotoElement",
                "id": "00fb876c-32f1-a34b-0d83-990a82e4cbee",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "uoSRGWEEM9Yc9xiorEzQyg%3D%3D",
                "width": 1551.3846322134168,
                "height": 1034.2564214756112,
                "pw": 0.2349870694052434,
                "px": 0.5026612033363881,
                "py": 0.28435020402927197,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "brightness": 0,
                    "saturation": 100,
                    "contrast": 0,
                    "opacity": 100,
                    "shadow": {
                        "enable": false,
                        "angle": 45,
                        "color": "#000000",
                        "opacity": 50,
                        "distance": 25,
                        "blur": 50
                    },
                    "effectId": 0,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientEnable": false,
                        "gradientType": "line"
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3318.5692644268343,
                "ph": 0.4312995919414559,
                "y": 681.8717892621942,
                "type": "PhotoElement",
                "id": "8920a541-6287-05f7-6b0e-06ff1a0cf6d2",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "%2B%2F07KrU8So6RKq9NsvQ2QA%3D%3D",
                "width": 1551.24610335975,
                "height": 1034.2564214756112,
                "pw": 0.2349660865434338,
                "px": 0.7429496965525978,
                "py": 0.28435020402927197,
                "border": { "size": 0, "color": "#FFFFFF", "opacity": 100 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "shadow": {
                        "angle": 45,
                        "enable": false,
                        "color": "#000000",
                        "distance": 25,
                        "opacity": 50,
                        "blur": 50
                    },
                    "effectId": 0,
                    "brightness": 0,
                    "gradient": {
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90,
                        "gradientType": "line",
                        "gradientEnable": false
                    },
                    "contrast": 0,
                    "saturation": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 4904.953896640251,
                "ph": 0.4312995919414559,
                "y": 681.8717892621942,
                "type": "PhotoElement",
                "id": "d8d12ffd-4e74-698b-1978-b3abc00e8b07",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "f6543496-f833-246c-4ff1-35e96c0b83f3",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "isPrint": false, "slice": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "52ee458c-248d-fb65-13a4-68d8638d002f",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "isPrint": true, "slice": false },
        "elements": [
            {
                "cropLUY": 0.006391478029294274,
                "encImgId": "iHzMS%2B3DUwiPzRvU4vY1wg%3D%3D",
                "width": 2816.853333333333,
                "height": 1854.0616666666663,
                "pw": 0.42666666666666664,
                "px": 0.042499999999999996,
                "py": 0.11471365026410897,
                "border": { "opacity": 100, "size": 0, "color": "#FFFFFF" },
                "cropRLX": 1,
                "dep": 0,
                "cropRLY": 0.9936085219707057,
                "imgFlip": false,
                "style": {
                    "gradient": {
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90,
                        "gradientType": "line",
                        "gradientEnable": false
                    },
                    "brightness": 0,
                    "saturation": 100,
                    "contrast": 0,
                    "opacity": 100,
                    "shadow": {
                        "color": "#000000",
                        "distance": 25,
                        "enable": false,
                        "blur": 50,
                        "angle": 45,
                        "opacity": 50
                    },
                    "effectId": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 280.585,
                "ph": 0.7731700027800944,
                "y": 275.0833333333333,
                "type": "PhotoElement",
                "id": "85c84b83-4546-cb23-d23f-84c09acdd53c",
                "cropLUX": 0,
                "lastModified": 1609673023273
            },
            {
                "cropLUY": 0,
                "encImgId": "JT%2FPvoW662x5Zq0i5Z2e8Q%3D%3D",
                "width": 3301,
                "height": 2398.7266666666665,
                "pw": 0.5,
                "px": 0.5,
                "py": 0,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 0.9586756454857943,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "shadow": {
                        "distance": 25,
                        "opacity": 50,
                        "blur": 50,
                        "enable": false,
                        "angle": 45,
                        "color": "#000000"
                    },
                    "gradient": {
                        "gradientEnable": false,
                        "gradientType": "line",
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90
                    },
                    "contrast": 0,
                    "opacity": 100,
                    "brightness": 0,
                    "effectId": 0,
                    "saturation": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 3301,
                "ph": 1.0003030303030302,
                "y": 0,
                "type": "PhotoElement",
                "id": "10d2f2ea-4d57-1a12-fbfd-44bb9eb0718b",
                "cropLUX": 0.04132435451420566,
                "lastModified": 1609673023273
            }
        ],
        "template": { "tplGuid": "8e14740c-9a1f-4d02-954c-8f1ebaaa6245" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "89c3e6ce-a0d0-d451-3c71-5554dee6b7dc",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "d652df36-371e-62f9-7c9f-d821c6ff4a43",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": true },
        "elements": [
            {
                "cropLUY": 0,
                "encImgId": "C9BNtkmWfTmyLA32hiDOmA%3D%3D",
                "width": 1404.2666666666664,
                "height": 2106.3999999999996,
                "pw": 0.212703221246087,
                "px": 0.17125973096771652,
                "py": 0.060800667222685574,
                "border": { "size": 0, "color": "#FFFFFF", "opacity": 100 },
                "cropRLX": 1,
                "dep": 1,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "opacity": 100,
                    "gradient": {
                        "gradientType": "line",
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90
                    },
                    "shadow": {
                        "distance": 25,
                        "color": "#000000",
                        "opacity": 50,
                        "blur": 50,
                        "angle": 45,
                        "enable": false
                    },
                    "brightness": 0,
                    "effectId": 0,
                    "contrast": 0,
                    "saturation": 100
                },
                "imgRot": 0,
                "rot": 0,
                "x": 1130.6567438488644,
                "ph": 0.8783986655546288,
                "y": 145.8,
                "type": "PhotoElement",
                "id": "25f9773d-1e96-1243-e99a-422d181107ce",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "KHK1ZKxD3NTN8IyECkO%2Ffw%3D%3D",
                "width": 1404.2666666666664,
                "height": 2106.3999999999996,
                "pw": 0.212703221246087,
                "px": 0.38926437602476993,
                "py": 0.060800667222685574,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 1,
                "dep": 2,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "saturation": 100,
                    "gradient": {
                        "gradientType": "line",
                        "gradientMidpoint": 0.5,
                        "gradientAngle": 90,
                        "gradientEnable": false
                    },
                    "contrast": 0,
                    "effectId": 0,
                    "opacity": 100,
                    "shadow": {
                        "opacity": 50,
                        "color": "#000000",
                        "angle": 45,
                        "blur": 50,
                        "enable": false,
                        "distance": 25
                    },
                    "brightness": 0
                },
                "imgRot": 0,
                "rot": 0,
                "x": 2569.923410515531,
                "ph": 0.8783986655546288,
                "y": 145.8,
                "type": "PhotoElement",
                "id": "c71be85e-01e6-1645-5db1-15b4ec461b7a",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "xeYIX%2FPBMoiyLA32hiDOmA%3D%3D",
                "width": 1462.1531789689382,
                "height": 974.6737051378972,
                "pw": 0.2214712479504602,
                "px": 0.6072690210818233,
                "py": 0.060800667222685574,
                "border": { "size": 0, "opacity": 100, "color": "#FFFFFF" },
                "cropRLX": 1,
                "dep": 3,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "saturation": 100,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientMidpoint": 0.5,
                        "gradientEnable": false,
                        "gradientType": "line"
                    },
                    "contrast": 0,
                    "effectId": 0,
                    "brightness": 0,
                    "opacity": 100,
                    "shadow": {
                        "enable": false,
                        "angle": 45,
                        "color": "#000000",
                        "distance": 25,
                        "opacity": 50,
                        "blur": 50
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 4009.190077182198,
                "ph": 0.406452754436154,
                "y": 145.8,
                "type": "PhotoElement",
                "id": "22432217-e428-b5ea-6ac1-0a90e6202651",
                "cropLUX": 0
            },
            {
                "cropLUY": 0,
                "encImgId": "6E6UKtQXZPF5Zq0i5Z2e8Q%3D%3D",
                "width": 1462.1531789689382,
                "height": 1096.7262948621021,
                "pw": 0.2214712479504602,
                "px": 0.6072690210818233,
                "py": 0.48184891790571194,
                "border": { "color": "#FFFFFF", "opacity": 100, "size": 0 },
                "cropRLX": 1,
                "dep": 4,
                "cropRLY": 1,
                "imgFlip": false,
                "style": {
                    "effectId": 0,
                    "contrast": 0,
                    "opacity": 100,
                    "brightness": 0,
                    "shadow": {
                        "distance": 25,
                        "color": "#000000",
                        "opacity": 50,
                        "blur": 50,
                        "angle": 45,
                        "enable": false
                    },
                    "saturation": 100,
                    "gradient": {
                        "gradientAngle": 90,
                        "gradientType": "line",
                        "gradientEnable": false,
                        "gradientMidpoint": 0.5
                    }
                },
                "imgRot": 0,
                "rot": 0,
                "x": 4009.190077182198,
                "ph": 0.4573504148716022,
                "y": 1155.4737051378972,
                "type": "PhotoElement",
                "id": "7e2b985d-a22a-1683-3bcd-c0d890db5094",
                "cropLUX": 0
            }
        ],
        "template": { "tplGuid": "SMART_LAYOUT_ID" },
        "type": "Sheet",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "67de2629-ff8e-ec7a-7599-325288747911",
        "bgColor": "#FFFFFF"
    },
    {
        "width": 6602,
        "height": 2398,
        "backend": { "slice": false, "isPrint": false },
        "elements": [],
        "template": {},
        "type": "Page",
        "bleed": { "top": 70.8, "bottom": 70.8, "left": 70.8, "right": 70.8 },
        "id": "02407fdd-9f1f-a15b-71e9-ce3a9f2e3689",
        "bgColor": "#FFFFFF"
    }
]
const images = [
    {
        "encImgId": "SfWFjMXFmtcc9xiorEzQyg%3D%3D",
        "width": 5899,
        "shotTime": 1606216401000,
        "height": 3933,
        "guid": "feeaa2e1-d2a6-3e26-a78e-fcdf0af78ffe",
        "name": "IMG8938.jpg",
        "uploadTime": 1669822223496,
        "order": 0,
        "orientation": 0,
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "uZbXffF%2BFLqyLA32hiDOmA%3D%3D",
        "width": 4828,
        "shotTime": 1606216471000,
        "height": 3219,
        "guid": "1e337cb9-e347-6e7c-8c34-ed9798d18e23",
        "name": "IMG8977 copy.jpg",
        "uploadTime": 1669822256376,
        "order": 1,
        "orientation": 0,
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "ocei%2BP0oTHkc9xiorEzQyg%3D%3D",
        "width": 5943,
        "shotTime": 1606219078000,
        "height": 3962,
        "guid": "7feb6290-2c72-b1a5-0cce-f7838581b017",
        "name": "IMG9765-2.jpg",
        "uploadTime": 1669822631272,
        "order": 2,
        "orientation": 0,
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "ES16MFcwrUZyAyuJg00KhA%3D%3D",
        "width": 5398,
        "height": 3599,
        "shotTime": null,
        "guid": "33b99255-f5d9-4bea-b551-18bb198dbc65",
        "name": "IMG9019.jpg",
        "uploadTime": 1609609742000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "458eOhQUoEGPzRvU4vY1wg%3D%3D",
        "width": 4954,
        "height": 3303,
        "shotTime": null,
        "guid": "7e1b08cd-cede-406f-bec9-5f4307d9c55e",
        "name": "IMG8990.jpg",
        "uploadTime": 1609609520000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "uHS2v4thxDAc9xiorEzQyg%3D%3D",
        "width": 4751,
        "height": 3167,
        "shotTime": null,
        "guid": "84236d18-0e24-4009-9d3b-e3968987fa7b",
        "name": "IMG9073.jpg",
        "uploadTime": 1609609948000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "nMA6CG6G812yLA32hiDOmA%3D%3D",
        "width": 5047,
        "height": 3365,
        "shotTime": null,
        "guid": "4cb677b1-2cd3-47ce-946e-e2398ad8b218",
        "name": "IMG9043.jpg",
        "uploadTime": 1609609785000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "KVNPdnukQEow5QALr6Rqfw%3D%3D",
        "width": 5376,
        "height": 3584,
        "shotTime": null,
        "guid": "d63f424e-04b9-4665-a0c9-2efee456b0cc",
        "name": "IMG9058.jpg",
        "uploadTime": 1609609921000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "j1zTw%2BYobshyAyuJg00KhA%3D%3D",
        "width": 5608,
        "height": 3739,
        "shotTime": null,
        "guid": "7c361c27-ea02-49d8-a815-0bf81c0b0435",
        "name": "IMG9192.jpg",
        "uploadTime": 1609617862000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "nnMlphehlVyPzRvU4vY1wg%3D%3D",
        "width": 5461,
        "height": 3641,
        "shotTime": null,
        "guid": "82adeaa3-2ced-4a9f-aeaa-6aba59ce72e4",
        "name": "IMG9090.jpg",
        "uploadTime": 1609610011000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "rsFDB%2Bxrzhkw5QALr6Rqfw%3D%3D",
        "width": 5279,
        "height": 3519,
        "shotTime": null,
        "guid": "744fba47-f35e-44e3-9183-3fb6f380ddec",
        "name": "IMG9189.jpg",
        "uploadTime": 1609610360000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "auex6CGRd8CyLA32hiDOmA%3D%3D",
        "width": 5746,
        "height": 3831,
        "shotTime": null,
        "guid": "05c9164d-7623-4ebb-8bf1-8478000a7063",
        "name": "IMG9118.jpg",
        "uploadTime": 1609610160000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "eG%2F0Bac5pfH15q3jWecC7g%3D%3D",
        "width": 2667,
        "height": 4000,
        "shotTime": null,
        "guid": "c4e5ee4f-3785-4f98-a43e-4b75b307e177",
        "name": "IMG9091.jpg",
        "uploadTime": 1609609982000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "Zvts%2BYtDcGsfFCoX6Qk%2BJA%3D%3D",
        "width": 5635,
        "height": 3757,
        "shotTime": null,
        "guid": "3e7476de-b194-454f-93ae-cce580846a1f",
        "name": "IMG9182.jpg",
        "uploadTime": 1609610294000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "Ms%2BubNA%2B3RD15q3jWecC7g%3D%3D",
        "width": 3099,
        "height": 4648,
        "shotTime": null,
        "guid": "b651e595-2c08-4627-ad0f-0ac621c80d7e",
        "name": "IMG9160.jpg",
        "uploadTime": 1609612134000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "8YSG3XrPEygfFCoX6Qk%2BJA%3D%3D",
        "width": 5793,
        "height": 3862,
        "shotTime": null,
        "guid": "91689e2f-ed1b-4c20-8bff-64cdf6529048",
        "name": "IMG9143.jpg",
        "uploadTime": 1609612212000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "X6PENzWBYN4fFCoX6Qk%2BJA%3D%3D",
        "width": 3919,
        "height": 2613,
        "shotTime": null,
        "guid": "0ada14df-d3dd-4f72-8b62-68803b96717d",
        "name": "IMG9709.jpg",
        "uploadTime": 1609611170000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "CgW9ndScs9yPzRvU4vY1wg%3D%3D",
        "width": 4160,
        "height": 6240,
        "shotTime": null,
        "guid": "eb8c95fb-6057-414b-9f7a-63df2a86c8ae",
        "name": "IMG9329.jpg",
        "uploadTime": 1609610668000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "UwsHya1BCWVyAyuJg00KhA%3D%3D",
        "width": 5128,
        "height": 3419,
        "shotTime": null,
        "guid": "234e24cb-33a9-4443-88ac-f0a3d85a9bb5",
        "name": "IMG9234.jpg",
        "uploadTime": 1609610522000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "X6PENzWBYN4w5QALr6Rqfw%3D%3D",
        "width": 5278,
        "height": 3519,
        "shotTime": null,
        "guid": "26986ddc-a071-4933-84e0-e3105bbfd5a6",
        "name": "IMG9675.jpg",
        "uploadTime": 1609611158000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "WbljCQg%2BEtIfFCoX6Qk%2BJA%3D%3D",
        "width": 3513,
        "height": 5269,
        "shotTime": null,
        "guid": "501561aa-7c1b-462a-8a25-74a4fbedcb5e",
        "name": "IMG9356.jpg",
        "uploadTime": 1609610719000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "VWdl%2FL6H5gsfFCoX6Qk%2BJA%3D%3D",
        "width": 4706,
        "height": 3137,
        "shotTime": null,
        "guid": "73ca48a7-d09c-4366-a6d5-23b85d940eec",
        "name": "IMG9609.jpg",
        "uploadTime": 1609611077000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "ZNDopbPxWGlyAyuJg00KhA%3D%3D",
        "width": 5210,
        "height": 3473,
        "shotTime": null,
        "guid": "2ba51c68-2d1e-47a8-baae-ea79675061bd",
        "name": "IMG9860.jpg",
        "uploadTime": 1609611663000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "HKy1yvb2IZnN8IyECkO%2Ffw%3D%3D",
        "width": 4382,
        "height": 2921,
        "shotTime": null,
        "guid": "bc15967c-23f4-4da7-85b4-6f914ca78936",
        "name": "IMG9612.jpg",
        "uploadTime": 1609611103000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "DGRaiJP1mIXN8IyECkO%2Ffw%3D%3D",
        "width": 3287,
        "height": 4930,
        "shotTime": null,
        "guid": "4194d23b-33eb-4690-b901-c60e19e32e87",
        "name": "IMG9751.jpg",
        "uploadTime": 1609611269000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "ZYiP8sPL6IYc9xiorEzQyg%3D%3D",
        "width": 5193,
        "height": 3462,
        "shotTime": null,
        "guid": "a5af83ad-9d35-409a-a6d7-56c63b2e2e3b",
        "name": "IMG9394.jpg",
        "uploadTime": 1609610973000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "neuV5N%2FDoMh5Zq0i5Z2e8Q%3D%3D",
        "width": 5976,
        "height": 3984,
        "shotTime": null,
        "guid": "7fb87100-f012-4f5d-94cc-994a900c2049",
        "name": "IMG9765.jpg",
        "uploadTime": 1609611315000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "X6PENzWBYN6yLA32hiDOmA%3D%3D",
        "width": 5194,
        "height": 3463,
        "shotTime": null,
        "guid": "3f6c5de1-2796-4169-bb77-96871f062f43",
        "name": "IMG9688.jpg",
        "uploadTime": 1609611140000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "ZDt9mHew2D0w5QALr6Rqfw%3D%3D",
        "width": 6240,
        "height": 4160,
        "shotTime": null,
        "guid": "794259a3-51b5-4ef7-9aea-68ec9d16df8b",
        "name": "IMG9204.jpg",
        "uploadTime": 1609614391000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "VWdl%2FL6H5gsc9xiorEzQyg%3D%3D",
        "width": 4959,
        "height": 3306,
        "shotTime": null,
        "guid": "416d72ac-e46d-4f83-bf04-0b81496600b3",
        "name": "IMG9528.jpg",
        "uploadTime": 1609611091000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "uoSRGWEEM9Yc9xiorEzQyg%3D%3D",
        "width": 4323,
        "height": 2882,
        "shotTime": null,
        "guid": "c08302ba-b2b2-4eb6-b899-2e4c4a04709b",
        "name": "IMG9821.jpg",
        "uploadTime": 1609611403000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "%2B%2F07KrU8So6RKq9NsvQ2QA%3D%3D",
        "width": 5599,
        "height": 3733,
        "shotTime": null,
        "guid": "995fdd86-bea0-4e1a-a410-70a4fc152f3d",
        "name": "IMG0002.jpg",
        "uploadTime": 1609609208000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "iHzMS%2B3DUwiPzRvU4vY1wg%3D%3D",
        "width": 5632,
        "height": 3755,
        "shotTime": null,
        "guid": "8d11022d-1934-4c2a-a36d-bbfa251b2163",
        "name": "IMG9386.jpg",
        "uploadTime": 1609610964000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "JT%2FPvoW662x5Zq0i5Z2e8Q%3D%3D",
        "width": 5741,
        "height": 3827,
        "shotTime": null,
        "guid": "ef5273fb-d20c-4954-8cc3-b730b4510643",
        "name": "IMG9370.jpg",
        "uploadTime": 1609610830000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "C9BNtkmWfTmyLA32hiDOmA%3D%3D",
        "width": 3350,
        "height": 5025,
        "shotTime": null,
        "guid": "e15488dc-c43a-467a-9f77-1d9cdd63abce",
        "name": "IMG9990.jpg",
        "uploadTime": 1609611918000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "KHK1ZKxD3NTN8IyECkO%2Ffw%3D%3D",
        "width": 3548,
        "height": 5322,
        "shotTime": null,
        "guid": "ea65e275-c0f8-49e0-bb22-5377518697d8",
        "name": "IMG9802 copy.jpg",
        "uploadTime": 1609672240000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "xeYIX%2FPBMoiyLA32hiDOmA%3D%3D",
        "width": 5126,
        "height": 3417,
        "shotTime": null,
        "guid": "c24fb742-3ffe-4a1f-a205-59f254ab691b",
        "name": "IMG9869.jpg",
        "uploadTime": 1609611674000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    },
    {
        "encImgId": "6E6UKtQXZPF5Zq0i5Z2e8Q%3D%3D",
        "width": 3281,
        "height": 2461,
        "shotTime": null,
        "guid": "01cba27f-f83a-4311-9332-671ad12ce92d",
        "name": "Untitled-1 copy.jpg",
        "uploadTime": 1609612062000,
        "order": 100,
        "orientation": "0",
        "imageid": "",
        "id": ""
    }
]
let arr = [];
pages.forEach(page => {
    const elements = page.elements;
    const encImgIds = elements.filter(ele => !!ele.encImgId).map(ele => ele.encImgId);

    const filterEncimgIds = Array.from(new Set([...encImgIds]));
    arr = arr.concat(filterEncimgIds);
});
// console.log('arr===>', arr)
const newArr = arr.filter(encImgId => {
    const imgItem = images.find(e => e.encImgId === encImgId);

    return !imgItem;
});
// const newArr = ['iLe1w0ZcrxWowdkVWocLnw=='];
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

post('cloudapi/image/select_image_infos').then(res => {
    console.log('res===>', res);
    fs.writeJsonSync('./tes.json', res)
});
// console.log('arr===>', JSON.stringify(newArr))
