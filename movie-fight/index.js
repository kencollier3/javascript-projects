const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '6b680566',
            s: 'avengers'
        }
    });
    console.log(response.data);
    
};
fetchData();
