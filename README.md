# gendersender

We recommend installing the required libraries in a venv/conda environment, it is however not necessary to do so. 

You will need two terminal windows, one two run the backend and one to run the frontend. 

To run the backend:

1. Install FastAPI: `pip install fastapi`
2. Install Uvicorn: `pip install "uvicorn[standard]"`
3. Navigate to the backend folder 
4. Run  `uvicorn main:app --reload`, you will know when the backend is running when you see `Application startup complete` in the terminal.

To run the frontend:

1. Download the appropriate Node.js installer for laptop using https://nodejs.org/en/download/ 
2. Follow the directions to install npm on your laptop 
3. Install React: `npm install -g create-react-app`
4. Install axios: `npm install axios`
5. Install @mui/material: `npm install @mui/material`
6. Install @mui/icons-material: `npm install @mui/icons-material`
7. Install react-router-dom: `react-router-dom`
8. Run `npm start` to start up the project, you will know when the frontend is running when a browser opens up for you adn you can se the website.