const extraMemory = document.getElementById('extramemory-cost')
const storage = document.getElementById('extraStorage')
const delivery = document.getElementById('deliveryCharge')
const totalBalance = document.getElementById('grandTotal')
const totalBalanceText =totalBalance.innerText
const totalBalanceAmount = Number(totalBalanceText) 
const webTotal = document.getElementById('fullWebTotal')




function updateBalance(){
    const totalMemory = Number(extraMemory.innerText)
    const totalStorage = Number(storage.innerText)
    const totalDelivery = Number(delivery.innerText)
    const newUpdate =1200 + totalMemory + totalStorage + totalDelivery
    totalBalanceAmount + newUpdate
    totalBalance.innerText = totalBalanceAmount + newUpdate
    webTotal.innerText = totalBalanceAmount + newUpdate
}
 console.log(updateBalance)
// MEMORY 
const freeBtn = document.getElementById('eightGB')
const expressBtn = document.getElementById('16GB')

   freeBtn.addEventListener('click',function(){
    extraMemory.innerText = '0'
    updateBalance()
   })
   expressBtn.addEventListener('click',function(){
    extraMemory.innerText = '200'
    updateBalance()
   })
// STORAGE 
const freeStorage = document.getElementById('ssdFast')
const extraStorage = document.getElementById('ssdSecond')
const bigStorage = document.getElementById('ssdThird')

   freeStorage.addEventListener('click',function(){
        storage.innerText='0'
        updateBalance()
   })
   extraStorage.addEventListener('click',function (){
        storage.innerText='220'   
        updateBalance()    
   })
   bigStorage.addEventListener('click',function(){
        storage.innerText = '300'
        updateBalance()
   })
//  delivery option
const deliveryHelf = document.getElementById('halfDelivery')
const deliveryCost = document.getElementById('fullDelivery')
   deliveryHelf.addEventListener('click',function(){
    delivery.innerText = '20'
    updateBalance()
   })
   deliveryCost.addEventListener('click',function(){
    delivery.innerText = '100'
    updateBalance()
   })

