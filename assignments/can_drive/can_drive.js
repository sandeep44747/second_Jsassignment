function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if(hasDrivingLiscence===false){
        return "You cannot drive"
    }else if(isTired===true){
        return "You shouldn't drive"
    }else if(isSober===false){
        return "You shouldn't drive"
    }else if(hasDrivingLiscence===true || isTired===false || isSober===true){
        return "You can drive"
    }
    // Write you code here
}

module.exports = CanDrive;
