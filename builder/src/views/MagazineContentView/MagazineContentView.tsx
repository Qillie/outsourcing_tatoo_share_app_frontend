//* Import libraries
import React from "react"
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Link } from "react-router-native";


//* Import modules
import HorizontalThumbnails from "./components/HorizontalThumbnails";
import { Badge, Divider, Typography } from "../../core/display";
import { Grid, Box } from "../../core/layout";
import { Button, TextField } from "../../core/input";
import { Tab } from "../../core/display";
import { Thumbnail } from "../../core/display";
import { ThemeCoreSingleton } from "../../core/design";
import { ThumbnailTypePost } from "../../modules";
import { IconButton } from "../../core/input";

//* Import interfaces
import IMagazineContentView from "./interfaces/IMagazineContentView"
import VerticalThumbnailPost from "../../widgets/VerticalThumbnailPost";


const MagazineContentView = (props: IMagazineContentView) => {
    //* Modules

    

    return (
        <ScrollView>
            <Box pb={200} flexDirection="column">
                <Box flexDirection="column">
                
                </Box>
            </Box>
        </ScrollView>
    )
}

export default MagazineContentView