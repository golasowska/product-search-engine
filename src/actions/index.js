const elasticsearch = require('elasticsearch');

export const DISPLAY_PRODUCTS = 'DISPLAY_PRODUCTS';
export const DISPLAY_CATEGORY = 'DISPLAY_CATEGORY';

const elasticClient = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

export function performQuery(values,selected_page) {
  const value=values.title;
  const page_size= 5;
  const page_number = Number(selected_page);
  const from = (page_size * page_number);
  return function(dispatch) {
    elasticClient.search({
      size : page_size,
      from : from,
      body: {
        query: {
          multi_match: {
            query: value,
            fields: ['tags', 'name', 'description']
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

export function fetchCategory(value, selected_page) {
  const item = value;
  const page_size= 5;
  const page_number = Number(selected_page);
  const from = (page_size * page_number);
  return function(dispatch){
    elasticClient.search({
      from : from,
      size : page_size,
      body: {
        query: {
          match: {
            tags: item
          }
        },
        sort: [
          {'price': 'asc'}
        ]
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

export function sortByPrice (value, selected_page) {
  const item = value;
  const page_size = 5;
  const page_number = Number(selected_page);
  const from = (page_size * page_number);
  return function(dispatch) {
    elasticClient.search({
      from: from,
      size: page_size,
      body:{
        query:{
          match: {
            tags: item
          }
        },
        sort: [
          {'price': 'desc'}
        ]
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
