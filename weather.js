//button action set-up
    const targetButton = document.getElementById('search-btn');
    const actionButton = targetButton.addEventListener('click', function () {
        //search bar value to display
        const targetSearchBar = document.getElementById('search-bar').value;
        document.getElementById('city-name').innerText = targetSearchBar;

        searchWeather(targetSearchBar);
    })

    function searchWeather(city) {
        const query = city;
        const unit = 'metric';
        const apiKey = '5c407c316d7ba254c8c91d0954f80ae3'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${query}&units=${unit}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {

                document.getElementById('tempData').innerText = data.main.temp;
                document.getElementById('lead').innerText = data.weather[0].main;
                const weatherIcon = data.weather[0].icon;
                const imageUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                document.getElementById('imageUrl').src = imageUrl;
            });
    };
