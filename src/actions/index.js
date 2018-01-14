const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

export function performQuery(values) {
  const value=values.title;
  return function(dispatch) {
    elasticClient.search({
      q: value
    })
    .then(
      function(body) {
        dispatch({
        payload: body.hits.hits
        })
      }
    ).catch(function(error) {
      console.trace(error.message);
    });
  }
}
