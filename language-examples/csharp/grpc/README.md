# README #

### Calling Vectara API via gRPC ###

The Vectara APIs are divided into three parts:

* Indexing (Or Ingesting)
* Serving (Or Querying)
* Admin

This logical separation requires an API user to connect to them with different parameters.
This example will give an idea of what parameters to pass and what needs to be done in 
order to be able to successfully call these APIs.

### Authentication

There are two supported authentication methods in Vectara. 
Please see the details here: [Authentication](../../../README.md).

### Running the example
> This example is built with dotnet core sdk 7.0.

Following are the steps that need to be done to run this example:

1. Clone the repo (Please see details here: [cloning guidelines](../../../README.md)).
2. cd to `language-examples/csharp/common` directory and run `dotnet build common.csproj`. This will build the authentication
   library and will make it available for subsequent projects.
3. cd to `language-examples/csharp/grpc` directory.
4. Run the `download_base_protos.sh` script on terminal like following:

    `sh download_base_protos.sh`
    
    This script downloads google's base protos and stores them in `/tmp/protos` directory.

    > This script is built for a linux OS (preferably Debian-based). If you are running on windows, then you will have to modify it to run with a terminal like Powershell etc.    

5. Compile and run the dotnet application and pass parameters like the following:

    a. If you are using OAuth2 as the authentication method:

      ```shell
        dotnet build grpc.csproj -p:StartupObject=VectaraExampleGrpc.GrpcBasicExample

        dotnet run \
          --customer-id ${YOUR_CUSTOMER_ID} \
          --corpus-id ${YOUR_CORPUS_ID} \
          --auth-url "${YOUR_AUTH_URL}" \
          --app-client-id "${YOUR_APPCLIENT_ID}" \
          --app-client-secret "${YOUR_APPCLIENT_SECRET}"
      ```

    b. If you are using an API key as the authentication method:

      ```shell
        dotnet build grpc.csproj -p:StartupObject=VectaraExampleGrpc.GrpcApiKeyQueries

        dotnet run \
          --customer-id ${YOUR_CUSTOMER_ID} \
          --corpus-id ${YOUR_CORPUS_ID} \
          --api-key "${YOUR_API_KEY}"
      ```


> Please note the double quotes in the arguments, which indicate a string argument.

### Functionality exercised

The examples in this directory exercise the following functionality:

1. Creating a corpus using OAuth.
2. Indexing data into a corpus using OAuth.
3. Querying a corpus using both OAuth and API Keys.
