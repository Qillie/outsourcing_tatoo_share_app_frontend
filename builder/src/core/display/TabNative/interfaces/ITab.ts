//* Import intefaces
import ITabContent_ABC from "./ITabContent_ABC"

interface ITab {
    /**
     * Injected state to change selected index of tab (If this state is injected from outside this inner state will be muted)
     */
    injectedSelectedTabIndexConfig?: {
        /**
         * Status
         */
        selectedTabIndex: number

        /**
         * Status setter
         */
        setSelectedTabIndex: React.Dispatch<React.SetStateAction<number>> | ((selectedTabIndex: number) => void)
    }
    
    /**
     * Tab contents
     */
    tabContents: ITabContent_ABC[]

    /**
     * Contents direction
     */
    contentsDirection?: "horizontal" | "vertical"
}

export default ITab