setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRotate = hTime*30 + mTime/2 + sTime/120;
    mRotate = mTime*6 +sTime/10;
    sRotate = sTime*6;

    hourHand.style.transform = `rotate(${hRotate}deg)`;
    minuteHand.style.transform = `rotate(${mRotate}deg)`;
    secondHand.style.transform = `rotate(${sRotate}deg)`;

},1000);