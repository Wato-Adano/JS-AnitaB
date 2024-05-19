const personAge = (age) =>{
    if(age>= 18){
        console.log('You are an adult');

    }
    else if(age > 13 && age < 18){
        console.log('You are a teenager');
    }
    else{
        console.log('You are a child');
    }
};
personAge(10);


const greeting =(dayOfWeek) =>{
    switch(dayOfWeek){
        case "Monday":
            console.log("Hello Monday");
            break;

            case "Tuesday":
                console.log("Hello Tuesday")
                break;

                case "Wensday":
                    console.log("Hello Wensday")
                    break;

                    case "Thursday":
                    console.log("Hello Thursday")
                    break;

                    case "Friday":
                        console.log("Hello Friday")
                        break;

            
                    console.log("Hello Friday")
                    break;
                    case "Suturday":
                        console.log("Hello Suturday")
                        break;

                        case "Sunday":
                            console.log("Hello Sunday")
                            break; 

    }
};
greeting('Wensday')