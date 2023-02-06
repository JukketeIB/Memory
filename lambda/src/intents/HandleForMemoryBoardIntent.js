const getSlotID = require('../assets/SlotId');
<<<<<<< HEAD
=======

function HandleForMemoryBoardIntent(Alexa, spielFeldWert, handlerInput){
>>>>>>> master

function HandleForMemoryBoardIntent(Alexa, spielFeldWert){

    //fuck alexa
    const karteEins = Alexa.getSlot(handlerInput.requestEnvelope, 'card');
    const karteZwei = Alexa.getSlot(handlerInput.requestEnvelope, 'cardZwei');
    const idEins = getSlotID('card', Alexa, handlerInput);
    const idZwei = getSlotID('cardZwei', Alexa, handlerInput);

<<<<<<< HEAD
    let speakOutput = '';
=======
    // for the love of fucking god just let me commit
    if(karteEins.value && karteZwei.value){
        speakOutput = `Karte Eins: ${spielFeldWert[idEins]} | Karte Zwei: ${spielFeldWert[idZwei]}`;
    }else if(karteEins.value){
        speakOutput = `Karte Eins: ${spielFeldWert[idEins]}`;
    }else if(karteZwei.value){
        speakOutput = `Karte Zwei: ${spielFeldWert[idZwei]}`;
    }else{
        speakOutput = `Keine Karte gewählt versuchen Sie es erneut.`
    }
>>>>>>> master

    if(karteEins.value && karteZwei.value){
         speakOutput = `Karte Eins: ${spielFeldWert[idEins]} | Karte Zwei: ${spielFeldWert[idZwei]}`;
    }else if(karteEins.value){
         speakOutput = `Karte Eins: ${spielFeldWert[idEins]}`;
    }else if(karteZwei.value){
         speakOutput = `Karte Zwei: ${spielFeldWert[idZwei]}`;
    }else{
         speakOutput = `Keine Karte gewählt versuchen Sie es erneut.`;
    }
    return speakOutput;
}
module.exports = HandleForMemoryBoardIntent;