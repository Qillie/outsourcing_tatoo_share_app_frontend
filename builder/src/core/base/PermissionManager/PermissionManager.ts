//* Import libraries
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions'; // From "https://github.com/zoontek/react-native-permissions"
import { CameraRoll } from "@react-native-camera-roll/camera-roll"; // From "https://github.com/react-native-cameraroll/react-native-cameraroll", "https://github.com/react-native-cameraroll/react-native-cameraroll/issues/142#issuecomment-587551072"
import { Platform } from 'react-native'

//* Import interfaces
import TOsType from './interfaces/TOsType';

class PermissionManager {
    public async getPhotos() {
        //* Set permissions
        const permission = {
            ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
            android: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        }
        
        //* Ask permission
        return request(permission[Platform.OS as TOsType]).then((result) => {
            if (result === RESULTS.GRANTED) {
                return CameraRoll.getPhotos({ first: 1000 }) // https://reactnative.dev/docs/0.60/cameraroll
            } else {
                return null
            }
        })
    }
}

export default PermissionManager