(window["webpackJsonpwhat-time-go-to-bed"]=window["webpackJsonpwhat-time-go-to-bed"]||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},40:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),l=a.n(c),o=a(17),s=a(4),r=a(5),d=a(7),m=a(6),u=a(8),h=a(16),v=(a(38),a(2)),p=a.n(v);a(39);function S(e){return i.a.createElement("div",null,e.data.name," ",i.a.createElement("div",null,e.data.time)," ")}a(40);var A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={showAddActivities:!1,name:"",time:""},a.handleNewActivityTitle=function(e){console.log(e.target.value),a.setState({name:e.target.value})},a.handleNewActivityTime=function(e){console.log(e.target.value),a.setState({time:e.target.value})},a.displayAddActivityInputClick=function(e){console.log("working"),a.setState({showAddActivities:!0})},a.hideForm=function(){a.setState({showAddActivities:!1})},a.handleAdd=function(){var e=a.state,t=e.name,n=e.time;a.props.onAdd(t,n),a.hideForm()},a.handleNo=function(){a.props.onNo()},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return!0===this.state.showAddActivities?i.a.createElement("section",{className:"add-activity-section"},i.a.createElement("div",null,"Title"),i.a.createElement("input",{className:"add-activity-first-input",onChange:this.handleNewActivityTitle,type:"text"}),i.a.createElement("div",null,"Time (in minutes)"),i.a.createElement("input",{className:"add-activity-last-input",onChange:this.handleNewActivityTime,type:"number"}),i.a.createElement("div",null,i.a.createElement(p.a,{onClick:this.handleAdd},"Add Activity"))):i.a.createElement("section",null,i.a.createElement(p.a,{onClick:this.displayAddActivityInputClick},"Yes"),i.a.createElement(p.a,{onClick:this.handleNo},"No"))}}]),t}(i.a.Component),y=a(1),f=a.n(y),E=(a(48),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={currentDay:f()().format("dd"),currentTime:a.timeNow,currentHrs:a.timeNow,currentMins:a.timeNow,currentSecs:a.timeNow},a.timeNow=function(){var e=f()().hour(),t=f()().minute(),n=f()().seconds();console.log("".concat(e,":").concat(t,":").concat(n));var i="".concat(e,":").concat(t,":").concat(n),c="".concat(e),l="".concat(t),o="".concat(n);a.setState({currentTime:i,currentHrs:c,currentMins:l,currentSecs:o})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.update=setInterval((function(){var t=f()().hour(),a=f()().minute(),n=f()().seconds(),i="".concat(t.toString().padStart(2,"0"),":").concat(a.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0")),c=t.toString().padStart(2,"0"),l=a.toString().padStart(2,"0"),o=n.toString().padStart(2,"0");e.setState({currentTime:i,currentHrs:c,currentMins:l,currentSecs:o})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.update)}},{key:"render",value:function(){var e=this.state,t=e.currentDay,a=(e.currentTime,e.currentHrs),n=e.currentMins,c=e.currentSecs;return i.a.createElement("section",null,i.a.createElement("div",{className:"clock-container"},i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-day clock-timer"}," ",t),i.a.createElement("p",{className:"clock-label"},"Day")),i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-hours clock-timer"}," ",a),i.a.createElement("p",{className:"clock-label"},"Hours")),i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-minutes clock-timer"}," ",n),i.a.createElement("p",{className:"clock-label"},"Minutes")),i.a.createElement("div",{className:"clock-col"},i.a.createElement("p",{className:"clock-seconds clock-timer"}," ",c),i.a.createElement("p",{className:"clock-label"},"Seconds"))))}}]),t}(i.a.Component)),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={startLocation:"",finalDestination:"",newActivityTitle:"",newActivityTime:"",travelTime:0,activities:[],visibleStartLocation:"",visibleFinalDestination:"",hideAndDisplayStartAndEndLocation:"hidden-class",amountOfSleepWanted:0,sleepHrs:0,sleepMins:0,hideAndDisplaySleepAmount:"hidden-class",finalDestinationHrs:0,finalDestinationMins:0,whatTimeYouNeedToBeSomewhere:0,whatTimeYouNeedToBeSomewhereDisplay:"",hideAndDisplayFinalDestTime:"hidden-class",timeForBed:"",currentTime:[],hideAndDisplaySectionContainer:"section-container",amountSleepSection:"section-container-last",whereNeedToBeSection:"hidden-class",timeNeedToBeAtFinalDest:"hidden-class",activitiesSection:"hidden-class",moreActivitiesSection:"hidden-class",calculateBedTimeSection:"hidden-class"},a.handleAddTravelDestination=function(){console.log("handle Add Travel Destination");var e=a.state,t=e.startLocation,n=e.finalDestination;console.log(t),console.log(n),(new a.props.google.maps.DistanceMatrixService).getDistanceMatrix({origins:[t],destinations:[n],travelMode:"DRIVING"},(function(e,i){if(e.rows[0].elements[0].duration.text.split(" ").length>2)var c=60*Number(e.rows[0].elements[0].duration.text.split(" ")[0])+Number(e.rows[0].elements[0].duration.text.split(" ")[2]);else"ZERO_RESULTS"!==e.rows[0].elements[0].status?c=Number(e.rows[0].elements[0].duration.text.split(" ")[0]):console.log("error");a.setState({travelTime:c,visibleStartLocation:t,visibleFinalDestination:n,hideAndDisplayStartAndEndLocation:"visible-class",whereNeedToBeSection:"hidden-class",timeNeedToBeAtFinalDest:"section-container-last"})}))},a.handleStartLocationChange=function(e){a.setState({startLocation:e.target.value})},a.handleFinalDestinationChange=function(e){a.setState({finalDestination:e.target.value})},a.handleNewActivityTitle=function(e){a.setState({newActivityTitle:e.target.value})},a.handleNewActivityTime=function(e){a.setState({newActivityTime:e.target.value})},a.addActivityClick=function(e,t){var n=Number(t);a.setState({activities:[].concat(Object(o.a)(a.state.activities),[{name:e,time:n}]),activitiesSection:"hidden-class",moreActivitiesSection:"section-container-last"})},a.noActivityClick=function(){console.log("no activity click"),a.setState({activitiesSection:"hidden-class",moreActivitiesSection:"hidden-class",calculateBedTimeSection:"section-container-last"})},a.displayAddActivityInputClick=function(e){e.preventDefault(),"add-activity-hidden"===a.state.showAddActivities?a.setState({showAddActivities:"add-activity-display"}):a.setState({showAddActivities:"add-activity-hidden"})},a.handleFigureoutTimeForBed=function(){var e=a.state,t=e.activities,n=e.travelTime,i=e.amountOfSleepWanted,c=e.whatTimeYouNeedToBeSomewhere,l=(e.hideAndDisplaySectionContainer,t.map((function(e){return e.time})).reduce((function(e,t){return e+t}),0)+n),o=f()().set({hour:0,minute:c,second:0});console.log(o.format("LT"));var s=o.subtract(l,"minutes");console.log(s.format("LT"));var r=s.subtract(i,"minute");a.setState({timeForBed:r.format("LT"),hideAndDisplaySectionContainer:"hidden-class"}),console.log(r.format("LT"))},a.handleSleepHrsChange=function(e){var t=Number(e.target.value);a.setState({sleepHrs:t})},a.handleSleepMinsChange=function(e){var t=Number(e.target.value);a.setState({sleepMins:t})},a.handleAmountOfSleep=function(){var e=a.state,t=60*e.sleepHrs+e.sleepMins;a.setState({amountOfSleepWanted:t,hideAndDisplaySleepAmount:"visible-class",amountSleepSection:"hidden-class",whereNeedToBeSection:"section-container-last"})},a.handleFinalDestinationHrsChange=function(e){console.log(e.target.va);var t=Number(e.target.value);a.setState({finalDestinationHrs:t})},a.handleFinalDestinationMinsChange=function(e){var t=Number(e.target.value);a.setState({finalDestinationMins:t})},a.handleArrivalTime=function(){console.log("arrival time button working");var e=a.state,t=e.finalDestinationHrs,n=e.finalDestinationMins,i=60*t+n,c=f()().set({hour:t,minute:n,second:0});console.log(c.format("LT")),a.setState({whatTimeYouNeedToBeSomewhere:i,hideAndDisplayFinalDestTime:"visible-class",whatTimeYouNeedToBeSomewhereDisplay:c.format("LT"),timeNeedToBeAtFinalDest:"hidden-class",activitiesSection:"section-container-last"})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.activities,a=e.hideAndDisplayStartAndEndLocation,n=e.sleepHrs,c=e.sleepMins,l=e.hideAndDisplaySleepAmount,o=e.hideAndDisplayFinalDestTime,s=e.timeForBed,r=e.whatTimeYouNeedToBeSomewhereDisplay,d=e.amountSleepSection,m=e.whereNeedToBeSection,u=e.timeNeedToBeAtFinalDest,h=e.activitiesSection,v=e.moreActivitiesSection,y=e.calculateBedTimeSection;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,i.a.createElement(E,null)),i.a.createElement("div",{className:"main-interactive-section"},i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"time-for-bed"},i.a.createElement("h1",null,"What time to go to Bed?"),i.a.createElement("h2",null,s),i.a.createElement("div",{className:l},"Amount of sleep you want: ",n," hrs and ",c," mins "),i.a.createElement("div",{className:a},"Your start location: ",this.state.visibleStartLocation),i.a.createElement("div",{className:a},"Your final destination: ",this.state.visibleFinalDestination),i.a.createElement("div",{className:o},"Time you need to be somewhere: ",r),t.map((function(e){return i.a.createElement(S,{data:e,key:e.name})})))),i.a.createElement("div",{className:d},i.a.createElement("div",{className:"how-much-sleep-want"},i.a.createElement("div",null,"How much sleep do you want tonight?"),i.a.createElement("div",null,i.a.createElement("input",{onChange:this.handleSleepHrsChange,min:"0",type:"number"}),"hours"),i.a.createElement("div",null,i.a.createElement("input",{onChange:this.handleSleepMinsChange,min:"0",type:"number"}),"minutes")),i.a.createElement(p.a,{onClick:this.handleAmountOfSleep},"Add amount of sleep")),i.a.createElement("div",{className:m},i.a.createElement("div",{className:"start-end-location"},i.a.createElement("div",null,"Where do you need to be tomorrow?"),i.a.createElement("div",{className:"start-location"},i.a.createElement("div",null,"Your starting location"),i.a.createElement("input",{onChange:this.handleStartLocationChange,type:"text"})),i.a.createElement("div",{className:"final-dest"},i.a.createElement("div",null,"Your final destination"),i.a.createElement("input",{onChange:this.handleFinalDestinationChange,type:"text"})),i.a.createElement("div",null,i.a.createElement(p.a,{onClick:this.handleAddTravelDestination},"Add travel destination")))),i.a.createElement("div",{className:u},i.a.createElement("div",{className:"time-at-final-dest"},i.a.createElement("div",{className:"time-at-final-dest-title"},"What time do you need to be at your final destination?"),i.a.createElement("div",{className:"time-at-final-dest-inputs"},i.a.createElement("input",{onChange:this.handleFinalDestinationHrsChange,type:"number"}),i.a.createElement("span",null,"hours"),i.a.createElement("input",{onChange:this.handleFinalDestinationMinsChange,type:"number"}),i.a.createElement("span",null,": minutes")),i.a.createElement(p.a,{onClick:this.handleArrivalTime},"Add time"))),i.a.createElement("div",{className:h},i.a.createElement("div",{className:"add-activity-text"},"Will you be doing any activities in the morning?"),i.a.createElement(A,{onAdd:this.addActivityClick,onNo:this.noActivityClick})),i.a.createElement("div",{className:v},i.a.createElement("div",{className:"add-activity-text"},"Will you be doing any other activities in the morning?"),i.a.createElement(A,{onAdd:this.addActivityClick,onNo:this.noActivityClick})),i.a.createElement("div",{className:y},i.a.createElement(p.a,{onClick:this.handleFigureoutTimeForBed},"Calculate Time for Bed?"))))}}]),t}(i.a.Component),N=Object(h.GoogleApiWrapper)({apiKey:"AIzaSyCha11ARLYwPGdsg7_RCac7mcfv9a8GwRM"})(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.cce92610.chunk.js.map