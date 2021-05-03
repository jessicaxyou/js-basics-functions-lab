const address = 42;

function distanceFromHqInBlocks(block) {
    let dist = block - address;
    if (dist < 0 ) {
        dist = dist * -1;
    }
    return dist;
}

function distanceFromHqInFeet(distance) {
    let meansureInFeet = distanceFromHqInBlocks(distance) * 264
    // every 1 bloc should equal to standard NYC blocks have 264 feet
    return meansureInFeet
}

function distanceTravelledInFeet(start,end) {
    let travel = (end - start)*264
    if (travel < 0) {
        travel = travel * -1;
    }
    // measure number of feet a passenger travels given a start and end block
    return travel
}

function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination)
    if (distanceTravelledInFeet(start, destination) < 400) {
        fare = 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        fare = (distanceTravelledInFeet(start, destination) - 400) * 0.02
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        fare = 25
    }
    else
        return "cannot travel that far"
    // let fare = distanceTravelledInFeet(totalblocks) * 0.02
    return fare
}