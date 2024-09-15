document.addEventListener('DOMContentLoaded', () => {
    const timeZones = [
        // Asia
        { name: "Aden", offset: "UTC+3", region: "Asia" },
        { name: "Almaty", offset: "UTC+6", region: "Asia" },
        { name: "Amman", offset: "UTC+2", region: "Asia" },
        { name: "Ankara", offset: "UTC+3", region: "Asia" },
        { name: "Ashgabat", offset: "UTC+5", region: "Asia" },
        { name: "Baghdad", offset: "UTC+3", region: "Asia" },
        { name: "Baku", offset: "UTC+4", region: "Asia" },
        { name: "Bangkok", offset: "UTC+7", region: "Asia" },
        { name: "Beirut", offset: "UTC+2", region: "Asia" },
        { name: "Bishkek", offset: "UTC+6", region: "Asia" },
        { name: "Brunei", offset: "UTC+8", region: "Asia" },
        { name: "Chita", offset: "UTC+9", region: "Asia" },
        { name: "Dhaka", offset: "UTC+6", region: "Asia" },
        { name: "Dili", offset: "UTC+9", region: "Asia" },
        { name: "Dubai", offset: "UTC+4", region: "Asia" },
        { name: "Hanoi", offset: "UTC+7", region: "Asia" },
        { name: "Hong Kong", offset: "UTC+8", region: "Asia" },
        { name: "Islamabad", offset: "UTC+5", region: "Asia" },
        { name: "Jakarta", offset: "UTC+7", region: "Asia" },
        { name: "Jerusalem", offset: "UTC+2", region: "Asia" },
        { name: "Kabul", offset: "UTC+4:30", region: "Asia" },
        { name: "Kuala Lumpur", offset: "UTC+8", region: "Asia" },
        { name: "Kuwait", offset: "UTC+3", region: "Asia" },
        { name: "Manila", offset: "UTC+8", region: "Asia" },
        { name: "Muscat", offset: "UTC+4", region: "Asia" },
        { name: "Nicosia", offset: "UTC+2", region: "Asia" },
        { name: "Seoul", offset: "UTC+9", region: "Asia" },
        { name: "Singapore", offset: "UTC+8", region: "Asia" },
        { name: "Tashkent", offset: "UTC+5", region: "Asia" },
        { name: "Tokyo", offset: "UTC+9", region: "Asia" },
        { name: "Yerevan", offset: "UTC+4", region: "Asia" },
        
        // Africa
        { name: "Abidjan", offset: "UTC±0", region: "Africa" },
        { name: "Accra", offset: "UTC±0", region: "Africa" },
        { name: "Addis Ababa", offset: "UTC+3", region: "Africa" },
        { name: "Algiers", offset: "UTC+1", region: "Africa" },
        { name: "Asmara", offset: "UTC+3", region: "Africa" },
        { name: "Bamako", offset: "UTC±0", region: "Africa" },
        { name: "Bangui", offset: "UTC+1", region: "Africa" },
        { name: "Banjul", offset: "UTC±0", region: "Africa" },
        { name: "Bissau", offset: "UTC±0", region: "Africa" },
        { name: "Blantyre", offset: "UTC+2", region: "Africa" },
        { name: "Brazzaville", offset: "UTC+1", region: "Africa" },
        { name: "Bujumbura", offset: "UTC+2", region: "Africa" },
        { name: "Cairo", offset: "UTC+2", region: "Africa" },
        { name: "Casablanca", offset: "UTC±0", region: "Africa" },
        { name: "Ceuta", offset: "UTC+1", region: "Africa" },
        { name: "Conakry", offset: "UTC±0", region: "Africa" },
        { name: "Dakar", offset: "UTC±0", region: "Africa" },
        { name: "Dar es Salaam", offset: "UTC+3", region: "Africa" },
        { name: "Djibouti", offset: "UTC+3", region: "Africa" },
        { name: "Douala", offset: "UTC+1", region: "Africa" },
        { name: "El Aaiun", offset: "UTC±0", region: "Africa" },
        { name: "Freetown", offset: "UTC±0", region: "Africa" },
        { name: "Gaborone", offset: "UTC+2", region: "Africa" },
        { name: "Harare", offset: "UTC+2", region: "Africa" },
        { name: "Johannesburg", offset: "UTC+2", region: "Africa" },
        { name: "Kampala", offset: "UTC+3", region: "Africa" },
        { name: "Kinshasa", offset: "UTC+1", region: "Africa" },
        { name: "Lagos", offset: "UTC+1", region: "Africa" },
        { name: "Libreville", offset: "UTC+1", region: "Africa" },
        { name: "Luanda", offset: "UTC+1", region: "Africa" },
        { name: "Lubumbashi", offset: "UTC+2", region: "Africa" },
        { name: "Lusaka", offset: "UTC+2", region: "Africa" },
        { name: "Malabo", offset: "UTC+1", region: "Africa" },
        { name: "Maputo", offset: "UTC+2", region: "Africa" },
        { name: "Maseru", offset: "UTC+2", region: "Africa" },
        { name: "Mbabane", offset: "UTC+2", region: "Africa" },
        { name: "Mogadishu", offset: "UTC+3", region: "Africa" },
        { name: "Monrovia", offset: "UTC±0", region: "Africa" },
        { name: "Nairobi", offset: "UTC+3", region: "Africa" },
        { name: "Ndjamena", offset: "UTC+1", region: "Africa" },
        { name: "Niamey", offset: "UTC+1", region: "Africa" },
        { name: "Nouakchott", offset: "UTC±0", region: "Africa" },
        { name: "Ouagadougou", offset: "UTC±0", region: "Africa" },
        { name: "Porto-Novo", offset: "UTC+1", region: "Africa" },
        { name: "Sao Tome", offset: "UTC±0", region: "Africa" },
        { name: "Timbuktu", offset: "UTC+0", region: "Africa" },
        { name: "Tunis", offset: "UTC+1", region: "Africa" },
        { name: "Windhoek", offset: "UTC+2", region: "Africa" },
        
        // North America
        { name: "Adak", offset: "UTC-10", region: "North America" },
        { name: "Anchorage", offset: "UTC-9", region: "North America" },
        { name: "Antigua", offset: "UTC-4", region: "North America" },
        { name: "Asuncion", offset: "UTC-4", region: "North America" },
        { name: "Bermuda", offset: "UTC-4", region: "North America" },
        { name: "Caracas", offset: "UTC-4", region: "North America" },
        { name: "Chicago", offset: "UTC-6", region: "North America" },
        { name: "Denver", offset: "UTC-7", region: "North America" },
        { name: "Detroit", offset: "UTC-5", region: "North America" },
        { name: "Guatemala", offset: "UTC-6", region: "North America" },
        { name: "Havana", offset: "UTC-5", region: "North America" },
        { name: "Los Angeles", offset: "UTC-8", region: "North America" },
        { name: "Mexico City", offset: "UTC-6", region: "North America" },
        { name: "New York", offset: "UTC-5", region: "North America" },
        { name: "Toronto", offset: "UTC-5", region: "North America" },
        { name: "Vancouver", offset: "UTC-8", region: "North America" },
        
        // South America
        { name: "Asuncion", offset: "UTC-4", region: "South America" },
        { name: "Brasilia", offset: "UTC-3", region: "South America" },
        { name: "Buenos Aires", offset: "UTC-3", region: "South America" },
        { name: "Caracas", offset: "UTC-4", region: "South America" },
        { name: "Lima", offset: "UTC-5", region: "South America" },
        { name: "Montevideo", offset: "UTC-3", region: "South America" },
        
        // Antarctica
        { name: "Casey", offset: "UTC+8", region: "Antarctica" },
        { name: "Davis", offset: "UTC+7", region: "Antarctica" },
        { name: "Dumont d'Urville", offset: "UTC+10", region: "Antarctica" },
        { name: "McMurdo", offset: "UTC+12", region: "Antarctica" },
        { name: "Palmer", offset: "UTC-3", region: "Antarctica" },
        
        // Europe
        { name: "Amsterdam", offset: "UTC+1", region: "Europe" },
        { name: "Andorra", offset: "UTC+1", region: "Europe" },
        { name: "Athens", offset: "UTC+2", region: "Europe" },
        { name: "Belgrade", offset: "UTC+1", region: "Europe" },
        { name: "Berlin", offset: "UTC+1", region: "Europe" },
        { name: "Brussels", offset: "UTC+1", region: "Europe" },
        { name: "Bucharest", offset: "UTC+2", region: "Europe" },
        { name: "Budapest", offset: "UTC+1", region: "Europe" },
        { name: "Copenhagen", offset: "UTC+1", region: "Europe" },
        { name: "Dublin", offset: "UTC±0", region: "Europe" },
        { name: "Helsinki", offset: "UTC+2", region: "Europe" },
        { name: "Lisbon", offset: "UTC±0", region: "Europe" },
        { name: "London", offset: "UTC±0", region: "Europe" },
        { name: "Madrid", offset: "UTC+1", region: "Europe" },
        { name: "Minsk", offset: "UTC+3", region: "Europe" },
        { name: "Monaco", offset: "UTC+1", region: "Europe" },
        { name: "Oslo", offset: "UTC+1", region: "Europe" },
        { name: "Paris", offset: "UTC+1", region: "Europe" },
        { name: "Prague", offset: "UTC+1", region: "Europe" },
        { name: "Rome", offset: "UTC+1", region: "Europe" },
        { name: "Stockholm", offset: "UTC+1", region: "Europe" },
        { name: "Vienna", offset: "UTC+1", region: "Europe" },
        { name: "Vilnius", offset: "UTC+2", region: "Europe" },
        { name: "Warsaw", offset: "UTC+1", region: "Europe" },
        
        // Australia
        { name: "Adelaide", offset: "UTC+9:30", region: "Australia" },
        { name: "Brisbane", offset: "UTC+10", region: "Australia" },
        { name: "Canberra", offset: "UTC+10", region: "Australia" },
        { name: "Hobart", offset: "UTC+10", region: "Australia" },
        { name: "Melbourne", offset: "UTC+10", region: "Australia" },
        { name: "Perth", offset: "UTC+8", region: "Australia" },
        { name: "Sydney", offset: "UTC+10", region: "Australia" },
    ].sort((a, b) => a.name.localeCompare(b.name));

    function createOption(tz) {
        const option = document.createElement('option');
        option.value = `${tz.region}/${tz.name}`;
        option.textContent = `${tz.name.replace(/_/g, ' ')} (${tz.offset})`;
        return option;
    }

    function populateSelect(selectId) {
        const selectElement = document.getElementById(selectId);
        timeZones.forEach(tz => selectElement.appendChild(createOption(tz)));
    }

    function setCurrentDateTime() {
        const now = new Date();
        document.getElementById('inputDate').value = now.toISOString().split('T')[0]; // YYYY-MM-DD
        document.getElementById('inputTime').value = now.toTimeString().split(' ')[0].slice(0, 5); // HH:mm
    }

    function formatDateTime(dateTime, timezone) {
        return `
            <span>Date: <em>${dateTime.format('dddd, DD MMMM YYYY')}</em></span><br>
            <span>Time: <em>${dateTime.format('HH:mm:ss')}</em></span><br>
            <span>Timezone: <em>${timezone} (UTC ${dateTime.utcOffset() / 60 >= 0 ? '+' : ''}${dateTime.utcOffset() / 60})</em></span><br>
        `;
    }

    function convertTime() {
        const localTimezone = document.getElementById('localTimezone').value;
        const targetTimezone = document.getElementById('targetTimezone').value;
        const inputDate = document.getElementById('inputDate').value;
        const inputTime = document.getElementById('inputTime').value;

        if (!inputDate || !inputTime) {
            alert('Please enter both date and time.');
            return;
        }

        const localDateTime = moment.tz(`${inputDate} ${inputTime}`, localTimezone);
        document.getElementById('localDateTime').innerHTML = formatDateTime(localDateTime, localTimezone);

        const convertedDateTime = localDateTime.clone().tz(targetTimezone);
        document.getElementById('convertedDateTime').innerHTML = formatDateTime(convertedDateTime, targetTimezone);
    }

    ['localTimezone', 'targetTimezone'].forEach(populateSelect);
    setCurrentDateTime();
    document.querySelector('.btn').addEventListener('click', convertTime);
});