//
class Node {
	constructor(data, next = null) {
		  this.data = data;
		  this.next = next;
	}
};

class LinkedList
{
	constructor() {
		this.head = null;
		this.size = 0;
	};

		insertFirst(data)
		{
			this.head = new Node(data, this.head);
			this.size++;
		};

			printListData()
			{
				let current = this.head;
				while(current) {
					console.log(current.data);
					current = current.next;
				};
			};

				insertLast(data)
				{
					let node = new Node(data);
					let current;

					if(!this.head){
						this.head = node;
					} else {
							current = this.head;
							while(current.next) {
								current = current.next;
						  }
								current.next = node;
						};
						this.size++
				 };

};

const ll = new LinkedList()
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertLast(8);

ll.printListData();
