# Deployed link of the project: https://vectorshift-ten.vercel.app/

# Walkthrough of my approach

## Part 4

- I started with Part 4, which was backend integration in which when the user click on submit button, we get all nodes and edges from the React Flow store and send them to http://localhost:8000/pipelines/parse (used this 8000 port to run backend) and backend returns result in terms of JSON format.

- Since this project already has a store.js file, I imported nodes and edges from store to submit.js.

- Then we updated the main.py (backend file) to get the nodes and edges and to check the DAG, then I restarted the backend and added 2–3 nodes, connected some edges and clicked Submit button.

- Added CORSMiddleware in the backend file to allow frontend and backend run together.

## Part 3

- Then I started with Part 3, where I made the text node size dynamic, such that if the user add multiple lines, the size of text node increases and added {{variable}} detection with dynamic left-side Handles, and updated store with updateNodeField().

- Then I tested using useStore.getState().nodes, useStore.getState().edges, useStore.getState().nodeIDs on browser console to test the nodes, edges and nodeIDs.

- I also created a sample_payload.json in the backend folder to run a quick test and tested it using:
  curl -X POST http://localhost:8000/pipelines/parse ^
  -H "Content-Type: application/json" ^
  -d "@sample_payload.json"

## Part 1

- Then I started with Part 1 where I created a baseNode.js which has wrapper for layout + consistent design and nodeStyle.js for consistent styling and then refactored input, llm, output and text node.

- Then I build conditional, constant, format, logger, math with simple logic following same abstraction format.

## Part 2

- Made some global UI changes by updating index.css.

- Other UI changes by making ui.css file and importing it in App.js
