//* Import libraries
import axiosLibrary from "axios";
import HttpsProxyAgent from "https-proxy-agent"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";

//* Import interfaces
import TSuccessCallback from "./interfaces/TSuccessCallback";
import TFailCallback from "./interfaces/TFailCallback";
import ICommunicatorPaths from "./interfaces/ICommunicatorPaths";
import ICommunicatorConfigs from "./interfaces/ICommunicatorConfigs"
import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";
import TWrappedImage from "./interfaces/TWrappedImage";


//* Setup proxy
const axios = axiosLibrary.create({
    baseURL: "http://localhost:4021"
})

class Communicator {
    //* Members
    private paths?: ICommunicatorPaths
    private configs?: ICommunicatorConfigs

    constructor(paths?: ICommunicatorPaths, configs?: ICommunicatorConfigs) {
        this.paths = paths
        this.configs = configs
    }

    /**
     * Function to store secure data (Like cookie or local storage ...)
     * @param key 
     * @param value 
     */
    public async setDataInSecureStore(key: string, value: string) {
        await AsyncStorage.setItem(key, value);
    }

    /**
     * Function to store secure data (Like cookie or local storage ...)
     */
    public async setMultipleDataInSecureStore(dataList: {key: string, value: string}[]) {
        return await Promise.all(dataList.map(async (data) => {
            return await AsyncStorage.setItem(data.key, data.value);
        }))
    }

    /**
     * Function to get secure data (Like cookie or local storage ...)
     * @param key 
     * @param value 
     */
    public async getDataFromSecureStore(key: string) {
        return await AsyncStorage.getItem(key)
    }

    /**
     * Function to get secure data (Like cookie or local storage ...)
     */
    public async getMultipleDataInSecureStore(keyList: string[]) {
        const dataSet = await Promise.all(keyList.map(async (key) => {
            const data = {key: key, value: await AsyncStorage.getItem(key)}
            return data
        }))

        return dataSet
    }

    /**
     * Function to remove secure data (Like cookie or local storage ...)
     * @param key 
     * @param value 
     */
     public async removeDataFromSecureStore(key: string) {
        return await AsyncStorage.removeItem(key)
    }

    public convertToFormData(payload: {[key: string]: any}) {
        let formData = new FormData()
        
        for (const [payloadKey, payloadValue] of Object.entries(payload)) {
            formData.append(payloadKey, JSON.stringify(payloadValue))
        }

        return formData
    }

    //* Error message creator
    private setErrorMessage(errorMessage: string, errorMethod: string, target: any) {
        if (target === undefined) {
            if (errorMessage.length != 0) {
                errorMessage += ", "
            }

            errorMessage += `${errorMethod} is undefined!`
        }

        return errorMessage
    }

