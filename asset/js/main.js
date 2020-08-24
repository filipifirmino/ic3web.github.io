let foto = "<img src = 'asset/image/eu.jpeg'/>"

function picture(){
    popup = window.open('', 'pagina', "width=250 height=250")
    popup.document.write (foto)
}

let type = ['jobs1','jobs2','jobs3','jobs4']
let trampo = ['<span class="title">Salão de beleza</span>', '<span class="title">Low Garden</span>', '<span class="title">Portal de noticias</span>', '<span class="title">Meu Personal</span>']
function writeJob (job){
   for (var i = 0; i<job.length; i++){
       for (var i=0; i<trampo.length; i++){
        document.getElementById(job[i]).innerHTML = trampo[i]
       }
       
   }
   
}

writeJob(type)