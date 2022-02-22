let imagem = document.querySelectorAll('.container-slides img'),
    qtd = imagem.length,
    indexImg = 0;



    function anteriorSlide(){
      imagem[indexImg].classList.remove('selected')
      indexImg--
      

      if(indexImg <0){
        indexImg = qtd-1;
      }
      imagem[indexImg].classList.add('selected')
      console.log(indexImg)
    }


    function proximoSlide(){
      imagem[indexImg].classList.remove('selected')
      indexImg++

      if(indexImg > qtd-1){
        indexImg = 0;
      }
      imagem[indexImg].classList.add('selected')
      console.log(indexImg)
    }

