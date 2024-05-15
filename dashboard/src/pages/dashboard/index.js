import React from "react";
import Card from "../../components/card";
import SectionWrapper from "../../components/sectionWrapper";

function Dashboard() {

  return (
    <SectionWrapper>
      <a href="http://127.0.0.1:5500/DSA/QUEUE/queue.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Queue"
          description="
          A queue is a data structure that follows the principle of first-in-first-out (FIFO), where the first element added to the queue is the first one to be removed."
        />
      </a>
      <a href="http://127.0.0.1:5500/LinkedList/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Linked List"
          description="A linked list is a sequence of elements connected by pointers, facilitating efficient insertion and deletion operations. "
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/TREE/BST/bst.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Binary Search Tree"
          description="A binary search tree is a hierarchical structure for efficient searching, insertion, and deletion, maintaining order among its elements."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/TREE/AVL/avl.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="AVL Tree"
          description="
          An AVL tree is a self-balancing binary search tree, ensuring efficient operations with logarithmic time complexity by maintaining balance between its subtrees. "
        />
      </a>
     
      <a href="http://127.0.0.1:5500/DSA/Binary%20Search/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Binary Search"
          description="
          Binary search quickly finds a target in a sorted list by repeatedly halving the search space until the target is located, ensuring logarithmic time complexity."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/Bubble_sort/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Bubble Sort"
          description="
          Bubble sort repeatedly compares adjacent elements in a list and swaps them if they are in the wrong order, gradually sorting the list with a quadratic time complexity."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/Infix%20to%20Postfix/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Infix to Postfix"
          description="
          Infix to postfix conversion transforms an infix expression into a postfix expression, using a stack to manage operators and parentheses while preserving the correct order of operations."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/Insertion_sort/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Insertion Sort"
          description="
          Insertion sort iteratively builds a sorted list by inserting elements from the unsorted portion into their correct position, with quadratic time complexity."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/Linear%20Search/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Linear Search"
          description="
          Linear search sequentially checks each element in a list until finding the target value or traversing the entire list, with linear time complexity."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/Merge_sort/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Merge Sort"
          description="
          Merge sort recursively divides the list, sorts the smaller sublists, and merges them back together in sorted order, guaranteeing efficient sorting with a time complexity of O(n log n)."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/Quick_sort/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Quick Sort"
          description="
          Quick sort partitions with a pivot, recursively sorts, and combines arrays for efficient sorting, with average O(n log n) and worst-case O(n^2) time complexities."
        />
      </a>
      <a href="http://127.0.0.1:5500/DSA/stack%20visualizer/index.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Stack"
          description="
          A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where elements are added and removed from the top, enabling efficient push and pop operations."
        />
      </a>
      <a href="https://www.cs.usfca.edu/~galles/visualization/Dijkstra.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Dijkstra"
          description="
            
          Dijkstra's algorithm finds the shortest path from a single source node to all other nodes in a weighted graph."
        />
      </a>
      <a href="https://www.cs.usfca.edu/~galles/visualization/Prim.html" target="_blank" rel="noopener noreferrer"> {/* Anchor tag */}
        <Card
          title="Prim's Algorithm"
          description="
            
          The Prism algorithm is a graph-based algorithm used for finding the minimum spanning tree in a weighted graph."
        />
      </a>
    </SectionWrapper>
  );
}

export default Dashboard;
