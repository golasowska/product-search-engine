const elasticsearch = require('elasticsearch');

export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';
export const DISPLAY_CATEGORY = 'DISPLAY_CATEGORY';

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

export function performQuery(values, callback) {
  const value=values.title;
  return function(dispatch) {
    elasticClient.search({
      q: value
    })
    .then(
      function(body) {
        callback()
        dispatch({
          type: DISPLAY_PRODUCTS,
          payload: body.hits.hits
        })
      }
    ).catch(function(error) {
      console.trace(error.message);
    });
  }
}

export function fetchCategory(value) {
  console.log('valiu', value);
  const item = value
  return function(dispatch){
    elasticClient.search({
      body: {
        query: {
          match: {
            tags: item
          }
        }
        }
    })
    .then(
      function(body) {
        dispatch({
          type: DISPLAY_CATEGORY,
          payload: body.hits.hits
        })
      }
    ).catch(function(error){
      console.log(error.message);
    });
  }
}
