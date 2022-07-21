import {user} from './arrays.js';
import {users_obj} from './objetos.js'

  //CAJA DONDE SE ENCUENTRA EL TEXTO DEL PROYECTO
  let title = document.querySelector('#conteiner-text');
  let info_usua = document.querySelector('#root')

  let anterior = document.querySelector('#anterior');
  let siguiente = document.querySelector('#siguiente');
  let bt_ver = document.querySelector('#bt_ver')



  let currentIndex = 0;
  title.innerHTML = user[currentIndex][1];

  /*******************************************************************
   * UTILIZANDO EL MÉTODO LENGHT, TRABAJANDO CON ONECLICK DESDE HTML,* 
  DETERMINANDO EL BOTÓN DE SIQUIENTE Y ANTERIOR, DANDO PROGRAMACIÓN  *
  CON FUNCTION
  *******************************************************************/
  function bt_siguiente(){

    if(currentIndex < user.length-1){
      currentIndex++;
    }
    title.innerHTML = user[currentIndex][1];   

  }
  
  function bt_anterior(){

    if(currentIndex > 0){
      currentIndex--;
    }

    title.innerHTML = user[currentIndex][1];

  }

anterior.addEventListener('click', bt_anterior);
siguiente.addEventListener('click', bt_siguiente);


  function visualizar(){
    info_usua.innerHTML = 
    '<h1 class="diseño">' + users_obj[currentIndex].name     + '</h1>' +
    '<h1 class="diseño2">' + users_obj[currentIndex].id       + '</h1>' +
    '<h1 class="diseño2">' + users_obj[currentIndex].nickname + '</h1>' +
    '<h1 class="diseño2">' + users_obj[currentIndex].password + '</h1>'+
    '<h1 class="diseño2">' + users_obj[currentIndex].address  + '</h1>'+
    '<h1 class="diseño2">' + users_obj[currentIndex].gmail    + '</h1>'+
    '<h1 class="diseño2">' + users_obj[currentIndex].phone    + '</h1>';
  }

bt_ver.addEventListener('click', visualizar);

