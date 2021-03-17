export const textToBinary = (string: string) => {
    return string.split('').map((char: string) => {
        return `0${char.charCodeAt(0).toString(2)}`
    }).join(' ');
}

export const binaryToString = (string: string) => {
    return string.split(' ').map((bin: string) => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

export const chooseDataSet = (difficulty: string, dataSets: any) => {
    if (difficulty === 'easy') return dataSets.easy
    else if (difficulty === 'normal') return dataSets.normal
    else if (difficulty === 'hard') return dataSets.hard
}

export const pointSpread = (difficulty: string) => {
    if (difficulty === 'easy') return 8
    else if (difficulty === 'normal') return 12
    else if (difficulty === 'hard') return 16
    return 0
}

export const getDayPeriod = () => {
    const currentHour = new Date().getHours()

    if(currentHour >= 18) {
        return "Good Evening,"
    } else if(currentHour >= 12) {
        return "Good Afternoon,"
    } else {
        return "Good Morning,"
    }
}