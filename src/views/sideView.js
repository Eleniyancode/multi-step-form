class SideView {
    _parentElement = document.querySelector('.side-A')
    renderStep() {
        this._parentElement.innerHTML = `
      <div
        class="flex justify-center animate-fade-in lg:justify-start lg:flex-col p-6 gap-4 w-[100%] h-[150px] lg:h-[100%] object-cover bg-[url(/assets/images/bg-sidebar-mobile.svg)] lg:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover bg-center"
      >
        <div class="flex gap-5 cursor-pointer hover:text-gray-200 step-one-btn">
          <p
            class=" w-10 h-10 flex justify-center  items-center text-black bg-blue-300 p-2 border-2 border-white rounded-full"
          >
            1
          </p>
          <p class="hidden lg:block text-white hover:text-gray-200 text-[12px]"><span>STEP 1</span><br />YOUR INFO</p>
        </div>

        <div class="flex gap-5 cursor-pointer step-two-btn">
          <p
            class="num w-10 h-10 flex justify-center items-center text-white p-2 border-2 border-white rounded-full"
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

    addHandlerStepOneBtnClick(handler) {
      this._parentElement.addEventListener('click', function(e) {
        const btn = e.target.closest('.step-one-btn') 
        if (!btn) return
        btn.style.color = 'black'
        btn.style.backgroundColor = 'hsl(80.9% 0.105 251.813)'
        handler()
      })
    }

        addHandlerStepTwoBtnClick(handler) {
      this._parentElement.addEventListener('click', function(e) {
        const btn = e.target.closest('.step-two-btn') 
        if (!btn) return
        const stepNumEl = btn.querySelector('.num')
        console.log(stepNumEl);
        console.log(btn);
        stepNumEl.style.color = 'black'
        stepNumEl.style.backgroundColor = 'oklch(0.809 0.105 251.813)'
        handler()
      })
    }

        addHandlerStepThreeBtnClick(handler) {
      this._parentElement.addEventListener('click', function(e) {
        const btn = e.target.closest('.step-three-btn') 
        if (!btn) return
        const stepNumEl = btn.querySelector('.num')
        console.log(stepNumEl);
        console.log(btn);
        stepNumEl.style.color = 'black'
        stepNumEl.style.backgroundColor = 'oklch(0.809 0.105 251.813)'        
        handler()
      })
    }

        addHandlerStepFourBtnClick(handler) {
      this._parentElement.addEventListener('click', function(e) {
        const btn = e.target.closest('.step-four-btn') 
        if (!btn) return
        const stepNumEl = btn.querySelector('.num')
        console.log(stepNumEl);
        console.log(btn);
        stepNumEl.style.color = 'black'
        stepNumEl.style.backgroundColor = 'oklch(0.809 0.105 251.813)'        
        handler()
      })
    }
}

export default new SideView();