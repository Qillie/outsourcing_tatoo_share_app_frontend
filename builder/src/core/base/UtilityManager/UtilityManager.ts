class UtilityManager {
    public getRange (from: number, to: number, step: number) {
        return [...Array(Math.floor(((to - 1) - from) / step) + 1)].map((_, i) => from + i * step)
    }

    public numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    public capitalizeFirstLetter (word: string) {
        if (word.length > 1) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else {
            throw new Error("Word's length must be longer than 1")
        }
    }
}

export default UtilityManager