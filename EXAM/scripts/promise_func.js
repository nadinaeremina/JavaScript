const body=$("body");

// функция, принимающая город и возвращающая данные в формате 'JSON' (Promise)
function getWeather(url)
{
    const card=$('#card');

    if (card)
    {
        card.remove();
    }

    const errorMsg="Incorrect city!";
    return new Promise((resolve, reject)=>
    {
        const getWeatherRequest=new XMLHttpRequest();
        getWeatherRequest.open("GET", url);
        // 'onload' - в 'resolve'
        getWeatherRequest.onload=()=>{
            if (getWeatherRequest.status==200)
            {
                resolve(getWeatherRequest.responseText);
            }
            else{
                reject(new Error(errorMsg)) // throw new Exception("text");
            }
        }
        // это - 'reject'
        getWeatherRequest.onerror=()=>{
            reject(new Error(errorMsg));
        }

        getWeatherRequest.send();
    });
}

// функция, принимающая данные по 'Promise' и возвращающая обьект из формата 'JSON' (Promise)
function parseWeather(dataJSON)
{
  return new Promise((resolve, reject)=>{
        // если он пустой
        if(!dataJSON)
        {
            reject(new Error("No data to parse!"));
        }
        else 
        {
            // парсим строку
            resolve(JSON.parse(dataJSON));
        }
    })
}

// функция, принимающая данные в в виде обьекта и распределяющая их по тегам в коде 'html' для отображения
function showWeather(weatherobject)
{
    const body=$("body");
    let new_element=$('<div></div>');
    new_element.attr('id', "card");

    let today=new Date();

    let day=today.getDate();
    let month=today.getMonth()+1;
    let year=today.getFullYear()%100;

    let html=`
        <div id="first_div">
            <div>
                <div id="first_div_current_weather">
                    <div>CURRENT WEATHER</div>
                    <div id="date">${day}.${month}.${year}</div>
                </div>
            </div>
            <div id="first_div_cards">
                <div id="first_div_cards_first">
                    <image id="icon" src=
                    `
                    if (weatherobject.weather[0].main=="Clear")
                    {
                        html+="images/icons/01d@2x.png";
                    }
                    else if(weatherobject.weather[0].main=="Clouds")
                    {
                        html+="images/icons/02d@2x.png";
                    }
                    else if(weatherobject.weather[0].main=="Drizzle")
                    {
                        html+="images/icons/09d@2x.png";
                    }
                    else if(weatherobject.weather[0].main=="Rain")
                    {
                        html+="images/icons/10d@2x.png";
                    }
                    else if(weatherobject.weather[0].main=="Thunderstorm")
                    {
                        html+="images/icons/11d@2x.png";
                    }
                    else if(weatherobject.weather[0].main=="Snow")
                    {
                        html+="images/icons/13d@2x.png";
                    }

                    html+=`
                             alt="srg">
                    <div id="weather_desc">${weatherobject.weather[0].main}</div>
                </div>
                <div id="first_div_cards_second">
                    <div id="first_div_cards_second_temp">${Math.round(weatherobject.main.temp-272.15)}°С</div>
                    <div>Real Feel: ${Math.round(weatherobject.main.feels_like-272.15)}°С</div>
                </div>
                <div id="first_div_cards_third">
                    <div id="sunrise">
                        <div>Sunrise:</div>
                        <div id="value_for_sunrise">${convertToTime(weatherobject.sys.sunrise)}</div>
                    </div>
                    <div id="sunset">
                        <div>Sunset:</div>
                        <div id="value_for_sunset">${convertToTime(weatherobject.sys.sunset)}</div>
                    </div>
                </div>
            </div>
        </div> `;

    new_element.html(html);
    body.append(new_element);
}

