


let name11 = [];


for(let i=0; i<5; i++){
    name11[i]=Number(prompt('type your number'))
    }
  

    


let ll = name11.length;
let ki = prompt('what you want to do +, -, *, /');

let sum = 0;
let sum1 = 1;


if(ki == '+'){

    for(let i=0; i<ll; i++){

        
        sum = sum + name11[i];
        
    }
    confirm(`${name11.join(' + ')}`);
    alert(`Total= ${sum}`);
    
    
    
}else if( ki == '-'){

    for(let i=0; i<ll; i++){

        
        sum = sum - name11[i];
    }
    confirm(`${name11.join(' - ')}`);
    alert(`Total= ${sum}`);

}else if( ki == '*'){

   
    for(let i=0; i<ll; i++){

        
        sum1 = sum1 * name11[i];
    }
    confirm(`${name11.join(' * ')}`);
    alert(`Total= ${sum1.toFixed(3)}`);

}else if( ki == '/'){
    
    for(let i=0; i<ll; i++){

    
        sum1 = sum1 / name11[i];
    }
    confirm(`${name11.join(' / ')}`);
    alert(`Total= ${sum1.toFixed(3)}`);

}else{
    alert('you input wrong data')
}



