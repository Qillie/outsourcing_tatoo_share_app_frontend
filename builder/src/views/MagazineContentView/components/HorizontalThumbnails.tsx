//* Import libraries
import React from "react"
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";

//* Import modules
import { Typography } from "../../../core/display";
import { Grid, Box } from "../../../core/layout";
import { Button, TextField } from "../../../core/input";
import { Tab } from "../../../core/display";
import { Thumbnail } from "../../../core/display";

//* Import interfaces
import IHorizontalThumbnails from "../interfaces/IHorizontalThumbnails"

const HorizontalThumbnails = (props: IHorizontalThumbnails) => {
    //* Functions
    const divideRows = (viewItems: {src: string, label: string, link: string}[]) => {
        let wrappedRows: {src: string, label: string, link: string}[][] = []
        let wrappedRow: {src: string, label: string, link: string}[] = []

        let viewItemIndex = 0

        for (const viewItem of viewItems) {
            if (wrappedRow.length < props.itemPerRow) {
                wrappedRow.push(viewItem)
            } else {
                wrappedRows.push([...wrappedRow])
                wrappedRow = []
            }

            //* If item's num doesn't exceeds
            if (viewItemIndex == (viewItems.length - 1)) {
                wrappedRows.push([...wrappedRow])
            }

            //* Break condition
            if (wrappedRows.length == props.maxRowLength) {
                break
            }

            //* Increase index
            viewItemIndex += 1
        }

        return wrappedRows
    }

    //* States
    const [thumbnailWidth, setThumbnailWidth] = React.useState<number>(0)
    const [wrappedViewItems, setWrappedViewItems] = React.useState<{src: string, label: string, link: string}[][]>(divideRows(props.viewItems))
    const [maxRowWidth, setMaxRowWidth] = React.useState<number>(0)
    const [spacingUnit, setSpacingUnit] = React.useState<number>((props.spacingUnit !== undefined) ? props.spacingUnit : 16)
    const [spacing, setSpacing] = React.useState<number>((props.spacing !== undefined) ? props.spacing : 1)

    React.useEffect(() => {
        let tempMaxRowWidth = 0

        wrappedViewItems.map((wrappedViewItem) => {
            if (wrappedViewItem.length > tempMaxRowWidth) {
                tempMaxRowWidth = wrappedViewItem.length
            }
        })

        setMaxRowWidth(tempMaxRowWidth)
        
    }, [wrappedViewItems])

    return (
        <ScrollView horizontal alwaysBounceHorizontal={false} showsHorizontalScrollIndicator={false}>
            <Box 
                mt={spacing * spacingUnit}
                pl={spacing * spacingUnit} 
                pr={spacing * spacingUnit} 
                flexDirection="column" 
                flex={1}
                width={(thumbnailWidth * maxRowWidth) + (spacing * spacingUnit)}
            >
                {
                    wrappedViewItems.map((wrappedRow) => (
                        <Box key={wrappedRow.length} mb={16}>
                            <Grid
                                wrap="nowrap"
                                role="container"
                                spacing={1}
                            >
                                {
                                    wrappedRow.map((viewItem) => (
                                        <Grid key={viewItem.label} role="item" xs={4} onLayout={
                                            (e) => {
                                                if (thumbnailWidth == 0) {
                                                    setThumbnailWidth(e.nativeEvent.layout.width)
                                                }
                                            }
                                        }>
                                            <Link to={viewItem.link}>
                                                <Thumbnail
                                                    src={"https://reactnative.dev/img/tiny_logo.png"}
                                                    borderRadius={10}
                                                    label={viewItem.label}
                                                    labelBackgroundOpacity={0.5}
                                                />
                                            </Link>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                            
                        </Box>
                    ))
                    
                }
            </Box>
        </ScrollView>
    )
}

export default HorizontalThumbnails