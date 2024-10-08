export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
      const defaultHeader = {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2Y4OWMwNDRlNzdmNTY0MDAwYWRjNzk4M2E4MDBmOCIsInN1YiI6IjY0ZmRjZDBmZGI0ZWQ2MTAzNjNkY2U1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sc8lOoDxUQWdToGl-qJ2X36i22Wuj-zsqnBlUGfYN1I",
      };
  
      const controller = new AbortController();
      options.signal = controller.signal;
  
      options.method = options.method || "GET";
      options.headers = options.headers
        ? { ...defaultHeader, ...options.headers }
        : defaultHeader;
  
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
  
      //console.log(options);
      setTimeout(() => controller.abort(), 3000);
  
      return fetch(endpoint, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
    };
  
    const get = (url, options = {}) => customFetch(url, options);
  
    /*ESTO ES PARA UN CRUD! */
    
    /*const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };*/
  
    return {
      get
    };
  };