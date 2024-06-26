class ListNode<T> {
    constructor(
        public data: T,
        public next?: ListNode<T>
    ) { }
}

class SinglyLinkedList<T> {
    private head?: ListNode<T>
    private tail?: ListNode<T>
    private length: number

    constructor() {
        this.head = undefined
        this.tail = undefined
        this.length = 0
    }

    isEmpty(): boolean {
        return !this.head
    }

    push(data: T): void {
        const node: ListNode<T> = new ListNode<T>(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
    }
}

// Insert the data and log.
let singlyLinkedList = new SinglyLinkedList<number>();
singlyLinkedList.push(1);
singlyLinkedList.push(3);
console.log(singlyLinkedList);
