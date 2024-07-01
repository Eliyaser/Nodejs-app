# Node.js App for Testing Docker Image

This repository contains a simple Node.js application to test Docker image creation and deployment.

## Getting Started

Follow these steps to get the application up and running.

### Prerequisites

- Docker installed on your machine
- Node.js installed on your machine

### Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

1. **Start the application**:
    ```bash
    node app.js
    ```

2. **Access the application**:

    The application will be accessible at `http://localhost:3000`.

### Running with Docker

1. **Build the Docker image**:
    ```bash
    docker build -t nodejs-app .
    ```

2. **Run the Docker container**:
    ```bash
    docker run -p 3000:3000 nodejs-app
    ```

3. **Access the application**:

    The application will be accessible at `http://localhost:3000`.

### Notes

- Ensure that port `3000` is not being used by another application before running this app.
