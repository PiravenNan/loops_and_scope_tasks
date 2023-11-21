/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */
stations.pop()
console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
stations.shift()
console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = 0;

for (station of stations){
    stationCount +=1;
}

console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations[2];

console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */
stationCount = 0;

for (station of stations){
    if (stations[stationCount] === "North Berwick"){
        stations[stationCount] = "Berwick-upon-Tweed"
    }
    stationCount +=1;
}
console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */

stationCount = 0;
LeedsIndex = 0;
for (station of stations){
    if (stations[stationCount] === "Leeds"){
        LeedsIndex = stationCount;
    }
    stationCount +=1;
}

stations.splice(LeedsIndex,1);
console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

stationCount = 0;
NewcastleIndex = 0;
for (station of stations){
    if (stations[stationCount] === "Newcastle"){
        NewcastleIndex = stationCount + 1;
    }
    stationCount +=1;
}
stations.splice(NewcastleIndex,0,"Darlington");
console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */

stoppingAtDurham = false;
for (station of stations){
    if (stations[stationCount] === "Durham"){
        stoppingAtDurham = true;
    }
    
}
console.log(stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */
if (stoppingAtDurham){
    console.log("Yay Durham!");
}else{
    console.log("Aww...");
}