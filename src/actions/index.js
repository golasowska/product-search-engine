const elasticsearch = require('elasticsearch');

export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';
export const DISPLAY_CATEGORY = 'DISPLAY_CATEGORY';

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

export function performQuery(values,from) {
  const value=values.title;
  const pgNum = from;
  return function(dispatch) {
    elasticClient.search({
      body :{
        'from' : pgNum,
        'size' : 5,
        query:{
          match:{
            name: value
        }
      }
    }
    })
    .then(
      function(body) {
        const data = {data: body.hits, name: value}
        dispatch({
          type: DISPLAY_PRODUCTS,
          payload: data
        })
      }
    ).catch(function(error) {
      console.trace(error.message);
    });
  }
}

export function fetchCategory(value, from) {
  const item = value;
  const pgNum = from;
  return function(dispatch){
    elasticClient.search({
      body: {
        'from' : pgNum,
        'size' : 5,
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
          payload: body.hits
        })
      }
    ).catch(function(error){
      console.log(error.message);
    });
  }
}
