const scuberHq = 42;
let pickUp;
const feet = 264;


function distanceFromHqInBlocks(pickUp){
    if (pickUp >= 42) {
    return (pickUp-scuberHq);
    }
    return (scuberHq-pickUp);
}

function distanceFromHqInFeet(pickUp){
    return (distanceFromHqInBlocks(pickUp) * feet);
}

function distanceTravelledInFeet(start,destination){
    if (start<=destination){
        return ((destination-start)*feet);
    }
        return ((start-destination)*feet);
    }

function calculatesFarePrice(start,destination){
    let distance = (distanceTravelledInFeet(start,destination));
    if (distance <= 400){
            return 0;
    }
    else if (distance <=2000){
        return ((distance-400)* 0.02);
    }
    else if (distance <=2500){
        return (25);
    }
    else {
        return "cannot travel that far";
    }
    }


