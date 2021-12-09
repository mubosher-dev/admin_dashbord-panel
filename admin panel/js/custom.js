window.addEventListener('DOMContentLoaded', () => {
    let sidebar = document.querySelector(".sidebar"); // sidebar
    let sidebarBtn = document.querySelector(".sidebarBtn"); // knopkasi sidebar active clasi qoshadigan
    sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
    // file yuklaydigan active klasiga ega bolish
    
    let fileSide = document.querySelectorAll('.fayl'),
    modalFile = document.querySelector('.absolute'),
    closeSide = document.querySelector('.closeBtn'),
    previewsSection = document.querySelector('.previews-wrapper');
    

    // FOREACH ORQALI MODALNIY OKNOGA ACTIVE CLASI QOSHILDI
    fileSide.forEach(items => {
        items.addEventListener('click', () => {
            modalFile.classList.add('active')
            previewsSection.classList.add('none')// PREVIEWS WRAPPERNING DISPLAY NONE QILINDI
        })
    })
    // closeBtn click bolganda modal oknoga none klasi qoshiladi
    closeSide.addEventListener('click', () => {
    modalFile.classList.remove('active');
    previewsSection.classList.remove('none')// PREVIEWS WRAPPERNING DISPLAY ACTIVE QILINDI
    });
    
    
    
    // pdffile reader input
    let pdfFile = document.querySelector('.pdfFile'), // pdffile inputti
    pdfParentSelector = document.querySelector('#reveiw'), // pdffile readerni ota onasi
    hides = document.querySelector('.hides'); // embed elementi pdffileni korish uchun
    
    
    hides.classList.remove('hide');
    // pdffileni brauzerdan olish uchun
    pdfFile.addEventListener('change', function() {
    const file = this.files[0]; //pdffilening birinchi indexsini olib oladi
    if(file){
    const reader = new FileReader();
    reader.onload = function() {
    var result = reader.result;
    let seaPdf = document.querySelector('.embedParent');
    // pdf file linkki focus bolganda bosha sahifaga otkazish
    seaPdf.addEventListener('click', () => { // HUJJAT KORUVCHI OYNA 
        let embed = seaPdf.querySelector('embed'); // EMBED TEGI PDF FILELAR UCHUN
        embed.src = result;
        embed.classList.add('active');
        embed.classList.remove('none');
        hides.classList.add('hide');
    
    hides.addEventListener('click', () => {
    embed.classList.remove('active');
    hides.classList.remove('hide');
    setTimeout(() => {
    embed.classList.add('none');
                        }, 100);
                    })
                });
             }
             reader.readAsDataURL(file);
            }
        });
    

 

  


    // dropdown hosil qilish
    let secondaryDropItems = document.querySelector('.drop_child'),
    secondDropBtn = document.querySelector('.secDropBtn');
    secondDrop = document.querySelector('.secDrop');

    let dropBtn = document.querySelector('#dropBtn'),// dropdown knopkkasi
    dropItems = document.querySelector('.drops');// dropItems
    // dropBtn click dropitems active classes
    dropBtn.addEventListener('click', () => {
    dropItems.classList.toggle('active');
    secondDropBtn.classList.toggle('margin_top')
    document.querySelector('.thirdDrop').classList.toggle('mt')
    })
       
    //tsecondary dropdown

 

    secondDropBtn.addEventListener('click', () => {
        secondaryDropItems.classList.toggle('active');
        document.querySelector('.thirdDrop').classList.toggle('margins');
    })


    let thirdDropBtn = document.querySelector('.thirdDrop');

    thirdDropBtn.addEventListener('click', () => {
        document.querySelector('.thDrop').classList.toggle('active')
    })

    // /*========================= NATIJA UCHUN TO DO APP QILINDI =======================================*/

    // let wrapper = document.querySelector('.previews'),// qoshadigan element
    // imgFileInp = document.querySelector('.img-file'),//rasm fayli inputi
    // objName = document.querySelector('.obj'),// tashkilpt nomi
    // lawName = document.querySelector('.law'),// law name
    // writeName = document.querySelector('.texts'),// jarima yozuvi
    // stopTime = document.querySelector('#vaqt'),// jarimagacha qolgan vaqt
    // btn = document.querySelector('#to-do');// to-do btn
    
    
    // btn.addEventListener('click', (e) => {
    // e.preventDefault();
    // let wrappers = document.createElement('div');
    // wrappers.classList.add('previews-wrapper');
    // wrappers.innerHTML = `
    // <div class="img">
    //     <img src="./images/g-1.jpg" alt="sxs" id="img">
    //     <img src="./images/g-1.jpg" alt="sxs">
    //     <img src="./images/g-1.jpg" alt="sxs">
    //     <img src="./images/g-1.jpg" alt="sxs">
    // </div>
    // <div class="heading">
    //     <h1 class="sarlavha">${objName.value}</h1>
    // </div>
    // <div class="qarorMaz">
    //     <p class="p">${writeName.value}</p>
    // </div>
    // <div class="pdf">
    //     <a href="#" class="parents fas fa-eye text-primary">
    //         <embed src="" class="embeds">
    //     </a>
    // </div>
    // <div class="qarorRaq">
    //     <h1>${lawName.value}</h1>
    // </div>
    // <div class="ijro">
    //     <h1>
    //         ijro etilishiga <br>
    //         <span id="oy">2 oy</span><br>
    //         <span id="kun">2 kun</span><br>
    //         qoldi
    //     </h1>
    // </div>
    // <span class="fas fa-times  red" id="minusBtn"></span>
    // `;
    
    // wrapper.append(wrappers)
    
    // })
    
    
   
    /*===========================             NATIJA TUGADI           ========================================*/
    
    });