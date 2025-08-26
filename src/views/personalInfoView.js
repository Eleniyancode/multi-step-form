class PersonalInfoView {
  _parentElement = document.querySelector(".side-B");
  personalInfoData= {};

  render() {
    this._parentElement.innerHTML = `
      <div class="bg-white w-[95%] animate-fade-in mx-auto p-5 rounded-2xl -mt-15 lg:mt-0">
        <h1 class="font-bold text-2xl text-blue-900 mb-2">Personal info</h1>
        <p class="text-gray-400 mb-4">Please provide your name, email, address, and phone number.</p>
        
        <form id="info" class="personal-info flex flex-col gap-4">
        <div>
        <label class="flex flex-col cursor-pointer  gap-1">
        Name
        <span class="error error-name text-[10px]"></span>
          <input id="name" name="name" class="border-2 cursor-pointer hover:border-blue-300 border-gray-200 p-2" type="text" placeholder="e.g. Stephen King">
        </label>
        </div>

        <div>
        <label class="flex flex-col gap-1">
        Email Address
        <p class="error error-email text-[10px] text-red-600"></p>
          <input id="email" name="email" class="border-2 cursor-pointer hover:border-blue-300 border-gray-200 p-2" type="text" placeholder="e.g. stephen@lorem.com">
        </label>
        </div>

        <div>
        <label class="flex flex-col gap-1">
        Phone Number
        <p class="error error-phone-number text-[10px] text-red-600"></p>
          <input id="phone-number" name="phone-number" class="border-2 cursor-pointer hover:border-blue-300 border-gray-200 p-2" type="text" placeholder="e.g. +1 234 567 890">
        </label>
        </div>

        <div class="absolute lg:static bottom-0 w-[85%] flex justify-between items-center p-4 px-4 bg-white mx-auto">
          <p class="text-gray-400 cursor-pointer opacity-0">Go Back</p>
          <button type="submit" form="info" class="p-2 rounded bg-blue-950 text-white cursor-pointer hover:bg-blue-300">Next Step</button>
        </div>
      </form>
    </div>
    </div>
        `;
        
  }

  addHandlerSubmit(handler) {
    const form = document.querySelector('.personal-info');
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(form)
        this.personalInfoData = Object.fromEntries(formData.entries())
        const nameValue = form.querySelector('#name')
        const errorName = form.querySelector('.error-name')
        const emailValue = form.querySelector('#email')
        const errorEmail = form.querySelector('.error-email')
        const phoneNumberValue = form.querySelector('#phone-number')
        const errorPhonenumber = form.querySelector('.error-phone-number')
        if (nameValue.value === '') {
            errorName.textContent = 'Please input your name'
            errorName.style.color = 'red'
            nameValue.style.borderColor = 'red'
          setTimeout(() => {
            errorName.textContent = ''
            nameValue.style.borderColor = ''
          }, 2000)
          return
        }else if (emailValue.value === '') {
          errorEmail.textContent = "Please input your email"
          emailValue.style.borderColor = 'red'
          setTimeout(() => {
            errorEmail.textContent = ''
            emailValue.style.borderColor = ''
          }, 1000)
          return
        }else if (phoneNumberValue.value === '') {
          errorPhonenumber.textContent = "Please input your email"
          phoneNumberValue.style.borderColor = 'red'
          setTimeout(() => {
            errorPhonenumber.textContent = ''
            phoneNumberValue.style.borderColor = ''
          }, 1000)
          return
        }else{
          handler()
        } 
    })
  }
}


export default new PersonalInfoView();