const apiKey = 'PiyqZhrZCwcznnRVdkNqXg5T2rQW9v09';

const peticionHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticionHttp
    .then(resp => resp.json())
    .then(({data}) => {
        // console.log(data.images.original.url);
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(err => {
        console.warn(err);
    });

// peticionHttp.then(resp => {
//     console.log(resp);
//     resp.json().then( data => {
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.warn(err);
// });