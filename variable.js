
//string method
//length
let abc = "hello";
console.log(abc.length)
document.write("length abc is:- ", abc) 

//to LowerCase
let lo = "hello";
console.log(lo.toLowerCase());
document.write("toLowerCase is:-",lo)

//to UpperCase
let up = "hello";
console.log(up.toUpperCase());
document.write("to UpperCase is:-",up)

// startWith
let st = "hello javascript";
let a = st.startsWith("hello")
document.write("startswith hello is:-",a)
console.log(a);

//endwith
let end = "hello javascript";
let b = end.endsWith("script")
console.log(b);
document.write("endwith script is:-",b)

// search
let sear = "hello javascript";
let c = sear.search("javascript")
console.log(c);
document.write("search a string indexing is:-",c)

// match
let mat = "hello javascript";
let d = mat.match("javascript")
console.log(d);
document.write("match index in javascript is:-",d)

//indexOf
let ind = "hello javascript";
let e = ind.indexOf("j")
console.log(e);
document.write("j indexing is:-",e)

// lastindexOf
let las = "hello javascript";
let f = las.lastIndexOf("a")
console.log(f);
document.write("j lastindexing is:-",f)

// replace
let rep = "hello javascript";
let g = rep.replace(/javascript/g,"html")
console.log(g);
document.write("replace in javascript is:-",g)

//trim
let tr = "hello javascript";
let h = tr.trim(" ")
console.log(h);
document.write("space trim is:-",h)

// charAt
let ch = "hello javascript";
let i = ch.charAt("2")
console.log(i);
document.write("2nd indexing is:-",i)

// charCodeAt
let co = "hello javascript";
let j = co.charCodeAt("j")
console.log(j);
document.write("j charcode is:-",j)

// concat
let con = "hello javascript";
let con2 = "hello html";
let k = con.concat(con2)
console.log(k);
document.write("concat is:-",k)

// split
let sp = "hello javascript";
let l = sp.split("j")
console.log(l);
document.write("javascript split is:-",l)

// repeat
let re = "hello javascript";
let m = re.repeat("2")
console.log(m);
document.write("repeat is:-",m)

//slice
let sli = "hello javascript";
let n = sli.slice(6,11)
console.log(n);
document.write("6,11 slice is:-",n)

//substring
let su = "hello javascript";
let o = su.substring(2,11)
console.log(o);
document.write("substring is:-",o)

// toString
// let to = "hello javascript";
let to = 50
let p = to.toString();
console.log(p + 20);
document.write("to string  is:-",p + 20)

// valueOf
let va = "hello javascript";
let q = va.valueOf()
console.log(q);
document.write("value of:-",q)
