const menuItems = document.querySelectorAll('[data-menu-id]')
const submenuItems = document.querySelectorAll('[data-item]')
const addressItems = document.querySelectorAll('[data-point-id]')
const infoItems = document.querySelectorAll('[data-point-item]')
const accordionContainer = document.querySelector('.order__point-container')
const delayTime = 300

menuItems.forEach((item) => {
   item.addEventListener('click', () => {
      item.classList.toggle('_rotate')

      setTimeout(() => {

         submenuItems.forEach((submenuItem) => {
            if (item.dataset.menuId === submenuItem.dataset.item) {
               submenuItem.classList.toggle('_open')
            }
         })
      }, delayTime)
   })
});

addressItems.forEach((item) => {
   item.addEventListener('click', () => {
      item.classList.toggle('_rotate')
      accordionContainer.classList.toggle('_open')

      setTimeout(() => {

         infoItems.forEach((submenuItem) => {
            if (item.dataset.pointId === submenuItem.dataset.pointItem) {
               submenuItem.classList.toggle('_open')
            }
         })
      }, delayTime)
   })
});

console.log('Accordion is ready...')
