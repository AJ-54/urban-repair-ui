import getJWT from "../weavy/getJWT";
import { getCookie, setCookie } from "./cookies";

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpc3MiOiJ0ZXN0In0.lfe53wDiX8TNTDssn4CLfKPrBewpbMQSrve2Lf1fZL8");
// myHeaders.append("Authorization", `Bearer ${getJWT()}`); 

var requestOptions = {
  method: 'GET',
  headers: myHeaders
};

async function getEmbed(i){
    const res = await fetch(`https://localhost:44323/embeds/${i}`, requestOptions);
    const result = await res.text();
    const domParser = new DOMParser();
    const doc = await domParser.parseFromString(result, "text/html");
    const url = await doc.getElementsByTagName("a")[0].getAttribute("href");
    const data = await url.split('/').reverse();
    let coords = null;
    if(data[0] && data[1])
        coords = [data[1], data[0]];
    return coords;
}

export async function getMarkers(){
    var N = getCookie('N');
    var str = getCookie('marker');

    var i = N ? N : 1;
    var s = str ? str : '';

    var c = 0;
    var markers = [];

    if (s) {
        const sArr = s.split(';');
        for(let i = 0;i<sArr.length;i++){
            const coords = sArr[i].split(',');
            const data = [parseFloat(coords[0]), parseFloat(coords[1])];
            if(data[0] && data[1])
            markers.push([data[0], data[1]]);
        }
    }

    while(c<10) {
        const coords = await getEmbed(i+c);
        if(coords) {
            const data = [parseFloat(coords[0]), parseFloat(coords[1])];
            if(data[0] && data[1]) {
                markers.push([data[0], data[1]]);
                s += `;${coords[0]},${coords[1]}`
                N = i+c;
            }
        }
        c+=1;
    }
    setCookie('marker', s);
    setCookie('N', N);
    return markers;
}
