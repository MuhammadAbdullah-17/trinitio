
# Name  : Talha nawaz
# Roll Number: 213


class Node:
    
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
 
 
def printDoublyLinkedList(head):
    while head:
        print(head.data, end=' —> ')
        head = head.right
    print('None')
 
 
def push(root, head):
    
    root.right = head
 
   
    if head:
        head.left = root
 
    
    head = root
    return head
 
 
def convertBSTtoDLL(root, head):
 
    
    if root is None:
        return head
 
    
    head = convertBSTtoDLL(root.right, head)
 
    
    head = push(root, head)
 
    
    head = convertBSTtoDLL(root.left, head)
 
    return head
 
 

def mergeDDLs(a, b):
 
    
    if a is None:
        return b
 
    
    if b is None:
        return a
 
    
    if a.data < b.data:
        a.right = mergeDDLs(a.right, b)
        a.right.left = a
        return a
 
    
    else:
        b.right = mergeDDLs(a, b.right)
        b.right.left = b
        return b
 
 

def merge(a, b):
 

    first = convertBSTtoDLL(a, None)
 
    
    second = convertBSTtoDLL(b, None)
 
    return mergeDDLs(first, second)
 
 

 
   
 
a = Node(20)
a.left = Node(10)
a.right = Node(30)
a.right.left = Node(25)
a.right.right = Node(100)
 

b = Node(50)
b.left = Node(5)
b.right = Node(70)
 
    
root = merge(a, b)
printDoublyLinkedList(root)