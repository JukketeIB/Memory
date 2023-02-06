function getSlotID(slotName, Alexa, handlerInput){
    let slot = Alexa.getSlot(handlerInput.requestEnvelope, slotName);
    if(slot && slot.resolutions){
        const resPerAuth = slot.resolutions.resolutionsPerAuthority;
        if(resPerAuth){
            for(let i = 0; i < resPerAuth.length; i++){
                if(resPerAuth[i].status.code === "ER_SUCCESS_MATCH"){
                    const values = resPerAuth[i].values;
                    if(values && values.length > 0){
                        return values[0].value.id
                    }
                }
            }
        }
    }
    return null;
}
module.exports = getSlotID;