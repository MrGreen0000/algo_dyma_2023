import { Queue } from "./queue_ll.mjs";

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q);

function reverseQueueRec(queue) {
  if (queue.isEmpty()) {
    return;
  }
  const value = queue.dequeue();
  reverseQueueRec(queue);
  queue.enqueue(value);
}

reverseQueueRec(q);

console.log(q);
