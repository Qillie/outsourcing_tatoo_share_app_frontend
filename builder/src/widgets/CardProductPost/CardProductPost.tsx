//* Import interfaces
import ICardProductPost from "./interfaces/ICardProductPost"

//* Import modules
import { CardTypePost } from "../../modules"
import React from "react"
import { ThemeCoreSingleton } from "../../core/design"
import { Typography } from "../../core/display"
import { Box } from "../../core/layout"

const CardProductPost = (props: ICardProductPost) => {
    return (
        <CardTypePost 
            borderRadius={6} 
            src={props.src} 
            thumbnailWidth={"100%"}
        >
            <Box flexDirection="column" pl={14} pb={5}>
                {/* Title */}
                <Box>
                    <Typography
                        variant="h3"
                        fontWeight="500"
                    >
                        {props.title}
                    </Typography>
                </Box>

                {/* Location */}
                <Box mb={6}>
                    <Typography
                        variant="body1"
                        fontWeight="400"
                        color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                    >
                        {`${props.shopName} · ${props.location}`}
                    </Typography>
                </Box>

                {/* Price */}
                <Box alignX="left">
                    <Box alignY="center">
                        {/* Sale */}
                        <React.Fragment>
                        {
                            (props.price.sale !== undefined) && (
                                <Box mr={10}>
                                    <Typography
                                        variant="h4"
                                        fontWeight="500"
                                        color={ThemeCoreSingleton.paletteManager.getColor("primary", "main")}
                                    >
                                        {
                                            `${100 - parseInt(String(props.price.sale / props.price.original * 100))}%`
                                        }
                                    </Typography>
                                </Box>
                            )
                        }
                        </React.Fragment>

                        <Box mr={10}>
                            <Typography variant="h4" fontWeight="500">
                                {`${(props.price.sale !== undefined) ? props.price.sale : props.price.original}만원`}
                            </Typography>
                        </Box>

                        <React.Fragment>
                        {
                            (props.price.sale !== undefined) && (
                                <Box alignY="center">

                                    <Box>
                                        <Typography 
                                            variant="body1" 
                                            fontWeight="500"
                                            color={ThemeCoreSingleton.paletteManager.getColor("grey", undefined, "700")}
                                            decorationLine={"line-through"}
                                        >
                                            {`${props.price.original}만원`}
                                        </Typography>
                                    </Box>
                                </Box>
                            )
                        }
                        </React.Fragment>
                    </Box>
                </Box>
            </Box>
        </CardTypePost> 
    )
}

export default CardProductPost