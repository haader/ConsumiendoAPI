
    let tarjeta=document.getElementById("item");
    let tarjetas=document.getElementById("allItem");
    let datos=document.getElementById("datos");

    fetch('https://pokeapi.co/api/v2/pokemon/ditto').
    then(res=>res.json()).
    then(data=>{

        tarjeta.innerHTML=`
        
        <img src="${data.sprites.front_default}" alt="">
            <h3 class="name">${data.name}</h3>
        
        
        `;
        console.log(data.name+" "+data.sprites.front_default);
        console.log(data);
    });

    for (let index = 90; index < 110; index++) {
        
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
        datos.innerHTML=`
        
        <p>habilidades:</p>
        `;
        for (let index = 0; index < data.abilities.length; index++) {
            
            datos.innerHTML+=`
        
            <p>-${data.abilities[index].ability.name}</p>
            `;
          
        }
        

        
        });

    };