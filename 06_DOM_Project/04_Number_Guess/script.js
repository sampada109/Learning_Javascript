const message = document.querySelector('.message')
const submit = document.querySelector('#submit')

//attempslist
let previous = document.querySelector('#remaining')
let previous_list = []
let remaining = parseInt(document.querySelector('#remaining').innerHTML)
console.log(remaining)

if(remaining > 0){

    submit.addEventListener('click', function(e){
        const start = parseInt(document.querySelector('#start').value)
        const end = parseInt(document.querySelector('#end').value)
        const check = parseInt(document.querySelector('#check').value)

        console.log(`start - ${start}`)
        console.log(`end - ${end}`)
        console.log(`check - ${check}`)
        
        //checking valid input
        if(isNaN(start) || isNaN(end) || isNaN(check) || start === '' || end ==='' || check===''){
            alert("Please Enter Valid Input")
            return;
        }
        
        //random number between a range
        const random = Math.floor(Math.random()*(start-end + 1) + start)
        console.log(`random - ${random}`)
        
        //check 
        if(check === random){
            message.style.display = 'block';
            message.style.backgroundColor = 'red';
            message.style.color = 'white';
            message.innerHTML = '<h2> You Lost ! </h2> <p> All Attemps are finished. <p>'
            return;
        }
    
        remaining = remaining - 1
        previous_list.push(check)
        
        remaining.innerHTML = remaining
        previous.innerHTML = previous_list
        
        console.log(`remaining - ${remaining}`)
        console.log(`previous - ${previous}`)
    })

}
else{
    message.style.display = 'block';
    message.style.backgroundColor = 'red';
    message.style.color = 'white';
    message.innerHTML = '<h2> You Lost ! </h2> <p> All Attemps are finished. <p>'
}


