The app has been created using React ( with Create React App) and Redux with ElasticSearch as a search engine.

To run the app you will have to clone or download this repository an follow instructions:

1. download and install Java ( http://www.oracle.com/technetwork/java/javase/downloads/index.html )

2. download and extract Elasticsearch ( https://www.elastic.co/downloads/elasticsearch ) ;

3. go to the command line and navigate to the directory of downloaded file and type: 'bin/elasticsearch' and hit Enter  to run the this file

4. To enable CORS, add the following to Elasticsearch's config file:

http.cors:
  enabled: true
  allow-origin: /https?:\/\/localhost(:[0-9]+)?/

5. download and extract  Kibana ( https://www.elastic.co/downloads/kibana ) ; go to the terminal, navigate to the file directory, type: 'bin/kibana' and press Enter to run the file
  (this is goin to start a web server on localhost at port 5601 and try to contact an Elasticsearch cluster on localhost at port 9200)

  You should be able to load Kibana in the browser on localhost at port 5601

6. Go to the browser and in Kibana's Consol create an index (that's the easiest way to do that):

  PUT /product

  (product is the name of index I used in this App)

 7. Add document to the index by importing json file with data:

    - go to the terminal and go to the directory of  test-data.json (which has been attached to the repository )

    - type:

              curl -H 'Content-Type: application/json' -XPOST 'http://localhost:9200/product/default/_bulk?pretty' --data-binary '@test-data.json'

    - press Enter

 8. and finally navigate to the repository direction and use command: 

    npm i

    npm start



    to run the App.
