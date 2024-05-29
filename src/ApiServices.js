const URL = import.meta.env.VITE_DOG_GET_ALL_BREEDS_URL

export function fetchBreeds(){
      return fetch(`${URL}`).then((response) => {
        return response.json();
      });
}