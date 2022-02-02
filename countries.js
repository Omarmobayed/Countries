

    
    function getCountry(){
    fetch('https://restcountries.com/v3.1/all')
            .then(response=>response.json())
            .then(data=>{
                var info=document.getElementById("info");
                var lang=document.getElementById("languages");
                var money=document.getElementById("currencies");
                document.getElementById("languages").innerHTML="";
    data.forEach(country => {
        //check eza country maktube sah
       
        if(country.name.common.toLowerCase()==document.getElementById("Search").value.toLowerCase()){//to lower case mshn ykun value da2i2 hon w honik
                //NAME AND DEPENDCY
            if(country.independent){
                    var dep="independant";
                }else{
                    var dep="dependant";
                }
                document.getElementById("name").innerHTML=country.name.common+" is an "+dep+" country.";
    //for image 
    document.getElementById("image").src=country.flags.png;
    
//     var pop_reg_cap=document.createElement("p");

// pop_reg_cap.innerHTML=
//     info.appendChild(pop_reg_cap);
document.getElementById("info").innerHTML=  "The capital is "+country.capital+" and its population is "+country.population+" and the region is "+country.region+".";
document.getElementById("spokenlanguagestext").innerHTML="Spoken languages:";

    var languages =JSON.stringify(country.languages).split(",")
    console.log(languages);
    // var nb=1;
    languages.forEach(l=>{
        var language=document.createElement("li");
        //also split the strings to arrays
       var langu = l.split("\"");
        console.log(langu);
language.innerHTML=langu[3];
     lang.appendChild(language);

// document.getElementById("languages").innerHTML+= nb+". "+langu[3]+"<br>";           
// nb=nb+1;

})


                    var currencies=JSON.stringify(country.currencies).split("{");
        console.log(currencies);
        currencies.forEach(c=>{
         
            var curru = c.split("\"");
        console.log(curru);
money.innerHTML=" CURRENCY name: "+curru[1]+" and its symbol: "+curru[7];
        })
        }//for if
   
    });
            })
        }
    
    
    
    
    
