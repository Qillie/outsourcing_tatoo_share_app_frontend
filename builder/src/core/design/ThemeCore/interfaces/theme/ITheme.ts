//* Import intefaces
import IPalette from "../palette/IPalette";
import ITypography from '../typography/ITypography';

interface ITheme {
    palette: IPalette,
    typography: ITypography
}

export default ITheme