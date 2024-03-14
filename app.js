const product = {
    fullName :"Parker Jotter Standard CT Ball Pen" ,
    color:"Black",
    rating:7002,
    offer:"5% off",
    price: 270,
    isdeal:true
};
console.log(product);
const profile = {
    fullName:"ShardhaKhapra",
    isfollow:true,
    ismessage:false,
    posts:195,
    followers:"569k",
    following:4,
    Entrepreneur:"Apna college | Ex.Microsoft,DRDO \n To educate someone is the highest privilege"
};
profile["followers"] = profile["followers"]+1
profile["posts"] = "870";
profile["fullName"] = "SACHANYAROOSHAH";
console.log(profile);
console.log(typeof profile);
console.log(typeof profile ["posts"]);
