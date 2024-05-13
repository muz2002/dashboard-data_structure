import Dashboard from "./pages/dashboard";
import Array from "./layouts/array";
import Searching from "./layouts/searching";
import Sorting from "./layouts/sorting";
import Stack from "./layouts/stack";
import Queue from "./layouts/queue";
import LinkedList from "./layouts/linkList";
import Hash from "./layouts/hash";
import Tree from "./layouts/tree";
import BinarySearchTree from "./layouts/binarySearchTree";
import Graph from "./layouts/graph";

const routes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/array",
        element: <Array />
    },
    {
        path: "/searching",
        element: <Searching />
    },
    {
        path: "/sorting",
        element: <Sorting />
    },
    {
        path: "/stack",
        element: <Stack />
    },
    {
        path: "/queue",
        element: <Queue />
    },
    {
        path: "/linked-list",
        element: <LinkedList />
    },
    {
        path: "/hash",
        element: <Hash />
    },
    {
        path: "/tree",
        element: <Tree />
    },
    {
        path: "/binary-search-tree",
        element: <BinarySearchTree />
    },
    {
        path: "/graph",
        element: <Graph />
    }
];

export default routes;
