window.addEventListener("load",() => {
    console.log(1);
    let longitude;
    let latitude;

    let degree = document.querySelector('.degree');

    let temperatureDescription = document.querySelector('.temperature-description');

    let locationTimezone = document.querySelector('.location-timezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;

            const apiKey = "ccbbab39f7793f909fa2959858c9bc48";

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

            fetch(api).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);

                const {temp} = data.main;

                const {description} = data.weather[0]

                const {name} = data;

                const {main} = data.weather[0];
 
                degree.textContent = temp;

                temperatureDescription.textContent = description;

                locationTimezone.textContent = name;

                // setIcons
                setIcons(main,document.querySelector(".description"));
                
            })
        })
    }

    function setIcons(main, iconID)
    {
        const skycons = new Skycons({color : "black"});
        let currentIcon = main.toUpperCase();
        // console.log(typeof currentIcon);
        // const index = currentIcon.length-1;
        // console.log(index);
        currentIcon = currentIcon.replace('S','Y');
        console.log(currentIcon);
        skycons.play();
        return skycons.set(iconID,Skycons[currentIcon]);
    }

})

