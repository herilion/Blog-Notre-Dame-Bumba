// // Filter Js
$(document).ready(function() {
        $('.filter-item').click(function(){
            const value = $(this).attr('data-filter');

            if (value === 'all') {
                // Affiche tous les éléments ayant la classe '.post-box'
                $('.post-box').show('1000');
            } else {
                // Masque tous les éléments ayant la classe '.post-box'
                // qui n'ont pas la classe correspondant à 'value'
                $('.post-box').hide('1000');
                $('.post-box.' + value).show('1000');
            }
        });
        //  active btn
        $('.filter-item').click(function(){
            $(this).addClass('active-filter').siblings().removeClass('active-filter');
        });
    });
    // Header Background change on scroll
    let header=document.querySelector('header');

    window.addEventListener('scroll',()=>{
        header.classList.toggle('shadow',window.scrollY>0);
    })
   