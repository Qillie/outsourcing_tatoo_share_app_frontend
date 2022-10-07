//* Import interfaces
import { PhotoIdentifier } from "@react-native-camera-roll/camera-roll";

interface IImagePicker {
    photos: PhotoIdentifier[]
    selectedImageIndex: number | null
    setSelectedImageIndex: React.Dispatch<React.SetStateAction<number | null>>
}

export default IImagePicker