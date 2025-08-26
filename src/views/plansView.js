class PlanView {
    _parentElement = document.querySelector('.side-B');
    _sideBarEl = document.querySelector('.side-A')
    planPrice;
    monthlyPlan = {};
    yearlyPlan = {};

    updateSideBar() {
      this._sideBarEl.innerHTML = `
      <div
        class="flex justify-center lg:justify-start animate-fade-in lg:flex-col p-6 gap-4 w-[100%] h-[150px] lg:h-[100%] object-cover bg-[url(/assets/images/bg-sidebar-mobile.svg)] lg:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover bg-center"
      >
        <div class="flex gap-5 cursor-pointer step-one-btn">
          <p
            class=" w-10 h-10 flex justify-center items-center p-2 border-2 border-white rounded-full"
          >
            1
          </p>
          <p class="hidden lg:block text-white hover:text-gray-200 text-[12px]"><span>STEP 1</span><br />YOUR INFO</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-two-btn">
          <p
            class="num w-10 h-10 flex justify-center text-black bg-blue-300 items-center p-2 border-2 border-white rounded-full"
          >
            2
          </p>
          <p class="hidden lg:block text-white hover:text-gray-200 text-[12px]"><span>STEP 2</span><br />SELECT PLAN</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-three-btn">
          <p
            class="num w-10 h-10 flex justify-center items-center text-white p-2 border-2 border-white rounded-full"
          >
            3
          </p>
          <p class="hidden lg:block text-white hover:text-gray-200 text-[12px]"><span>STEP 3</span><br />ADD-ONS</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-four-btn">
          <p
            class="num w-10 h-10 flex justify-center items-center text-white p-2 border-2 border-white rounded-full"
          >
            4
          </p>
          <p class="hidden lg:block text-white hover:text-gray-200 text-[12px]"><span>STEP 4</span><br />SUMMARY</p>
        </div>
      </div>
      `
    }
    render() {
        this._parentElement.innerHTML = `   
        <div class="bg-white w-[95%] animate-fade-in lg:h-[100%] lg:relative mx-auto p-5 rounded-2xl -mt-15 lg:mt-0">
        <h1 class="font-bold text-2xl text-blue-900 mb-2">Select your plan</h1>
        <p class="text-gray-400 mb-4">You have the option of monthly or yearly billing</p>
        
        <p class="error text-[10px] text-red-600"></p>
        <form id="form-plan" class="plan-monthly flex-col gap-10">
          <div class=" lg:flex lg:gap-5">
          <div class="mb-5 lg:flex lg:flex-col lg:w-1/3 lg:hover:bg-blue-50">
            <input id="arcade" value="Arcade" name="plan" data-price="9" class="peer sr-only" type="radio">
            <label for="arcade" class="monthly p-2 flex lg:flex-col lg:flex-1 lg:h-[140px] lg:justify-around lg:items-start items-center gap-3.5 hover:border-blue-400 rounded cursor-pointer border border-gray-200 peer-checked:border-blue-600">
              <img class="size-7" src="/assets/images/icon-arcade.svg" alt="">
              <div class="flex flex-col">
                <span class="text-blue-900 font-bold">Arcade</span>
                <span class="text-[12px] text-gray-400">$9/mo</span>
              </div>
            </label>
          </div>

          <div class="mb-5 lg:flex lg:flex-col lg:w-1/3 lg:hover:bg-blue-50">
            <input id="advanced" value="Advanced" data-price="12" name="plan" class="peer sr-only" type="radio">
            <label for="advanced" class="monthly p-2 flex lg:flex-col lg:flex-1 lg:h-[140px] lg:justify-around lg:items-start items-center gap-3.5 hover:border-blue-400 rounded cursor-pointer border border-gray-200 peer-checked:border-blue-600">
              <img class="size-7" src="/assets/images/icon-advanced.svg" alt="">
              <div class="flex flex-col">
                <span class="text-blue-900 font-bold">Advanced</span>
                <span class="text-[12px] text-gray-400">$12/mo</span>
              </div>
            </label>
          </div>

          <div class="mb-5 lg:flex lg:flex-col lg:w-1/3 lg:hover:bg-blue-50">
            <input id="pro" value="Pro" data-price="15" name="plan" class="peer sr-only" type="radio">
            <label for="pro" class="monthly p-2 flex lg:flex-col lg:flex-1  lg:h-[140px] lg:justify-around lg:items-start items-center gap-3.5 hover:border-blue-400 rounded cursor-pointer border border-gray-200 peer-checked:border-blue-600">
              <img class="size-7" src="/assets/images/icon-pro.svg" alt="">
              <div class="flex flex-col">
                <span class="text-blue-900 font-bold">Pro</span>
                <span class="text-[12px] text-gray-400">$15/mo</span>
              </div>
            </label>
          </div>
          </div>

          <div class="flex gap-6 mt-5 bg-blue-50 w-[100%] items-center justify-center p-1">
          <label for="monthly" class="cursor-pointer">
          <input id="monthly" checked value="monthly" name="duration" value="monthly" type="radio" class="sr-only peer"/>
          <p class="text-gray-400 font-bold peer-checked:text-blue-900">Monthly</p>
          </label>  
            <div class="plan-radio-switch w-10 h-5 rounded-2xl items-center bg-blue-900 p-1 flex">
              <span class="w-4 h-4 rounded-full bg-white"></span>
            </div>
            <label for="yearly" class="cursor-pointer">
          <input id="yearly" value="yearly" name="duration" type="radio" value="yearly" class="sr-only peer"/>
          <p class="text-gray-400 font-bold peer-checked:text-blue-900">Yearly</p>
          </label>
          </div>
          </form>
          
          <form id="form-plan" class="plan-yearly flex-col gap-10">
          <div class="lg:flex lg:gap-5">
          <div class="mb-2.5 lg:flex lg:flex-col lg:w-1/3 lg:hover:bg-blue-50">
          <input id="arcade-yearly" value="Arcade" data-price="90" name="plan" class="peer sr-only" type="radio">
          <label for="arcade-yearly" class="yearly flex lg:flex-col lg:flex-1  lg:h-[140px] lg:justify-around lg:items-start p-2 items-center gap-3.5 hover:border-blue-400 rounded cursor-pointer border border-gray-200 peer-checked:border-blue-600">
          <img class="size-7" src="/assets/images/icon-arcade.svg" alt="">
          <div class="flex flex-col">
          <span class="text-blue-900 font-bold">Arcade</span>
          <span class="text-[12px] text-gray-400">$90/mo</span>
          <span class="text-blue-800 text-[12px]">2 months free</span>
          </div>
          </label>
          </div>
          
          <div class="mb-2.5 lg:flex lg:flex-col lg:w-1/3 lg:hover:bg-blue-50">
          <input id="advanced-yearly" data-price="120" value="Advanced" name="plan" class="peer sr-only" type="radio">
          <label for="advanced-yearly" class="yearly flex lg:flex-col lg:flex-1 lg:h-[140px] lg:justify-around lg:items-start p-2 items-center gap-3.5 hover:border-blue-400 rounded cursor-pointer border border-gray-200 peer-checked:border-blue-600">
          <img class="size-7" src="/assets/images/icon-advanced.svg" alt="">
          <div class="flex flex-col">
          <span class="text-blue-900 font-bold">Advanced</span>
          <span class="text-[12px] text-gray-400">$120/mo</span>
          <span class="text-blue-800 text-[12px]">2 months free</span>
          </div>
          </label>
          </div>
          
          <div class="mb-2.5 lg:flex lg:flex-col lg:w-1/3 lg:hover:bg-blue-50">
          <input id="pro-yearly" data-price="150" value="Pro" name="plan" class="yearly peer sr-only" type="radio">
          <label for="pro-yearly" class=" p-2 items-center flex lg:flex-col lg:flex-1 lg:h-[140px] lg:justify-around lg:items-start gap-3.5 hover:border-blue-400 rounded cursor-pointer border border-gray-200 peer-checked:border-blue-600">
          <img class="size-7" src="/assets/images/icon-pro.svg" alt="">
          <div class="flex flex-col">
          <span class="text-blue-900 font-bold">Pro</span>
          <span class="text-[12px] text-gray-400">$150/mo</span>
          <span class="text-blue-800 text-[12px]">2 months free</span>
          </div>
          </label>
          </div>
          </div>

          <div class="flex gap-6 bg-blue-50 mt-5 items-center justify-center p-1">
          <label for="monthly">
          <input id="monthly" value="monthly" name="duration" value="monthly" type="radio" class="sr-only peer"/>
          <p class="text-gray-400 font-bold peer-checked:text-blue-900">Monthly</p>
          </label>  
            <div class="plan-radio-switch w-10 h-5 rounded-2xl items-center justify-end bg-blue-900 p-1 flex">
              <span class="w-4 h-4 rounded-full bg-white"></span>
            </div>
            <label for="yearly">
          <input id="yearly" value="yearly" checked name="duration" type="radio" value="yearly" class="sr-only peer"/>
          <p class="text-gray-400 font-bold peer-checked:text-blue-900">Yearly</p>
          </label>
          </div>
          </form>
          

        <div class="absolute bottom-0 w-[85%] lg:mt-10 flex justify-between items-center p-4 px-4 bg-white mx-auto">
          <p class="back-btn cursor-pointer text-gray-400 hover:text-black">Go Back</p>
          <button type="submit" form="form-plan" class="cursor-pointer hover:bg-blue-400 p-2 rounded bg-blue-950 text-white">Next Step</button>
        </div>
    </div>
        `
    }

    handleSwitchPlan() {
      const form = document.querySelector('.plan-monthly')
      const formYearly = document.querySelector('.plan-yearly')
      formYearly.classList.add('hidden')
      
      const radios = document.querySelectorAll("input[name='duration']")
      const planRadioSwitch = document.querySelector('.plan-radio-switch')
  
      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.checked) {
            if (radio.value === 'yearly') {
              formYearly.classList.remove('hidden')

              form.classList.add('hidden')
              
              planRadioSwitch.style.justifyContent = 'flex-end'
            } else if (radio.value === 'monthly') {
              form.classList.remove('hidden')
              
              formYearly.classList.add('hidden')
              planRadioSwitch.style.justifyContent = 'flex-start'
            }
          }
        })
      })

    }

    addhandlerPicked() {
    this._parentElement.addEventListener('click', (e) => {

    const inputChecked = e.target.closest('input[name="plan"]:checked')
    if (!inputChecked) return
    this.planPrice = inputChecked.dataset.price
    console.log(this.planPrice);
    })
        return this.planPrice
    }

    addHandlerSubmit(handler) {
    const formMonthly = this._parentElement.querySelector('.plan-monthly');
    const formYearly = this._parentElement.querySelector('.plan-yearly');
    const errorEl = this._parentElement.querySelector('.error')
    formMonthly.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(formMonthly)
        this.monthlyPlan = Object.fromEntries(formData.entries())
        const yearlyData = new FormData(formYearly)
        this.yearlyPlan = Object.fromEntries(yearlyData.entries())
        
        if(!this.monthlyPlan.plan && !this.yearlyPlan.plan) {
          console.log(this.monthlyPlan);
          errorEl.textContent = 'Please select either monthly or yearly plan';
          setTimeout(() => {
            errorEl.textContent = ''
          }, 1000)
          return
        }else handler()
      })

    formYearly.addEventListener('submit', function(e) {
      e.preventDefault()
      const YearlyData = new FormData(formYearly)
      const formYearlyData = Object.fromEntries(YearlyData.entries())
      handler()
    })
  }

  addHandlerBackBtnClick(handler) {
    const backBtn = this._parentElement.querySelector('.back-btn')
    if (!backBtn) return
    backBtn.addEventListener('click', function() {
        handler()
    })
  }
}

export default new PlanView();