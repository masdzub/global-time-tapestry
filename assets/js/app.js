new Vue({
    el: '#app',
    data: {
        localTime: '',
        localDate: '',
        localTimezone: '',
        localDayNight: '',
        clocks: additionalClocks.map(clock => ({ ...clock, time: '', date: '', timezoneOffset: '', dayNight: '' }))
    },
    methods: {
        updateClocks() {
            const now = moment();
            this.localTime = now.format('HH:mm:ss');
            this.localDate = now.format('dddd, MMMM D, YYYY');
            this.localTimezone = this.getTimezoneInfo(now);
            this.localDayNight = this.getDayNightInfo(now);
            
            this.clocks.forEach(clock => {
                const zonedTime = now.tz(clock.timezone);
                clock.time = zonedTime.format('HH:mm:ss');
                clock.date = zonedTime.format('dddd, MMMM D, YYYY');
                clock.timezoneOffset = this.getTimezoneInfo(zonedTime);
                clock.dayNight = this.getDayNightInfo(zonedTime);
            });
        },
        getTimezoneInfo(momentObj) {
            const offset = momentObj.utcOffset() / 60;
            const sign = offset >= 0 ? '+' : '-';
            const absOffset = Math.abs(offset);
            return `UTC${sign}${absOffset}`;
        },
        getDayNightInfo(momentObj) {
            const hour = momentObj.hour();
            if (hour >= 6 && hour < 18) {
                return '☀️ Day';
            } else {
                return '🌙 Night';
            }
        }
    },
    mounted() {
        this.updateClocks();
        setInterval(this.updateClocks, 1000);
    }
});