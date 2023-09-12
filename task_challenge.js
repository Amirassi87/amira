
//Amira Mohamed

//A script that contains a function to make calculation on 2 arabic or roman numbers and returns the results
try{  

    //declaring a string to store the input which will be a string line equation
    const proc = prompt("Enter two numbers seperated by arith op: ");

    //create the fuction that accepts string value, calculate and returns integer as string value;
    function calculate(proc){

    //create roman numbers array from 1 to 10
    const arr =['I','II','III','IV','V','VI','VII','VIII','IX','X'];
    
    //create roman numbers array from 10 to 100 step 10
    const artoroman =['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC','C'];

    //create roman numbers array from 1 to 100 by adding the elements of the prev two arrays
    const combined_arr=[];
    
    //counter for the new combined array
    let k=0;
 
    //create loop that stops when reaching he last element C in the artoroman array.
    for(let i =0; i < artoroman.length; i++){
     if(combined_arr[k] != 'C'){
        ++k;
        for(let j=0; j < arr.length-1; j++){
            combined_arr[k] = artoroman[i]+arr[j];
            ++k;
            
         }//end of j loop
            
         combined_arr[k] = artoroman[i+1];
     }//end of if
    }//end of i loop
        
    //remove the first empty elemnt used from artoroman    
    combined_arr.shift();
        
 
    //create the 4 operations array
    const op = ['+','-','*','/'];
    
    //counter to check the number of entered operators 
    let counter = 0;
        
    //create variable to store the index of the operator in the string
    let op_index;
    
    //declare variable to store the value of the operator
    let op_value;
        
    //declaring variables for the arabic and roman numbers
    let ar_fnumber;
    let ar_snumber;
    let roman_fnumber;
    let roman_snumber;
    let romtoar_fnumber;
    let romtoar_snumber; 
    let converted_result; 
    let result;
    
    //create two loops to search if the operator was entered more than once as it is required to be entered only one time between two numbers
    for (let i = 0; i < op.length; i++){
        for (let j=0; j < proc.length; j++){
            if(op[i] == proc[j]){
                ++counter;
                op_index = j;
                op_value = proc[j];
            }//end of if
        }//end of j loop
    }//end of i loop
        
    //check how many times operators was entered and throw exception if its more than one or it was not entered at all
    if(counter != 1){
        throw "error invalid input";
    }//end of counter if
    
    //extract the first number from the entered string using the index of the operator
    let fnumber = proc.slice(0,op_index);
        
    //extract the second number from the entered string using the index of the operator
    let snumber = proc.slice(op_index+1,proc.length);

    //check if the first number was entered before the operator
    if(fnumber == ""){
        throw "No number was entered before the operator";
    }
      
    //check if the first arabic number range between 1 and 10
    if(Number(fnumber) <= 0 || Number(fnumber) >10){
        throw "first number out of range 1 to 10";
    
    //check if the first number is roman number
    }else if(isNaN(Number(fnumber))){
        let counter = 0;
        
        //check if the roman number value between I and X
        for(let i=0; i < arr.length; i++){
            if(arr[i] == fnumber){
                roman_fnumber = fnumber;
                counter =1;
            }//end of inner if
        }//end of for
        
        //if roman number is not in the range between I and X or not valid
        if(counter == 0){
            throw "Invalid first roman number input";
        }//end of if
        
        //check if its not integer
    }else if(!Number.isInteger(Number(fnumber)) || !Number.isInteger(Number(fnumber))){
                throw "Only integer numbers accepted";
             }else{
                //convert the string input to number 
                ar_fnumber = Number(fnumber);
    }//end of outer if    
        
    //check if the second number was entered before the operator    
    if(snumber == ""){
        throw "No number was entered after the operator";
    }//end of if
      
    //check if the second number range between 1 and 10
    if(Number(snumber) <= 0 || Number(snumber) >10){
        throw "second number out of range 1 to 10";
    
    //check if the second number is roman number
    }else if(isNaN(Number(snumber))){
        let counter = 0;
        //check if the roman number value between I and X
        for(let i=0; i < arr.length; i++){
            if(arr[i] == snumber){
                //console.log(fnumber);
                roman_snumber = snumber;
                counter =1;
            }//end of inner if
        }//end of for
        if(counter == 0){
            throw "Invalid Second roman number input";
        }//end of if
    }else{
        //convert the string input to number 
        ar_snumber = Number(snumber);
    }//end of outer if        

    //check if both are arabic numbers 
    if(ar_fnumber == Number(fnumber) && ar_snumber == Number(snumber)){
        //calculation goes here
        switch(op_value){
                
            case '+': result = ar_fnumber + ar_snumber;
                      break;
            case '-': result = ar_fnumber - ar_snumber;
                      break;
            case '*': result = ar_fnumber * ar_snumber;
                      break;
            case '/': result = Math.trunc(ar_fnumber /                 ar_snumber);
                      break;
        }//end of swtich statment
        
        //convert the number to string and return the result
        return String(result);
        
    //check if both numbers are roman    
    }else if(roman_fnumber == fnumber && roman_snumber == snumber){
        //for loop to find numerical value of the roman vlaue entered
        for (let i= 0; i < arr.length; i++){
            if(roman_fnumber == arr[i]){
                 romtoar_fnumber = i+1;
            }//end of if
            if(roman_snumber == arr[i]){
                 romtoar_snumber = i+1;
            }//end of if
        }//end of for loop
        
         //calculation goes here
        switch(op_value){
            
            case '+': result = romtoar_fnumber +                       romtoar_snumber;
                      break;
            case '-': result = romtoar_fnumber -                       romtoar_snumber;
                      break;
            case '*': result = romtoar_fnumber *                       romtoar_snumber;
                      break;
            case '/': result = Math.trunc(romtoar_fnumber /             romtoar_snumber);
                      break;
                
        }//end of swtich statment
        
        //return empty string if result is zero or less than zero
        if(result <= 0){
            return "";        
        }else{
                //convert the result to roman number and return as string
                for(let k=0; k < combined_arr.length; k++){
                    if(result == k+1){
                        converted_result = combined_arr[k];
                        return converted_result;
                    }//end of if
                }//end of k for
            }//end of else
    }else{
        throw ("error, different number system is used at the same time");
    }//end of else
}//end of function

//calling the function
console.log(calculate(proc));

}catch(error){
     //printing the error msg thrown
     console.log(error);
}//end of try catch

