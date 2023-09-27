import { LinkedList, Node } from "./linked_list.mjs";

const ll = new LinkedList();

ll.addFirst(1);
ll.addFirst(4);
ll.addFirst(6);
ll.print();

function reverseList(ll) {
  let current = ll.head;
  if (!current || !current.next) {
    return;
  } else {
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    ll.head = prev;
  }
}

reverseList(ll);

ll.print();
