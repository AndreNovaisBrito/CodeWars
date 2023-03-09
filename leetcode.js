//sort array in alphabetical order by second element in subarray
function sortBySecond(arr) {
    return arr.sort(function(a, b) {
        return a[1] - b[1];
    });
}

//returns an array with all permutations of a string
function permute(str) {
    if (str.length === 1) {
        return [str];
    }
    var perms = [];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var permutations = permute(str.slice(0, i) + str.slice(i + 1));
        for (var j = 0; j < permutations.length; j++) {
            perms.push(char + permutations[j]);
        }
    }
    return perms;
}

//return a set of an array
function set(arr) {
    var set = [];
    for (var i = 0; i < arr.length; i++) {
        if (set.indexOf(arr[i]) === -1) {
            set.push(arr[i]);
        }
    }
    return set;
}

//Create an array 

var reverseString = function(s) {
    let aPointer = 0;
    let bPointer = s.length;
    
    while(aPointer <= bPointer){
        let temp = s[aPointer];
        s[aPointer] = s[bPointer];
        s[bPointer] = temp;
        aPointer++;
        bPointer--;
    }
};


var sortedArrayToBST = function(nums) {
    if (nums.length == 0) return null;
    return constructTreeFromArray(nums, 0, nums.length-1);
};

//construct a tree from an array
function constructTreeFromArray(nums, start, end){
    if (start > end) return null;
    let mid = Math.floor((start+end)/2);
    let node = new TreeNode(nums[mid]);
    node.left = constructTreeFromArray(nums, start, mid-1);
    node.right = constructTreeFromArray(nums, mid+1, end);
    return node;
}
function sortedArrayToBST(nums) {
    if (nums.length == 0) return null;

    return constructTreeFromArray(nums, 0, nums.length-1);
}

//

var inorderTraversal = function(root) {
    let current = root;
    let ans = []
    let stack = []
    while(current !== null || !stack.length == 0){
        while(current !== null){
            stack.push(current)
            current = current.left
        }
        current = stack.pop();
        ans.push(current);
        current = current.right;
    }
    return ans
};

var reverseList = function(head) {
    let curr = head;
    let previous = null;
    while(curr !== null){
        let nextNode = curr.next;
        curr.next = previous;
        previous = curr
        curr = nextNode
    }
    return previous
};

var singleNumber = function(nums) {
    let result = 0;
    for( let i = 0; i < nums.length; i++){
        result ^= nums[i];
    }
    return result;
    
};

var fizzBuzz = function(n) {
    let answer = [];
    let j = 1;
    for(let i = 0; i < n; i++){
        if( j%3 == 0 && j%5 == 0) answer [i] = "FizzBuzz";
        else if(j%3 == 0) answer[i] = "Fizz";
        else if(j%5 == 0) answer[i] = "Buzz";
        else answer[i] = j.toString();
        j++;
    }
    return answer;
};

function constructTreeFromArray(nums, left, right){
    if (left > right) return null;
    let midpoint = Math.floor((right+left)/2);
    let node = new TreeNode(nums[midpoint]);
    node.left = constructTreeFromArray(nums, left, midpoint-1);
    node.right = constructTreeFromArray(nums, midpoint+1, right);
    return node;
};

var sortedArrayToBST = function(nums) {
    if (nums.length == 0) return null;
    return constructTreeFromArray(nums, 0, nums.length-1);
};

var generate = function(numRows) {
    let triangle = [[1]];
    if (numRows == 1) return triangle;
    for(let i=1 ; i < numRows ; i++){
        let prev_row =  triangle[i-1];
        let row = [];
        row.push(1);
        
        for(let j = 1; j<i; j++){
            row.push(prev_row[j-1] + prev_row[j]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle
    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let majority = nums[0]
    let count = 1;
    for (let i = 0; i < nums.length ; i ++){
        if(nums[i] == majority) count ++;
        else{
            count--;
            if (count == 0){ // The current element is now the majority
                majority = nums[i];
                count = 1;
            }
        } 
    }
    return majority;
};

function hammingWei


console.log('ana'.charAt(0).charCodeAt() - 'a'.charCodeAt())

s.charAt(i).charCodeAt() - 'a'.charCodeAt()

















var moveZeroes = function(nums) {
    let aP = 0;
    let bP = 0;
    let temp = 0;
    if(nums.length == 0 || nums.length == 1) return;
    while(aP < nums.length){
        if(nums[aP] == 0) aP++;
        else{
            temp = nums[aP];
            nums[aP] = nums[bP];
            nums[bP] = temp;
            aP++;
            bP++;
        }
        
    }
};
moveZeroes([0,1,0,3,12])

/**
 * @param {string} columnTitle
 * @return {number}
 */

 var titleToNumber = function(columnTitle) {
    
};

titleToNumber('AB');

class TreeNode{

}

function pathSum(root, num){
    let sum = 0,
    return traverseTree(root, num, sum);

}
function traverseTree(root, num){
    if(root==null && num == 0) return true;
    if(root==null && num !== 0) {
        setTimeout(3)
        return false;
    }
    sum -= root.value;
    traverseTree(root.left, num, sum);
    traverseTree(root.right, num, sum);
}
class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
}
function oddEven(head){
    if(head == null) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while(even !== null && even.next !== null){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}

var reverseString = function(s) {
    let aPointer = 0;
    let bPointer = s.length-1;
    while(aPointer <= bPointer){
        let temp = s[aPointer];
        s[aPointer] = s[bPointer];
        s[bPointer] = temp;
        aPointer++;
        bPointer--;
    }
};

let input = {date:"25-12-2025"};
let unixDate = input.date.getTime();
console.log(unixDate)

//convert string to date
let date = new Date(unixDate);
console.log(date)

//convert date to string
let dateString = date.toDateString();
console.log(dateString)

//convert date to unix
let unix = date.getTime();
console.log(unix)

//convert unix to date
let dateFromUnix = new Date(unix);
console.log(dateFromUnix)

//convert unix to string
let dateStringFromUnix = dateFromUnix.toDateString();
console.log(dateStringFromUnix)

//convert string to unix
let unixFromString = new Date(dateString).getTime();
console.log(unixFromString)

//convert unix to string
let dateStringFromUnix = new Date(unixFromString).toDateString();
console.log(dateStringFromUnix)

//convert string to unix
let unixFromString = new Date(dateStringFromUnix).getTime();
console.log(unixFromString)

//convert unix to string
let dateStringFromUnix = new Date(unixFromString).toDateString();
console.log(dateStringFromUnix)

//convert string to unix
let unixFromString = new Date(dateStringFromUnix).getTime();
console.log(unixFromString)

//convert unix to string
let dateStringFromUnix = new Date(unixFromString).toDateString();
console.log(dateStringFromUnix)

//convert string to unix
let unixFromString = new Date(dateStringFromUnix).getTime();
console.log(unixFromString)

//convert unix to string
let dateStringFromUnix = new Date(unixFromString).toDateString();
console.log(dateStringFromUnix)

//convert string to unix
let unixFromString = new Date(dateStringFromUnix).getTime();
console.log(unixFromString)

//convert unix to string
let dateStringFromUnix = new Date(unixFromString).toDateString();

