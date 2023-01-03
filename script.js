/**
 * my model
 */
var model = {
    lat: 0,        // (int) latitude
    lon: 0,        // (int) longitude
    weather: '',   // (str) one word weather condition
    temp: 0,       // (int) temperature
    tempUnit: 'C', // (str) unit of measurement
    name: '',      // (str) name of location
    dt: 0,         // (int) current timestamp

    conditions: {
        Clear: {
            img: 'https://lh3.googleusercontent.com/sixFkRy6wOnYkstBT_l7Nx5DMiaTvlLBjieDtYTH42sc9Vcl8lXliQGpniQNpYEshxwt0foVv9y9f8N1J0U4GVXoRmF4FOje8tiO70BWjAGwiC1Zb6NrusXfR3X4kPSTdQScSpZa92Zm2AmzUrhDtfJmZnDmSZKH2tp2tGMjKDeiD-MhugwVoGmtO3fRB95xJi-RoxxAj53kFwiRKMKoQVa0GXWQ4VzflUk6v81fFwIVx9GxIx6HbqjnbPx2tcdKm5CMXSXyfLDQ7WSLP8TGTzXClk2DJXboJ97GkdhODmVC32ReIEaEop-vKlBlr3FDhWSAyTHrui_5NpiTp6eEfk-Tn5Lux79VITHFKgXawpZXi0bLdivIKyQJSIrLRco0ieXrvBub0SNtIKW1PlOtSUY0iEFfXZeNpvXrOMV5yKtDuwhgOnLL7IsIbQWx-G9MeTplpUq4LKbXx99L2tYbGGa28kZGYWzxFpbTDaTDx_LLyWGw6Gu0kqQQaBWbR2mmLkTC1RwqRmoygajMbSa5YuwAypnPxDjm6Sy8YZRnUEvEhzchgx2jtrmuqOlNxpSQJo5FIXYDvuClbTBpT6yZp7pG7Xnr6YKvxbrnmzkOQt-LFzvkmQnG=w188-h300-no',
            icon: 'CLEAR_DAY',
        },
        Clouds: {
            img: 'https://lh3.googleusercontent.com/npfnkA3Rp3Z4uAmxYys1VG6zkODb9rrya-M7BA2teTHjFpNGOboD-upqAwvL-mhTjA_W39VtFkR5BUcMvb6Ml3ZzrMLu2QwjaVmpPuMynwqPH3tenonotimQbGMSW5a-NUuiT-TRd5dC_dr5LmsgcoIi6mfKFNjn_jjSkLbC-4a9O6W4mphvOMv_hqdE5Zj_Bu_ouioS-yXczvjcztTtNoldisKOixL2MrzYU2Pe7f3svvqXOqgXzdVsNV5ibIMhbJ89NHhUySBdXsCHeKHsaEc8Kx6_uwmmR-kt3syuzIk_95IaDdT7ieMpXkWS3O9SC0DZ3Xul2R1Uh4VAc06RryKi41_Yxes5addc8QA00SHDRO-Gpm_luXcolkGAgFbFodBQMfQJ-8EE5g446rE-LTfGdr-81F2stgakh0X7kYmOrZ4RQN7ecxOrM_pHl23ZSYDQO_M_ge4akkiiyS756TQ_KOlSZV3zeG0ooDEUfd3TsX0fNNIBlbp_8QIqHLoU14UWf3qGTeV4isVFGqzolq6gzZsrz-r8GqBuVpps5eNyaM3UaQo_-J5btI4gbb763d6HgJAWzVmEzlWo04ISaq5dMyRPKAG490mLffi20HKDnnt6niaj=w188-h300-no',
            icon: 'CLOUDY',
        },
        Drizzle: {
            img: 'https://lh3.googleusercontent.com/gL-EAbhGc7_S1aC9LMuW8ibChlVebefsQx544XSKqC2mfow1EHcAquqh6dPKgACNLikcRwwWEAaBMvijwDj7_WEnXrZwhsDkQH5JbUKWs2v1e0LsIb7aL7tlUImlC4qbZDkR26r_I4VipfgdWhtnicoSwLnM9o-m9ELZbCZlj3X9FqLjEO_XE44OZ2YVmJjccZESwQr-Moi4cIxuHTReFTvpjAd2fF8AAoqmupAGyLkWs3j-mpu9e3_UfbhouhMq9k41KBZl5ufW5g7WpCMlT_ZhjaI7WVFYyb6KbUkmcmUxoGTj8xXYqA93YrpAe5r3FU-2OTR284_6x2k8KTiDHqNnk9s7jkZdvZGDXZ73T_RJJVwtQJom0EJPKmF1Hn7ld5vKPtTZpbEDUZwqx8J7CyhcqVLBo13U6VRBXmcysA7Flf8E2iCNHXtKEedRCaNRLl282M3gRODK60cCikJAsxpYLvXJwsQDkH06XvM3LAA6dTur4NGCWdK836emorPhQ8bfGq-z6HFItwe4i_HOCY57EgVcACOnqj_u5vNSm7xxuLmpMpec4WZGpi3Ki7ggTceZNjmaCa7dnu_JjO4dfwxokhHhkhIsuIj7t4_PsbojSTc7acim=w188-h300-no',
            icon: 'RAIN',
        },
        Rain: {
            img: 'https://lh3.googleusercontent.com/hyfBy9jmYo76NQTQld8TWZyH3nYrQuXCAQ-PNR6DPdl6Bp_0kT6oGVtel6VPas5jF6ggj0PbZJQIQFhvPtmFtphNgScc-EcyeewncqCXW_VIeYIHJB1SwXW_b3pSKEMXmq3_l7uxahcbTW7lfJ4NX4WdEANte9Wlii5uRGGUQQbXF_KUUezv0EfRWV5fupH7pqiyJFBIbH5g7WkawmRw8FCK3iyLZtozNR7H9JJT7mrBGxoy-B1yPKG4H1B8MH-G0if0TE0T9Ov-wyH1AVOIeJ3yPNOnObp0rD1lHk6OAu7wZvbcC2E0heRUv6Tpzsl4BHIMs5xEKHIxGZV_kw73Y5ZwVQUyv5TpeI-IPqh5PtAPLNaMMZXQmOwyblKkpZVTdqO-QzaD-mhgJzpm1fi4AtRp-xj9t6tK_SH4x7bxiudEFm0iiHDlS8luekH2OGGuzB4pRZ2ewAIfBwsrAuyJ0lhXLwv447gyiv_eU0DQAauyoNWjMkWabk9MoZDJI7Kqbn76L-eHHmMXB6JN-tHBKyzjjsRCAw7XPFOxvBorlDvZXoSPSPrUwXNDWnGRc_civBmgjnKZG5uEtyloq85zSkmlxjjOdQP5IS8FXbcjYuuoyLsR6qgb=w188-h300-no',
            icon: 'RAIN',
        },
        Snow: {
            img: 'https://lh3.googleusercontent.com/kyytEfGytXAVqou314NwVAL_1BQl9rWVc6Pcd1LP__dBIaBmM71ub-NP1wsZmiNsLswDPfWlCBcl42WtygtLra8u1RwBE3e3MbsnIOlx8zM9l70RuX2ZrnN6ganzQoiirfy7yxxTct5ZuIDvzEF2UoeAgBJK3S4KvlfnyHflvUpwpmxAQNfiunhyq6i0lssTkNvmaK3vpEAbbx7sJNr02vYwMhSEiD9Av-7x21x-qO3sgqqOb5Nbb2k0HcOlUaYErH5XOz3wnUCnZ96zwZ68TUbyqAtbq9-huiX8q1MuHteyeeZVf6u4jSeFEMf0n6b9A_JooTngssUU6DHNFvGF0hVgtOrN4PsPHMJed5ZLdaXjiP8AN6g9DpXd_ApYBOuOcBUs3QOLY7BAVHB1IB901TpPwhyZuIL9DswT67S2OhvyNW8QNs2OAEs7a6mSoHqmsoWcPq5JUG2BrzwaWYp1pPo1Il_SSr5bceqPRCBkvpo9jSFKib9Rf5MK0arD3_FgPlid-HI2L3m-1EhxUZ9cNH10TLTMqpKsXAm-1Qoh13tzkj10b4FWrS0ZK39Vr0n6-vZGIfZ8V19Imr4kMxkg9xXEOnAFhW6lKL5S4UBWiXZCcfEdwyEE=w188-h300-no',
            icon: 'SNOW',
        },
        Thunderstorm: {
            img: 'https://lh3.googleusercontent.com/byKBjV3_OIvYoeuOFg_3uDsQRk-gEtpW7KZk6N5xoToos8B--a_-P5-ht-mJVE4k9fWgS4q7o6F1b3tL2pKAB2X89ZFbhRTG9OxwbQUijNpWtCOQgSK6wkFq4F0C84N_lLlJ2jBwfpzH7C5kMyuXYKXVRODQBBUYDlQEfRPPSbsIBTUmoXYGZzWp0MHbtQspUbAba2j3merk1ChbdcOVjmb1ybGeE3oUg0hJiIVMDNbITAonAXh6NVZDhZ989qPkv34_SjaxzCh_4G009LfDXVjbGZTi9-ymE-4EcW_tP9Om4xezU81zfd2Ut4LuA014UqYpvBSAj8JAJG66sStR7Xjyr3ML9JW07jJgcn2LBm8TjKx5917UbZnD0nwHGPBrFGWT-1SY110QV0qKG_ROj-EZ1gqHVGRd4NOPYYuF6fhTFw_ak66Gfl21EMR2dd13zkk-WQQZQxnKbhsa1GvKq6uekdmvo6vFrKSDerVBxId2bIBt4hZQY5KOgUuXkRvwVB72j0Lj_vvgl6aqVm7wuzQ9qpB5xSvTrEMqC0X7yEdW5ep6phx-VONHXUzOImafrtIg0Gk9DCdh9lFLMi87ecvlxxwRbb47G1uv_1EQ0id72WKKbfSy=w188-h300-no',
            icon: 'CLOUDY',
        },
    },
}

