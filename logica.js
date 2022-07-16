
    let tarjeta=document.getElementById("item");
    let tarjetas=document.getElementById("allItem");
    let datos=document.getElementById("datos");
    let hability=document.getElementById("habilidades");
    let exp=document.getElementById("exp");
    let type=document.getElementById("type");
    
    
    
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').
    then(res=>res.json()).
    then(data=>{

        tarjeta.innerHTML=`
        
        <img src="${data.sprites.front_default}" alt="">
            <h3 class="name">${data.name}</h3>
        
        
        `;
        
    });

    for (let index = 1; index < 70; index++) {
        
        fetch('https://pokeapi.co/api/v2/pokemon/'+index).
        then(res=>res.json()).
        then(data=>{
            tarjetas.innerHTML+=`

            <div class="item" id="tarjetas">
            <img src="${data.sprites.front_default}" onclick="selecionar(`+index+`)" alt="">
            <h3 class="name">${data.name}</h3>
            </div>
            
            `;
        });
        
    }

    function selecionar(id){

        fetch('https://pokeapi.co/api/v2/pokemon/'+id).
        then(res=>res.json()).
        then(data=>{
            
            
        tarjeta.innerHTML=`
        
        <img src="${data.sprites.front_default}" alt="">
            <h3 class="name">${data.name}</h3>
        
        
        `;

        
        console.log(data);

            exp.innerHTML=``;
                
                    
                    exp.innerHTML+=`
                
                    <li>${data.base_experience}</li>
                    `;
                
                

                hability.innerHTML=``

                for (let index = 0; index < data.abilities.length; index++) {
                    
                    hability.innerHTML+=`
                
                    <li>${data.abilities[index].ability.name}</li>
                    `;
                
                }

                type.innerHTML=``;
                
                for (let index = 0; index < data.types.length; index++) {
                
                    type.innerHTML=`
                    
                    <li>${data.types[index].type.name}</li>
                    
                    `;
                    
                }
        

        
        });

    };