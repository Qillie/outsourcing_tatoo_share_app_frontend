//* Import intefaces
import TTypographyWeights from '../../../design/ThemeCore/interfaces/typography/TTypographyWeights';
import TFontVariant from './TFontVariant';

interface ITypography {
    children?: string | React.ReactElement
    variant?: TFontVariant
    fontWeight?: TTypographyWeights
    color?: string
}

export default ITypography