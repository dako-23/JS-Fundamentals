function meetings(arr) {

    const meetings = {}

    for (const command of arr) {

        const [weekday, name] = command.split(' ');
        
        if(meetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        } else{
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }

    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }

}
meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);