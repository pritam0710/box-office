import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { getApi } from '../misc/config';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { show: action.show, isloading: false, error: action.error };
    }

    case 'FETCH_ERROR': {
      return { ...prevState, isloading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isLoading: true,
  error: null,
};
const Show = () => {
  const { id } = useParams();

  const [{ show, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [show, setShow] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    getApi(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(res => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: res });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_ERROR', error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);
  console.log('show', show);

  if (isLoading) {
    return <div>Data is Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return <div>This is Show Page;</div>;
};

export default Show;
