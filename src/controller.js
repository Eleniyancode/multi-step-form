import './style.css'
import * as model from './model.js'
import personalInfoView from './views/personalInfoView';
import plansView from './views/plansView';
import addOnsView from './views/addOnsView';
import summary from './views/summary';
import confirmationView from './views/confirmationView';
import sideView from './views/sideView.js';


function controlStepOne() {
    sideView.renderStep()
    personalInfoView.render();
}

let text;
function controlStepTwo() {
    // sideView.renderStep()
    plansView.updateSideBar()
    plansView.render()
    plansView.handleSwitchPlan()
    plansView.addHandlerSubmit(controlStepThree)
    plansView.addHandlerBackBtnClick(controlStepOne)

    plansView.addhandlerPicked();
    // console.log(plansView.planPrice);
    // model.formState.planPrice = plansView.planPrice;
    model.formState.personalInfo = personalInfoView.personalInfoData;
    console.log(model.formState.personalInfo);
}

// function controlHandleClick() {
    //     plansView.handlePicked()
    // }
    
    function controlStepThree() {
        // sideView.renderStep()
        addOnsView.updateSideBar()
        const monthlyDuration = plansView.monthlyPlan.duration
        if (monthlyDuration) addOnsView.render(monthlyDuration)
            addOnsView.addHandlerSubmit(controlStepFour);
        addOnsView.addHandlerBackBtnClick(controlStepTwo);    
        
        //getting info on month data and yearly data
        model.formState.monthlyPlan = plansView.monthlyPlan;
        model.formState.yearPlan = plansView.yearlyPlan;
        console.log(model.formState.monthlyPlan, model.formState.yearPlan);
        
        // console.log(plansView.planPrice);
        model.formState.planPrice = plansView.planPrice
        console.log(model.formState.planPrice);
}


function controlStepFour() {
    console.log(addOnsView.addOns);
    let addOnsValue = [];
    addOnsView.addOns.forEach(addOn => addOnsValue.push(addOn.addOn));
    console.log(addOnsValue);
    let addOnsPrice = [];
    addOnsView.addOns.forEach(addOn => addOnsPrice.push(addOn.price));
    let totalAddOnsPrice = addOnsPrice.reduce((acc, curr) => acc + Number(curr), 0)
    console.log(totalAddOnsPrice);

    const planType = model.formState.monthlyPlan.duration
    const monthlyplan = model.formState.monthlyPlan.plan
    const yearlyPlan = model.formState.yearPlan.plan
    const yearlyDuration = model.formState.yearPlan.duration
    const planPrice = model.formState.planPrice
    totalAddOnsPrice += Number(planPrice)  
    if (planType === 'monthly') {
        // sideView.renderStep()
        summary.updateSideBar()
        summary.render(planType, monthlyplan, addOnsValue, totalAddOnsPrice);

    }else if (planType === 'yearly') {
        // console.log(addOns);
        // sideView.renderStep()
        summary.updateSideBar()
        summary.render(planType, yearlyPlan, addOnsValue, totalAddOnsPrice)
    }
    summary.addHandlerSubmit(controlFinalStep);
    summary.addHandlerBackBtnClick(controlStepThree);
    summary.addHandlerChangeBtnClick(controlStepTwo)

    //getting addons data
    model.formState.addsOnYearly = addOnsView.addOns
    console.log(model.formState.addsOnYearly)
}

function controlFinalStep() {
 confirmationView.updateSideBar()   
 confirmationView.render()
}

function init() {
    // sideView.renderStep()
    controlStepOne()
    personalInfoView.addHandlerSubmit(controlStepTwo);
    sideView.addHandlerStepOneBtnClick(controlStepOne)
    sideView.addHandlerStepTwoBtnClick(controlStepTwo)
    sideView.addHandlerStepThreeBtnClick(controlStepThree)
    sideView.addHandlerStepFourBtnClick(controlStepFour)
}

init()