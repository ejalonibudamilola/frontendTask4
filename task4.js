function convertFahrToCelsius(y){
    var type = typeof(y);
    var result;
    if(type==="object"){
        var str = JSON.stringify(y);
        if(Array.isArray(y)){                    
            result = str+ " is not a valid number but an array.";
        }
        else{
            result = str+ " is not a valid number but an object.";
        }
    }             
    
    else{
        var z = Number(y);
        if(isNaN(z)){
            result = y +" is not a number but a string";
        }
        else{
            var cal = (z - 32) * 5/9;
            result = cal.toFixed(4);         
        }
               
    }
    return result;        
}

function checkYuGiOh(b){
    var type = typeof(b);
    var response;
    if(type==="object"){
        var str = JSON.stringify(b);
        if(Array.isArray(b)){        
            response = 'Invalid parameter: ' +str;  
        }
        else{
            response = 'Invalid parameter: ' +str;  
        }
    }
    else{
        var z = Number(b);
        if(isNaN(z)){
            response = 'Invalid parameter: "'+b+'"';
        }
        else{
            var numbers =[];
            for (var i = 1;  i<=b; i++){
                if(((i%2) === 0) && ((i%3)!==0) && ((i%5)!==0)){
                    numbers.push("yu");
                }
                else if(((i%2) !== 0) && ((i%3)===0) && ((i%5)!==0)){
                    numbers.push("gi");
                }
                else if(((i%2) !== 0) && ((i%3)!==0) && ((i%5)===0)){
                    numbers.push("oh");
                }
                else if(((i%2) === 0) && ((i%3) ===0) && ((i%5)!==0)){
                    numbers.push("yu-gi");
                }
                else if(((i%2) === 0) && ((i%3)!==0) && ((i%5)===0)){
                    numbers.push("yu-oh");
                }
                else if(((i%2) !== 0) && ((i%3)===0) && ((i%5)===0)){
                    numbers.push("gi-oh");
                }
                else if(((i%2) === 0) && ((i%3)===0) && ((i%5)===0)){
                    numbers.push("yu-gi-oh");
                }
                else{
                    numbers.push(i);
                }        
            }
            response = JSON.stringify(numbers);
        }        
    } 
    return response;
}