// 문자열타입
let string = "안녕하세요";
string = `안녕`;
console.log(string);

// 특수문자 출력하는법
string = "'하이!'";
console.log(string);

string = "안녕!\n진양아!\t\t 내 이름은\\\u09AC";
console.log(string);

// 템플릿 리터럴(Template Literal)
let id = "진양";
let greetings = "'안녕!, " + id + "헬로\n 즐거운 하루 보내요!";
console.log(greetings);

greetings = `'안녕, ${id}헬로
즐거운 하루 보내요!`;
console.log(greetings);
