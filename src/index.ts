
let age= 30_000_000;

//turple

let person: [string, number] = ['Chris', 22];

//log person

console.log(person);

//enum

const enum Size { Small = 10, Medium, Large}

let selected: Size = Size.Large;

console.log(selected);

//object


let companys: {id:number,name:string}[] = [];

companys.push({id: 3, name: 'Apple'});
companys.push({id: 4, name: 'Facebook'});
companys.push({id: 5, name: 'Twitter'});
companys.push({id: 6, name: 'Amazon'});
companys.push({id: 7, name: 'IBM'});
companys.push({id: 8, name: 'Oracle'});
companys.push({id: 9, name: 'SAP'});
companys.push({id: 10, name: 'Adobe'});
companys.push({id: 11, name: 'Intel'});
companys.push({id: 12, name: 'Cisco'});
companys.push({id: 13, name: 'HP'});
companys.push({id: 14, name: 'Dell'});
companys.push({id: 15, name: 'Lenovo'});
companys.push({id: 16, name: 'Samsung'});

console.log(companys);
