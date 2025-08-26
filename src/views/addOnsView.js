class AddOnsView {
    _parentElement = document.querySelector('.side-B');
    _sideBarEl = document.querySelector('.side-A')
    addOns = [];

    constructor() {
      this._parentElement.addEventListener('click', function(e) {
        const labelEl = e.target.closest('label')
        if (!labelEl) return
        labelEl.style.borderColor = 'blue'
      })
    }

    updateSideBar() {
      this._sideBarEl.innerHTML = `
        <div
        class="flex justify-center animate-fade-in lg:justify-start lg:flex-col p-6 gap-4 w-[100%] h-[150px] lg:h-[100%] object-cover bg-[url(/assets/images/bg-sidebar-mobile.svg)] lg:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover bg-center"
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
            class="num w-10 h-10 flex justify-center items-center text-black bg-blue-300 p-2 border-2 border-white rounded-full"
          >
            3
          </p>
          <p class="hidden lg:block text-white text-[12px]"><span>STEP 3</span><br />ADD-ONS</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-four-btn">
          <p
            class="num w-10 h-10 flex justify-center items-center text-white p-2 border-2 border-white rounded-full"
          >
            4
          </p>
          <p class="hidden lg:block text-white text-[12px]"><span>STEP 4</span><br />SUMMARY</p>
        </div>
      </div>
      `
    }

    render(planType) {
        this._parentElement.innerHTML = `    
        <div class="bg-white w-[95%] lg:h-[100%] animate-fade-in lg:relative mx-auto p-5 rounded-2xl -mt-15 lg:mt-0">
        <h1 class="font-bold text-2xl text-blue-900 mb-2">Pick add-ons</h1>
        <p class="text-gray-400 mb-4">Add-ons help enhance your gaming experience</p>
    ${
      planType === 'monthly' ? 
      `<form class="form-monthly flex flex-col gap-4">
          <label for="online-service" class="flex gap-4 items-center hover:border p-2 hover:border-blue-500 peer-checked:border-blue-600 border-gray-300 rounded border">
          <input id="online-service" name="addOns" data-price="1" value="Online-service" class="sr-only peer" type="checkbox">
          <div class="peer-checked:bg-blue-800 p-1.5 rounded">
            <img src="/assets/images/icon-checkmark.svg" alt="">
          </div>
          <div class="flex justify-between items-center w-[90%]">
            <div class="flex flex-col text-blue-700">
              <p class="block font-bold">Online service</p>
              <p class="text-[12px] text-gray-500">Access to multiplayer games</p>
            </div>
            <p class="text-blue-400">+$1/mo</p>
          </div>
        </label>

        <label for="large-storage" class="flex gap-4 items-center hover:border p-2 hover:border-blue-500 peer-checked:border-blue-600 border-gray-300 rounded border">
          <input id="large-storage" name="addOns" data-price="2" value="Large-storage" class="sr-only peer" type="checkbox">
          <div class="peer-checked:bg-blue-800 p-1.5 rounded">
            <img src="/assets/images/icon-checkmark.svg" alt="">
          </div>
          <div class="flex justify-between items-center w-[90%]">
            <div class="flex flex-col text-blue-700">
              <p class="block font-bold">Large storage</p>
              <p class="text-[12px] text-gray-400">Extar 1TB of cloud save</p>
            </div>
            <p class="text-blue-400">+$2/mo</p>
          </div>
        </label>

        <label for="customizable-profile" class="flex gap-4 items-center hover:border p-2 hover:border-blue-500 peer-checked:border-blue-600 border-gray-300 rounded border">
          <input id="customizable-profile" data-price="2" name="addOns" value="Customizable profile" class="sr-only peer" type="checkbox">
          <div class="peer-checked:bg-blue-800 p-1.5 rounded">
            <img src="/assets/images/icon-checkmark.svg" alt="">
          </div>
          <div class="flex justify-between items-center w-[90%]">
            <div class="flex flex-col text-blue-700">
              <p class="block font-bold">Customizable profile</p>
              <p class="text-[12px] text-gray-400">Custom theme on your profile</p>
            </div>
            <p class="text-blue-400">+$2/mo</p>
          </div>
        </label>

        <div class="absolute bottom-0 w-[85%] flex justify-between items-center p-4 px-4 bg-white mx-auto">
          <p class="text-gray-400 cursor-pointer hover:text-black back-btn">Go Back</p>
          <button class="p-2 rounded cursor-pointer hover:bg-blue-400 bg-blue-950 text-white">Next Step</button>
        </div>
      </form>
    </div>`
    :
    `
    <form class="form-yearly flex flex-col gap-4">
          <label for="online-service" class="flex gap-4 items-center hover:border p-2 hover:border-blue-500 peer-checked:border-blue-600 border-gray-300 rounded border">
          <input id="online-service" name="addOns" data-price="10" value="Online-service" class="sr-only peer" type="checkbox">
          <div class="peer-checked:bg-blue-800 p-1.5 rounded">
            <img src="/assets/images/icon-checkmark.svg" alt="">
          </div>
          <div class="flex justify-between items-center w-[90%]">
            <div class="flex flex-col text-blue-700">
              <p class="block font-bold">Online service</p>
              <p class="text-[12px] text-gray-500">Access to multiplayer games</p>
            </div>
            <p class="text-blue-400">+$10/yr</p>
          </div>
        </label>

        <label for="large-storage" class="flex gap-4 items-center hover:border p-2 hover:border-blue-500 peer-checked:border-blue-600 border-gray-300 rounded border">
          <input id="large-storage" name="addOns" data-price="20" value="Large-storage" class="sr-only peer" type="checkbox">
          <div class="peer-checked:bg-blue-800 p-1.5 rounded">
            <img src="/assets/images/icon-checkmark.svg" alt="">
          </div>
          <div class="flex justify-between items-center w-[90%]">
            <div class="flex flex-col text-blue-700">
              <p class="block font-bold">Large storage</p>
              <p class="text-[12px] text-gray-400">Extar 1TB of cloud save</p>
            </div>
            <p class="text-blue-400">+$20/yr</p>
          </div>
        </label>

        <label for="customizable-profile" class="flex gap-4 items-center hover:border p-2 hover:border-blue-500 peer-checked:border-blue-600 border-gray-300 rounded border">
          <input id="customizable-profile" name="addOns" data-price="20" value="Customizable profile" class="sr-only peer" type="checkbox">
          <div class="peer-checked:bg-blue-800 p-1.5 rounded">
            <img src="/assets/images/icon-checkmark.svg" alt="">
          </div>
          <div class="flex justify-between items-center w-[90%]">
            <div class="flex flex-col text-blue-700">
              <p class="block font-bold">Customizable profile</p>
              <p class="text-[12px] text-gray-400">Custom theme on your profile</p>
            </div>
            <p class="text-blue-400">+$20/yr</p>
          </div>
        </label>

        <div class="absolute bottom-0 w-[85%] flex justify-between items-center p-4 px-4 bg-white mx-auto">
          <p class="text-gray-400 cursor-pointer back-btn">Go Back</p>
          <button class="p-2 rounded cursor-pointer bg-blue-950 text-white">Next Step</button>
        </div>
      </form>
    </div>
    `
    }`
    }

    addHandlerSubmit(handler) {
    const form = this._parentElement.querySelector('.form-yearly');
    const formMonthly = this._parentElement.querySelector('.form-monthly'); 
    
    if(formMonthly) {
      formMonthly.addEventListener('submit', (e) => {
        e.preventDefault()
        const checkboxes = formMonthly.querySelectorAll('input[name="addOns"]:checked')
        checkboxes.forEach(cb => {
          const labelEl = cb.closest('label');
          console.log(labelEl);
          labelEl.style.borderColor = 'blue'
        })
        this.addOns = Array.from(checkboxes).map(cb => {
           return {addOn: cb.value, price: cb.dataset.price }
      })
        // console.log(addOns);
        handler()
      })
    }else if (form) {
      // if (!form) return
      form.addEventListener('submit', (e) => {
          e.preventDefault()
          const checkboxes = form.querySelectorAll('input[name="addOns"]:checked')
          this.addOns = Array.from(checkboxes).map(cb => {
            return {addOn: cb.value, price: cb.dataset.price}
          })
          // console.log(addOns);
          handler()
        })
    }
  }

    addHandlerBackBtnClick(handler) {
    const backBtn = this._parentElement.querySelector('.back-btn')
    if (!backBtn) return
    backBtn.addEventListener('click', function() {
        handler()
    })
  }
}

export default new AddOnsView();