// функция для создания элемента 'div', содержащего внутри себя информацию о погодных условиях в течение заданного дня
function createWeather(weatherobject, number){

    let html=`
            <div id="hourly">HOURLY</div>
            <div id="div_grid">
                <div id="second_div_today">`

                if (number==0)
                {
                    html+='TODAY';
                }
                else if (number==8)
                {
                    html+=getDay_of_Week(1);
                }
                else if (number==16)
                {
                    html+=getDay_of_Week(2);
                }
                else if (number==24)
                {
                    html+=getDay_of_Week(3);
                }
                else if (number==32)
                {
                    html+=getDay_of_Week(4);
                }

                html+=`</div>
                <div id="second_div_forecast">FORECAST</div>
                <div id="second_div_temp">Temp(°С)</div>
                <div id="second_div_reel_feel">RealFeel</div>
                <div id="second_div_wind">Wind(km/h)</div>

                <div id="second_div_today_first">${getHours_and_Minutes(weatherobject.list[number].dt_txt)}</div>
                <div id="second_div_today_second">${getHours_and_Minutes(weatherobject.list[number+1].dt_txt)}</div>
                <div id="second_div_today_third">${getHours_and_Minutes(weatherobject.list[number+2].dt_txt)}</div>
                <div id="second_div_today_fourth">${getHours_and_Minutes(weatherobject.list[number+3].dt_txt)}</div>
                <div id="second_div_today_fifth">${getHours_and_Minutes(weatherobject.list[number+4].dt_txt)}</div>
                <div id="second_div_today_sixth">${getHours_and_Minutes(weatherobject.list[number+5].dt_txt)}</div>

                <img id="second_div_img_first" src="${knowWeather(weatherobject.list[number].weather[0].main)}" alt="none">
                <img id="second_div_img_second" src="${knowWeather(weatherobject.list[number+1].weather[0].main)}" alt="none">
                <img id="second_div_img_third" src="${knowWeather(weatherobject.list[number+2].weather[0].main)}" alt="none">
                <img id="second_div_img_fourth" src="${knowWeather(weatherobject.list[number+3].weather[0].main)}" alt="none">
                <img id="second_div_img_fifth" src="${knowWeather(weatherobject.list[number+4].weather[0].main)}" alt="none">
                <img id="second_div_img_sixth" src="${knowWeather(weatherobject.list[number+5].weather[0].main)}" alt="none">

                <div id="second_div_forecast_first">${weatherobject.list[number].weather[0].main}</div>
                <div id="second_div_forecast_second">${weatherobject.list[number+1].weather[0].main}</div>
                <div id="second_div_forecast_third">${weatherobject.list[number+2].weather[0].main}</div>
                <div id="second_div_forecast_fourth">${weatherobject.list[number+3].weather[0].main}</div>
                <div id="second_div_forecast_fifth">${weatherobject.list[number+4].weather[0].main}</div>
                <div id="second_div_forecast_sixth">${weatherobject.list[number+5].weather[0].main}</div>

                <div id="second_div_temp_first">${Math.round(weatherobject.list[number].main.temp-272.15)}°С</div>
                <div id="second_div_temp_second">${Math.round(weatherobject.list[number+1].main.temp-272.15)}°С</div>
                <div id="second_div_temp_third">${Math.round(weatherobject.list[number+2].main.temp-272.15)}°С</div>
                <div id="second_div_temp_fourth">${Math.round(weatherobject.list[number+3].main.temp-272.15)}°С</div>
                <div id="second_div_temp_fifth">${Math.round(weatherobject.list[number+4].main.temp-272.15)}°С</div>
                <div id="second_div_temp_sixth">${Math.round(weatherobject.list[number+5].main.temp-272.15)}°С</div>

                <div id="second_div_reel_first">${Math.round(weatherobject.list[number].main.feels_like-272.15)}°С</div>
                <div id="second_div_reel_second">${Math.round(weatherobject.list[number+1].main.feels_like-272.15)}°С</div>
                <div id="second_div_reel_third">${Math.round(weatherobject.list[number+2].main.feels_like-272.15)}°С</div>
                <div id="second_div_reel_fourth">${Math.round(weatherobject.list[number+3].main.feels_like-272.15)}°С</div>
                <div id="second_div_reel_fifth">${Math.round(weatherobject.list[number+4].main.feels_like-272.15)}°С</div>
                <div id="second_div_reel_sixth">${Math.round(weatherobject.list[number+5].main.feels_like-272.15)}°С</div>

                <div id="second_div_wind_first">${weatherobject.list[number].wind.speed}</div>
                <div id="second_div_wind_second">${weatherobject.list[number+1].wind.speed}</div>
                <div id="second_div_wind_third">${weatherobject.list[number+2].wind.speed}</div>
                <div id="second_div_wind_fourth">${weatherobject.list[number+3].wind.speed}</div>
                <div id="second_div_wind_fifth">${weatherobject.list[number+4].wind.speed}</div>
                <div id="second_div_wind_sixth">${weatherobject.list[number+5].wind.speed}</div>
            </div>`;

    return html;
}

// функция для создания элемента 'div' и добавления его в документ
function show_allWeather(weatherobject)
{
    const card=$('#card');
    let new_element=$('<div></div>');
    new_element.attr('id', "second_div");
    new_element.html(createWeather(weatherobject, 0));
    card.append(new_element);
}


