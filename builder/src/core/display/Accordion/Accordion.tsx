//* Import libraries
import React from "react"
import { Image, ImageStyle, StyleSheet, Text, ViewStyle, View } from "react-native"
import AccordionLibrary from 'react-native-collapsible/Accordion';

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
    const renderHeader = (content: TAccordionContent) => {
        return (
            <React.Fragment>
                {
                    content.header
                }
            </React.Fragment>
        )
    }

    const renderContent = (content: TAccordionContent) => {
        return (
            <React.Fragment>
                {
                    content.detail
                }
            </React.Fragment>
        )
    }

    const onChangeAccordion = (activeSections: number[]) => {
        setActive(activeSections)
    }

    //* Life cycles
    React.useEffect(() => {
    }, [])

    return (
        <AccordionLibrary
            activeSections={active}
            sections={props.contents}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={onChangeAccordion}
        />
    )
}

export default Accordion