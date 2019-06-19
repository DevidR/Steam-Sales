const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('June 25, 2019 10:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

        day_left = Math.floor(distance / (day)),
        hour_left = Math.floor((distance % (day)) / (hour)),
        minute_left = Math.floor((distance % (hour)) / (minute)),
        second_left = Math.floor((distance % (minute)) / second);

        if(day_left<=0){day_left=0}
        if(hour_left<=0){hour_left=0}
        if(minute_left<=0){minute_left=0}
        if(second_left<=0){second_left=0}


      document.getElementById('days').innerText = day_left,
        document.getElementById('hours').innerText = hour_left,
        document.getElementById('minutes').innerText = minute_left,
        document.getElementById('seconds').innerText = second_left;

    }, second)
