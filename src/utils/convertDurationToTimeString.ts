export function convertDurationToTimeString(duraction : number){
    const hours = Math.floor(duraction / (3600));
    const minutes = Math.floor(duraction % (3600)/60);
    const seconds = duraction %60;

    const finalResult = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, "0"))
    .join(":");

    return finalResult;
}
