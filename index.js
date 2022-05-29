document.getElementById('allin').addEventListener('click',()=>{
   
    
    document.getElementById("social").classList.toggle("active")
    allin.style.color="blue"
   
    
})
// document.getElementById('arrow').addEventListener('click',()=>{
//     console.log('start')
//     document.getElementById("arrowbar").classList.toggle("activearrow")
//     console.log('end')


// })
let changeIcon=function(icon){
    icon.classList.toggle('fa-times')

    document.getElementById("arrowbar").classList.toggle("activearrow")
}