/**
 * my controller
 */
var weather = {

    init: function(){
        view.cacheDOM();
        view.bindEvents();
        this.setCoordinates();
    },

    /**
     * sets the coordinates from the geolocation data
     */
    setCoordinates: function(lat, lon){
        if (navigator.geolocation) {
            var self = this;
            navigator.geolocation.getCurrentPosition(function(pos) {
                model.lat = pos.coords.latitude;
                model.lon = pos.coords.longitude;
                self.getWeatherData();
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    },

    /**
     * gets the data from the weather API using our coordinates
     */
    getWeatherData: function(){
        var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + model.lat + '&lon=' + model.lon;
        $.ajax({
            url: url,
            async: false,
            success: function(data){
                // setting the model data
                model.weather = data.weather[0].main;
                model.temp    = data.main.temp;
                model.name    = data.name;
                model.dt      = data.dt;
            },
        });
        view.render(); // once set we can render the view
    },

    /**
     * gets the right weather condition
     */
    determineWeather: function(){
        return model.conditions[model.weather];
    },
}

/**
 *
 */
var view = {

    /**
     *
     */
    cacheDOM: function(){
        this.$weatherImg = $('#weatherImg');
        this.$townName   = $('#townName');
        this.$lat        = $('#lat');
        this.$lon        = $('#lon');
        this.$time       = $('#time');
        this.$temp       = $('#temp');
        this.$tempUnit   = $('#tempUnit');

        this.$fahrenheit = $('#fahrenheit');
        this.$celsius    = $('#celsius');
    },

    /**
     *
     */
    bindEvents: function(){
        this.$fahrenheit.on('click', this.convertToF.bind(this));
        this.$celsius   .on('click', this.convertToC.bind(this));
    },

    /**
     *
     */
    convertToF: function(){
        if (model.tempUnit !== 'F') {
            model.temp     = Number(model.temp * 1.8 + 32).toFixed(1);
            model.tempUnit = 'F';
            this.$celsius.removeClass('toggled');
            this.$fahrenheit.addClass('toggled');
            view.render()
        }
    },

    /**
     *
     */
    convertToC: function(){
        if (model.tempUnit !== 'C') {
            model.temp     = Number((model.temp - 32) * (5 / 9)).toFixed(1);
            model.tempUnit = 'C';
            this.$fahrenheit.removeClass('toggled');
            this.$celsius.addClass('toggled');
            view.render();
        }
    },

    /**
     *
     */
    render: function(){
        var data = weather.determineWeather();
        // show image
        this.$weatherImg.attr('src', data.img);
        // show town
        this.$townName.text(model.name);
        // show coordinates
        this.$lat.text(model.lat);
        this.$lon.text(model.lon);
        // show icon
        var icons = new Skycons({"color": "#0096FF"});
        icons.set("icon", Skycons[data.icon]);
        icons.play();
        // show temperature
        this.$temp.text(model.temp);
        this.$tempUnit.text(model.tempUnit);
        // show time
        this.$time.text(moment().format("h:mm a"));
    },
}

weather.init()
