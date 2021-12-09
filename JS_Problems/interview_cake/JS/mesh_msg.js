//Mesh Message

// Given information about active users on the network, find the shortest route for a message from one user (the sender)
// to another (the recipient).
// Return an array of users that make up this route.
// Adjacency List Graph Data Structure -> undirected and unweighted

  function findShortestMsgPath(sender, recipient) {

  };


  class Node {
    constructor(value) {
      this.value = value
      this.edgesList = []
    };

    connect(node) {
      this.edgesList.push(node)
      node.edgesList.push(this)
    }

    getAdjacentNodes(){
      return this.edgesList.map(edge => edge.value)
    }

    isConnected(node) {
      return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1
    }

  };

    class Graph {
      constructor(nodes) {
        this.nodes = [...nodes]
      };

      addToGraph(node) {
        this.nodes.push(node)
      }
    };

    class User {
      constructor(name) {
        this.name = [name]
      }
    }

  const min = new Node("Min");
  const william = new Node("William");
  const jayden = new Node("Jayden");
  const ren = new Node("Ren");
  const amelia = new Node("Amelia");
  const adam = new Node("Adam");
  const miguel = new Node("Miguel");
  const noam = new Node("Noam");
  const omar = new Node("Omar");
  const liam = new Node("Liam");
  const scott = new Node("Scott");
  const nathan = new Node("Nathan")

  // const vertices = ["Min", "William", "Jayden", "Ren", "Amelia", "Adam", "Miguel", "Noam", "Omar"];

  const graph = new Graph(
    [
     min,
     william,
     jayden,
     ren,
     amelia,
     adam,
     miguel,
     noam,
     omar,
     scott,
     nathan
    ]
  );

  min.connect(william)
  min.connect(jayden)
  min.connect(omar)
  // william.connect(min)
  william.connect(noam)
  jayden.connect(amelia)
  // jayden.connect(min)
  jayden.connect(ren)
  jayden.connect(noam)
  // ren.connect(jayden)
  ren.connect(omar)
  amelia.connect(adam)
  amelia.connect(miguel)
  // amelia.connect(jayden)
  // miguel.connect(amelia)
  miguel.connect(adam)
  miguel.connect(liam)
  miguel.connect(nathan)
  noam.connect(nathan)
  // noam.connect(jayden)
  // noam.connect(william)
  // omar.connect(ren)
  // omar.connect(min)
  omar.connect(scott)

  function bfs(graph, root) {
    let nodesLen = {};

  }

  function Queue() {
    collection = [];
    this.print = function() {
      console.log(collection);
    };
    this.enqueue = function(element) {
      collection.push(element)
    };
    this.dequeue = function(element) {
      return collection.shift();
    };
    this.front = function() {
      return collection[0];
    };
    this.size = function() {
      return collection.length;
    };
    this.isEmpty = function() {
      return (collection.length === 0);
    };
  }

  // for (let node of graph.nodes) {
  //   console.log(`Node ${node.value}`)
  //   for (let connectedNode of node.edgesList) {
  //     console.log(`Node ${node.value} is connected to ${connectedNode.value}`)
  //   }
  // }

  // console.log(min.getAdjacentNodes())
  // console.log(min.isConnected(william))


  // const network = {
  //   'Min'     : ['William', 'Jayden', 'Omar'],
  //   'William' : ['Min', 'Noam'],
  //   'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  //   'Ren'     : ['Jayden', 'Omar'],
  //   'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  //   'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  //   'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  //   'Noam'    : ['Nathan', 'Jayden', 'William'],
  //   'Omar'    : ['Ren', 'Min', 'Scott'],
  //   ...
  // };
  //
  // const vertices = ["Min", "William", "Jayden", "Ren", "Amelia", "Adam", "Miguel", "Noam", "Omar"];
  //
  // const adjacency_list = [
  //   ['William', 'Jayden', 'Omar'],
  //   ['Min', 'Noam'],
  //   ['Min', 'Amelia', 'Ren', 'Noam'],
  //   ['Jayden', 'Omar'],
  //   ['Jayden', 'Adam', 'Miguel'],
  //   ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  //   ['Amelia', 'Adam', 'Liam', 'Nathan'],
  //   ['Nathan', 'Jayden', 'William'],
  //   ['Ren', 'Min', 'Scott']
  // ];


//Route for Jayden to Adam
// ['Jayden', 'Amelia', 'Adam']
