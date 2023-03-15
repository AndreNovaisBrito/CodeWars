function formatSeconds(seconds){
        if(seconds == 1) return seconds + " second";
        return seconds + " seconds";
}


function formatMinutes(minutes){
    if(minutes == 1) return minutes + " minute";
    return minutes + " minutes";
}

function formatHours(hours){
    if (hours == 1) return hours + " hour";
    return hours + " hours";
}

function formatDays(days){
    if(days == 1) return days + " day";
    return days + " days";
}

function formatYears(years){
    if(years == 1 ) return years + " year";
    return years + " years";
}

function formatDuration (seconds) {
    if(seconds == 0) return "now";

    let result = ""
    let years = Math.floor(seconds/(3600*24*365))
    seconds -= years*3600*24*365
    let days = Math.floor(seconds/(3600*24))
    seconds -= days*3600*24
    let hours = Math.floor(seconds/3600);
    seconds-= hours*3600
    let minutes = Math.floor(seconds/60);
    seconds -=minutes*60

    let components = []

    if(years) components.push(formatYears(years));
    if(days) components.push(formatDays(days));
    if(hours) components.push(formatHours(hours));
    if(minutes) components.push(formatMinutes(minutes));
    if(seconds) components.push(formatSeconds(seconds));
    const lastComponent = components.pop();

    if(components.length){
        return components.join(", ") + " and " + lastComponent;
    } else {
        return lastComponent;
    }
}
  
console.log(formatDuration(62))