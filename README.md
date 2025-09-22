# Node.js Demo App

This is a simple Node.js application designed for CI/CD demonstration purposes.

## Prerequisites

- Node.js installed (version 14 or above)
- npm package manager

## Running the App

1. Clone the repository:
   git clone https://github.com/Shobana074/nodejs-demo-app.git
2. Navigate into the project folder:
   cd nodejs-demo-app
3. Install dependencies:
   npm install
4. Start the server:
   npm start
5. Open your browser and go to `http://localhost:3000`

## Docker Support

You can also run the application inside a Docker container:
docker build -t nodejs-demo-app .
docker run -p 3000:3000 nodejs-demo-app

## License

This project is licensed under the MIT License.
