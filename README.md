How to run this project?

1º Step: install azure-functions-core-tools, see more in the follow link: https://github.com/Azure/azure-functions-core-tools#installing

2º Step: install all dependencies running **npm i**

3º Step: run **npm start** script or **func start** command.

After all these steps, make a request with the follow curl:

curl --location 'http://localhost:{PORT}/api/products'
