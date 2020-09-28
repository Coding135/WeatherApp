const key = 'b59a05ff81388d0926994d5fab434842';

// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Cary&appid=b59a05ff81388d0926994d5fab434842';

// fetch(baseURL)
//  .then((data) => { console.log('response', data.json()) })
//  .catch((error) => {
//      console.log(error);
//  });

const requestCity = async (city) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //Make Fetch Call (Promise Call)
    const response = await fetch(baseURL + query);

    //Promise Data
    const data = await response.json();
    return data;

}
