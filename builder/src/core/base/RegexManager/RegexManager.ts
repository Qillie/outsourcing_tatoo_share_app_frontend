import IRegexCollection from "./interfaces/IRegexCollection";

class RegexManager {
    private regexCollection: IRegexCollection

    constructor() {
        this.regexCollection = {
            "VALIDATE": this.initiateRegexValidationCollection(),
            "FILTER": this.initiateRegexFilterCollection()
        }
    }

    private initiateRegexValidationCollection() {
        //* Init
        const regexExecDict: {[key: string]: string} = {}
        
        //* Set
        regexExecDict["fullName"] = "^[가-힣a-zA-Z]{<%= MIN_LENGTH %>,<%= MAX_LENGTH %>}" // e.g : "강민구"
        regexExecDict["cellphoneNumber"] = "^[0-9]{<%= MIN_LENGTH %>,<%= MAX_LENGTH %>}"
        regexExecDict["email"] = "^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$"
        regexExecDict["userName"] = "^(?=.*?[a-zA-Z0-9]).{<%= MIN_LENGTH %>,<%= MAX_LENGTH %>}$" // e.g : "qillie"
        regexExecDict["password"] = "(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+].{<%= MIN_LENGTH %>,<%= MAX_LENGTH %>}$"

        return regexExecDict
    }

    private initiateRegexFilterCollection() {
        //* Init
        const regexFilterDict: {[key: string]: RegExp} = {}
        
        //* Set
        regexFilterDict["!(Number)"] = /[^0-9]/gi // Only Number remains
        regexFilterDict["!(Number || Alphabet)"] = /[^a-zA-Z0-9]/gi // Only Number or Alphabet remains
        regexFilterDict["!(Korean || Alphabet)"] = /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z]/gi // Only Korean or Alphabet remains

        return regexFilterDict
    }

    private setRegValidationExp(targetExecKey: string, replaceDict: {[key: string]: string}) {
        //* Replace key
        let rawRegExecExp = this.regexCollection["VALIDATE"][targetExecKey]
        
        if (rawRegExecExp !== undefined) {
            for (const [replaceKey, replaceValue] of Object.entries(replaceDict)) {
                rawRegExecExp = rawRegExecExp.replace(new RegExp(`<%= ${replaceKey} %>`, "gi"), replaceValue)
            }

            //* Convert to RegExp
            const regExecExp = new RegExp(rawRegExecExp, "gi")

            return regExecExp
        } else {
            throw new Error("No such key in regex exec collection")
        }
    }

    private setRegFilterExp(targetFilterKey: string) {
        //* Replace key
        let regFilterExp = this.regexCollection["FILTER"][targetFilterKey]
        
        if (regFilterExp !== undefined) {
            return regFilterExp
        } else {
            throw new Error("No such key in regex filter collection")
        }
    }

    //* Validate name - e.g: "강민구" || "Edwards"
    public validateFullName(inputString: string, minLength: number, maxLength: number) {
        // Get regex exp
        const regexExecExp = this.setRegValidationExp(
            "fullName", 
            {
                MIN_LENGTH: String(minLength), 
                MAX_LENGTH: String(maxLength)
            }
        )

        //* Check
        return regexExecExp.test(inputString)
    }

    //* Check password
    public validatePassword(inputString: string, minLength: number, maxLength: number) {
        // Get regex exp
        const regexExecExp = this.setRegValidationExp(
            "password", 
            {
                MIN_LENGTH: String(minLength), 
                MAX_LENGTH: String(maxLength)
            }
        )

        //* Check
        return regexExecExp.test(inputString)
    }

    //* Check cellphone number
    public validateCellphoneNumber(inputString: string, minLength: number, maxLength: number) {
        // Get regex exp
        const regexExecExp = this.setRegValidationExp(
            "cellphoneNumber", 
            {
                MIN_LENGTH: String(minLength), 
                MAX_LENGTH: String(maxLength)
            }
        )

        //* Check
        return regexExecExp.test(inputString)
    }

    //* Check email
    public validateEmail(inputString: string) {
        // Get regex exp
        const regexExecExp = this.setRegValidationExp(
            "email", 
            {}
        )

        //* Check
        return regexExecExp.test(inputString)
    }

    //* Check user name - e.g: "qillie012"
    public validateUserName(inputString: string, minLength: number, maxLength: number) {
        // Get regex exp
        const regexExecExp = this.setRegValidationExp(
            "userName", 
            {
                MIN_LENGTH: String(minLength), 
                MAX_LENGTH: String(maxLength)
            }
        )

        //* Check
        return regexExecExp.test(inputString)
    }

    public filterNotNumber(inputString: string) {
        // Get regex exp
        const regexFilterExp = this.setRegFilterExp("!(Number)")
        
        //* Filter
        return inputString.replace(regexFilterExp, "")
    }
    
    public filterNotNumberOrAlphabet(inputString: string) {
        // Get regex exp
        const regexFilterExp = this.setRegFilterExp("!(Number || Alphabet)")
        
        //* Filter
        return inputString.replace(regexFilterExp, "")
    }

    public filterNotKoreanOrAlphabet(inputString: string) {
        // Get regex exp
        const regexFilterExp = this.setRegFilterExp("!(Korean || Alphabet)")
        
        //* Filter
        return inputString.replace(regexFilterExp, "")
    }
}

//* Export singleton
export default RegexManager