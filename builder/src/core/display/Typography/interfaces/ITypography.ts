//* Import intefaces
import TFontVariant from './TFontVariant';
import TFontWeight from './TFontWeight';

interface ITypography {
    children?: string | React.ReactElement
    variant?: TFontVariant
    fontWeight?: TFontWeight
    color?: string
}

export default ITypography