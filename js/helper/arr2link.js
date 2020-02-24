function ListNode(val) {
  this.val = val;
  this.next = null;
}

const arr2link = (arr) => {
  const head = { next: null };
  let cur = head;

  arr.forEach((e) => {
    cur.next = new ListNode(e);
    cur = cur.next;
  });
  return head.next;
};

const link2arr = (link) => {
  const arr = [];
  while (link) {
    arr.push(link.val);
    link = link.next;
  }
  return arr;
};

module.exports = {
  arr2link,
  link2arr,
};
