import { call, put } from 'redux-saga/effects';
import { doFetchAddCrud } from '../actions/crud';
import { fetchCrud, updateCrud, newCrud, deleteCrud } from '../api/crud';

function* FetchCrud(action) {
  const { query } = action;  
  const result = yield call(fetchCrud, query);  
  yield put(doFetchAddCrud(result));
}

function* UpdateCrud(action) {  
  
  const { query } = action;
  const result = yield call(updateCrud, query);
  console.log('Updated CRUD: ' + result)
  
}
function* NewCrud(action) {
  
  const { query } = action;
  const result = yield call(newCrud, query);
  console.log('New CRUD: ' + result)
}
function* DeleteCrud(action) {
    
    const { query } = action;
    const result = yield call(deleteCrud, query)
    console.log('New CRUD: ' + result)
}


export {
  FetchCrud, UpdateCrud, NewCrud, DeleteCrud
};