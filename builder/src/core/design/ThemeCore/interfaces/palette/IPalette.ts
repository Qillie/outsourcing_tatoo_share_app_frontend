//* Import interfaces
import IPaletteColor from "./IPaletteColor";
import IColor from './IColor';

interface IPalette {
    black?: string
    grey?: IColor
    primary?: IPaletteColor
    secondary?: IPaletteColor
    error?: IPaletteColor
    warning?: IPaletteColor
    info?: IPaletteColor
    success?: IPaletteColor
    background?: string
}

export default IPalette