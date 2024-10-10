if (!CSS.supports('animation-timeline: scroll()')){
  console.log('不支持 animation-timeline')
  const bg = document.querySelector('.reel-bg')
  window.addEventListener('scroll',function(){
    bg.style.transform = `translateY(${this.scrollY / Math.PI % 184 / 368 * 100 - 80}%)`
  })
}