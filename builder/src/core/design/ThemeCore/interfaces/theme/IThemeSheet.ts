//* Import intefaces
import IPaletteSheet from "../palette/IPaletteSheet";
import ITypographySheet from '../typography/ITypographySheet';

interface IThemeSheet {
    palette: IPaletteSheet,
    typography: ITypographySheet
}

export default IThemeSheet