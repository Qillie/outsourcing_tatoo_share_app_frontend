interface ICommunicatorConfigs {
    CREATE?: {
        CREATE_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string}
    },
    FIND_ONE?: {
        FIND_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string},
        RESPONSE_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string}
    },
    FIND_ALL?: {
        FIND_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string},
        RESPONSE_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string}
    },
    UPDATE?: {
        FIND_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string},
        UPDATE_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string}
    },
    DELETE?: {
        FIND_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string},
        UPDATE_OPTION_KEY_LIST: {[VIEW_MODEL_KEY: string]: string}
    },
    PRESET?: {
        [METHOD_KEY: string]: {
            [OPTION_KEY: string]: {[VIEW_MODEL_KEY: string]: string}
        }
    }
}

export default ICommunicatorConfigs
