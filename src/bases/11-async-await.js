// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('https//:cualquiercosa.com');

//         return promesa;
//     });
// }
        
const getImagenPromesa = () => new Promise(resolve => resolve('https://cualquiercosa.com'));
getImagenPromesa().then(console.log);

//Async Await

const getImagen = async () => {
    return 'https://cualquiercosa.com';
}

// console.log(getImagen());
getImagen().then(res => {
    console.log(res);
});

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//
const getImagenAPI = async () => {
    try {
        const apiKey = 'PiyqZhrZCwcznnRVdkNqXg5T2rQW9v09';
        const respHttp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respHttp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error)        ;
    }
}

getImagenAPI();

//-------------------------------------------------------------------------//
//-------------------------------------------------------------------------//

//**************************** */

// const apiKey = 'PiyqZhrZCwcznnRVdkNqXg5T2rQW9v09';

// const peticionHttp = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticionHttp
//     .then(resp => resp.json())
//     .then(({data}) => {
//         // console.log(data.images.original.url);
//         const { url } = data.images.original;
//         console.log(url);

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch(err => {
//         console.warn(err);
//     });
