const myObject = document.getElementsByClassName("myObject")[0]
console.log(myObject)


const address ={
    Name: 'Okanda Research Centre',
    Street: {
        Line1: '680 Moi Drive, Umoja',
        Line2: 'Kayole-Spine Road'
    },
    City: 'Nairobi',
    Zipcode: '00100',
    Country: 'Kenya',
    Phone: {
        Tel: '+254785060403',
        Mobile: '0707240185'

    }

}

let vr = document.createElement("br");
const p = document.createElement("p")
let content = "";
function addressInformation(address){
    for (const key in address){
        if(typeof address[key] === "object"){
            content += `${key}:`; 
            for (const item in address[key]){ 
                console.log("item" + key)                                           
                content += `<p>${item}:  ${address[key][item]}</p>`;
                             
                
            }
            
        }

        else{                          
            content += `<p>${key}:  ${address[key]}</p>`;
            
        }

        }
        myObject.innerHTML = content;
        
        
            
        }
    
addressInformation(address);










