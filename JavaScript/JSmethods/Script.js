const str = "Anand Kumar";


console.log(str.charAt(3));
console.log(str.at(3));


const str2 = str.slice(2,5);
console.log(str2);

const S_str = str.substring(2,5);
console.log(S_str);

const text = "Hello!! My Name is Crunchex";
console.log(text.indexOf());
console.log(text.lastIndexOf("Hello"));
console.log(text.includes("My"));
console.log(text.startsWith("Hi"));

const msg = "HTML is useful. HTML is popular.";
console.log(msg.replace("HTML" , "JS"));

console.log(msg.replaceAll("HTML" , "DP"));

console.log(msg.toUpperCase());

console.log(msg.toLowerCase());

const Fullname = "   Rahul Sharma   ";
console.log(Fullname.trim());
console.log(Fullname.trimStart());
console.log(Fullname.trimEnd());

const deep = "Deep";
const Bhat = "is a Good Boy."

console.log(deep.concat("", Bhat));

console.log("Jay shree ram ".repeat(7));






















