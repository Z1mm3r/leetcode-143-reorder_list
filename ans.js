/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //First thought -> create an array that stores linked lists references
    //This uses memory creating the array, but is relatively quick. O(n) space  and O(n + n/2) => O(n) runtime

    let list = [];

    //First pass
    let curr = head;
    list.push(curr);
    while(curr.next){
        list.push(curr.next);
        curr = curr.next;
    }

    //Now we can work quickly.
    let pivot = Math.floor(list.length / 2);
    for(let i = 0; i < pivot; i++){
        let j = list.length - (i + 1);
        list[i].next = list[j];
        list[j].next = list[i+1];
    }

    //Stop the list from cycling
    list[pivot].next = null;
   
    return head;
};
