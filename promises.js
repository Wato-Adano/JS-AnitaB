Promise
const internship = true;
const myPromise = new Promise((resolve, reject)=>{
    if(internship){
        resolve('I made it')
    }
    else{
        reject('I will not give up')
    }
})
myPromise.then((response) =>{
    console.log({response});
    console.log('I will get confirmed');
})
.catch((error)=>{
    console.log({error});
    console.log('I will continue applying');
})
.finally(() =>{
    console.log('I will be a software engineer');
});






