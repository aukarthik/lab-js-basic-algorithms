// Iteration 1: Names and Input
//
let hacker1="Karthik"
let hacker2="Manish"
console.log(`The driver's name is ${hacker1}`)

console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
let len1=hacker1.length;
let len2=hacker2.length;

if(len1>len2){
    console.log(`The driver has the longest name, it has ${len1} characters.`)
}else if(len1<len2){
    console.log(`It seems that the navigator has the longest name, it has ${len2} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${len1} characters!`)
}


// Iteration 3: Loops
let updatedName1=""
for(let i=0;i<len1;i++){
    updatedName1+=hacker1[i].toLocaleUpperCase()+" "
}
let updatedName2=""
for(let j=len2-1;j>=0;j--){
    updatedName2+=hacker2[j];
}
console.log(updatedName1.trim())
console.log(updatedName2)
if(hacker1.localeCompare(hacker2)===-1){
    console.log("The driver's name goes first.")
}else if(hacker1.localeCompare(hacker2)===1){
    console.log("Yo, the navigator goes first definitely.")
}else{
    console.log("What?! You both have the same name?")
}

// #### Bonus 1:

let sentence=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a felis fringilla, posuere est nec, congue nunc. Cras ac porta sem. Nullam eleifend leo vel ante consequat tincidunt. Pellentesque lacus ipsum, accumsan eget dolor in, pulvinar gravida augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas sit amet lorem et leo maximus aliquam nec tincidunt diam. Sed bibendum lacus nisl, eu placerat odio posuere ut. Mauris sit amet suscipit leo. Nulla quis euismod nisl. Praesent congue suscipit mollis. Vivamus hendrerit enim fringilla facilisis efficitur.

Maecenas blandit, nisi sit amet pulvinar tincidunt, nibh orci fringilla magna, nec faucibus nibh velit et turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas id felis id velit placerat condimentum mattis in felis. Ut tincidunt nibh eget dui venenatis, ut elementum dolor feugiat. Donec non tellus ut arcu fermentum hendrerit. Nulla tempus libero in lectus hendrerit, at dictum odio posuere. Sed sapien magna, elementum in tincidunt sit amet, imperdiet in ante. Nam dolor odio, vehicula vitae mauris ultricies, suscipit imperdiet felis. Phasellus et dui sed neque scelerisque laoreet ac sed massa. Aenean ac orci leo. Phasellus venenatis semper felis ut placerat. Phasellus sed metus eget tellus vehicula lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus molestie hendrerit magna at dapibus.

Morbi augue magna, pulvinar a dapibus id, vestibulum ac enim. Morbi a tortor nec orci condimentum sodales. Nam ullamcorper at nisl sollicitudin cursus. Fusce in odio dolor. Pellentesque non ligula tellus. Ut dignissim ultrices risus eget ultrices. Etiam ut maximus ipsum. Nam lobortis turpis non arcu tincidunt ornare. Mauris tempus magna purus, sed lobortis est faucibus nec. Sed porta condimentum est in bibendum. Nulla nibh diam, tincidunt sed nulla eget, placerat vulputate eros.`

console.log(sentence.split(" ").length)