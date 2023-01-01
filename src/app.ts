const data = fetch("https;//google.com");


const deley = (ms:number):Promise<unknown>=>new Promise(res=>setTimeout(res,ms));