// функция для отображения погодных условий на несколько дней
function show_five_day_Weather(weatherobject) {

    const card=$('#card');

    if (card)
    {
        card.remove();
    }

    let new_card=$('<div></div>');
    new_card.attr('id', "card");

    let html=`
    <div id="five_day_forecast">
        <div id="four_days_main">
            <div class="four_days today_card">
                <div class="four_days_div_title">
                    <div class="four_days_title">TODAY</div>
                    <div class="month_and_day">${getMonth_and_Day(0)}</div>
                </div>
                <div class="four_days_div_img">
                    <img class="four_days_img" src="${knowWeather(weatherobject.list[0].weather[0].main)}">
                </div>
                <div class="four_days_div_title">
                    <div class="four_days_degree">${Math.round(weatherobject.list[0].main.temp-272.15)}°С</div>
                    <div>${weatherobject.list[0].weather[0].description}</div>
                </div>
            </div>
            <div class="four_days tomorrow_card">
                <div class="four_days_div_title">
                    <div class="four_days_title">${getDay_of_Week(1)}</div>
                    <div class="month_and_day">${getMonth_and_Day(1)}</div>
                </div>
                <div class="four_days_div_img">
                    <img class="four_days_img" src="${knowWeather(weatherobject.list[8].weather[0].main)}">
                </div>
                <div class="four_days_div_title">
                    <div class="four_days_degree">${Math.round(weatherobject.list[8].main.temp-272.15)}°С</div>
                    <div>${weatherobject.list[8].weather[0].description}</div>
                </div>
            </div>
            <div class="four_days two_day_forward">
                <div class="four_days_div_title">
                    <div class="four_days_title">${getDay_of_Week(2)}</div>
                    <div class="month_and_day">${getMonth_and_Day(2)}</div>
                </div>
                <div class="four_days_div_img">
                    <img class="four_days_img" src="${knowWeather(weatherobject.list[16].weather[0].main)}">
                </div>
                <div class="four_days_div_title">
                    <div class="four_days_degree">${Math.round(weatherobject.list[16].main.temp-272.15)}°С</div>
                    <div>${weatherobject.list[16].weather[0].description}</div>
                </div>
            </div>
            <div class="four_days three_day_forward">
                <div class="four_days_div_title">
                    <div class="four_days_title">${getDay_of_Week(3)}</div>
                    <div class="month_and_day">${getMonth_and_Day(3)}</div>
                </div>
                <div class="four_days_div_img">
                    <img class="four_days_img" src="${knowWeather(weatherobject.list[24].weather[0].main)}">
                </div>
                <div class="four_days_div_title">
                    <div class="four_days_degree">${Math.round(weatherobject.list[24].main.temp-272.15)}°С</div>
                    <div>${weatherobject.list[24].weather[0].description}</div>
                </div>
            </div>
            <div class="four_days four_day_forward">
                <div class="four_days_div_title">
                    <div class="four_days_title">${getDay_of_Week(4)}</div>
                    <div class="month_and_day">${getMonth_and_Day(4)}</div>
                </div>
                <div class="four_days_div_img">
                    <img class="four_days_img" src="${knowWeather(weatherobject.list[32].weather[0].main)}">
                </div>
                <div class="four_days_div_title">
                    <div class="four_days_degree">${Math.round(weatherobject.list[32].main.temp-272.15)}°С</div>
                    <div>${weatherobject.list[32].weather[0].description}</div>
                </div>
            </div>
        </div>
    </div>`;

    new_card.html(html);
    body.append(new_card);

    let today_card=$('.today_card');
    let tomorrow_card=$('.tomorrow_card');
    let two_day_forward=$('.two_day_forward');
    let three_day_forward=$('.three_day_forward');
    let four_day_forward=$('.four_day_forward');

today_card.click(()=>{

    check_is();

    let new_element=$('<div></div>');
    new_element.attr('id', "second_div");
    new_element.html(createWeather(weatherobject, 0));
    let parent=$('#five_day_forecast');
    parent.append(new_element);
});

tomorrow_card.click(()=>{

    check_is();

    let new_element=$('<div></div>');
    new_element.attr('id', "second_div");
    new_element.html(createWeather(weatherobject, 8));
    let parent=$('#five_day_forecast');
    parent.append(new_element);
});

two_day_forward.click(()=>{

    check_is();

    let new_element=$('<div></div>');
    new_element.attr('id', "second_div");
    new_element.html(createWeather(weatherobject, 16));
    let parent=$('#five_day_forecast');
    parent.append(new_element);
});

three_day_forward.click(()=>{

    check_is();

    let new_element=$('<div></div>');
    new_element.attr('id', "second_div");
    new_element.html(createWeather(weatherobject, 24));
    let parent=$('#five_day_forecast');
    parent.append(new_element);
});

four_day_forward.click(()=>{

    check_is();

    let new_element=$('<div></div>');
    new_element.attr('id', "second_div");
    new_element.html(createWeather(weatherobject, 32));
    let parent=$('#five_day_forecast');
    parent.append(new_element);
    });
}

// функция для отображения ошибки, возникающей в цепочке 'Promise'
function showError(error)
{
    const card=$('#card');
    console.log(card);

    if (card)
    {
        card.remove();
    }

    let new_element=$('<div></div>');

    const html=`
    <div id="card">
       <img id="error" src="images/errors/error.png">
       <div id="error_txt"> ${error.message}</div>
    </div>`;

    new_element.html(html);
    body.append(new_element);
}