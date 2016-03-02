export default function fetchApi(url) {
    return fetch(`/api/${url}`).then(function(response) {
          if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +  response.status);
                return;
            }
            return response.json();
        }).catch(function(error) {
            console.log(error);
        });
}