    //* Preset function
    public async preset(presetFunctionKey: string, payload: {[key: string]: any}, successCallback?: TSuccessCallback, failCallback?: TFailCallback) {
        try {
            if (this.configs?.PRESET !== undefined && this.paths?.PRESET !== undefined) {
                console.log(presetFunctionKey)
                console.log(presetFunctionKey in this.configs.PRESET)

                if (this.configs.PRESET[presetFunctionKey] !== undefined && this.paths.PRESET[presetFunctionKey] !== undefined) {
                    //* Get target path config
                    const targetPathConfig = this.paths.PRESET[presetFunctionKey]

                    //* Get target crud config
                    const targetCrudConfig = this.configs.PRESET[presetFunctionKey]
                    
                    //* Set payload
                    let requestPayload: {[OPTION_KEY: string]: {[ MODEL_KEY: string ]: any}} = {}
                    
                    for (const [optionKey, optionValue] of Object.entries(targetCrudConfig)) {
                        // Set option key if it's empty
                        if (!(optionKey in requestPayload)) {
                            requestPayload[optionKey] = {}
                        }

                        // Connect view model - backend model 
                        for (const [requestViewModelKey, requestModelKey] of Object.entries(optionValue)) {
                            requestPayload[optionKey][requestModelKey] = payload[requestViewModelKey]
                        }
                    }

                    //* Send request
                    if (this.paths.PRESET[presetFunctionKey].method == "get") {
                        await this.getData(
                            requestPayload,
                            this.paths.PRESET[presetFunctionKey].path,
                            successCallback,
                            failCallback,
                        )

                    } else if (this.paths.PRESET[presetFunctionKey].method == "post") {
                        await this.postData(
                            requestPayload,
                            this.paths.PRESET[presetFunctionKey].path,
                            successCallback,
                            failCallback
                        )

                    } else if (this.paths.PRESET[presetFunctionKey].method == "put") {
                        await this.putData(
                            requestPayload,
                            this.paths.PRESET[presetFunctionKey].path,
                            successCallback,
                            failCallback
                        )

                    } else if (this.paths.PRESET[presetFunctionKey].method == "delete") {
                        await this.deleteData(
                            requestPayload,
                            this.paths.PRESET[presetFunctionKey].path,
                            successCallback,
                            failCallback
                        )
                    }

                } else {
                    let errorMessage = ''

                    errorMessage = this.setErrorMessage(errorMessage, `${presetFunctionKey} in PRESET.configs`, this.configs.CREATE)
                    errorMessage = this.setErrorMessage(errorMessage, `${presetFunctionKey} in PRESET.paths`, this.paths.CREATE)

                    throw new Error(errorMessage)
                }
            } else {
                let errorMessage = ''

                errorMessage = this.setErrorMessage(errorMessage, "PRESET in configs", this.configs?.CREATE)
                errorMessage = this.setErrorMessage(errorMessage, "PRESET in paths", this.paths?.CREATE)

                throw new Error(errorMessage)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //* Create function
    public async create(payload: {[key: string]: any}, successCallback?: TSuccessCallback, failCallback?: TFailCallback, useForm?: boolean) {
        try {
            if (this.configs?.CREATE !== undefined && this.paths?.CREATE !== undefined) {
                //* Set payload
                let requestPayload: {CREATE_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, SOURCE: {[ MODEL_KEY: string ]: any}} = {CREATE_OPTION_KEY_LIST: {}, SOURCE: payload}

                for (const [requestViewModelKey, requestModelKey] of Object.entries(this.configs["CREATE"]["CREATE_OPTION_KEY_LIST"])) {
                    if (useForm == true) {
                        if (requestViewModelKey in payload) {
                            requestPayload["CREATE_OPTION_KEY_LIST"][requestModelKey] = payload[requestViewModelKey]
                        } else {
                            const targetRegex = new RegExp(`${requestViewModelKey}+\[[0-9]+\]`)

                            for (const targetKey of Object.keys(payload)) {
                                if (targetRegex.test(targetKey)) {
                                    const keyIndexMatch = targetKey.match(/\[[0-9]+\]/);
                                    
                                    if (keyIndexMatch !== null) {
                                        console.log(keyIndexMatch[0])
                                        requestPayload["CREATE_OPTION_KEY_LIST"][`${requestModelKey}${keyIndexMatch[0]}`] = payload[targetKey]
                                    }
                                }
                            }
                        }

                    } else {
                        requestPayload["CREATE_OPTION_KEY_LIST"][requestModelKey] = payload[requestViewModelKey]
                    }
                }

                //* Send request
                await this.postData(
                    (useForm == true) ? requestPayload["CREATE_OPTION_KEY_LIST"] : requestPayload, //* Convert form if use form is true
                    this.paths["CREATE"]["path"],
                    successCallback,
                    failCallback,
                    useForm
                )
            } else {
                let errorMessage = ''

                errorMessage = this.setErrorMessage(errorMessage, "CREATE in configs", this.configs?.CREATE)
                errorMessage = this.setErrorMessage(errorMessage, "CREATE in paths", this.paths?.CREATE)

                throw new Error(errorMessage)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //* Find one function
    public async findOne (payload: {[key: string]: any}, successCallback?: TSuccessCallback, failCallback?: TFailCallback) {
        try {
            if (this.configs?.FIND_ONE !== undefined && this.paths?.FIND_ONE !== undefined) {
                //* Set payload
                let requestFindOptionPayload: {[ MODEL_KEY: string ]: any} = {}
                let requestResponseOptionPayload: {[ MODEL_KEY: string ]: any} = {}

                for (const [requestViewModelKey, requestModelKey] of Object.entries(this.configs["FIND_ONE"]["FIND_OPTION_KEY_LIST"])) {
                    requestFindOptionPayload[requestModelKey] = payload[requestViewModelKey]
                }

                for (const [requestViewModelKey, requestModelKey] of Object.entries(this.configs["FIND_ONE"]["RESPONSE_OPTION_KEY_LIST"])) {
                    requestResponseOptionPayload[requestModelKey] = payload[requestViewModelKey]
                }

                //* Set payload
                let requestPayload: { FIND_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, RESPONSE_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, SOURCE: {[ MODEL_KEY: string ]: any}} = {
                    FIND_OPTION_KEY_LIST: requestFindOptionPayload,
                    RESPONSE_OPTION_KEY_LIST: requestResponseOptionPayload,
                    SOURCE: payload
                }

                //* Send request
                await this.getData(
                    requestPayload,
                    this.paths["FIND_ONE"]["path"],
                    successCallback,
                    failCallback,
                )

            } else {
                let errorMessage = ''

                errorMessage = this.setErrorMessage(errorMessage, "FIND_ONE in configs", this.configs?.FIND_ONE)
                errorMessage = this.setErrorMessage(errorMessage, "FIND_ONE in paths", this.paths?.FIND_ONE)

                throw new Error(errorMessage)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //* Find all function
    public async findAll(payload: {[key: string]: any}, successCallback?: TSuccessCallback, failCallback?: TFailCallback){
        try {
            if (this.configs?.FIND_ALL !== undefined && this.paths?.FIND_ALL !== undefined) {
                //* Set payload
                let requestFindOptionPayload: {[ MODEL_KEY: string ]: any} = {}
                let requestResponseOptionPayload: {[ MODEL_KEY: string ]: any} = {}

                for (const [requestViewModelKey, requestModelKey] of Object.entries(this.configs["FIND_ALL"]["FIND_OPTION_KEY_LIST"])) {
                    requestFindOptionPayload[requestModelKey] = payload[requestViewModelKey]
                }

                for (const [requestViewModelKey, requestModelKey] of Object.entries(this.configs["FIND_ALL"]["RESPONSE_OPTION_KEY_LIST"])) {
                    requestResponseOptionPayload[requestModelKey] = payload[requestViewModelKey]
                }

                //* Set payload
                let requestPayload: { FIND_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, RESPONSE_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, SOURCE: {[ MODEL_KEY: string ]: any}} = {
                    FIND_OPTION_KEY_LIST: requestFindOptionPayload,
                    RESPONSE_OPTION_KEY_LIST: requestResponseOptionPayload,
                    SOURCE: payload
                }

                //* Send request
                await this.getData(
                    requestPayload,
                    this.paths["FIND_ALL"]["path"],
                    successCallback,
                    failCallback,
                )

            } else {
                let errorMessage = ''

                errorMessage = this.setErrorMessage(errorMessage, "FIND_ALL in configs", this.configs?.FIND_ALL)
                errorMessage = this.setErrorMessage(errorMessage, "FIND_ALL in paths", this.paths?.FIND_ALL)

                throw new Error(errorMessage)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //* Update function
    public async update(payload: {[key: string]: any}, successCallback?: TSuccessCallback, failCallback?: TFailCallback){
        try {
            if (this.configs?.UPDATE !== undefined && this.paths?.UPDATE !== undefined) {
                //* Set each options
                let requestFindOptionPayload: {[ MODEL_KEY: string ]: any} = {}
                let requestUpdateOptionPayload: {[ MODEL_KEY: string ]: any} = {}

                //* Set find option
                for (const [requestFindOptionViewModelKey, requestFindOptionModelKey] of Object.entries(this.configs["UPDATE"]["FIND_OPTION_KEY_LIST"])) {
                    requestFindOptionPayload[requestFindOptionModelKey] = payload[requestFindOptionViewModelKey]
                }

                //* Set update option
                for (const [requestUpdateOptionViewModelKey, requestUpdateOptionModelKey] of Object.entries(this.configs["UPDATE"]["UPDATE_OPTION_KEY_LIST"])) {
                    requestUpdateOptionPayload[requestUpdateOptionModelKey] = payload[requestUpdateOptionViewModelKey]
                }

                //* Set payload
                let requestPayload: { FIND_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, UPDATE_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, SOURCE: {[ MODEL_KEY: string ]: any}} = {
                    FIND_OPTION_KEY_LIST: requestFindOptionPayload,
                    UPDATE_OPTION_KEY_LIST: requestUpdateOptionPayload,
                    SOURCE: payload
                }

                //* Send request
                await this.putData(
                    requestPayload,
                    this.paths["UPDATE"]["path"],
                    successCallback,
                    failCallback
                )

            } else {
                let errorMessage = ''

                errorMessage = this.setErrorMessage(errorMessage, "UPDATE in configs", this.configs?.UPDATE)
                errorMessage = this.setErrorMessage(errorMessage, "UPDATE in paths", this.paths?.UPDATE)

                throw new Error(errorMessage)
            }
        } catch (err) {
            console.log(err)
        }
    }

    //* Delete function
    public async delete(payload: {[key: string]: any}, successCallback?: TSuccessCallback, failCallback?: TFailCallback){
        try {
            if (this.configs?.DELETE !== undefined && this.paths?.DELETE !== undefined) {
                //* Set each options
                let requestFindOptionPayload: {[ MODEL_KEY: string ]: any} = {}
                let requestUpdateOptionPayload: {[ MODEL_KEY: string ]: any} = {}

                //* Set find option
                for (const [requestFindOptionViewModelKey, requestFindOptionModelKey] of Object.entries(this.configs["DELETE"]["FIND_OPTION_KEY_LIST"])) {
                    requestFindOptionPayload[requestFindOptionModelKey] = payload[requestFindOptionViewModelKey]
                }

                //* Set update option
                for (const [requestUpdateOptionViewModelKey, requestUpdateOptionModelKey] of Object.entries(this.configs["DELETE"]["UPDATE_OPTION_KEY_LIST"])) {
                    requestUpdateOptionPayload[requestUpdateOptionModelKey] = payload[requestUpdateOptionViewModelKey]
                }

                //* Set payload
                let requestPayload: { FIND_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, UPDATE_OPTION_KEY_LIST: {[ MODEL_KEY: string ]: any}, SOURCE: {[ MODEL_KEY: string ]: any}} = {
                    FIND_OPTION_KEY_LIST: requestFindOptionPayload,
                    UPDATE_OPTION_KEY_LIST: requestUpdateOptionPayload,
                    SOURCE: payload
                }

                //* Send request
                await this.deleteData(
                    requestPayload,
                    this.paths["DELETE"]["path"],
                    successCallback,
                    failCallback
                )
            } else {
                let errorMessage = ''

                errorMessage = this.setErrorMessage(errorMessage, "DELETE in configs", this.configs?.DELETE)
                errorMessage = this.setErrorMessage(errorMessage, "DELETE in paths", this.paths?.DELETE)

                throw new Error(errorMessage)
            }
        } catch (err) {
            console.log(err)
        }
    }

    public async getAuthInfo() {
        let authInfo: {
            ACCESS_TOKEN?: string
            REFRESH_TOKEN?: string
        } = {}

        const dataSet = await this.getMultipleDataInSecureStore(["accessToken", "refreshToken"])

        if (dataSet[0].value !== null && dataSet[1].value) {
            authInfo.ACCESS_TOKEN = dataSet[0].value
            authInfo.REFRESH_TOKEN = dataSet[1].value
        }

        return authInfo
    }

    public async putData(payload: {[key: string]: any}, apiEndpointPath: string, successCallback?: TSuccessCallback, failCallback?: TFailCallback) {
        //* Post data
        try {
            this.getAuthInfo().then((authInfo) => {
                axios.put(`${apiEndpointPath}`, Object.assign(payload, authInfo))
                .then((response) => {
                    if (successCallback !== undefined) {
                        successCallback(response)
                    }
                })
                .catch((error) => {
                    if (failCallback !== undefined) {
                        failCallback(error)
                    }
                })
            })
        } catch (error) {
            console.error(error);
        }
    }

    public async postData(payload: {[key: string]: any}, apiEndpointPath: string, successCallback?: TSuccessCallback, failCallback?: TFailCallback, useForm?: boolean) {
        //* Post data
        try {
            this.getAuthInfo().then((authInfo) => {
                console.log(Object.assign(payload, authInfo))

                axios.post(
                    `${apiEndpointPath}`, 
                    (useForm == true) ? this.setFormData(Object.assign(payload, authInfo)) : Object.assign(payload, authInfo),
                )
                .then((response) => {
                    if (successCallback !== undefined) {
                        successCallback(response)
                    }
                })
                .catch((error) => {
                    if (failCallback !== undefined) {
                        failCallback(error)
                    }
                })
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    public async getData(payload: {[key: string]: any}, apiEndpointPath: string, successCallback?: TSuccessCallback, failCallback?: TFailCallback) {
        //* Post data
        try {
            this.getAuthInfo().then((authInfo) => {
                axios.get(`${apiEndpointPath}`, {params: Object.assign(payload, authInfo)})
                .then((response) => {
                    if (successCallback !== undefined) {
                        successCallback(response)
                    }
                })
                .catch((error) => {
                    if (failCallback !== undefined) {
                        failCallback(error)
                    }
                })
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    public async deleteData(payload: {[key: string]: any}, apiEndpointPath: string, successCallback?: TSuccessCallback, failCallback?: TFailCallback) {
        //* Post data
        try {
            this.getAuthInfo().then((authInfo) => {
                axios.put(`${apiEndpointPath}`, Object.assign(payload, authInfo))
                .then((response) => {
                    if (successCallback !== undefined) {
                        successCallback(response)
                    }
                })
                .catch((error) => {
                    if (failCallback !== undefined) {
                        failCallback(error)
                    }
                })
            })
        } catch (error) {
            console.error(error);
        }
    }

    public wrapImage(target: PhotoIdentifier) {
        if (target.node.image.filename !== null) {
            //* Split file name
            const splitFilename = target.node.image.filename.split(".")
            
            const wrappedPhoto: TWrappedImage = {
                name: splitFilename[0],
                type: splitFilename[1],
                uri: Platform.OS === 'ios' ? target.node.image.uri.replace('file://', '') : target.node.image.uri,
            }

            return wrappedPhoto
        } else {
            throw new Error("Unvalid image")
        }
    }

    public wrapImageList(imageListKey: string, targetList: PhotoIdentifier[]) {
        let wrappedListDict: {[key: string]: TWrappedImage} = {}
        
        targetList.map((target, index) => {
            if (target.node.image.filename !== null) {
                //* Split file name
                const splitFilename = target.node.image.filename.split(".")
                
                const wrappedPhoto: TWrappedImage = {
                    name: splitFilename[0],
                    type: splitFilename[1],
                    uri: Platform.OS === 'ios' ? target.node.image.uri.replace('file://', '') : target.node.image.uri,
                }
    
                wrappedListDict[`${imageListKey}[${index}]`] = wrappedPhoto
            } else {
                throw new Error("Unvalid image")
            }
        })

        return wrappedListDict
    }

    public setFormData(payload: {[key: string]: any}) {
        const formData = new FormData()

        for (const [payloadKey, payloadValue] of Object.entries(payload)) {
            formData.append(payloadKey, payloadValue)
        }

        return formData
    }
}

export default Communicator