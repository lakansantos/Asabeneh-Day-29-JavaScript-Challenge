//Validations
let users=[];


formValidation = () =>{
    let inputs = document.querySelectorAll('input')
    let addButton = document.querySelector('.addButton')
    let errors = document.querySelectorAll('.error')





    addButton.addEventListener('click', function(e){
        for(let i = 0; i<inputs.length; i++){
            if(inputs[i].value === null|| inputs[i].value ===''||inputs[i].value===undefined){
                errors[i].innerText = 'Please input all fields'
                inputs[i].style.border = ' 2px solid rgb(179, 29, 29)';
                inputs[i].style.outline = 'none';
                
            }

            else{
                errors[i].innerText=''
                inputs[i].style.borderColor = '#2980b9';
            }
          

           
        }
     
    
        let regex = /\d+/;

       
        if(regex.test(inputs[0].value)){
            errors[0].innerText = 'Please input a valid name'
            errors[0].style.visibility ='visible'
            inputs[2].style.border = '2px solid rgb(179, 29, 29)';
            inputs[2].style.outline = 'none';
        }


        if(regex.test(inputs[1].value)){
            errors[1].innerText = 'Please input a valid name'
            errors[1].style.visibility ='visible'
            inputs[2].style.border = '2px solid rgb(179, 29, 29)';
            inputs[2].style.outline = 'none';
        }


        let countriesArr = [];
        for(let country of countries){

            countriesArr.push(country.name)
            

        }
      
       
        let inputVal = inputs[2].value.toLocaleUpperCase();
       
        let formattedCountries =[];
        for(let i = 0; i<countriesArr.length; i++){
           if(inputVal===countriesArr[i].toUpperCase()){
            formattedCountries.push(countriesArr[i])
           }
        
        }
        console.log(formattedCountries)
        let flag = 0; 
        if(formattedCountries.length===0){
                errors[2].innerText="Country do not exist"
                inputs[2].style.borderColor = 'red';
                flag = 1; 
            }
        
        
  
    if(inputs[0].value&&inputs[1].value&&inputs[2].value&&inputs[3].value&&flag===0){
        
       
        users.push({
            fname: inputs[0].value,
            lname: inputs[1].value,
            country: inputs[2].value,
            playerScore: Number(inputs[3].value),
            dateCreated: dates()
        })
  
        
        

        let details =''
        let detailsContainer = document.createElement('div')
        detailsContainer.className = 'detailsContainer'
        let sorted = users.sort((a, b)=> b.playerScore - a.playerScore)
   

        for(let i = 0; i<sorted.length; i++){

            let wrapper = document.querySelector('.wrapper')
            wrapper.append(detailsContainer)
            
        }
        let detailsContainers = [...document.querySelectorAll('.detailsContainer')]

        
        
        for (let i = 0; i<sorted.length; i++){
   
            details = `
          
            <div class="nameDate">
                <p class="name">${sorted[i].fname.toUpperCase()} ${sorted[i].lname.toUpperCase()}</p>
                <p class="date">${sorted[i].dateCreated}</p>
            </div>
            <p class="country">${sorted[i].country.toUpperCase()}</p>
            <p class="score">${sorted[i].playerScore}</p>
            <div class="toggleContainer">
                <button class="minus5">-</button>
                <button class="add5">+</button>
                <button class="deleteButton"><img src="src/img/delete.png" alt="delete icon" class="deleteIcon"></button>
    
            </div>
    
            </div>
            `;
           
            
            detailsContainers[i].innerHTML = details;

          
        }
        let minus = document.querySelectorAll('.minus5');
        let add   = document.querySelectorAll('.add5');
        let del   = document.querySelectorAll('.deleteButton');
        // detailsContainers.innerHTML=''
        console.log(sorted)
            
        let storeMinus = []
        let storeDetails = []
        let scores = [...document.querySelectorAll('.score')]
        for(let i = 0; i<minus.length; i++){

            storeMinus.push(minus)
            storeDetails.push(detailsContainers[i])
            minus[i].addEventListener('click', function(e){
                let index = 0;
                if(storeMinus.indexOf(i)===storeDetails.indexOf(i)){
                    for(let a = 0; a<sorted.length; a++){
                        index = a;
                        
                    }
            }
            scores[i].innerText =  sorted[index].playerScore-=5;
        })
        }
                
       let storeAdd = [];
       let addDetailsArr = [];  
    
       for(let i = 0; i<add.length; i++){
      

            storeAdd.push(add)
            addDetailsArr.push(detailsContainers[i])
            add[i].addEventListener('click', function(e){
                let index = 0;
                if(storeAdd.indexOf(i)===addDetailsArr.indexOf(i)){
                    for(let a = 0; a<sorted.length; a++){
                        index = a;
                        
                }
            }        
            scores[i].innerText = sorted[index].playerScore+=5;     
            })
            
        
       }
       let storeDel = [];
       let deleteDetails = [];

       let wrapper = document.querySelector('.wrapper')
       console.log(wrapper)
       for(let i = 0; i<del.length; i++){
            storeDel.push(del); 
            deleteDetails.push(detailsContainers[i])
            
            del[i].addEventListener('click', function(e){
                let index = 0;
                for(let a=0; a<sorted.length; a++){
                    if(storeDel.indexOf(i)===deleteDetails.indexOf(i)){
                        index = a; 
                        wrapper.removeChild(detailsContainers[i])
                        sorted.splice(index, 1)
                        console.log(index)
                        console.log(sorted)
                      
                    }
                }
                })

       }
    }
        
  
    })



}

formValidation()


dates = ()=>{
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date();
    let monthIndex = date.getMonth()
    const day = date.getDate();
    const year = date.getFullYear()
    const hours = date.getHours(); 
    const minutes =date.getMinutes();
    const seconds = date.getSeconds()
    
    if(hours>12){
        formattedHours = `0${hours-12}`;
    }
   
    else{
        formattedHours= hours
    }

    if(minutes<10){
        formattedMinutes = `0${minutes}`
    }
    else{
        formattedMinutes = minutes
    }
    
    if(seconds<10){
        formattedSeconds = `0${seconds}`
    }
    else{
        formattedSeconds = seconds
    }

    for(let i = 0; i<months.length; i++){
         monthNow =  months[monthIndex]
    }
    const dateToday = `${monthNow} ${day}, ${year}  ${formattedHours}:${formattedMinutes}:${formattedSeconds}`

   return dateToday


}