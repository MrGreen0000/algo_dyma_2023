import { LinkedList, Node } from "./linked_list.mjs";

const ll = new LinkedList();

ll.addFirst(55);
ll.addFirst(1);
ll.addFirst(4);
ll.addFirst(6);
ll.print();

function insertion_sort(ll) {
  let current = ll.head;
  if (!current || !current.next) {
    return;
  } else {
    const sortedList = new LinkedList();
    sortedList.addFirst(current.value);
    current = current.next;
    while (current) {
      let sortedHead = sortedList.head;
      while (sortedHead.next && sortedHead.next.value < current.value) {
        sortedHead = sortedHead.next;
      }
      if (sortedHead.value > current.value) {
        sortedList.head = new Node(current.value, sortedHead);
      } else {
        sortedHead.next = new Node(current.value, sortedHead.next);
      }

      current = current.next;
    }
    ll.head = sortedList.head;
  }
}

insertion_sort(ll);

ll.print();
