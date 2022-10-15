//* Import libraries
import React from "react"
import AccordionLibrary from 'react-native-collapsible/Accordion';
import Icon from "react-native-vector-icons/MaterialIcons";

//* Import modules
import { ThemeCoreSingleton } from "../../design"
import { Box } from "../../layout"

//* Import interfaces
import IAccordion from "./interfaces/IAccordion"
import TAccordionContent from "./interfaces/TAccordionContent"

const Accordion = (props: IAccordion) => {
    //* States
    const [active, setActive] = React.useState<number[]>([])

    //* Functions
    const checkIsActive = (key: string) => {
        let isActive: boolean = false

        if (props.active !== undefined) {
            if (props.active.length != 0) {
                props.active.map((index) => {
                    if (props.contents[index].key == key) {
                        isActive = true
                    }
                })
            }
        } else {
            if (active.length != 0) {
                active.map((index) => {
                    if (props.contents[index].key == key) {
                        isActive = true
                    }
                })
            }
        }

        return isActive
    }

    const renderHeader = (content: TAccordionContent) => {
        return (
            <React.Fragment>
                <Box 
                    flexDirection="row"
                    width={"100%"} 
                    py={(props.headerPadding !== undefined) ? props.headerPadding : 10}
                >
                    <Box width={(props.useArrow) ? "90%" : "100%"}>
                        {
                            content.header
                        }
                    </Box>
                    
                    {
                        (props.useArrow) && (
                            <Box width={"10%"} alignX={"right"}>
                                <Box
                                    rotateZ={(checkIsActive(content.key) ? 180 : undefined)}
                                >
                                    <Icon
                                        name={"keyboard-arrow-down"} 
                                        size={25} 
                                        color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "800")}
                                    />
                                </Box>
                            </Box>
                        )
                    }
                </Box>
            </React.Fragment>
        )
    }

    const renderContent = (content: TAccordionContent) => {
        return (
            <Box width={"100%"} pt={(props.openedGap !== undefined) ? props.openedGap : 15} pb={10}>
                {
                    content.detail
                }
            </Box>
        )
    }

    const onChangeAccordion = (activeSections: number[]) => {
        if (props.setActive !== undefined) {
            props.setActive(activeSections)
        } else {
            setActive(activeSections)
        }
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <AccordionLibrary
            underlayColor={"none"}
            activeSections={(props.active !== undefined) ? props.active : active}
            sections={props.contents}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={onChangeAccordion}
        />
    )
}

export default Accordion