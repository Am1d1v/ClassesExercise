

/*

class Comment  {
    constructor(text){
        this.text = text;
        this.votes = 0;
    }

    upvote(){
        this.votes += 1;
    }
}


/*

const myObj = {}

const firstComment = new Comment("First comment");
console.log(firstComment);


firstComment instanceof Comment;
console.log(firstComment instanceof Comment);

firstComment instanceof Object;
console.log(firstComment instanceof Object);

firstComment instanceof Array;
console.log(firstComment instanceof Array);

firstComment.upvote();
console.log(firstComment);
firstComment.upvote();
firstComment.upvote();
console.log(firstComment);
console.log(firstComment.text);


console.log(Comment);
console.log(Comment.prototype);
console.log(typeof(Comment.prototype));

*/

/*

const firstComment = new Comment("First comment");

//firstComment.hasOwnPropery("Text");
console.log(firstComment.hasOwnProperty("text"));
console.log(firstComment.hasOwnProperty("votes"));
console.log(firstComment.hasOwnProperty("upvote"));

*/

/*

const firstComment = new Comment("First comment");
const secondComment = new Comment("Second comment");
const thirdComment = new Comment("Third comment");

secondComment.upvote();

console.log(firstComment);
console.log(secondComment);
console.log(thirdComment);
console.log(Comment);

*/

/*

class Comment  {
    constructor(text){
        this.text = text;
        this.votes = 0;
    }

    upvote(){
        this.votes += 1;
    }

    static mergeComments(first, second){
        console.log(`${first} ${second}`);
    }
}

Comment.mergeComments("First", "Second");

console.log(Comment.prototype);

*/

/*

class NumberArray  extends Array {
    sum(){
      // return this.reduce((el, acc) =>  acc += el, 0)
      console.log(this.reduce((el, acc) =>  acc += el, 0));
    }
}

const myArray = new NumberArray (9, 5, 7);

console.log(myArray);
myArray.sum();

*/

/*

class Comment  {
    constructor(text){
        this.text = text;
        this.votes = 0;
    }

    upvote(){
        this.votes += 1;
    }
}
const firstComment = new Comment("First comment");
console.log(firstComment);
console.log(firstComment.__proto__);


class NumberArray  extends Array {
    sum(){
      // return this.reduce((el, acc) =>  acc += el, 0)
      console.log(this.reduce((el, acc) =>  acc += el, 0));
    }
}

const myArray = new NumberArray (9, 9, 9);
console.log(myArray);
console.log(myArray.__proto__);

*/

const num = 10;
const str = "10";

console.log(str.length);

const name = new String("Dima");
console.log(name);