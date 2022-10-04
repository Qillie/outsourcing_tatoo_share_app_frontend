interface ICommunicatorPaths {
    CREATE?: {path: string, method: "post"},
    FIND_ONE?: {path: string, method: "get"},
    FIND_ALL?: {path: string, method: "get"},
    UPDATE?: {path: string, method: "put"},
    DELETE?: {path: string, method: "delete"},
    PRESET?: {
        [METHOD_KEY: string]: {path: string, method: "get" | "post" | "put" | "delete"}
    }
}

export default ICommunicatorPaths