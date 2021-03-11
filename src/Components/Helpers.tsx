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