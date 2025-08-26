class ConfirmationView {
  _parentElement = document.querySelector(".side-B");
  _sideBarEl = document.querySelector('.side-A');

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

  render() {
    this._parentElement.innerHTML = `
    <div class="bg-white animate-fade-in w-[95%] h-[100%] lg:flex lg:justify-center lg:flex-col lg:items-center  mx-auto p-5 rounded-2xl -mt-15 lg:mt-0">
      <div class="flex flex-col justify-center items-center">
        <img src="/assets/images/icon-thank-you.svg" alt="">
        <h1 class="text-blue-950 font-bold">Thank you!</h1>     
      </div>

      <div class="text-center">
        <p class="text-gray-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com</p>
      </div>    
    </div>  
    </div>
        `;
  }
}


export default new ConfirmationView();