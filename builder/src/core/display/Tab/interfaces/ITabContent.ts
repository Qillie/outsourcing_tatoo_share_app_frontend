//* Import interfaces 
import ITabContent_ABC from "./ITabContent_ABC"

interface ITabContent extends Partial<ITabContent_ABC> {
    tabIndex: number
    selectedTabIndex: number
}

export default ITabContent