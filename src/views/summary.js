class Summary {
    _parentElement = document.querySelector('.side-B');
    _sideBarEl = document.querySelector('.side-A')
    _addOnsArray = Array.from(document.querySelectorAll('.addOns'))
    // constructor() {
    //   this._getTotalAddOns()
    // }
    updateSideBar() {
      this._sideBarEl.innerHTML = `
       <div
        class="flex justify-center lg:justify-start lg:flex-col p-6 gap-4 w-[100%] h-[150px] lg:h-[100%] object-cover bg-[url(/assets/images/bg-sidebar-mobile.svg)] lg:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover bg-center"
      >
        <div class="flex gap-5 cursor-pointer step-one-btn">
          <p
            class=" w-10 h-10 flex justify-center items-center p-2 border-2 border-white rounded-full"
          >
            1
          </p>
          <p class="hidden lg:block text-white text-[12px]"><span>STEP 1</span><br />YOUR INFO</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-two-btn">
          <p
            class="num w-10 h-10 flex justify-center  items-center p-2 border-2 border-white rounded-full"
          >
            2
          </p>
          <p class="hidden lg:block text-white text-[12px]"><span>STEP 2</span><br />SELECT PLAN</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-three-btn">
          <p
            class="num w-10 h-10 flex justify-center items-center text-white p-2 border-2 border-white rounded-full"
          >
            3
          </p>
          <p class="hidden lg:block text-white text-[12px]"><span>STEP 3</span><br />ADD-ONS</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-four-btn">
          <p
            class="num w-10 h-10 flex justify-center text-black bg-blue-300 items-center p-2 border-2 border-white rounded-full"
          >
            4
          </p>
          <p class="hidden lg:block text-white text-[12px]"><span>STEP 4</span><br />SUMMARY</p>
        </div>
      </div>
      `
    }
    render(planType, plan, addOns) {
        this._parentElement.innerHTML = `
        ${planType === 'monthly' ?
          `
          <div class="bg-white animate-fade-in w-[95%] lg:h-[100%] lg:relative mx-auto p-5 rounded-2xl -mt-15 lg:mt-0">
        <h1 class="font-bold text-2xl text-blue-900 mb-2">Finishing up</h1>
        <p class="text-gray-400 mb-4">Double-check everything looks OK before confirming</p>
        
        <div class="bg-gray-100 p-4 rounded">
          <div class="flex justify-between items-center border-b border-b-gray-300 pb-2">
            <div>
              <p class="text-blue-600 font-bold">${plan} <span>(Monthly)</span></p>
              <button class="underline text-gray-400">Change</button>
            </div>
             <p class="text-blue-900 font-bold">$${
              plan === 'Arcade' ? 9 :
              plan === 'Advanced' ? 12 :
              plan === 'Pro' ? 15 : ''}/mo</p>
          </div>

          <div class="flex flex-col gap-5 pt-2">
              ${addOns.map(addOn => {
                return `<p class="flex justify-between">
                  <span class="text-gray-400">${addOn}</span>
                  <span class="text-blue-800 font-bold">+$${
                    addOn === 'Online-service' ? 1 :
                    addOn === 'Large-storage' ? 2 :
                    addOn === 'Customizable profile' ? 2 : ''
                  }/mo</span>
                </p>    
                `
              }).join('')}
          </div>

        </div>
        <div class="mt-8 flex justify-between px-5">
          <p class="text-gray-400">Total(per month)</p>
          <p class="text-blue-900 font-bold">+$12/mo</p>
        </div>

        <div class="absolute bottom-0 w-[85%] flex justify-between items-center p-4 px-4 bg-white mx-auto">
          <p class="back-btn text-gray-400 cursor-pointer">Go Back</p>
          <button class="p-2 confirm-btn rounded cursor-pointer bg-blue-600 text-white">Confirm</button>
        </div>
    </div>
          `
          :
          planType === 'yearly' ?
          `          <div class="bg-white w-[95%] animate-fade-in lg:h-[100%] lg:relative mx-auto p-5 rounded-2xl -mt-15 lg:mt-0">
        <h1 class="font-bold text-2xl text-blue-900 mb-2">Finishing up</h1>
        <p class="text-gray-400 mb-4">Double-check everything looks OK before confirming</p>
        
        <div class="bg-gray-100 p-4 rounded">
          <div class="flex justify-between items-center border-b border-b-gray-300 pb-2">
            <div>
              <p class="text-blue-600 font-bold">${plan} <span>(Yearly)</span></p>
              <button class="underline text-gray-400">Change</button>
            </div>
            <p class="text-blue-900 font-bold plan">$${
              plan === 'Arcade' ? 90 :
              plan === 'Advanced' ? 120 :
              plan === 'Pro' ? 150 : ''}/yr</p>
          </div>

          <div class="flex flex-col gap-5 pt-2">
          ${addOns.map(addOn => {
                return `<p class="flex justify-between">
                  <span class="text-gray-400">${addOn}</span>
                  <span class="text-blue-800 font-bold addOns">+$${
                    addOn === 'Online-service' ? 10 :
                    addOn === 'Large-storage' ? 20 :
                    addOn === 'Customizable profile' ? 20 : ''
                  }/yr</span>
                </p>    
                `
              }).join('')}
          </div>
        </div>
        <div class="mt-8 flex justify-between px-5">
          <p class="text-gray-400">Total(per year)</p>
          <p class="text-blue-900 font-bold">+$<span class="total"></span>/yr</p>
        </div>

        <div class="absolute bottom-0 left-5 w-[85%] flex justify-between items-center p-4 px-4 bg-white mx-auto">
          <p class="back-btn text-gray-400 cursor-pointer">Go Back</p>
          <button class="p-2 confirm-btn rounded cursor-pointer bg-blue-600 text-white">Confirm</button>
        </div>
    </div>
          ` : ``
        } `
    }

    addHandlerSubmit(handler) {
    this._parentElement.addEventListener('click', function(e) {
        const confirmBtn = e.target.closest('.confirm-btn')
        if (!confirmBtn) return
        confirmBtn.addEventListener('click', function() {
            console.log('form Sumbitted');
            handler()
        })
    });
  }

  addHandlerBackBtnClick(handler) {
    const backBtn = this._parentElement.querySelector('.back-btn')
    if (!backBtn) return
    backBtn.addEventListener('click', function() {
        handler()
    })
  }

  getTotal() {
    const addOnsArray = Array.from(this._parentElement.querySelectorAll('.addOns'))
    const addOnsValue = addOnsArray.map(addOn => addOn.textContent).reduce((acc, curr) => acc + Number(curr), 0)
    console.log(addOnsArray, addOnsValue);
    const totalEl = this._parentElement.querySelector('.total')
    const planEl = this._parentElement.querySelector('.plan')
    console.log(totalEl, planEl);
  }

}

export default new Summary();