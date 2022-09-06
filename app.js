// How to begin: 
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

// radio = stations
// stations = 94.5 , 96.9 , 103.3
// 94.5 = Chris Brown - Call Me Every Day , Beyonce - Cuff It , Drake - Sticky
// 96.9 = Drake - Best I Ever Had, Camron ft Juelz Santana - Hey Ma, Doja Cat - Need to Know
// 103.3 = Sam Smith - Dancing With A Stranger, The Weeknd - Blinding Lights, Maroon 5 - She Will Be Loved


let jamn945 = {
    name : "jamn945",
    song : [{title:"cmed",artist:"chrisbrown"},{title:"Cuff it",artist:"Beyonce"}, {title:"sticky",artist:"Drake"}]
}

let hot969 ={
    name : "hot969",
    song: [{title: "Best I Ever Had",artist:"Drake"},{title:"Hey Ma",artist:"Camron"}, {title:"Need to Know",artist:"Dojacat"}]
}

let thebeat1033={
    name : "beat1033",
    song : [ {title: "Dancing with a stranger",artist:"Sam Smith"}, {title: "Blind lights",artist:"TheWeeknd"},{artist:"She will be loved",artist:"Maroon5"}]
}

let radio = {
    station : [jamn945, hot969,thebeat1033],   
}

// console.log(Math.floor(Math.random()*radio.station.length))


console.log(radio.station[Math.floor(Math.random()*radio.station.length)])
