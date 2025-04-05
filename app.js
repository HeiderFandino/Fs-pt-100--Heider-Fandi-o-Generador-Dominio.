
  //write your code here

  const pronombres  = ["El", "Los", "Nosotros" ];

  const adj         = ["Grande", "fuerte", "hermosa" ];

  const verbos      = ["Crea", "baila", "pinta"];

  const dominios    = [ ".com", ".oi", ".net"];
    


console.warn("Usando For")

for ( let i = 0; i < pronombres.length; i++ ){
  for ( let l = 0; l < adj.length; l++ ){
    for (let j = 0; j < verbos.length; j++){
      for (let t = 0; t < dominios.length; t++){

        console.log (pronombres[i] + adj[l] + verbos[j] + dominios[t]);


      }
    }
  }
}
 





