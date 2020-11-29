function gettingJSON(){
    //Display the forecast
    // Your code here.
    forecasting = document.querySelector("#forecast")
    forecasting.style.display= "block"

    //Set default location if one isn't provided
    let location;
    if (!document.querySelector("#location").value) {
        location = "Ann Arbor"
    } else
    {
        location = document.querySelector("#location").value
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
        if (!document.querySelector("input[name=temp]:checked")) {
            format = "imperial"
           
        } else
        {
            format = document.querySelector("input[name=temp]:checked").value;
           
        }

    // Your code here.
    console.log("Format is " + format);

    //set the query  
    let query;
    query = "https://api.openweathermap.org/data/2.5/weather?q="+ location + "&units="+ format + "&appid=c251de95d6993a6d04b6ccd192860601";

    // Your code here.  
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
   loc = document.querySelector("#loc")
   temp= document.querySelector("#temp")
   tempImg = document.querySelector("#tempImg")
//    console.log("loc is " + loc + "temp is " + temp + "tempImg" + tempImg)


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        

    });
}
