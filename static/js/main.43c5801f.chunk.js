(window["webpackJsonpwhat-time-go-to-bed"]=window["webpackJsonpwhat-time-go-to-bed"]||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},40:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),s=a.n(c),l=a(4),r=a(5),o=a(7),d=a(6),m=a(8),u=a(11),h=a(17),v=(a(38),a(2)),p=a.n(v);a(39);function S(e){return i.a.createElement("div",null,e.data.name," ",e.data.time)}a(40);var f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={showAddActivities:!1,name:"",time:""},a.handleNewActivityTitle=function(e){a.setState({name:e.target.value})},a.handleNewActivityTime=function(e){a.setState({time:e.target.value})},a.displayAddActivityInputClick=function(e){a.setState({showAddActivities:!0})},a.hideForm=function(){a.setState({showAddActivities:!1})},a.handleAdd=function(){a.inputActivityTitle.value="",a.inputActivityTime.value="";var e=a.state,t=e.name,n=e.time;a.props.onAdd(t,n),a.hideForm()},a.handleNo=function(){a.props.onNo()},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return!0===this.state.showAddActivities?i.a.createElement("section",{className:"add-activity-section"},i.a.createElement("div",null,"Title"),i.a.createElement("input",{className:"add-activity-first-input",onChange:this.handleNewActivityTitle,ref:function(t){return e.inputActivityTitle=t},type:"text"}),i.a.createElement("div",null,"Time (in minutes)"),i.a.createElement("input",{className:"add-activity-last-input",onChange:this.handleNewActivityTime,ref:function(t){return e.inputActivityTime=t},type:"number"}),i.a.createElement("div",null,i.a.createElement(p.a,{onClick:this.handleAdd},"Add Activity"))):i.a.createElement("section",null,i.a.createElement(p.a,{onClick:this.displayAddActivityInputClick},"Yes"),i.a.createElement(p.a,{onClick:this.handleNo},"No"))}}]),t}(i.a.Component),A=a(1),y=a.n(A),T=(a(48),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={currentDay:y()().format("dd"),currentTime:a.timeNow,currentHrs:a.timeNow,currentMins:a.timeNow,currentSecs:a.timeNow},a.timeNow=function(){var e=y()().hour(),t=y()().minute(),n=y()().seconds(),i="".concat(e,":").concat(t,":").concat(n),c="".concat(e),s="".concat(t),l="".concat(n);a.setState({currentTime:i,currentHrs:c,currentMins:s,currentSecs:l})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.update=setInterval((function(){var t=y()().hour(),a=y()().minute(),n=y()().seconds(),i="".concat(t.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0")),c=t.toString().padStart(2,"0"),s=a.toString().padStart(2,"0"),l=n.toString().padStart(2,"0");e.setState({currentTime:i,currentHrs:c,currentMins:s,currentSecs:l})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var e=this.state,t=e.currentDay,a=e.currentHrs,n=e.currentMins,c=e.currentSecs;return i.a.createElement("section",null,i.a.createElement("div",{className:"clock-container"},i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-day clock-timer"}," ",t),i.a.createElement("p",{className:"clock-label"},"Day")),i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-hours clock-timer"}," ",a),i.a.createElement("p",{className:"clock-label"},"Hours")),i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-minutes clock-timer"}," ",n),i.a.createElement("p",{className:"clock-label"},"Minutes")),i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-seconds clock-timer"}," ",c),i.a.createElement("p",{className:"clock-label"},"Seconds"))))}}]),t}(i.a.Component)),E={startLocation:"",finalDestination:"",newActivityTitle:"",newActivityTime:"",travelTime:0,activities:[],visibleStartLocation:"",visibleFinalDestination:"",hideAndDisplayStartAndEndLocation:"hidden-class",amountOfSleepWanted:0,sleepHrs:0,sleepMins:0,hideAndDisplaySleepAmount:"hidden-class",finalDestinationHrs:0,finalDestinationMins:0,whatTimeYouNeedToBeSomewhere:0,whatTimeYouNeedToBeSomewhereDisplay:"",hideAndDisplayFinalDestTime:"hidden-class",hideAndDisplayBedTime:"hidden-class",hideAndDisplayWakeUpTime:"hidden-class",timeForBed:"",timeToWakeUp:"",currentTime:[],hideAndDisplaySectionContainer:"section-container",amountSleepSection:"section-container-last",travelSomwhereTomorrowQuestion:"hidden-class",whereNeedToBeSection:"hidden-class",timeNeedToBeAtFinalDest:"hidden-class",activitiesSection:"hidden-class",moreActivitiesSection:"hidden-class",calculateBedTimeSection:"hidden-class",resetPageBtnSection:"hidden-class",selectedHrsTime:1,selectedMinsTime:0,selectedMeridiemTime:"AM",minutes:Object(u.a)(Array(60).keys()),hours:Object(u.a)(Array(13).keys()).slice(1)},N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state=E,a.handleAddTravelDestination=function(){var e=a.state,t=e.startLocation,n=e.finalDestination;(new a.props.google.maps.DistanceMatrixService).getDistanceMatrix({origins:[t],destinations:[n],travelMode:"DRIVING",region:"AU"},(function(e,i){if("ZERO_RESULTS"===e.rows[0].elements[0].status)a.handleTravelError();else if(e.rows[0].elements[0].duration.text.split(" ").length>2)var c=60*Number(e.rows[0].elements[0].duration.text.split(" ")[0])+Number(e.rows[0].elements[0].duration.text.split(" ")[2]);else"ZERO_RESULTS"!==e.rows[0].elements[0].status&&(c=Number(e.rows[0].elements[0].duration.text.split(" ")[0]));a.setState({travelTime:c,visibleStartLocation:t,visibleFinalDestination:n,hideAndDisplayStartAndEndLocation:"visible-class",whereNeedToBeSection:"hidden-class",timeNeedToBeAtFinalDest:"section-container-last"})})),a.inputStartLocation.value="",a.inputFinalDest.value=""},a.handleTravelError=function(){console.log("handle travel error")},a.handleStartLocationChange=function(e){a.setState({startLocation:e.target.value})},a.handleFinalDestinationChange=function(e){a.setState({finalDestination:e.target.value})},a.handleNewActivityTitle=function(e){a.setState({newActivityTitle:e.target.value})},a.handleNewActivityTime=function(e){a.setState({newActivityTime:e.target.value})},a.addActivityClick=function(e,t){var n=Number(t);a.setState({activities:[].concat(Object(u.a)(a.state.activities),[{name:e,time:n}]),activitiesSection:"hidden-class",moreActivitiesSection:"section-container-last"})},a.noActivityClick=function(){a.setState({activitiesSection:"hidden-class",moreActivitiesSection:"hidden-class",calculateBedTimeSection:"section-container-last"})},a.displayAddActivityInputClick=function(e){e.preventDefault(),"add-activity-hidden"===a.state.showAddActivities?a.setState({showAddActivities:"add-activity-display"}):a.setState({showAddActivities:"add-activity-hidden"})},a.handleFigureoutTimeForBed=function(){var e=a.state,t=e.activities,n=e.travelTime,i=e.amountOfSleepWanted,c=e.whatTimeYouNeedToBeSomewhere,s=(e.hideAndDisplaySectionContainer,t.map((function(e){return e.time})).reduce((function(e,t){return e+t}),0)+n),l=y()().set({hour:0,minute:c,second:0}).subtract(s,"minutes"),r=l.format("LT"),o=l.subtract(i,"minute");a.setState({timeForBed:o.format("LT"),timeToWakeUp:r,hideAndDisplaySectionContainer:"hidden-class",hideAndDisplayBedTime:"time-need-be-in-bed",hideAndDisplayWakeUpTime:"time-need-wake-up",calculateBedTimeSection:"hidden-class",resetPageBtnSection:"section-container-last"})},a.handleSleepHrsChange=function(e){var t=Number(e.target.value);a.setState({sleepHrs:t})},a.handleSleepMinsChange=function(e){var t=Number(e.target.value);a.setState({sleepMins:t})},a.handleAmountOfSleep=function(){a.inputHrs.value="",a.inputMins.value="";var e=a.state,t=60*e.sleepHrs+e.sleepMins;a.setState({amountOfSleepWanted:t,hideAndDisplaySleepAmount:"visible-class",amountSleepSection:"hidden-class",whereNeedToBeSection:"section-container-last"})},a.handleFinalDestinationHrsChange=function(e){var t=Number(e.target.value);a.setState({finalDestinationHrs:t})},a.handleFinalDestinationMinsChange=function(e){var t=Number(e.target.value);a.setState({finalDestinationMins:t})},a.handleArrivalTime=function(){a.selectHrs.value=1,a.selectMins.value=0,a.selectMerdiem.value="AM";var e=a.state,t=(e.finalDestinationHrs,e.finalDestinationMins,e.selectedHrsTime),n=e.selectedMinsTime,i=e.selectedMeridiemTime;if("AM"===i&&12===t){var c=t-12,s=n;a.arrivalTime(c,s)}else if("PM"===i&&12!==t){var l=t+12,r=n;a.arrivalTime(l,r)}else{var o=t,d=n;a.arrivalTime(o,d)}},a.arrivalTime=function(e,t){var n=60*e+t,i=y()().set({hour:e,minute:t,second:0});a.setState({whatTimeYouNeedToBeSomewhere:n,hideAndDisplayFinalDestTime:"visible-class",whatTimeYouNeedToBeSomewhereDisplay:i.format("LT"),timeNeedToBeAtFinalDest:"hidden-class",activitiesSection:"section-container-last"})},a.handleHrsTime=function(e){var t=Number(e.target.value);a.setState({selectedHrsTime:t})},a.handleMinsTime=function(e){var t=Number(e.target.value);a.setState({selectedMinsTime:t})},a.handleMeridiem=function(e){var t=e.target.value;a.setState({selectedMeridiemTime:t})},a.resetPage=function(){a.setState(E)},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.activities,n=t.hideAndDisplayStartAndEndLocation,c=t.sleepHrs,s=t.sleepMins,l=t.hideAndDisplaySleepAmount,r=t.hideAndDisplayFinalDestTime,o=t.hideAndDisplayBedTime,d=t.hideAndDisplayWakeUpTime,m=t.timeForBed,u=t.timeToWakeUp,h=t.whatTimeYouNeedToBeSomewhereDisplay,v=t.amountSleepSection,A=t.whereNeedToBeSection,y=t.timeNeedToBeAtFinalDest,E=t.activitiesSection,N=t.moreActivitiesSection,w=t.calculateBedTimeSection,g=t.resetPageBtnSection;t.travelSomwhereTomorrowQuestion;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,i.a.createElement(T,null)),i.a.createElement("div",{className:"main-interactive-section"},i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"time-for-bed"},i.a.createElement("h1",null,"What time to go to Bed?"),i.a.createElement("h2",{className:o},"You need to go to bed at ",m),i.a.createElement("h2",{className:d},"And wake up at ",u),i.a.createElement("div",{className:l},"Amount of sleep you want: ",c," hrs and ",s," mins "),i.a.createElement("div",{className:n},"Your start location: ",this.state.visibleStartLocation),i.a.createElement("div",{className:n},"Your final destination: ",this.state.visibleFinalDestination),i.a.createElement("div",{className:r},"Time you need to be somewhere: ",h),a.map((function(e){return i.a.createElement(S,{data:e,key:a.indexOf(e)})})))),i.a.createElement("div",{className:v},i.a.createElement("div",{className:"how-much-sleep-want"},i.a.createElement("div",null,"How much sleep do you want tonight?"),i.a.createElement("div",null,i.a.createElement("input",{onChange:this.handleSleepHrsChange,ref:function(t){return e.inputHrs=t},min:"0",type:"number"}),"hours"),i.a.createElement("div",null,i.a.createElement("input",{onChange:this.handleSleepMinsChange,ref:function(t){return e.inputMins=t},min:"0",type:"number"}),"minutes")),i.a.createElement(p.a,{onClick:this.handleAmountOfSleep},"Add amount of sleep")),i.a.createElement("div",{className:A},i.a.createElement("div",{className:"start-end-location"},i.a.createElement("div",null,"Where do you need to be tomorrow?"),i.a.createElement("div",{className:"start-location"},i.a.createElement("div",null,"Your starting location"),i.a.createElement("input",{onChange:this.handleStartLocationChange,ref:function(t){return e.inputStartLocation=t},placeholder:"enter address or suburb",type:"text"})),i.a.createElement("div",{className:"final-dest"},i.a.createElement("div",null,"Your final destination\xa0"),i.a.createElement("input",{onChange:this.handleFinalDestinationChange,ref:function(t){return e.inputFinalDest=t},placeholder:"enter address or suburb",type:"text"})),i.a.createElement("div",null,i.a.createElement(p.a,{onClick:this.handleAddTravelDestination},"Add travel destination")))),i.a.createElement("div",{className:y},i.a.createElement("div",{className:"time-at-final-dest"},i.a.createElement("div",{className:"time-at-final-dest-title"},"What time do you need to be at your final destination?"),i.a.createElement("select",{onChange:this.handleHrsTime,ref:function(t){return e.selectHrs=t}},this.state.hours.map((function(e){return i.a.createElement("option",{key:e,value:e},e.toString().padStart(2,"0"))}))),i.a.createElement("span",null," : "),i.a.createElement("select",{onChange:this.handleMinsTime,ref:function(t){return e.selectMins=t}},this.state.minutes.map((function(e){return i.a.createElement("option",{key:e,value:e},e.toString().padStart(2,"0"))}))),i.a.createElement("select",{onChange:this.handleMeridiem,ref:function(t){return e.selectMerdiem=t}},i.a.createElement("option",{value:"AM"},"AM"),i.a.createElement("option",{value:"PM"},"PM")),i.a.createElement("div",null,i.a.createElement(p.a,{onClick:this.handleArrivalTime},"Add time")))),i.a.createElement("div",{className:E},i.a.createElement("div",{className:"add-activity-text"},"Will you be doing any activities in the morning?"),i.a.createElement(f,{onAdd:this.addActivityClick,onNo:this.noActivityClick})),i.a.createElement("div",{className:N},i.a.createElement("div",{className:"add-activity-text"},"Will you be doing any other activities in the morning?"),i.a.createElement(f,{onAdd:this.addActivityClick,onNo:this.noActivityClick})),i.a.createElement("div",{className:w},i.a.createElement(p.a,{onClick:this.handleFigureoutTimeForBed},"Calculate Time for Bed?")),i.a.createElement("div",{className:g},i.a.createElement(p.a,{onClick:this.resetPage},"Calculate again"))))}}]),t}(i.a.Component),w=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyCha11ARLYwPGdsg7_RCac7mcfv9a8GwRM"})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.43c5801f.chunk.js.map